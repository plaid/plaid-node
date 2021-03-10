import 'mocha';
import { expect } from 'chai';
import {
  createPlaidClient,
  createAndExchangeSandboxPublicTokenForAccessToken,
} from './clientHelper';
import {
  PlaidApi,
  TransactionsGetRequest,
  TransactionsGetResponse,
  TransactionsRefreshRequest,
} from '../dist';

describe('Transactions', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  beforeEach(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken({
      transactions: {
        start_date: new Date().toISOString().substr(0, 10),
        end_date: new Date().toISOString().substr(0, 10),
      },
    });
  });

  it('normal flow', async () => {
    const response = await getTransactionsWithRetries(
      plaidClient,
      testAccessToken as string,
      new Date().toISOString().substr(0, 10),
      new Date().toISOString().substr(0, 10),
      100,
      0,
    );

    expect(response).to.be.ok;
    expect(response.transactions).to.be.an('array');
  });

  it('transactions (with 400)', async () => {
    const request: TransactionsGetRequest = {
      access_token: 'invalid_token',
      start_date: new Date().toISOString().substr(0, 10),
      end_date: new Date().toISOString().substr(0, 10),
    };

    try {
      await plaidClient.transactionsGet(request);
    } catch (error) {
      const err = error.response.data;

      expect(error.response.status).to.equal(400);
      expect(err).to.be.ok;
      expect(err.request_id).to.be.ok;
      expect(err.error_code).to.equal('INVALID_ACCESS_TOKEN');
    }
  });

  it('transactions refresh', async () => {
    const request: TransactionsRefreshRequest = {
      access_token: testAccessToken as string,
    };

    const response = await plaidClient.transactionsRefresh(request);
    expect(response).to.be.ok;
  });

  it('transactions refresh (with 400)', async () => {
    const request: TransactionsRefreshRequest = {
      access_token: 'invalid_token',
    };

    try {
      await plaidClient.transactionsRefresh(request);
    } catch (error) {
      const err = error.response.data;

      expect(error.response.status).to.equal(400);
      expect(err).to.be.ok;
      expect(err.request_id).to.be.ok;
      expect(err.error_code).to.equal('INVALID_ACCESS_TOKEN');
    }
  });
});

const getTransactionsWithRetries = (
  plaidClient: PlaidApi,
  access_token: string,
  start_date: string,
  end_date: string,
  count: number,
  offset: number,
  ms = 1000,
  retriesLeft = 10,
): Promise<TransactionsGetResponse> =>
  new Promise((resolve, reject) => {
    const request: TransactionsGetRequest = {
      access_token,
      start_date,
      end_date,
      options: {
        count,
        offset,
      },
    };

    plaidClient
      .transactionsGet(request)
      .then((response) => resolve(response.data))
      .catch(() => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            return reject('Ran out of retries while polling for transactions');
          }
          getTransactionsWithRetries(
            plaidClient,
            access_token,
            start_date,
            end_date,
            count,
            offset,
            ms,
            retriesLeft - 1,
          ).then((response) => resolve(response));
        }, ms);
      });
  });
