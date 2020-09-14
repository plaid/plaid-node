import * as OpenAPI from "./generated-code/api";
import * as http from "http";
import * as request from "request";

import {
  TransactionsGetRequestOptions,
  TransactionsGetResponse,
  AuthGetRequestOptions,
  AuthGetResponse,
  AccountsGetResponse,
  BalanceGetResponse,
  BalanceGetRequestOptions,
  CategoriesGetResponse,
} from "./generated-code/api";

// Type Definitions
type EnviromentType =
  | { production: "https://production.plaid.com" }
  | { sandbox: "https://sandbox.plaid.com" }
  | { development: "https://development.plaid.com" };

interface Config {
  clientID: string;
  secret: string;
  env: EnviromentType;
  options: Object;
}

type Callback<T extends Object> = (
  err: Error | null,
  response: T | null
) => void;

// NOTE: This version will only support latest.
const DEFAULT_VERSION = "2020-09-14";

const environments: EnviromentType = {
  production: "https://production.plaid.com",
  sandbox: "https://sandbox.plaid.com",
  development: "https://development.plaid.com",
};

class Client {
  client_id: string;
  secret: string;
  env: EnviromentType;
  client_request_opts: Object;
  openAPIClient: OpenAPI.PlaidApi;

  constructor(config: Config) {
    if (typeof config !== "object" || config === null) {
      throw new Error(
        "Unexpected parameter type. " +
          "Refer to https://github.com/plaid/plaid-node " +
          "for how to create a Plaid client."
      );
    }

    if (config.clientID === null) {
      throw new Error('Missing Plaid "clientID"');
    }

    if (config.secret === null) {
      throw new Error('Missing Plaid "secret"');
    }

    this.client_id = config.clientID;
    this.secret = config.secret;
    this.env = config.env;

    if (config.options == null) {
      config.options = {};
    }

    this.client_request_opts = config.options;

    // New generated interface
    this.openAPIClient = new OpenAPI.PlaidApi(
      (config.env as unknown) as string
    );

    this.openAPIClient.defaultHeaders = {
      ["Plaid-Version"]: DEFAULT_VERSION,
    };
  }

  // Request wrapper for body vars + path!

  // asset_report/create
  createAssetReport() {}

  // asset_report/audit_copy/create
  createAuditCopy() {}

  // deposit_switch/create
  createDepositSwitch() {}

  // deposit_switch/token/create
  createDepositSwitchToken() {}

  // link/token/create
  createLinkToken() {}

  // payment_initiation/payment/create
  createPayment() {}

  // /payment_initiation/recipient/create
  createPaymentRecipient() {}

  // payment_initiation/payment/token/create
  createPaymentToken() {}

  // processor/token/create
  // processor/apex/processor_token/create
  createProcessorToken() {}

  // item/public_token/create
  createPublicToken() {}

  // processor/stripe/bank_account_token/create
  createStripeToken() {}

  // item/public_token/exchange
  exchangePublicToken() {}

  // asset_report/filter
  filterAssetReport() {}

  // accounts/get
  getAccounts(accessToken: string, cb?: Callback<AccountsGetResponse>) {
    return plaidRequest(
      this.openAPIClient.accountsGet({
        clientId: this.client_id,
        accessToken: accessToken,
        secret: this.secret,
      }),
      cb
    );
  }

  //??? CUSTOM FUNCTION only used in plaid-node
  getAllTransactions() {}

  // asset_report/get
  getAssetReport() {}

  // asset_report/pdf/get
  getAssetReportPdf() {}

  // asset_report/audit_copy/create
  getAuditCopy() {}

  // auth/get
  getAuth(
    accessToken: string,
    options?: AuthGetRequestOptions,
    cb?: Callback<AuthGetResponse>
  ) {
    return plaidRequest(
      this.openAPIClient.authGet({
        clientId: this.client_id,
        accessToken: accessToken,
        secret: this.secret,
        options,
      }),
      cb
    );
  }

  // accounts/balance/get
  getBalance(
    accessToken: string,
    options?: BalanceGetRequestOptions,
    cb?: Callback<BalanceGetResponse>
  ) {
    return plaidRequest(
      this.openAPIClient.balanceGet({
        clientId: this.client_id,
        accessToken: accessToken,
        secret: this.secret,
        options,
      }),
      cb
    );
  }

