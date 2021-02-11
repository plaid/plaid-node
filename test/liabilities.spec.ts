import 'mocha';
import { expect } from 'chai';
import {
  createPlaidClient,
  createAndExchangeSandboxPublicTokenForAccessToken,
} from './clientHelper';
import { LiabilitiesGetRequest, PlaidApi } from '../dist';

describe('Liabilities', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  before(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();
  });

  it('get', async () => {
    const request: LiabilitiesGetRequest = {
      access_token: testAccessToken as string,
    };

    const response = await plaidClient.liabilitiesGet(request);
    expect(response).to.be.ok;
    expect(response.data.item).to.be.ok;
    expect(response.data.accounts).to.be.ok;
    expect(response.data.liabilities).to.be.ok;
  });
});
