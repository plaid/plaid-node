import * as http from 'http';
import * as request from 'request';

import {
  AccountsGetResponse,
  Amount,
  AssetReportAuditCopyCreateResponse,
  AssetReportAuditCopyRemoveResponse,
  AssetReportCreateRequestOptions,
  AssetReportCreateResponse,
  AssetReportFilterResponse,
  AssetReportGetResponse,
  AssetReportRefreshRequestOptions,
  AssetReportRefreshResponse,
  AssetReportRemoveResponse,
  AuthGetRequestOptions,
  AuthGetResponse,
  BalanceGetRequestOptions,
  BalanceGetResponse,
  CategoriesGetResponse,
  DepositSwitchCreateResponse,
  DepositSwitchGetResponse,
  DepositSwitchTokenCreateResponse,
  IdentityGetResponse,
  InstitutionSearchRequestOptions,
  InstitutionSearchResponse,
  InstitutionsGetByIdRequestOptions,
  InstitutionsGetByIdResponse,
  InstitutionsGetRequestOptions,
  InstitutionsGetResponse,
  InvestmentsHoldingsGetRequest,
  InvestmentsHoldingsGetRequestOptions,
  InvestmentsTransactionsGetRequestOptions,
  InvestmentsTransactionsGetResponse,
  ItemAccessTokenInvalidateResponse,
  ItemGetResponse,
  ItemImportRequestOptions,
  ItemImportRequestUserAuth,
  ItemImportResponse,
  ItemPublicTokenExchangeResponse,
  ItemRemoveResponse,
  ItemWebhookUpdateResponse,
  LiabilitiesGetRequestOptions,
  LiabilitiesGetResponse,
  LinkTokenCreateRequest,
  LinkTokenCreateResponse,
  PaymentInitiationAddress,
  PaymentInitiationPaymentCreateRequestSchedule,
  PaymentInitiationPaymentCreateResponse,
  PaymentInitiationPaymentListResponse,
  PaymentInitiationRecipientCreateRequestBacs,
  PaymentInitiationRecipientCreateResponse,
  PaymentInitiationRecipientGetResponse,
  PaymentIntiationPaymentGetResponse,
  PlaidApi,
  ProcessorAuthGetResponse,
  ProcessorBalanceGetResponse,
  ProcessorIdentityGetResponse,
  ProcessorStripeBankAccountTokenCreateResponse,
  ProcessorTokenCreateResponse,
  SandboxItemFireWebhookRequest,
  SandboxItemFireWebhookResponse,
  SandboxItemResetLoginResponse,
  SandboxItemSetVerificationStatusResponse,
  SandboxPublicTokenCreateRequestOptions,
  SandboxPublicTokenCreateResponse,
  TransactionsGetRequestOptions,
  TransactionsGetResponse,
  TransactionsRefreshResponse,
  WebhookVerificationKeyGetResponse,
} from './generated-code/api';

// Type Definitions
interface PlaidEnvironments {
  production: 'https://production.plaid.com';
  sandbox: 'https://sandbox.plaid.com';
  development: 'https://development.plaid.com';
  [env: string]: string;
}

interface Config {
  clientID: string;
  secret: string;
  env: PlaidEnvironments;
  options: Object;
}

type Callback<T extends Object> = (
  err: Error | null,
  response: T | null,
) => void;

// NOTE: This version will only support latest.
const DEFAULT_VERSION = '2020-09-14';

const environments: PlaidEnvironments = {
  production: 'https://production.plaid.com',
  sandbox: 'https://sandbox.plaid.com',
  development: 'https://development.plaid.com',
};

class Client {
  client_id: string;
  secret: string;
  env: PlaidEnvironments;
  client_request_opts: Object;
  openAPIClient: PlaidApi;

  constructor(config: Config) {
    if (typeof config !== 'object' || config === null) {
      throw new Error(
        'Unexpected parameter type. ' +
          'Refer to https://github.com/plaid/plaid-node ' +
          'for how to create a Plaid client.',
      );
    }

    if (config.clientID === null) {
      throw new Error('Missing Plaid "clientID"');
    }

    if (config.secret === null) {
      throw new Error('Missing Plaid "secret"');
    }

    if (
      ![
        environments.production,
        environments.sandbox,
        environments.development,
        //@ts-ignore
      ].includes(config.env)
    ) {
      throw new Error('Invalid Plaid environment');
    }

    if (arguments.length > 1) {
      throw new Error('Too many arguments to constructor');
    }

    this.client_id = config.clientID;
    this.secret = config.secret;
    this.env = config.env;

    if (config.options == null) {
      config.options = {};
    }

    this.client_request_opts = config.options;

    // New generated interface
    this.openAPIClient = new PlaidApi((config.env as unknown) as string);

    this.openAPIClient.defaultHeaders = {
      ['Plaid-Version']: DEFAULT_VERSION,
    };
  }

