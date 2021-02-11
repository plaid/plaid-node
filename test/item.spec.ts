import 'mocha';
import { expect } from 'chai';
import {
  createPlaidClient,
  createAndExchangeSandboxPublicTokenForAccessToken,
} from './clientHelper';
import {
  ItemAccessTokenInvalidateRequest,
  ItemGetRequest,
  ItemImportRequest,
  ItemRemoveRequest,
  ItemWebhookUpdateRequest,
  PlaidApi,
  Products
} from '../dist';

describe('Item', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  before(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();
  });

  describe('Item Management', async () => {
    it('create and exchange a public token', () => {
      expect(testAccessToken).to.not.be.null;
    });

    it('invalidate an access_token, then remove the item', async () => {
      const request: ItemAccessTokenInvalidateRequest = {
        access_token: testAccessToken as string,
      };

      const response = await plaidClient.itemAccessTokenInvalidate(request);
      expect(response).to.be.ok;

      const removeRequest: ItemRemoveRequest = {
        access_token: response.data.new_access_token as string,
      };
      const removeResponse = await plaidClient.itemRemove(removeRequest);
      expect(removeResponse).to.be.ok;
    });

    it('update the webhook', async () => {
      testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();

      const request: ItemWebhookUpdateRequest = {
        access_token: testAccessToken as string,
        webhook: 'https://httpstat.us/200',
      };

      const response = await plaidClient.itemWebhookUpdate(request);
      expect(response).to.be.ok;
      expect(response.data.item.webhook).to.equal('https://httpstat.us/200');
    });
  });

  describe('Product Access', async () => {
    it('gets item', async () => {
      testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();

      const request: ItemGetRequest = {
        access_token: testAccessToken as string,
      };

      const response = await plaidClient.itemGet(request);
      expect(response).to.be.ok;
      expect(response.data.item).to.be.ok;
      expect(response.data.status).to.be.ok;
      expect(response.data.status?.transactions).to.be.ok;
      expect(response.data.status?.investments).to.be.ok;
      expect(response.data.status?.last_webhook).to.be.null;
    });

    it('imports item without options', async () => {
      const request: ItemImportRequest = {
        products: [Products.Identity, Products.Auth],
        user_auth: {
          user_id: 'user_good',
          auth_token: 'pass_good',
        },
      };
      const response = await plaidClient.itemImport(request);
      expect(response).to.be.ok;
      expect(response.data.access_token).to.be.ok;
    });

    it('imports item with options', async () => {
      const request: ItemImportRequest = {
        products: [Products.Identity, Products.Auth],
        user_auth: {
          user_id: 'user_good',
          auth_token: 'pass_good',
        },
        options: {
          webhook: 'https://plaid.com/webhook-test',
        },
      };

      const response = await plaidClient.itemImport(request);
      expect(response).to.be.ok;
      expect(response.data.access_token).to.be.ok;
    });
  });
});
