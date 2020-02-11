declare module 'plaid' {
  import { CoreOptions } from 'request';

  type Callback<T extends Object> = (err: Error, response: T) => void;
  type Iso8601DateString = string; // YYYY-MM-DD
  type Iso8601DateTimeString = string; // YYYY-MM-DDTHH:MM:SSZ
  type Iso3166Alpha2CountryString = string; // CC
  type Iso4217CurrencyString = string; // CCC

  interface AccessTokenFn<T> {
    (accessToken: string): Promise<T>;
    (accessToken: string, cb: Callback<T>): void;
  }

  // OPTIONS /////////////////////////////////////////////////////////////////

  interface ClientRequestOptions {
    timeout: number;
  }

  interface ItemRequestOptions {
    account_ids?: Array<string>;
  }

  interface ItemImportResponse extends BaseResponse {
    access_token: string;
  }

  interface TransactionsRequestOptions extends ItemRequestOptions {
    count?: number;
    offset?: number;
  }

  interface InvestmentTransactionsRequestOptions extends ItemRequestOptions {
    count?: number;
    offset?: number;
  }

  interface GetAllTransactionsRequestOptions extends ItemRequestOptions {}

  interface AssetReportUser {
    client_user_id?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    last_name?: string | null;
    ssn?: string | null;
    phone_number?: string | null;
    email?: string | null;
  }

  interface AssetReportCreateOptions {
    client_report_id?: string | null;
    webhook?: string;
    user?: AssetReportUser;
  }

  type AssetReportRefreshOptions = AssetReportCreateOptions;

  interface WebhookOptions {
    webhook?: string;
  }

  // DATA TYPES //////////////////////////////////////////////////////////////

  interface AccountCommon {
    account_id: string;
    mask: string | null;
    name: string | null;
    official_name: string | null;
    subtype: string | null;
    type: string | null;
    verification_status:
      | 'pending_automatic_verification'
      | 'pending_manual_verification'
      | 'manually_verified'
      | null;
  }

  interface Account extends AccountCommon {
    balances: {
      available: number | null;
      current: number | null;
      limit: number | null;
      iso_currency_code: string | null;
      unofficial_currency_code: string | null;
    };
  }

  interface Security {
    security_id: string;
    cusip: string | null;
    sedol: string | null;
    isin: string | null;
    institution_security_id: string | null;
    institution_id: string | null;
    proxy_security_id: string | null;
    name: string | null;
    ticker_symbol: string | null;
    is_cash_equivalent: boolean | null;
    type: string | null;
    close_price: number | null;
    close_price_as_of: string | null;
    iso_currency_code: string | null;
    unofficial_currency_code: string | null;
  }

  interface AccountWithOwners extends Account {
    owners: Array<Identity>;
  }

  interface Category {
    group: string;
    hierarchy: Array<string>;
    category_id: string;
  }

  export class PlaidError extends Error {
    error_type: string;
    error_code: string;
    error_message: string;
    display_message: string | null;
    causes?: Array<Cause>;
  }

  // IPlaidError is a dupliate of PlaidError that is not an instance of Error.
  export interface IPlaidError {
    error_type: string;
    error_code: string;
    error_message: string;
    display_message: string | null;
    causes?: Array<Cause>;
  }

  interface Warning {
    warning_type: string;
    warning_code: string;
    cause: Cause;
  }

  interface Cause extends IPlaidError {
    item_id: string;
  }

  interface Item {
    available_products: Array<string>;
    billed_products: Array<string>;
    error: IPlaidError | null;
    institution_id: string;
    item_id: string;
    webhook: string;
    consent_expiration_time: Iso8601DateTimeString | null;
  }

  interface ItemStatus {
    transactions: TransactionsStatus;
    last_webhook: WebhookStatus | null;
  }

  interface TransactionsStatus {
    last_successful_update: string | null;
    last_failed_update: string | null;
  }

  interface WebhookStatus {
    sent_at: string;
    code_sent: string;
  }

  interface Credential {
    name: string;
    label: string;
    type: 'text' | 'password';
  }

  interface Institution {
    credentials: Array<Credential>;
    has_mfa: boolean;
    institution_id: string;
    mfa: Array<string>;
    name: string;
    products: Array<string>;
    country_codes: Array<string>;
  }

  interface InstitutionWithDisplayData extends Institution {
    colors: Map<string, string>;
    logo: string | null;
    name_break: number | null;
    url_account_locked: string | null;
    url_account_setup: string | null;
    url_forgotten_password: string | null;
  }

  interface InstitutionWithInstitutionData extends Institution {
    logo: string;
    primary_color: string;
    url: string;
  }

  interface IncomeStream {
    monthly_income: number;
    confidence: number;
    days: number;
    name: string;
  }

  interface Income {
    income_streams: Array<IncomeStream>;
    last_year_income: number;
    last_year_income_before_tax: number;
    projected_yearly_income: number;
    projected_yearly_income_before_tax: number;
    max_number_of_overlapping_income_streams: number;
    number_of_income_streams: number;
  }

  interface Identity {
    addresses: Array<Address>;
    emails: Array<Email>;
    names: Array<string>;
    phone_numbers: Array<PhoneNumber>;
  }

  interface Address {
    data: AddressData;
    primary: boolean;
  }

  interface AddressData {
    city: string | null;
    region: string | null;
    postal_code: string | null;
    street: string | null;
    country: string | null;
  }

  interface Email {
    data: string;
    primary: boolean;
    type: string;
  }

  interface Holding {
    account_id: string;
    security_id: string;
    institution_value: number | null;
    institution_price: number | null;
    quantity: number | null;
    institution_price_as_of: string | null;
    cost_basis: number | null;
    iso_currency_code: string | null;
    unofficial_currency_code: string | null;
  }

  interface InvestmentTransaction {
    investment_transaction_id: string;
    account_id: string;
    security_id: string;
    cancel_transaction_id: string;
    date: Iso8601DateString;
    name: string | null;
    quantity: number | null;
    amount: number | null;
    price: number | null;
    fees: number | null;
    type: string | null;
    iso_currency_code: string | null;
    unofficial_currency_code: string | null;
  }

  interface PhoneNumber {
    data: string;
    primary: boolean;
    type: string;
  }

  interface TransactionLocation {
    address: string | null;
    city: string | null;
    lat: number | null;
    lon: number | null;
    region: string | null;
    store_number: string | null;
    postal_code: string | null;
    country: string | null;
  }

  interface TransactionPaymentMeta {
    by_order_of: string | null;
    payee: string | null;
    payer: string | null;
    payment_method: string | null;
    payment_processor: string | null;
    ppd_id: string | null;
    reason: string | null;
    reference_number: string | null;
  }

  interface Transaction {
    account_id: string;
    account_owner: string | null;
    amount: number | null;
    iso_currency_code: string | null;
    unofficial_currency_code: string | null;
    category: Array<string> | null;
    category_id: string | null;
    date: Iso8601DateString;
    location: TransactionLocation;
    name: string | null;
    payment_meta: TransactionPaymentMeta;
    pending: boolean | null;
    pending_transaction_id: string | null;
    transaction_id: string;
    transaction_type: string | null;
  }

  interface AssetReport {
    asset_report_id: string;
    client_report_id: string | null;
    date_generated: Iso8601DateTimeString;
    days_requested: number;
    items: Array<AssetReportItem>;
    user: AssetReportUser;
  }

  interface AssetReportItem {
    item_id: string;
    accounts: Array<AssetReportAccount>;
    institution_id: string;
    institution_name: string;
    date_last_updated: Iso8601DateTimeString;
  }

  interface AssetReportAccount extends AccountCommon {
    balances: {
      available: number | null;
      current: number | null;
    };
    days_available: number;
    historical_balances: Array<HistoricalBalance>;
    transactions: Array<AssetReportTransaction>;
    owners: Array<Identity>;
  }

  interface HistoricalBalance {
    date: Iso8601DateString;
    current: number;
  }

  interface AssetReportTransaction {
    account_id: string;
    transaction_id: string;
    date: Iso8601DateString;
    original_description: string | null;
    pending: boolean | null;
    amount: number | null;

    // These fields only exist in an Asset Report with Insights. For more, see
    // https://plaid.com/docs/#retrieve-json-report-request.
    account_owner?: string;
    category?: Array<string>;
    category_id?: string;
    date_transacted?: string;
    location?: TransactionLocation;
    name?: string;
    payment_meta?: TransactionPaymentMeta;
    pending_transaction_id?: string;
    transaction_type?: string;
  }

  interface ACHNumbers {
    account: string;
    account_id: string;
    routing: string;
    wire_routing: string;
  }

  interface EFTNumbers {
    account: string;
    account_id: string;
    institution: string;
    branch: string;
  }

  interface InternationalNumbers {
    account_id: string;
    iban: string;
    bic: string;
  }

  interface BACSNumbers {
    account_id: string;
    account: string;
    sort_code: string;
  }

  interface StudentLoanStatus {
    type: string | null;
    end_date: Iso8601DateString | null;
  }

  interface StudentLoanRepaymentPlan {
    type: string;
    description: string;
  }

  interface PslfStatus {
    estimated_eligibility_date: Iso8601DateString | null;
    payments_made: number | null;
    payments_remaining: number | null;
  }

  interface StudentLoanServicerAddress {
    city: string | null;
    country: string | null;
    postal_code: string | null;
    region: string | null;
    street: string | null;
  }

  interface StudentLoanLiability {
    account_id: string | null;
    account_number: string | null;
    disbursement_dates: Array<Iso8601DateString> | null;
    expected_payoff_date: Iso8601DateString | null;
    guarantor: string | null;
    interest_rate_percentage: number | null;
    is_overdue: boolean | null;
    last_payment_amount: number | null;
    last_payment_date: Iso8601DateString | null;
    last_statement_balance: number | null;
    last_statement_issue_date: Iso8601DateString | null;
    loan_name: string | null;
    loan_status: StudentLoanStatus | null;
    minimum_payment_amount: number | null;
    next_payment_due_date: Iso8601DateString | null;
    origination_date: Iso8601DateString | null;
    origination_principal_amount: number | null;
    outstanding_interest_amount: number | null;
    payment_reference_number: string | null;
    pslf_status: PslfStatus | null;
    repayment_plan: StudentLoanRepaymentPlan | null;
    sequence_number: string | null;
    servicer_address: StudentLoanServicerAddress | null;
    ytd_interest_paid: number | null;
    ytd_principal_paid: number | null;
  }

  interface PaymentRecipientAddress {
    street: Array<string>;
    city: string;
    postal_code: string;
    country: Iso3166Alpha2CountryString;
  }

  interface PaymentRecipient {
    recipient_id: string;
    name: string;
    iban: string;
    address: PaymentRecipientAddress;
  }

  interface PaymentAmount {
    currency: Iso4217CurrencyString;
    value: number;
  }

  // RESPONSES

  interface BaseResponse {
    request_id: string;
  }

  interface AccountsResponse extends BaseResponse {
    accounts: Array<Account>;
    item: Item;
  }

  interface InvestmentsResponse extends AccountsResponse {
    securities: Array<Security>;
  }

  interface AuthResponse extends BaseResponse {
    accounts: Array<Account>;
    item: Item;
    numbers: {
      ach: Array<ACHNumbers>;
      eft: Array<EFTNumbers>;
      international: Array<InternationalNumbers>;
      bacs: Array<BACSNumbers>;
    };
  }

  interface CreditDetailsResponse extends AccountsResponse {}

  interface HoldingsResponse extends InvestmentsResponse {
    holdings: Array<Holding>;
  }
  interface InvestmentTransactionsResponse extends InvestmentsResponse {
    investment_transactions: Array<InvestmentTransaction>;
    total_investment_transactions: number;
  }

  interface IncomeResponse extends AccountsResponse {
    income: Income;
  }

  interface IdentityResponse extends AccountsResponse {
    accounts: Array<AccountWithOwners>;
  }

  interface LiabilitiesResponse extends AccountsResponse {
    liabilities: {
      student: Array<StudentLoanLiability>;
    };
  }

  interface ItemResponse extends BaseResponse {
    item: Item;
    status: ItemStatus;
  }

  interface CreatePublicTokenResponse extends BaseResponse {
    public_token: string;
  }

  interface CreateProcessorTokenResponse extends BaseResponse {
    processor_token: string;
  }

  interface CreateStripeTokenResponse extends BaseResponse {
    stripe_bank_account_token: string;
  }

  interface RotateAccessTokenResponse extends BaseResponse {
    new_access_token: string;
  }

  interface ItemDeleteResponse extends BaseResponse {
    deleted: true;
  }

  interface ItemRemoveResponse extends BaseResponse {
    removed: true;
  }

  interface ResetLoginResponse extends BaseResponse {
    reset_login: true;
  }

  interface GetInstitutionsResponse<T extends Institution>
    extends BaseResponse {
    institutions: Array<T>;
  }

  interface GetInstitutionByIdResponse<T extends Institution>
    extends BaseResponse {
    institution: T;
  }

  interface CategoriesResponse extends BaseResponse {
    categories: Array<Category>;
  }

  interface TokenResponse extends BaseResponse {
    access_token: string;
    item_id: string;
  }

  interface TransactionsResponse extends BaseResponse {
    accounts: Array<Account>;
    total_transactions: number;
    transactions: Array<Transaction>;
    item: Item;
  }

  // omitting extending the BaseResponse since there isn't a single request_id
  interface TransactionsAllResponse {
    accounts: Array<Account>;
    item: Item;
    total_transactions: number;
    transactions: Array<Transaction>;
  }

  interface AssetReportCreateResponse extends BaseResponse {
    asset_report_id: string;
    asset_report_token: string;
  }

  type AssetReportFilterResponse = AssetReportCreateResponse;
  type AssetReportRefreshResponse = AssetReportCreateResponse;

  interface AssetReportGetResponse extends BaseResponse {
    report: AssetReport;
    warnings: Array<Warning>;
  }

  interface AssetReportGetPdfResponse extends BaseResponse {
    buffer: Buffer;
  }

  interface AuditCopyCreateResponse extends BaseResponse {
    audit_copy_token: string;
  }

  type AuditCopyGetResponse = AssetReportGetResponse;

  interface AuditCopyRemoveResponse extends BaseResponse {
    removed: boolean;
  }

  interface AssetReportRemoveResponse extends BaseResponse {
    removed: boolean;
  }

  interface PaymentRecipientCreateResponse extends BaseResponse {
    recipient_id: string;
  }

  interface PaymentRecipientGetResponse extends BaseResponse {
    recipient_id: string;
    name: string;
    iban: string;
    address: PaymentRecipientAddress;
  }

  interface PaymentRecipientListResponse extends BaseResponse {
    recipients: Array<PaymentRecipient>;
  }

  interface PaymentCreateResponse extends BaseResponse {
    payment_id: string;
    status: string;
  }

  interface PaymentTokenCreateResponse extends BaseResponse {
    payment_token: string;
    payment_token_expiration_time: Iso8601DateTimeString;
  }

  interface PaymentGetResponse extends BaseResponse {
    payment_id: string;
    payment_token: string;
    reference: string;
    amount: PaymentAmount;
    status: string;
    last_status_update: Iso8601DateTimeString;
    payment_token_expiration_time: Iso8601DateTimeString | null;
    recipient_id: string;
  }

  interface DepositSwitchGetResponse extends BaseResponse {
    deposit_switch_id: string;
    target_item_id: string;
    target_account_id: string;
    state: string;
    date_created: string;
    is_allocated_remainder: boolean;
    account_has_multiple_allocations: boolean;
    percent_allocated: number;
    amount_allocated: number;
    date_completed: string;
  }

  interface DepositSwitchCreateResponse extends BaseResponse {
    deposit_switch_id: string;
  }

  interface DepositSwitchTokenCreateResponse extends BaseResponse {
    deposit_switch_token: string;
    deposit_switch_token_expiration_time: string;
  }

  interface SandboxPublicTokenCreateResponse extends BaseResponse {
    public_token: string;
  }

  interface SandboxItemFireWebhookResponse extends BaseResponse {
    webhook_fired: boolean;
  }

  interface WebhookVerificationKeyResponse extends BaseResponse {
    key: {
      alg: string;
      created_at: number;
      crv: string;
      expired_at: null | number;
      kid: string;
      kty: string;
      use: string;
      x: string;
      y: string;
    }
  }

  interface ClientOptions extends CoreOptions {
    version?: '2019-05-29' | '2018-05-22' | '2017-03-08';
  }

  class Client {
    constructor(
      clientId: string,
      secret: string,
      publicKey: string,
      env: string,
      options?: ClientOptions,
    );

    exchangePublicToken(publicToken: string): Promise<TokenResponse>;
    exchangePublicToken(
      publicToken: string,
      cb: Callback<TokenResponse>,
    ): void;

    createPublicToken: AccessTokenFn<CreatePublicTokenResponse>;

    createProcessorToken(
      accessToken: string,
      accountId: string,
      processor: string,
      cb: Callback<CreateProcessorTokenResponse>,
    ): void;
    createProcessorToken(
      accessToken: string,
      accountId: string,
      processor: string,
    ): Promise<CreateProcessorTokenResponse>;

    createStripeToken(
      accessToken: string,
      accountId: string,
      cb: Callback<CreateStripeTokenResponse>,
    ): void;
    createStripeToken(
      accessToken: string,
      accountId: string,
    ): Promise<CreateStripeTokenResponse>;

    invalidateAccessToken: AccessTokenFn<RotateAccessTokenResponse>;

    updateAccessTokenVersion(
      legacyAccessToken: string,
    ): Promise<TokenResponse>;
    updateAccessTokenVersion(
      legacyAccessToken: string,
      cb: Callback<TokenResponse>,
    ): void;

    deleteItem: AccessTokenFn<ItemDeleteResponse>;

    removeItem: AccessTokenFn<ItemRemoveResponse>;

    getItem: AccessTokenFn<ItemResponse>;

    importItem(
      products: Array<string>,
      userAuth: Map<string,string>,
      options?: WebhookOptions,
    ): Promise<ItemImportResponse>;
    importItem(
      products: Array<string>,
      userAuth: Map<string,string>,
      cb: Callback<ItemImportResponse>,
    ): void;
    importItem(
      products: Array<string>,
      userAuth: Map<string, string>,
      options: WebhookOptions,
      cb: Callback<ItemImportResponse>,
    ): void;

    updateItemWebhook(
      accessToken: string,
      webhook: string,
    ): Promise<ItemResponse>;
    updateItemWebhook(
      accessToken: string,
      webhook: string,
      cb: Callback<ItemResponse>,
    ): void;

    getAccounts(
      accessToken: string,
      options?: ItemRequestOptions,
    ): Promise<AccountsResponse>;
    getAccounts(accessToken: string, cb: Callback<AccountsResponse>): void;
    getAccounts(
      accessToken: string,
      options: ItemRequestOptions,
      cb: Callback<AccountsResponse>,
    ): void;

    getBalance(
      accessToken: string,
      options?: ItemRequestOptions,
    ): Promise<AccountsResponse>;
    getBalance(accessToken: string, cb: Callback<AccountsResponse>): void;
    getBalance(
      accessToken: string,
      options: ItemRequestOptions,
      cb: Callback<AccountsResponse>,
    ): void;

    getAuth(
      accessToken: string,
      options?: ItemRequestOptions,
    ): Promise<AuthResponse>;
    getAuth(accessToken: string, cb: Callback<AuthResponse>): void;
    getAuth(
      accessToken: string,
      options: ItemRequestOptions,
      cb: Callback<AuthResponse>,
    ): void;

    getLiabilities(
      accessToken: string,
      options?: ItemRequestOptions,
    ): Promise<LiabilitiesResponse>;
    getLiabilities(
      accessToken: string,
      cb: Callback<LiabilitiesResponse>,
    ): void;
    getLiabilities(
      accessToken: string,
      options: ItemRequestOptions,
      cb: Callback<LiabilitiesResponse>,
    ): void;

    // getIdentity(String, Function)
    getIdentity: AccessTokenFn<IdentityResponse>;
    // getIncome(String, Function)
    getIncome: AccessTokenFn<IncomeResponse>;
    // getCreditDetails(String, Function)
    getCreditDetails: AccessTokenFn<CreditDetailsResponse>;
    // getHoldings(String, Function)
    getHoldings: AccessTokenFn<HoldingsResponse>;
    // getInvestmentTransactions(String, Date, Date, Function)
    getInvestmentTransactions(
      accessToken: string,
      startDate: Iso8601DateString,
      endDate: Iso8601DateString,
      options?: InvestmentTransactionsRequestOptions,
    ): Promise<InvestmentTransactionsResponse>;
    // createAssetReport([String], Number, Object, Function)
    createAssetReport(
      access_tokens: Array<string>,
      days_requested: number,
      options: AssetReportCreateOptions,
      cb: Callback<AssetReportCreateResponse>,
    ): void;

    createAssetReport(
      access_tokens: Array<string>,
      days_requested: number,
      options: AssetReportCreateOptions,
    ): Promise<AssetReportCreateResponse>;

    // filterAssetReport(String, [String], Function)
    filterAssetReport(
      asset_report_token: string,
      account_ids_to_exclude: Array<string>,
      cb: Callback<AssetReportFilterResponse>,
    ): void;

    filterAssetReport(
      asset_report_token: string,
      account_ids_to_exclude: Array<string>,
    ): Promise<AssetReportFilterResponse>;

    // refreshAssetReport(String, Number, Object, Function)
    refreshAssetReport(
      asset_report_token: string,
      days_requested: number,
      options: AssetReportRefreshOptions,
      cb: Callback<AssetReportRefreshResponse>,
    ): void;

    refreshAssetReport(
      asset_report_token: string,
      days_requested: number,
      options?: AssetReportRefreshOptions,
    ): Promise<AssetReportRefreshResponse>;

    // getAssetReport(String, Boolean, Function)
    getAssetReport(
      asset_report_token: string,
      include_insights: boolean,
      cb: Callback<AssetReportGetResponse>,
    ): void;

    getAssetReport(
      asset_report_token: string,
      include_insights: boolean,
    ): Promise<AssetReportGetResponse>;

    // getAssetReportPdf(String, Function)
    getAssetReportPdf(
      asset_report_token: string,
      cb: Callback<AssetReportGetPdfResponse>,
    ): void;

    getAssetReportPdf(
      asset_report_token: string,
    ): Promise<AssetReportGetPdfResponse>;

    // createAuditCopy(String, String, Function)
    createAuditCopy(
      asset_report_token: string,
      auditor_id: string,
      cb: Callback<AuditCopyCreateResponse>,
    ): void;

    createAuditCopy(
      asset_report_token: string,
      auditor_id: string,
    ): Promise<AuditCopyCreateResponse>;

    // getAuditCopy(String, Function)
    getAuditCopy(
      audit_copy_token: string,
      cb: Callback<AuditCopyGetResponse>,
    ): void;

    getAuditCopy(audit_copy_token: string): Promise<AuditCopyGetResponse>;

    // removeAuditCopy(String, Function)
    removeAuditCopy(
      audit_copy_token: string,
      cb: Callback<AuditCopyRemoveResponse>,
    ): void;

    removeAuditCopy(
      audit_copy_token: string,
    ): Promise<AuditCopyRemoveResponse>;

    // removeAssetReport(String, Function)
    removeAssetReport(
      asset_report_token: string,
      cb: Callback<AssetReportRemoveResponse>,
    ): void;

    removeAssetReport(
      asset_report_token: string,
    ): Promise<AssetReportRemoveResponse>;

    createPaymentRecipient(
      name: string,
      iban: string,
      address: PaymentRecipientAddress,
      cb: Callback<PaymentRecipientCreateResponse>,
    ): void;

    createPaymentRecipient(
      name: string,
      iban: string,
      address: PaymentRecipientAddress,
    ): Promise<PaymentRecipientCreateResponse>;

    getPaymentRecipient(
      recipient_id: string,
      cb: Callback<PaymentRecipientGetResponse>,
    ): void;

    getPaymentRecipient(
      recipient_id: string,
    ): Promise<PaymentRecipientGetResponse>;

    listPaymentRecipients(cb: Callback<PaymentRecipientListResponse>): void;

    listPaymentRecipients(): Promise<PaymentRecipientListResponse>;

    createPayment(
      recipient_id: string,
      reference: string,
      amount: PaymentAmount,
      cb: Callback<PaymentCreateResponse>,
    ): void;

    createPayment(
      recipient_id: string,
      reference: string,
      amount: PaymentAmount,
    ): Promise<PaymentCreateResponse>;

    createPaymentToken(
      payment_id: string,
      cb: Callback<PaymentTokenCreateResponse>,
    ): void;

    createPaymentToken(
      payment_id: string,
    ): Promise<PaymentTokenCreateResponse>;

    getPayment(payment_id: string, cb: Callback<PaymentGetResponse>): void;

    getPayment(payment_id: string): Promise<PaymentGetResponse>;

    // getTransactions(String, Date, Date, Object?, Function)
    getTransactions(
      accessToken: string,
      startDate: Iso8601DateString,
      endDate: Iso8601DateString,
      options?: TransactionsRequestOptions,
    ): Promise<TransactionsResponse>;
    getTransactions(
      accessToken: string,
      startDate: Iso8601DateString,
      endDate: Iso8601DateString,
      cb: Callback<TransactionsResponse>,
    ): void;
    getTransactions(
      accessToken: string,
      startDate: Iso8601DateString,
      endDate: Iso8601DateString,
      options: TransactionsRequestOptions,
      cb: Callback<TransactionsResponse>,
    ): void;

    // getAllTransactions(String, Date, Date, Object?, Function)
    getAllTransactions(
      accessToken: string,
      startDate: Iso8601DateString,
      endDate: Iso8601DateString,
      options?: GetAllTransactionsRequestOptions,
    ): Promise<TransactionsAllResponse>;
    getAllTransactions(
      accessToken: string,
      startDate: Iso8601DateString,
      endDate: Iso8601DateString,
      cb: Callback<TransactionsAllResponse>,
    ): void;
    getAllTransactions(
      accessToken: string,
      startDate: Iso8601DateString,
      endDate: Iso8601DateString,
      options: GetAllTransactionsRequestOptions,
      cb: Callback<TransactionsAllResponse>,
    ): void;

    // getDepositSwitch(String, Object?, Function)
    getDepositSwitch(
      depositSwitchId: string,
      options?: Object,
    ): Promise<DepositSwitchGetResponse>;
    getDepositSwitch(
      depositSwitchId: string,
      cb: Callback<DepositSwitchGetResponse>,
    ): void;
    getDepositSwitch(
      depositSwitchId: string,
      options: Object,
      cb: Callback<DepositSwitchGetResponse>,
    ): void;

    // createDepositSwitch(String, String, Object?, Function)
    createDepositSwitch(
      targetAccountId: string,
      targetAccessToken: string,
      options?: Object,
    ): Promise<DepositSwitchCreateResponse>;
    createDepositSwitch(
      targetAccountId: string,
      targetAccessToken: string,
      cb: Callback<DepositSwitchCreateResponse>,
    ): void;
    createDepositSwitch(
      targetAccountId: string,
      targetAccessToken: string,
      options: Object,
      cb: Callback<DepositSwitchCreateResponse>,
    ): void;

    // createDepositSwitchToken(String, Object?, Function)
    createDepositSwitchToken(
      depositSwitchId: string,
      options?: Object,
    ): Promise<DepositSwitchTokenCreateResponse>;
    createDepositSwitchToken(
      depositSwitchId: string,
      cb: Callback<DepositSwitchTokenCreateResponse>,
    ): void;
    createDepositSwitchToken(
      depositSwitchId: string,
      options: Object,
      cb: Callback<DepositSwitchTokenCreateResponse>,
    ): void;

    getInstitutions(
      count: number,
      offset: number,
    ): Promise<GetInstitutionsResponse<Institution>>;
    getInstitutions(
      count: number,
      offset: number,
      cb: Callback<GetInstitutionsResponse<Institution>>,
    ): void;

    getInstitutionById<T extends Institution>(
      institutionId: string,
      options?: Object,
    ): Promise<GetInstitutionByIdResponse<T>>;
    getInstitutionById(
      institutionId: string,
      cb: Callback<GetInstitutionByIdResponse<Institution>>,
    ): void;
    getInstitutionById(
      institutionId: string,
      options: Object,
      cb: Callback<GetInstitutionByIdResponse<Institution>>,
    ): void;

    searchInstitutionsByName(
      query: string,
      products: Array<string>,
      options: Object,
    ): Promise<GetInstitutionsResponse<Institution>>;
    searchInstitutionsByName(
      query: string,
      products: Array<string>,
      options: Object,
      cb: Callback<GetInstitutionsResponse<Institution>>,
    ): void;

    getCategories(): Promise<CategoriesResponse>;
    getCategories(cb: Callback<CategoriesResponse>): void;

    resetLogin: AccessTokenFn<ResetLoginResponse>;

    // sandboxPublicTokenCreate(String, Array<String>, Object, Function)
    sandboxPublicTokenCreate(
      institutionId: string,
      initialProducts: Array<string>,
      options: Object,
      cb: Callback<SandboxPublicTokenCreateResponse>,
    ): void;

    // sandboxPublicTokenCreate(String, Array<String>, Object)
    sandboxPublicTokenCreate(
      institutionId: string,
      initialProducts: Array<string>,
      options?: Object,
    ): Promise<SandboxPublicTokenCreateResponse>;

    // sandboxItemFireWebhook(String, String, Function)
    sandboxItemFireWebhook(
      access_token: string,
      webhook_code: string,
      cb: Callback<SandboxItemFireWebhookResponse>,
    ): void;

    // sandboxItemFireWebhook(String, String)
    sandboxItemFireWebhook(
      access_token: string,
      webhook_code: string,
    ): Promise<SandboxItemFireWebhookResponse>;

    // getWebhookVerificationKey(String, String)
    getWebhookVerificationKey(
      key_id: string,
      cb: Callback<WebhookVerificationKeyResponse>,
    ): Promise<WebhookVerificationKeyResponse>;

  }

  interface PlaidEnvironments {
    production: 'https://production.plaid.com';
    sandbox: 'https://sandbox.plaid.com';
    development: 'https://development.plaid.com';
    [env: string]: string;
  }
  const environments: PlaidEnvironments;
}
