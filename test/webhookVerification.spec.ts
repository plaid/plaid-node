import 'mocha';
import { expect } from 'chai';
import { createPlaidClient } from './clientHelper';
import { PlaidApi, WebhookVerificationKeyGetRequest } from '../dist';
import { TestConstants } from './testConstants';

describe('Webhook Verification', () => {
  let plaidClient: PlaidApi;

  before(async () => {
    plaidClient = createPlaidClient();
  });

  it('get', async () => {
    const request: WebhookVerificationKeyGetRequest = {
      key_id: TestConstants.WEBHOOK_VERIFICATION_KEY_ID,
    };

    const response = await plaidClient.webhookVerificationKeyGet(request);
    expect(response.data).to.be.ok;
    expect(response.data.key).to.be.ok;
    expect(response.data.key.alg).to.be.ok;
    expect(response.data.key.crv).to.be.ok;
    expect(response.data.key.kid).to.be.ok;
    expect(response.data.key.kty).to.be.ok;
    expect(response.data.key.use).to.be.ok;
    expect(response.data.key.x).to.be.ok;
    expect(response.data.key.y).to.be.ok;
  });

  it('get key error', async () => {
    const request: WebhookVerificationKeyGetRequest = {
      key_id: 'invalid key_id',
    };

    try {
      await plaidClient.webhookVerificationKeyGet(request);
    } catch (error) {
      expect(error.response.status).to.equal(400);
      const err = error.response.data;
      expect(err.request_id).to.be.ok;
      expect(err.error_code).to.equal('INVALID_WEBHOOK_VERIFICATION_KEY_ID');
    }
  });
});
