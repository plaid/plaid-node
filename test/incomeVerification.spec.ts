import 'mocha';
import { expect } from 'chai';
import { createPlaidClient } from './clientHelper';
import {
  PlaidApi,
  Products,
  SandboxPublicTokenCreateRequest,
  ItemPublicTokenExchangeRequest,
  IncomeVerificationTaxformsGetRequest,
} from '../dist';
import { TestConstants } from './testConstants';

describe('Income Verification', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  beforeEach(async () => {
    plaidClient = createPlaidClient();

    const request: SandboxPublicTokenCreateRequest = {
      institution_id: TestConstants.INCOME_INSTITUTION,
      initial_products: TestConstants.INCOME_PRODUCTS as Products[],
    };

    const response = await plaidClient.sandboxPublicTokenCreate(request);

    const exchangeRequest: ItemPublicTokenExchangeRequest = {
      public_token: response.data.public_token as string,
    };

    const exchangeResponse = await plaidClient.itemPublicTokenExchange(
      exchangeRequest,
    );

    testAccessToken = exchangeResponse.data.access_token;
  });

  it('income verification taxforms get', async () => {
    const request: IncomeVerificationTaxformsGetRequest = {
      access_token: testAccessToken,
    };

    const response = await plaidClient.incomeVerificationTaxformsGet(request);
    expect(response).to.be.ok;
    expect(response.data.error).to.be.undefined;
    expect(response.data.taxforms).to.not.be.empty;
    expect(response.data.document_metadata).to.not.be.empty;
  });
});
