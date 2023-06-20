import 'mocha';
import { expect } from 'chai';
import {
  createPlaidClient,
  createAndExchangeSandboxPublicTokenForAccessToken,
} from './clientHelper';
import {
  InvestmentsHoldingsGetRequest,
  InvestmentsTransactionsGetRequest,
  InvestmentsAuthGetRequest,
  PlaidApi,
} from '../dist';

const { SECRET, CLIENT_ID } = process.env;

describe('Investments', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  before(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();
  });

  it('get investment holdings', async () => {
    const request: InvestmentsHoldingsGetRequest = {
      access_token: testAccessToken as string,
    };

    const response = await plaidClient.investmentsHoldingsGet(request);
    expect(response).to.be.ok;
    expect(response.data.item).to.be.ok;
    expect(response.data.accounts).to.be.ok;
    expect(response.data.holdings).to.be.ok;
    expect(response.data.securities).to.be.ok;
  });

  it('get investment transactions', async () => {
    const request: InvestmentsTransactionsGetRequest = {
      access_token: testAccessToken as string,
      start_date: '2019-01-01',
      end_date: '2019-06-10',
    };

    const response = await plaidClient.investmentsTransactionsGet(request);
    expect(response.data.item).to.be.ok;
    expect(response.data.accounts).to.be.ok;
    expect(response.data.investment_transactions).to.be.ok;
    expect(response.data.securities).to.be.ok;
  });
  it('get investments auth', async() => {
    const request: InvestmentsAuthGetRequest = {
      access_token: testAccessToken as string,
      client_id: CLIENT_ID as string,
      secret: SECRET as string,
    }
    const response = await plaidClient.investmentsAuthGet(request);
    expect(response).to.be.ok;
    expect(response.data.item).to.be.ok;
    expect(response.data.accounts).to.be.ok;
    expect(response.data.holdings).to.be.ok;
    expect(response.data.securities).to.be.ok;
    expect(response.data.owners).to.be.ok;
    expect(response.data.numbers).to.be.ok;
  })
});
