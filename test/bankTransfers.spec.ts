import 'mocha';
import { expect } from 'chai';
import {
  createAndExchangeSandboxPublicTokenForAccessToken,
  createPlaidClient,
} from './clientHelper';
import {
  AccountsGetRequest,
  ACHClass,
  BankTransferBalanceGetRequest,
  BankTransferCancelRequest,
  BankTransferCreateRequest,
  BankTransferEventListRequest,
  BankTransferEventSyncRequest,
  BankTransferGetRequest,
  BankTransferListRequest,
  BankTransferMigrateAccountRequest,
  BankTransferNetwork,
  BankTransferType,
  PlaidApi,
  SandboxBankTransferSimulateRequest,
} from '../dist';

const randomIdempotencyKey = () => {
  const max_key = 1000000000;
  return Math.floor(Math.random() * max_key).toString();
};

const retryOnError = async (f: ()=>Promise<void>) => {
  const numRetries = 5;
  for (let i = 0; i < numRetries; i++) {
    try {
      await f();
      return;
    } catch (e) {
      if (i+1 == numRetries) {
        throw e;
      }
      continue;
    }
  }
}

describe('Bank Transfers', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;
  let testAccountId: string | undefined;
  let bankTransferId: string | undefined;

  before(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();

    const request: AccountsGetRequest = {
      access_token: testAccessToken as string,
    };
    const response = await plaidClient.accountsGet(request);
    testAccountId = response.data.accounts?.filter(
      (a) => a.type === 'depository',
    )[0].account_id;
  });

  it('creates transfer', async () => {
    await bankTransferCreate(
      plaidClient,
      testAccessToken as string,
      testAccountId as string,
    );
  });

  it('cancels transfer that is still pending', async () => {
    bankTransferId = await bankTransferCreate(
      plaidClient,
      testAccessToken as string,
      testAccountId as string,
    );
    await bankTransferCancel(plaidClient, bankTransferId as string);
  });

  it('fails to cancel posted transfer', async () => {
    bankTransferId = await bankTransferCreate(
      plaidClient,
      testAccessToken as string,
      testAccountId as string,
    );
    await bankTransferPost(plaidClient, bankTransferId as string);

    const request: BankTransferCancelRequest = {
      bank_transfer_id: bankTransferId as string,
    };
    try {
      await plaidClient.bankTransferCancel(request);
    } catch (error) {
      const err = error.response.data;
      expect(error.response.status).to.equal(400);
      expect(err.error_code).to.equal('BANK_TRANSFER_NOT_CANCELLABLE');
    }
  });

  it('migrates account', async () => {
    const request: BankTransferMigrateAccountRequest = {
      account_number: '100000000',
      routing_number: '121122676',
      account_type: 'checking',
    };
    const response = await plaidClient.bankTransferMigrateAccount(request);
    expect(response.data).to.be.ok;
    expect(response.data.access_token).to.be.ok;
    expect(response.data.account_id).to.be.ok;
  });

  it('gets ODFI balance', async () => {
    const request: BankTransferBalanceGetRequest = {};
    const response = await plaidClient.bankTransferBalanceGet(request);
    expect(response.data.balance.available).to.be.not.null;
  });

  it('gets a bank transfer', async () => {
    bankTransferId = await bankTransferCreate(
      plaidClient,
      testAccessToken as string,
      testAccountId as string,
    );
    await bankTransferGet(plaidClient, bankTransferId as string);
  });

  it('lists bank transfers', async () => {
    bankTransferId = await bankTransferCreate(
      plaidClient,
      testAccessToken as string,
      testAccountId as string,
    );

    const request: BankTransferListRequest = {
      count: 5,
    };

    // One of the first few transfers will be the one we just created.
    // We allow for flexibility in case multiple transfers have the same
    // created timestamp.
    await retryOnError( async () => {
      const response = await plaidClient.bankTransferList(request);
      expect(response.data).to.be.ok;
      expect(response.data.bank_transfers).to.be.ok;
      expect(response.data.bank_transfers.filter((x, key) => x.id === bankTransferId)?.[0]).to
        .be.ok;
    });
  });

  it('syncs events', async () => {
    bankTransferId = await bankTransferCreate(
      plaidClient,
      testAccessToken as string,
      testAccountId as string,
    );
    await bankTransferPost(plaidClient, bankTransferId as string);

    const request: BankTransferEventSyncRequest = {
      after_id: 0,
    };
    await retryOnError( async () => {
      const response = await plaidClient.bankTransferEventSync(request);
      expect(response.data.bank_transfer_events).to.be.ok;
      expect(response.data.bank_transfer_events.length).to.be.greaterThan(1);
    });
  });

  it('lists events', async () => {
    bankTransferId = await bankTransferCreate(
      plaidClient,
      testAccessToken as string,
      testAccountId as string,
    );
    await bankTransferPost(plaidClient, bankTransferId as string);

    const request: BankTransferEventListRequest = {
      bank_transfer_id: bankTransferId as string,
    };

    await retryOnError( async () => {
      const response = await plaidClient.bankTransferEventList(request);
      expect(response.data.bank_transfer_events).to.be.ok;
      expect(response.data.bank_transfer_events.length).to.equal(2);
      response.data.bank_transfer_events.forEach((event) => {
        expect(event.bank_transfer_id).to.equal(bankTransferId);
      });
    });
  });
});

const bankTransferCreate = async (
  plaidClient: PlaidApi,
  access_token: string,
  account_id: string,
): Promise<string | undefined> => {
  const request: BankTransferCreateRequest = {
    type: BankTransferType.Credit,
    network: BankTransferNetwork.Ach,
    amount: '10.00',
    iso_currency_code: 'USD',
    description: 'PLAID',
    ach_class: ACHClass.Ppd,
    user: {
      legal_name: 'First Lastname',
    },
    access_token,
    idempotency_key: randomIdempotencyKey(),
    account_id,
  };
  const response = await plaidClient.bankTransferCreate(request);
  expect(response).to.be.ok;
  expect(response.data.bank_transfer).to.be.ok;
  expect(response.data.bank_transfer.id).to.be.ok;

  return new Promise((resolve) => resolve(response.data.bank_transfer.id));
};

const bankTransferCancel = async (
  plaidClient: PlaidApi,
  bank_transfer_id: string,
) => {
  const request: BankTransferCancelRequest = {
    bank_transfer_id,
  };

  retryOnError( async () => {
    const response = await plaidClient.bankTransferCancel(request);
    expect(response.data.request_id).to.be.ok;
  });
};

const bankTransferPost = async (
  plaidClient: PlaidApi,
  bank_transfer_id: string,
) => {
  const request: SandboxBankTransferSimulateRequest = {
    bank_transfer_id,
    event_type: 'posted',
  };

  retryOnError(async () => {
    const response = await plaidClient.sandboxBankTransferSimulate(request);
    expect(response.data).to.be.ok;
  });
};

const bankTransferGet = async (
  plaidClient: PlaidApi,
  bank_transfer_id: string,
) => {
  const request: BankTransferGetRequest = {
    bank_transfer_id,
  };

  retryOnError(async () => {
    const response = await plaidClient.bankTransferGet(request);
    expect(response.data).to.be.ok;
    expect(response.data.bank_transfer).to.be.ok;
    expect(response.data.bank_transfer.id).to.equal(bank_transfer_id);
  });
};