  // asset_report/create
  createAssetReport(
    access_tokens: Array<string>,
    days_requested: number,
    options?: AssetReportCreateRequestOptions,
    cb?: Callback<AssetReportCreateResponse>,
  ): Promise<AssetReportCreateResponse> {
    return plaidRequest(
      this.openAPIClient.assetReportCreate({
        client_id: this.client_id,
        secret: this.secret,
        access_tokens,
        days_requested,
        options,
      }),
      cb,
    );
  }

  // asset_report/audit_copy/create
  createAuditCopy(
    asset_report_token: string,
    auditor_id: string,
    cb?: Callback<AssetReportAuditCopyCreateResponse>,
  ): Promise<AssetReportAuditCopyCreateResponse> {
    return plaidRequest(
      this.openAPIClient.assetReportAuditCopyCreate({
        client_id: this.client_id,
        secret: this.secret,
        asset_report_token,
        auditor_id,
      }),
      cb,
    );
  }

  // deposit_switch/create
  createDepositSwitch(
    target_account_id: string,
    target_access_token: string,
    cb?: Callback<DepositSwitchCreateResponse>,
  ): Promise<DepositSwitchCreateResponse> {
    return plaidRequest(
      this.openAPIClient.depositSwitchCreate({
        client_id: this.client_id,
        secret: this.secret,
        target_access_token,
        target_account_id,
      }),
      cb,
    );
  }

  // deposit_switch/token/create
  createDepositSwitchToken(
    deposit_switch_id: string,
    cb?: Callback<DepositSwitchTokenCreateResponse>,
  ): Promise<DepositSwitchTokenCreateResponse> {
    return plaidRequest(
      this.openAPIClient.depositSwitchTokenCreate({
        client_id: this.client_id,
        secret: this.secret,
        deposit_switch_id,
      }),
      cb,
    );
  }

  createLinkToken(
    options: LinkTokenCreateRequest,
    cb?: Callback<LinkTokenCreateResponse>,
  ): Promise<LinkTokenCreateResponse> {
    options.client_id = this.client_id;
    options.secret = this.secret;

    return plaidRequest(this.openAPIClient.linkTokenCreate(options), cb);
  }

  // payment_initiation/payment/create
  createPayment(
    recipient_id: string,
    reference: string,
    amount: Amount,
    schedule?: PaymentInitiationPaymentCreateRequestSchedule,
    cb?: Callback<PaymentInitiationPaymentCreateResponse>,
  ): Promise<PaymentInitiationPaymentCreateResponse> {
    return plaidRequest(
      this.openAPIClient.paymentInitiationPaymentCreate({
        client_id: this.client_id,
        secret: this.secret,
        recipient_id,
        reference,
        amount,
        schedule,
      }),
      cb,
    );
  }

  // /payment_initiation/recipient/create
  createPaymentRecipient(
    name: string,
    iban?: string,
    address?: PaymentInitiationAddress,
    bacs?: PaymentInitiationRecipientCreateRequestBacs,
    cb?: Callback<PaymentInitiationRecipientCreateResponse>,
  ): Promise<PaymentInitiationRecipientCreateResponse> {
    return plaidRequest(
      this.openAPIClient.paymentInitiationRecipientCreate({
        client_id: this.client_id,
        secret: this.secret,
        name,
        iban,
        bacs,
        address,
      }),
      cb,
    );
  }

