import 'mocha';
import { expect } from 'chai';
import {
  createAndExchangeSandboxPublicTokenForAccessToken,
  createPlaidClient,
} from './clientHelper';
import {
  PlaidApi,
  SandboxItemFireWebhookRequest,
  SandboxItemFireWebhookRequestWebhookCodeEnum,
  SandboxItemResetLoginRequest,
} from '../dist';

describe('Sandbox', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  before(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken({
      webhook: 'https://httpstat.us/200',
    });
  });

  it('fires a sandbox item webhook', async () => {
    const request: SandboxItemFireWebhookRequest = {
      access_token: testAccessToken as string,
      webhook_code: SandboxItemFireWebhookRequestWebhookCodeEnum.DefaultUpdate,
    };

    const response = await plaidClient.sandboxItemFireWebhook(request);
    expect(response.data).to.be.ok;
    expect(response.data.webhook_fired).to.be.true;
  });

  it('testing sandbox resetting the login for an item', async () => {
    const request: SandboxItemResetLoginRequest = {
      access_token: testAccessToken as string,
    };

    const response = await plaidClient.sandboxItemResetLogin(request);
    expect(response.data).to.be.ok;
    expect(response.data.reset_login).to.be.true;
  });
});
