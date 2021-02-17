import {
  Configuration,
  ItemPublicTokenExchangeRequest,
  PlaidApi,
  PlaidEnvironments,
  Products,
  SandboxPublicTokenCreateRequest,
  SandboxPublicTokenCreateRequestOptions,
} from '../dist';
import { TestConstants } from './testConstants';

const { SECRET, CLIENT_ID } = process.env;

export const createPlaidClient = () => {
  const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
      headers: {
        'PLAID-CLIENT-ID': CLIENT_ID,
        'PLAID-SECRET': SECRET,
        'Plaid-Version': '2020-09-14'
      }
    }
  });

  return new PlaidApi(configuration);
};

export const createAndExchangeSandboxPublicTokenForAccessToken = async (
  options?: SandboxPublicTokenCreateRequestOptions,
) => {
  const plaidClient = createPlaidClient();
  const request: SandboxPublicTokenCreateRequest = {
    institution_id: TestConstants.INSTITUTION,
    initial_products: TestConstants.PRODUCTS as Products[],
    options,
  };

  const response = await plaidClient.sandboxPublicTokenCreate(request);

  const exchangeRequest: ItemPublicTokenExchangeRequest = {
    public_token: response.data.public_token as string,
  };
  const exchangeResponse = await plaidClient.itemPublicTokenExchange(
    exchangeRequest,
  );

  return exchangeResponse.data.access_token;
};