  // processor/token/create
  // processor/apex/processor_token/create
  // processor/stripe/bank_account_token/create
  createProcessorToken(
    access_token: string,
    account_id: string,
    processor: string,
    cb?: Callback<ProcessorTokenCreateResponse>,
  ): Promise<ProcessorTokenCreateResponse> {
    const options = {
      client_id: this.client_id,
      secret: this.secret,
      access_token,
      account_id,
    };
    if (processor == 'stripe') {
      return plaidRequest(
        this.openAPIClient.processorStripeBankAccountTokenCreate(options),
        cb,
      );
    } else if (processor == 'apex') {
      return plaidRequest(
        this.openAPIClient.processorApexProcessorTokenCreate(options),
        cb,
      );
    } else {
      const optionsWithProcessor = { ...options, processor };
      return plaidRequest(
        this.openAPIClient.processorTokenCreate(optionsWithProcessor),
        cb,
      );
    }
  }

  // processor/stripe/bank_account_token/create
  createStripeToken(
    access_token: string,
    account_id: string,
    cb?: Callback<ProcessorStripeBankAccountTokenCreateResponse>,
  ): Promise<ProcessorStripeBankAccountTokenCreateResponse> {
    return this.createProcessorToken(access_token, account_id, 'stripe', cb);
  }

  // item/public_token/exchange
  exchangePublicToken(
    public_token: string,
    cb?: Callback<ItemPublicTokenExchangeResponse>,
  ): Promise<ItemPublicTokenExchangeResponse> {
    return plaidRequest(
      this.openAPIClient.itemPublicTokenExchange({
        client_id: this.client_id,
        secret: this.secret,
        public_token,
      }),
      cb,
    );
  }

  // asset_report/filter
  filterAssetReport(
    asset_report_token: string,
    account_ids_to_exclude: Array<string>,
    cb?: Callback<AssetReportFilterResponse>,
  ): Promise<AssetReportFilterResponse> {
    return plaidRequest(
      this.openAPIClient.assetReportFilter({
        client_id: this.client_id,
        secret: this.secret,
        asset_report_token,
        account_ids_to_exclude,
      }),
      cb,
    );
  }

