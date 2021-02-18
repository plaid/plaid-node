import 'mocha';
import { expect } from 'chai';
import {
  createPlaidClient,
  createAndExchangeSandboxPublicTokenForAccessToken,
} from './clientHelper';
import {
  AssetReportAuditCopyCreateRequest,
  AssetReportAuditCopyGetRequest,
  AssetReportAuditCopyRemoveRequest,
  AssetReportCreateRequest,
  AssetReportFilterRequest,
  AssetReportGetRequest,
  AssetReportGetResponse,
  AssetReportPDFGetRequest,
  AssetReportRefreshRequest,
  AssetReportRemoveRequest,
  PlaidApi,
} from '../dist';

const days_requested = 60;
const options = {
  client_report_id: 'reportid123',
  webhook: 'https://httpstat.us/200',
  user: {
    client_user_id: 'userid123',
    first_name: 'first',
    middle_name: 'middle',
    last_name: 'last',
    ssn: '999-60-1111',
    phone_number: '(123)456-7890',
    email: 'hello@test.com',
  },
};

const { CLIENT_ID } = process.env;

describe('Assets', () => {
  let plaidClient: PlaidApi;
  let testAccessToken: string | undefined;

  before(async () => {
    plaidClient = createPlaidClient();
    testAccessToken = await createAndExchangeSandboxPublicTokenForAccessToken();
  });

  it('goes through the entire assets flow', async () => {
    // 1. Create
    const createRequest: AssetReportCreateRequest = {
      access_tokens: [testAccessToken as string],
      days_requested,
      options,
    };

    const createResponse = await plaidClient.assetReportCreate(createRequest);
    expect(createResponse).to.be.ok;
    expect(createResponse.data.request_id).to.be.ok;
    expect(createResponse.data.asset_report_id).to.be.ok;
    expect(createResponse.data.asset_report_token).to.be.ok;

    // 2. Get Asset Report
    const getResponse: AssetReportGetResponse = await getAssetReportWithRetries(
      plaidClient,
      createResponse.data.asset_report_token,
    );

    expect(getResponse).to.be.ok;
    expect(getResponse.report).to.be.ok;

    // 3. Get Asset Report with Insights
    const insightRequest: AssetReportGetRequest = {
      asset_report_token: createResponse.data.asset_report_token,
      include_insights: true,
    };

    const insightsResponse = await plaidClient.assetReportGet(insightRequest);
    expect(insightsResponse.data).to.be.ok;
    expect(insightsResponse.data.report).to.be.ok;

    let account_id;

    if (insightsResponse.data.report?.items) {
      const itemFiltered = insightsResponse.data.report?.items.filter(
        (_, key) => key === 0,
      )?.[0];

      const account_id_filtered = itemFiltered.accounts.filter(
        (_, key) => key === 0,
      )?.[0].account_id;

      account_id = account_id_filtered;

      for (const item of insightsResponse.data.report.items) {
        if (item.accounts) {
          for (const account of item.accounts) {
            if (account.transactions) {
              for (const transaction of account.transactions) {
                expect(transaction.name).to.be.ok;
              }
            }

            if (account.owners) {
              for (const owner of account.owners) {
                if (owner.addresses) {
                  for (const addr of owner.addresses) {
                    if (addr.data) {
                      expect(addr.data.city).to.be.ok;
                      expect(addr.data.region).to.be.ok;
                      expect(addr.data.postal_code).to.be.ok;
                      expect(addr.data.street).to.be.ok;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    // 4. Filter Asset Report
    const filterRequest: AssetReportFilterRequest = {
      asset_report_token: createResponse.data.asset_report_token,
      account_ids_to_exclude: [account_id as string],
    };

    const filterReponse = await plaidClient.assetReportFilter(filterRequest);
    expect(filterReponse.data).to.be.ok;
    expect(filterReponse.data.asset_report_token).to.be.ok;
    expect(filterReponse.data.asset_report_id).to.be.ok;

    // 5. Refresh Asset Report
    const refreshRequest: AssetReportRefreshRequest = {
      asset_report_token: createResponse.data.asset_report_token,
    };

    const refreshResponse = await plaidClient.assetReportRefresh(
      refreshRequest,
    );
    expect(refreshResponse.data).to.be.ok;
    expect(refreshResponse.data.asset_report_token).to.be.ok;
    expect(refreshResponse.data.asset_report_id).to.be.ok;

    // 6. Get Asset Report PDF
    const pdfRequest: AssetReportPDFGetRequest = {
      asset_report_token: createResponse.data.asset_report_token,
    };

    const pdfResponse = await plaidClient.assetReportPdfGet(pdfRequest, {
      responseType: 'arraybuffer',
    });
    expect(pdfResponse.data).to.be.ok;

    // 7. Create Audit Copy
    const auditCreateRequest: AssetReportAuditCopyCreateRequest = {
      asset_report_token: createResponse.data.asset_report_token,
      auditor_id: CLIENT_ID as string,
    };

    const auditCreateResponse = await plaidClient.assetReportAuditCopyCreate(
      auditCreateRequest,
    );
    expect(auditCreateResponse.data).to.be.ok;
    expect(auditCreateResponse.data.audit_copy_token).to.be.ok;

    // 8. Get Audit Copy
    const auditCopyGetRequest: AssetReportAuditCopyGetRequest = {
      audit_copy_token: auditCreateResponse.data.audit_copy_token,
    };

    const auditCopyResponse = await plaidClient.assetReportAuditCopyGet(
      auditCopyGetRequest,
    );
    expect(auditCopyResponse.data).to.be.ok;
    expect(auditCopyResponse.data.report).to.be.ok;

    // 9. Remove Audit Copy
    const removeAuditCopyRequest: AssetReportAuditCopyRemoveRequest = {
      audit_copy_token: auditCreateResponse.data.audit_copy_token,
    };

    const removeAuditCopyResponse = await plaidClient.assetReportAuditCopyRemove(
      removeAuditCopyRequest,
    );
    expect(removeAuditCopyResponse.data).to.be.ok;
    expect(removeAuditCopyResponse.data.removed).to.be.true;

    // 10. Remove Asset Report
    const removeAssetRequest: AssetReportRemoveRequest = {
      asset_report_token: createResponse.data.asset_report_token,
    };

    const removeAssetResponse = await plaidClient.assetReportRemove(
      removeAssetRequest,
    );
    expect(removeAssetResponse.data).to.be.ok;
    expect(removeAssetResponse.data.removed).to.be.true;
  });
});

const getAssetReportWithRetries = (
  plaidClient: PlaidApi,
  asset_report_token: string,
  ms = 1000,
  retriesLeft = 60,
): Promise<AssetReportGetResponse> =>
  new Promise((resolve, reject) => {
    const request: AssetReportGetRequest = {
      asset_report_token,
    };

    plaidClient
      .assetReportGet(request)
      .then((response) => resolve(response.data))
      .catch(() => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            return reject('Ran out of retries while polling for asset report');
          }
          getAssetReportWithRetries(
            plaidClient,
            asset_report_token,
            ms,
            retriesLeft - 1,
          ).then((response) => resolve(response));
        }, ms);
      });
  });
