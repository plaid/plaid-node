import 'mocha';
import { expect } from 'chai';
import {
  createPlaidClient,
  createAndExchangeSandboxPublicTokenForAccessToken,
} from './clientHelper';
import { IdentityGetRequest, PlaidApi } from '../dist';

describe('Identity', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  before(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();
  });

  it('get', async () => {
    const request: IdentityGetRequest = {
      access_token: testAccessToken as string,
    };

    const response = await plaidClient.identityGet(request);
    expect(response).to.be.ok;
    expect(response.data.item).to.be.ok;
    expect(response.data.accounts).to.be.ok;

    if (response.data.accounts) {
      for (const account of response.data.accounts) {
        expect(account.owners).to.be.ok;
        if (account.owners) {
          for (const owner of account.owners) {
            if (owner.addresses) {
              for (const address of owner.addresses) {
                expect(address.data.country).to.not.be.undefined;
                expect(address.data.postal_code).to.not.be.undefined;
                expect(address.data.region).to.not.be.undefined;
                expect(address.data.street).to.not.be.undefined;
                expect(address.data.city).to.not.be.undefined;
              }
            }
          }
        }
      }
    }
  });
});