  // accounts/get
  getAccounts(
    access_token: string,
    cb?: Callback<AccountsGetResponse>,
  ): Promise<AccountsGetResponse> {
    return plaidRequest(
      this.openAPIClient.accountsGet({
        access_token: access_token,
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // asset_report/get
  getAssetReport(
    asset_report_token: string,
    include_insights?: boolean,
    cb?: Callback<AssetReportGetResponse>,
  ): Promise<AssetReportGetResponse> {
    return plaidRequest(
      this.openAPIClient.assetReportGet({
        asset_report_token,
        client_id: this.client_id,
        include_insights,
        secret: this.secret,
      }),
      cb,
    );
  }

  // asset_report/pdf/get
  getAssetReportPdf(
    asset_report_token: string,
    cb?: Callback<Buffer>,
  ): Promise<Buffer> {
    return plaidRequest(
      this.openAPIClient.assetReportPDFGet({
        asset_report_token,
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // asset_report/audit_copy/get
  getAuditCopy(
    audit_copy_token: string,
    cb?: Callback<AssetReportGetResponse>,
  ): Promise<AssetReportGetResponse> {
    return plaidRequest(
      this.openAPIClient.assetReportAuditCopyGet({
        client_id: this.client_id,
        secret: this.secret,
        audit_copy_token,
      }),
      cb,
    );
  }

  // auth/get
  getAuth(
    access_token: string,
    options?: AuthGetRequestOptions,
    cb?: Callback<AuthGetResponse>,
  ): Promise<AuthGetResponse> {
    return plaidRequest(
      this.openAPIClient.authGet({
        access_token: access_token,
        client_id: this.client_id,
        secret: this.secret,
        options,
      }),
      cb,
    );
  }

  // accounts/balance/get
  getBalance(
    access_token: string,
    options?: BalanceGetRequestOptions,
    cb?: Callback<BalanceGetResponse>,
  ): Promise<BalanceGetResponse> {
    return plaidRequest(
      this.openAPIClient.balanceGet({
        access_token: access_token,
        client_id: this.client_id,
        secret: this.secret,
        options,
      }),
      cb,
    );
  }

  // categories/get
  getCategories(
    cb?: Callback<CategoriesGetResponse>,
  ): Promise<CategoriesGetResponse> {
    return plaidRequest(this.openAPIClient.categoriesGet({}), cb);
  }

  // deposit_switch/get
  getDepositSwitch(
    deposit_switch_id: string,
    cb?: Callback<DepositSwitchGetResponse>,
  ): Promise<DepositSwitchGetResponse> {
    return plaidRequest(
      this.openAPIClient.depositSwitchGet({
        client_id: this.client_id,
        secret: this.secret,
        deposit_switch_id,
      }),
      cb,
    );
  }

  // investments/holdings/get
  getHoldings(
    access_token: string,
    options?: InvestmentsHoldingsGetRequestOptions,
    cb?: Callback<InvestmentsHoldingsGetRequest>,
  ): Promise<InvestmentsHoldingsGetRequest> {
    return plaidRequest(
      this.openAPIClient.investmentsHoldingsGet({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
        options,
      }),
      cb,
    );
  }

  // identity/get
  getIdentity(
    access_token: string,
    cb?: Callback<IdentityGetResponse>,
  ): Promise<IdentityGetResponse> {
    return plaidRequest(
      this.openAPIClient.identityGet({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // institutions/get_by_id
  getInstitutionById(
    institution_id: string,
    options?: InstitutionsGetByIdRequestOptions,
    cb?: Callback<InstitutionsGetByIdResponse>,
  ): Promise<InstitutionsGetByIdResponse> {
    return plaidRequest(
      this.openAPIClient.institutionsGetByID({
        client_id: this.client_id,
        institution_id,
        secret: this.secret,
        options,
      }),
      cb,
    );
  }

  // institutions/get
  getInstitutions(
    count: number,
    offset: number,
    options?: InstitutionsGetRequestOptions,
    cb?: Callback<InstitutionsGetResponse>,
  ): Promise<InstitutionsGetResponse> {
    return plaidRequest(
      this.openAPIClient.institutionsGet({
        client_id: this.client_id,
        count,
        offset,
        secret: this.secret,
        options,
      }),
      cb,
    );
  }

  // investments/transactions/get
  getInvestmentTransactions(
    access_token: string,
    start_date: string,
    end_date: string,
    options?: InvestmentsTransactionsGetRequestOptions,
    cb?: Callback<InvestmentsTransactionsGetResponse>,
  ): Promise<InvestmentsTransactionsGetResponse> {
    return plaidRequest(
      this.openAPIClient.investmentsTransactionsGet({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
        start_date,
        end_date,
        options,
      }),
      cb,
    );
  }

  // item/get
  getItem(
    access_token: string,
    cb?: Callback<ItemGetResponse>,
  ): Promise<ItemGetResponse> {
    return plaidRequest(
      this.openAPIClient.itemGet({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // liabilities/get
  getLiabilities(
    access_token: string,
    options?: LiabilitiesGetRequestOptions,
    cb?: Callback<LiabilitiesGetResponse>,
  ): Promise<LiabilitiesGetResponse> {
    return plaidRequest(
      this.openAPIClient.liabilitiesGet({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
        options,
      }),
      cb,
    );
  }

  //TODO: OpenAPI GET LINK TOKEN!
  getLinkToken() {}

  // payment_initiation/payment/get
  getPayment(
    payment_id: string,
    cb?: Callback<PaymentIntiationPaymentGetResponse>,
  ): Promise<PaymentIntiationPaymentGetResponse> {
    return plaidRequest(
      this.openAPIClient.paymentIntiationPaymentGet({
        client_id: this.client_id,
        payment_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // payment_initiation/recipient/get
  getPaymentRecipient(
    recipient_id: string,
    cb?: Callback<PaymentInitiationRecipientGetResponse>,
  ): Promise<PaymentInitiationRecipientGetResponse> {
    return plaidRequest(
      this.openAPIClient.paymentInitiationRecipientGet({
        client_id: this.client_id,
        recipient_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // transactions/get
  getTransactions(
    access_token: string,
    start_date: string,
    end_date: string,
    options?: TransactionsGetRequestOptions,
    cb?: Callback<TransactionsGetResponse>,
  ): Promise<TransactionsGetResponse> {
    return plaidRequest(
      this.openAPIClient.transactionsGet({
        access_token: access_token,
        client_id: this.client_id,
        secret: this.secret,
        start_date,
        end_date,
        options,
      }),
      cb,
    );
  }

  // webhook_verification_key/get
  getWebhookVerificationKey(
    key_id: string,
    cb?: Callback<WebhookVerificationKeyGetResponse>,
  ): Promise<WebhookVerificationKeyGetResponse> {
    return plaidRequest(
      this.openAPIClient.webhookVerificationKeyGet({
        client_id: this.client_id,
        key_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // item/import
  importItem(
    products: Array<string>,
    user_auth: ItemImportRequestUserAuth,
    options?: ItemImportRequestOptions,
    cb?: Callback<ItemImportResponse>,
  ): Promise<ItemImportResponse> {
    return plaidRequest(
      this.openAPIClient.itemImport({
        client_id: this.client_id,
        products,
        secret: this.secret,
        user_auth,
        options,
      }),
      cb,
    );
  }

  // item/access_token/invalidate
  invalidateAccessToken(
    access_token: string,
    cb?: Callback<ItemAccessTokenInvalidateResponse>,
  ): Promise<ItemAccessTokenInvalidateResponse> {
    return plaidRequest(
      this.openAPIClient.itemAccessTokenInvalidate({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // payment_initiation/recipient/list
  listPaymentRecipients(
    cb?: Callback<PaymentInitiationPaymentListResponse>,
  ): Promise<PaymentInitiationPaymentListResponse> {
    return plaidRequest(
      this.openAPIClient.paymentInitiationRecipientList({
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // payment_initiation/payment/list
  listPayments(
    options?: { count: number; cursor: string },
    cb?: Callback<PaymentInitiationPaymentListResponse>,
  ): Promise<PaymentInitiationPaymentListResponse> {
    return plaidRequest(
      this.openAPIClient.paymentInitiationPaymentList({
        client_id: this.client_id,
        secret: this.secret,
        count: options?.count != null ? options.count : undefined,
        cursor: options?.cursor != null ? options.cursor : undefined,
      }),
      cb,
    );
  }

  // processor/auth/get
  getAuthProcessor(
    processor_token: string,
    cb?: Callback<ProcessorAuthGetResponse>,
  ): Promise<ProcessorAuthGetResponse> {
    return plaidRequest(
      this.openAPIClient.processorAuthGet({
        client_id: this.client_id,
        processor_token,
        secret: this.secret,
      }),
      cb,
    );
  }

  // processor/balance/get
  getBalanceProcessor(
    processor_token: string,
    cb?: Callback<ProcessorBalanceGetResponse>,
  ): Promise<ProcessorBalanceGetResponse> {
    return plaidRequest(
      this.openAPIClient.processorBalanceGet({
        client_id: this.client_id,
        processor_token,
        secret: this.secret,
      }),
      cb,
    );
  }

  // processor/identity/get
  getIdentityProcessor(
    processor_token: string,
    cb?: Callback<ProcessorIdentityGetResponse>,
  ): Promise<ProcessorIdentityGetResponse> {
    return plaidRequest(
      this.openAPIClient.processorIdentityGet({
        client_id: this.client_id,
        processor_token,
        secret: this.secret,
      }),
      cb,
    );
  }

  // asset_report/refresh
  refreshAssetReport(
    asset_report_token: string,
    days_requested?: number,
    options?: AssetReportRefreshRequestOptions,
    cb?: Callback<AssetReportRefreshResponse>,
  ): Promise<AssetReportRefreshResponse> {
    return plaidRequest(
      this.openAPIClient.assetReportRefresh({
        client_id: this.client_id,
        asset_report_token,
        days_requested,
        secret: this.secret,
        options,
      }),
      cb,
    );
  }

  // transactions/refresh
  refreshTransactions(
    access_token: string,
    cb?: Callback<TransactionsRefreshResponse>,
  ): Promise<TransactionsRefreshResponse> {
    return plaidRequest(
      this.openAPIClient.transactionsRefresh({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // asset_report/remove
  removeAssetReport(
    asset_report_token: string,
    cb?: Callback<AssetReportRemoveResponse>,
  ): Promise<AssetReportRemoveResponse> {
    return plaidRequest(
      this.openAPIClient.assetReportRemove({
        asset_report_token,
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // asset_report/audit_copy/remove
  removeAuditCopy(
    audit_copy_token: string,
    cb?: Callback<AssetReportAuditCopyRemoveResponse>,
  ): Promise<AssetReportAuditCopyRemoveResponse> {
    return plaidRequest(
      this.openAPIClient.assetReportAuditCopyRemove({
        audit_copy_token,
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // item/remove
  removeItem(
    access_token: string,
    cb?: Callback<ItemRemoveResponse>,
  ): Promise<ItemRemoveResponse> {
    return plaidRequest(
      this.openAPIClient.itemRemove({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // sandbox/item/reset_login
  resetLogin(
    access_token: string,
    cb?: Callback<SandboxItemResetLoginResponse>,
  ): Promise<SandboxItemResetLoginResponse> {
    return plaidRequest(
      this.openAPIClient.sandboxItemResetLogin({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
      }),
      cb,
    );
  }

  // sandbox/public_token/create
  sandboxPublicTokenCreate(
    institution_id: string,
    initial_products: Array<string>,
    options: SandboxPublicTokenCreateRequestOptions,
    cb?: Callback<SandboxPublicTokenCreateResponse>,
  ): Promise<SandboxPublicTokenCreateResponse> {
    return plaidRequest(
      this.openAPIClient.sandboxPublicTokenCreate({
        client_id: this.client_id,
        institution_id,
        initial_products,
        secret: this.secret,
        options,
      }),
      cb,
    );
  }

  // sandbox/item/fire_webhook
  sandboxItemFireWebhook(
    access_token: string,
    webhook_code: SandboxItemFireWebhookRequest.WebhookCodeEnum,
    cb?: Callback<SandboxItemFireWebhookResponse>,
  ): Promise<SandboxItemFireWebhookResponse> {
    return plaidRequest(
      this.openAPIClient.sandboxItemFireWebhook({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
        webhook_code,
      }),
      cb,
    );
  }

  // sandbox/item/set_verification_status
  sandboxItemSetVerificationStatus(
    access_token: string,
    account_id: string,
    verification_status: string,
    cb?: Callback<SandboxItemSetVerificationStatusResponse>,
  ): Promise<SandboxItemSetVerificationStatusResponse> {
    return plaidRequest(
      this.openAPIClient.sandboxItemSetVerificationStatus({
        access_token,
        account_id,
        client_id: this.client_id,
        secret: this.secret,
        verification_status,
      }),
      cb,
    );
  }

  // institutions/search
  searchInstitutionsByName(
    query: string,
    products: Array<string>,
    options?: InstitutionSearchRequestOptions,
    cb?: Callback<InstitutionSearchResponse>,
  ): Promise<InstitutionSearchResponse> {
    return plaidRequest(
      this.openAPIClient.institutionsSearch({
        client_id: this.client_id,
        secret: this.secret,
        options,
        products,
        query,
      }),
      cb,
    );
  }

  // TODO: FIX OPEN API FILE
  // item/webhook/update
  updateItemWebhook(
    access_token: string,
    webhook: string,
    cb?: Callback<ItemWebhookUpdateResponse>,
  ): Promise<ItemWebhookUpdateResponse> {
    return plaidRequest(
      this.openAPIClient.itemWebhookUpdate({
        access_token,
        client_id: this.client_id,
        secret: this.secret,
        webhook,
      }),
      cb,
    );
  }
}

// Helpers
class PlaidError extends Error {
  //@ts-ignore
  constructor(body: any) {
    super(body.error_code);
    this.name = 'PlaidError';

    if (typeof body === 'object') {
      (<any>Object).assign(this, body);
    }
  }
}

const rejectWithPlaidError = (data: request.Request): PlaidError => {
  const error = data.response?.body;

  if (typeof error === 'object' && error !== null) {
    error.status_code = ((data as unknown) as request.Response).statusCode;

    return new PlaidError(error);
  }

  // Unknown body type returned, return a standard API_ERROR
  return new PlaidError({
    error_type: 'API_ERROR',
    status_code: ((data as unknown) as request.Response).statusCode,
    error_code: 'INTERNAL_SERVER_ERROR',
    error_message: String(error),
    display_message: null,
    request_id: null,
  });
};

const wrapPromise = (
  request: Promise<{
    response: http.IncomingMessage;
    body: any;
  }>,
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
    .then((resp: request.Response) => {
      cb(null, resp.body);
    })
    .catch((err: request.Request, _: any) => {
      cb(rejectWithPlaidError(err), null);
    });
};

const plaidRequest = (
  request: Promise<{
    response: http.IncomingMessage;
    body: any;
  }>,
  cb?: Callback<any>,
) => {
  if (cb) {
    return callbackOptions(request, cb);
  } else {
    return wrapPromise(request);
  }
};

export { Client, environments, PlaidError, plaidRequest };
