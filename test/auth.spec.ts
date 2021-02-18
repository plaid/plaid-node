import 'mocha';
import { expect } from 'chai';
import {
  createPlaidClient,
  createAndExchangeSandboxPublicTokenForAccessToken,
} from './clientHelper';
import { AuthGetRequest, PlaidApi } from '../dist';

describe('Auth', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  before(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();
  });

  it('get', async () => {
    const request: AuthGetRequest = {
      access_token: testAccessToken as string,
    };

    const response = await plaidClient.authGet(request);
    expect(response).to.be.ok;
    expect(response.data.item).to.be.ok;
    expect(response.data.accounts).to.be.ok;
    expect(response.data.numbers).to.be.ok;
  });
});
