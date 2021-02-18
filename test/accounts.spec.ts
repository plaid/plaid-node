import 'mocha';
import { expect } from 'chai';
import {
  createPlaidClient,
  createAndExchangeSandboxPublicTokenForAccessToken,
} from './clientHelper';
import {
  AccountsBalanceGetRequest,
  AccountsGetRequest,
  PlaidApi,
} from '../dist';

describe('Accounts', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  before(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();
  });

  it('get', async () => {
    const request: AccountsGetRequest = {
      access_token: testAccessToken as string,
    };

    const response = await plaidClient.accountsGet(request);
    expect(response).to.be.ok;
    expect(response.data.item).to.be.ok;
    expect(response.data.accounts).to.be.ok;
  });

  it('get balance', async () => {
    const request: AccountsBalanceGetRequest = {
      access_token: testAccessToken as string,
    };

    const response = await plaidClient.accountsBalanceGet(request);
    expect(response).to.be.ok;
    expect(response.data.item).to.be.ok;
    expect(response.data.accounts).to.be.ok;
  });
});
