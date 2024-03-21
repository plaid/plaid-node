import 'mocha';
import {expect} from 'chai';
import {
  createPlaidClient,
  createAndExchangeSandboxPublicTokenForAccessToken,
} from './clientHelper';
import {
  StatementsListRequest,
  StatementsListResponse,
  StatementsDownloadRequest,
  StatementsRefreshRequest,
  PlaidApi,
} from '../dist';

describe('Statements', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  before(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();
  });

  it('goes through the entire statements flow', async () => {
    // 1. /statements/list
    const listResponse: StatementsListResponse = await listStatementsWithRetries(plaidClient, testAccessToken as string);
    expect(listResponse).to.be.an('object').that.is.not.empty;
    expect(listResponse.request_id).to.be.a('string').that.is.not.empty;
    expect(listResponse.accounts).to.be.an('array').that.is.not.empty;
    expect(listResponse.accounts[0].statements).to.be.an('array').that.is.not.empty;

    // 2. /statements/download
    for (const account of listResponse.accounts) {
      for (const statement of account.statements) {
        let downloadRequest: StatementsDownloadRequest = {
          access_token: testAccessToken as string,
          statement_id: statement.statement_id,
        };

        let downloadResponse = await plaidClient.statementsDownload(
          downloadRequest,
        );
        expect(downloadResponse).to.be.an('object').that.is.not.empty;
        expect(downloadResponse.data).to.be.a('string').that.is.not.empty;
        expect(downloadResponse.headers['content-type']).to.be.equal('application/pdf');
      }
    }

    // 3. /statements/refresh
    const refreshRequest: StatementsRefreshRequest = {
      access_token: testAccessToken as string,
      start_date: '2023-11-01',
      end_date: '2024-02-01',
    };

    const refreshResponse = await plaidClient.statementsRefresh(refreshRequest);
    expect(refreshResponse).to.be.an('object').that.is.not.empty;
    expect(refreshResponse.data).to.be.an('object').that.is.not.empty;;
    expect(refreshResponse.data.request_id).to.be.a('string').that.is.not.empty;

    // 4. Poll /statements/list until the refresh is complete. We recommend using webhooks instead of polling.
    const refreshedListResponse: StatementsListResponse = await listStatementsWithRetries(plaidClient, testAccessToken as string);
    expect(refreshedListResponse).to.be.an('object').that.is.not.empty;
    expect(refreshedListResponse.request_id).to.be.a('string').that.is.not.empty;
    expect(refreshedListResponse.accounts).to.be.an('array').that.is.not.empty;
    expect(refreshedListResponse.accounts[0].statements).to.be.an('array').that.is.not.empty;
  });
});

const listStatementsWithRetries = (
  plaidClient: PlaidApi,
  access_token: string,
  ms = 1000,
  retriesLeft = 10,
): Promise<StatementsListResponse> =>
  new Promise((resolve, reject) => {
    const listRequest: StatementsListRequest = {
      access_token: access_token,
    };

    plaidClient
      .statementsList(listRequest)
      .then((response) => resolve(response.data))
      .catch(() => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            return reject('Ran out of retries while polling for asset report');
          }
          listStatementsWithRetries(
            plaidClient,
            access_token,
            ms,
            retriesLeft - 1,
          ).then((response) => resolve(response));
        }, ms);
      });
  });