  // categories/get
  getCategories(cb?: Callback<CategoriesGetResponse>) {
    return plaidRequest(
      this.openAPIClient.categoriesGet({}),
      cb
    );
  }

  // deposit_switch/get
  getDepositSwitch() {}

  // investments/holdings/get
  getHoldings() {}

  // identity/get
  getIdentity() {}

  // institutions/get_by_id
  getInstitutionById() {}

  // institutions/get
  getInstitutions() {}

  // investments/transactions/get
  getInvestmentTransactions() {}

  // item/get
  getItem() {}

  // liabilities/get
  getLiabilities() {}

  //TODO: OpenAPI GET LINK TOKEN!
  getLinkToken() {}

  // payment_initiation/payment/get
  getPayment() {}

  // payment_initiation/recipient/get
  getPaymentRecipient() {}

  // transactions/get
  getTransactions(
    accessToken: string,
    startDate: string,
    endDate: string,
    options?: TransactionsGetRequestOptions,
    cb?: Callback<TransactionsGetResponse>
  ): Promise<TransactionsGetResponse> {
    return plaidRequest(
      this.openAPIClient.transactionsGet({
        clientId: this.client_id,
        accessToken: accessToken,
        secret: this.secret,
        startDate: startDate,
        endDate: endDate,
        options,
      }),
      cb
    );
  }

  // webhook_verification_key/get
  getWebhookVerificationKey() {}

  // item/import
  importItem() {}

  // item/access_token/invalidate
  invalidateAccessToken() {}

  // payment_initiation/recipient/list
  listPaymentRecipients() {}

  // payment_initiation/payment/list
  listPayments() {}

  // PROCESSOR AUTH GET
  // processor/auth/get

  // PROCESSOR BALANCE GET
  // processor/balance/get

  // PROCESSOR IDENTITY GET
  // processor/identity/get

  // asset_report/refresh
  refreshAssetReport() {}

  // transactions/refresh
  refreshTransactions() {}

  // asset_report/remove
  removeAssetReport() {}

  // asset_report/audit_copy/remove
  removeAuditCopy() {}

  // item/remove
  removeItem() {}

  // sandbox/item/reset_login
  resetLogin() {}

  // sandbox/public_token/create
  sandboxPublicTokenCreate() {}

  // sandbox/item/fire_webhook
  sandboxItemFireWebhook() {}

  // sandbox/item/set_verification_status
  sandboxItemSetVerificationStatus() {}

  // institutions/search
  searchInstitutionsByName() {}

  // item/webhook/update
  updateItemWebhook() {}
}

// Helpers
class PlaidError extends Error {
  //@ts-ignore
  constructor(body: any) {
    super(body.error_code);
    this.name = "PlaidError";

    if (typeof body === "object") {
      (<any>Object).assign(this, body);
    }
  }
}

const rejectWithPlaidError = (data: request.Request): PlaidError => {
  const error = data.response?.body;

  if (typeof error === "object" && error !== null) {
    error.status_code = ((data as unknown) as request.Response).statusCode;

    return new PlaidError(error);
  }

  // Unknown body type returned, return a standard API_ERROR
  return new PlaidError({
    error_type: "API_ERROR",
    status_code: ((data as unknown) as request.Response).statusCode,
    error_code: "INTERNAL_SERVER_ERROR",
    error_message: String(error),
    display_message: null,
    request_id: null,
  });
};

const wrapPromise = (
  request: Promise<{
    response: http.IncomingMessage;
    body: any;
  }>
) => {
  return new Promise((resolve, reject) => {
    request
      .then((resp) => {
        return resolve(resp.body);
      })
      .catch((err: request.Request) => {
        return reject(rejectWithPlaidError(err));
      });
  });
};

const callbackOptions = (request: any, cb: Callback<http.IncomingMessage>) => {
  return request
    .then((resp: request.Response) => cb(null, resp.body))
    .catch((err: request.Request, resp: any) => {
      cb(rejectWithPlaidError(err), null);
    });
};

const plaidRequest = (
  request: Promise<{
    response: http.IncomingMessage;
    body: any;
  }>,
  cb?: Callback<any>
) => {
  if (cb) {
    return callbackOptions(request, cb);
  } else {
    return wrapPromise(request);
  }
};

export { Client, environments, PlaidError };
