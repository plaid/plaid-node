/// <reference types="node" />
import * as axios from 'axios';
import { AccountsGetResponse, Amount, AssetReportAuditCopyCreateResponse, AssetReportAuditCopyRemoveResponse, AssetReportCreateRequestOptions, AssetReportCreateResponse, AssetReportFilterResponse, AssetReportGetResponse, AssetReportRefreshRequestOptions, AssetReportRefreshResponse, AssetReportRemoveResponse, AuthGetRequestOptions, AuthGetResponse, BalanceGetRequestOptions, BalanceGetResponse, CategoriesGetResponse, CountryCode, DepositSwitchCreateResponse, DepositSwitchGetResponse, DepositSwitchTokenCreateResponse, IdentityGetResponse, InstitutionSearchRequestOptions, InstitutionSearchResponse, InstitutionsGetByIdRequestOptions, InstitutionsGetByIdResponse, InstitutionsGetRequestOptions, InstitutionsGetResponse, InvestmentsHoldingsGetRequest, InvestmentsHoldingsGetRequestOptions, InvestmentsTransactionsGetRequestOptions, InvestmentsTransactionsGetResponse, ItemAccessTokenInvalidateResponse, ItemGetResponse, ItemImportRequestOptions, ItemImportRequestUserAuth, ItemImportResponse, ItemPublicTokenExchangeResponse, ItemRemoveResponse, ItemWebhookUpdateResponse, LiabilitiesGetRequestOptions, LiabilitiesGetResponse, LinkTokenCreateRequest, LinkTokenCreateResponse, LinkTokenGetResponse, PaymentInitiationAddress, PaymentInitiationPaymentCreateRequestSchedule, PaymentInitiationPaymentCreateResponse, PaymentInitiationPaymentListResponse, PaymentInitiationRecipientCreateRequestBacs, PaymentInitiationRecipientCreateResponse, PaymentInitiationRecipientGetResponse, PaymentIntiationPaymentGetResponse, PlaidApi, ProcessorAuthGetResponse, ProcessorBalanceGetResponse, ProcessorIdentityGetResponse, ProcessorStripeBankAccountTokenCreateResponse, ProcessorTokenCreateResponse, SandboxItemFireWebhookRequestWebhookCodeEnum, SandboxItemFireWebhookResponse, SandboxItemResetLoginResponse, SandboxItemSetVerificationStatusResponse, SandboxPublicTokenCreateRequestOptions, SandboxPublicTokenCreateResponse, TransactionsGetRequestOptions, TransactionsGetResponse, TransactionsRefreshResponse, WebhookVerificationKeyGetResponse } from '../../build/plaid-node/generated-code';
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
declare type Callback<T extends Object> = (err: Error | null, response: T | null) => void;
declare const environments: PlaidEnvironments;
declare class Client {
    client_id: string;
    secret: string;
    env: PlaidEnvironments;
    client_request_opts: Object;
    openAPIClient: PlaidApi;
    constructor(config: Config);
    createAssetReport(access_tokens: Array<string>, days_requested: number, options?: AssetReportCreateRequestOptions, cb?: Callback<AssetReportCreateResponse>): Promise<AssetReportCreateResponse>;
    createAuditCopy(asset_report_token: string, auditor_id: string, cb?: Callback<AssetReportAuditCopyCreateResponse>): Promise<AssetReportAuditCopyCreateResponse>;
    createDepositSwitch(target_account_id: string, target_access_token: string, cb?: Callback<DepositSwitchCreateResponse>): Promise<DepositSwitchCreateResponse>;
    createDepositSwitchToken(deposit_switch_id: string, cb?: Callback<DepositSwitchTokenCreateResponse>): Promise<DepositSwitchTokenCreateResponse>;
    createLinkToken(options: LinkTokenCreateRequest, cb?: Callback<LinkTokenCreateResponse>): Promise<LinkTokenCreateResponse>;
    createPayment(recipient_id: string, reference: string, amount: Amount, schedule?: PaymentInitiationPaymentCreateRequestSchedule, cb?: Callback<PaymentInitiationPaymentCreateResponse>): Promise<PaymentInitiationPaymentCreateResponse>;
    createPaymentRecipient(name: string, iban?: string, address?: PaymentInitiationAddress, bacs?: PaymentInitiationRecipientCreateRequestBacs, cb?: Callback<PaymentInitiationRecipientCreateResponse>): Promise<PaymentInitiationRecipientCreateResponse>;
    createProcessorToken(access_token: string, account_id: string, processor: string, cb?: Callback<ProcessorTokenCreateResponse>): Promise<ProcessorTokenCreateResponse>;
    createStripeToken(access_token: string, account_id: string, cb?: Callback<ProcessorStripeBankAccountTokenCreateResponse>): Promise<ProcessorStripeBankAccountTokenCreateResponse>;
    exchangePublicToken(public_token: string, cb?: Callback<ItemPublicTokenExchangeResponse>): Promise<ItemPublicTokenExchangeResponse>;
    filterAssetReport(asset_report_token: string, account_ids_to_exclude: Array<string>, cb?: Callback<AssetReportFilterResponse>): Promise<AssetReportFilterResponse>;
    getAccounts(access_token: string, cb?: Callback<AccountsGetResponse>): Promise<AccountsGetResponse>;
    getAssetReport(asset_report_token: string, include_insights?: boolean, cb?: Callback<AssetReportGetResponse>): Promise<AssetReportGetResponse>;
    getAssetReportPdf(asset_report_token: string, cb?: Callback<Buffer>): Promise<Buffer>;
    getAuditCopy(audit_copy_token: string, cb?: Callback<AssetReportGetResponse>): Promise<AssetReportGetResponse>;
    getAuth(access_token: string, options?: AuthGetRequestOptions, cb?: Callback<AuthGetResponse>): Promise<AuthGetResponse>;
    getBalance(access_token: string, options?: BalanceGetRequestOptions, cb?: Callback<BalanceGetResponse>): Promise<BalanceGetResponse>;
    getCategories(cb?: Callback<CategoriesGetResponse>): Promise<CategoriesGetResponse>;
    getDepositSwitch(deposit_switch_id: string, cb?: Callback<DepositSwitchGetResponse>): Promise<DepositSwitchGetResponse>;
    getHoldings(access_token: string, options?: InvestmentsHoldingsGetRequestOptions, cb?: Callback<InvestmentsHoldingsGetRequest>): Promise<InvestmentsHoldingsGetRequest>;
    getIdentity(access_token: string, cb?: Callback<IdentityGetResponse>): Promise<IdentityGetResponse>;
    getInstitutionById(institution_id: string, country_codes: Array<CountryCode>, options?: InstitutionsGetByIdRequestOptions, cb?: Callback<InstitutionsGetByIdResponse>): Promise<InstitutionsGetByIdResponse>;
    getInstitutions(count: number, offset: number, country_codes: Array<CountryCode>, options?: InstitutionsGetRequestOptions, cb?: Callback<InstitutionsGetResponse>): Promise<InstitutionsGetResponse>;
    getInvestmentTransactions(access_token: string, start_date: string, end_date: string, options?: InvestmentsTransactionsGetRequestOptions, cb?: Callback<InvestmentsTransactionsGetResponse>): Promise<InvestmentsTransactionsGetResponse>;
    getItem(access_token: string, cb?: Callback<ItemGetResponse>): Promise<ItemGetResponse>;
    getLiabilities(access_token: string, options?: LiabilitiesGetRequestOptions, cb?: Callback<LiabilitiesGetResponse>): Promise<LiabilitiesGetResponse>;
    getLinkToken(link_token: string, cb?: Callback<LinkTokenGetResponse>): Promise<LinkTokenGetResponse>;
    getPayment(payment_id: string, cb?: Callback<PaymentIntiationPaymentGetResponse>): Promise<PaymentIntiationPaymentGetResponse>;
    getPaymentRecipient(recipient_id: string, cb?: Callback<PaymentInitiationRecipientGetResponse>): Promise<PaymentInitiationRecipientGetResponse>;
    getTransactions(access_token: string, start_date: string, end_date: string, options?: TransactionsGetRequestOptions, cb?: Callback<TransactionsGetResponse>): Promise<TransactionsGetResponse>;
    getWebhookVerificationKey(key_id: string, cb?: Callback<WebhookVerificationKeyGetResponse>): Promise<WebhookVerificationKeyGetResponse>;
    importItem(products: Array<string>, user_auth: ItemImportRequestUserAuth, options?: ItemImportRequestOptions, cb?: Callback<ItemImportResponse>): Promise<ItemImportResponse>;
    invalidateAccessToken(access_token: string, cb?: Callback<ItemAccessTokenInvalidateResponse>): Promise<ItemAccessTokenInvalidateResponse>;
    listPaymentRecipients(cb?: Callback<PaymentInitiationPaymentListResponse>): Promise<PaymentInitiationPaymentListResponse>;
    listPayments(options?: {
        count: number;
        cursor: string;
    }, cb?: Callback<PaymentInitiationPaymentListResponse>): Promise<PaymentInitiationPaymentListResponse>;
    getAuthProcessor(processor_token: string, cb?: Callback<ProcessorAuthGetResponse>): Promise<ProcessorAuthGetResponse>;
    getBalanceProcessor(processor_token: string, cb?: Callback<ProcessorBalanceGetResponse>): Promise<ProcessorBalanceGetResponse>;
    getIdentityProcessor(processor_token: string, cb?: Callback<ProcessorIdentityGetResponse>): Promise<ProcessorIdentityGetResponse>;
    refreshAssetReport(asset_report_token: string, days_requested?: number, options?: AssetReportRefreshRequestOptions, cb?: Callback<AssetReportRefreshResponse>): Promise<AssetReportRefreshResponse>;
    refreshTransactions(access_token: string, cb?: Callback<TransactionsRefreshResponse>): Promise<TransactionsRefreshResponse>;
    removeAssetReport(asset_report_token: string, cb?: Callback<AssetReportRemoveResponse>): Promise<AssetReportRemoveResponse>;
    removeAuditCopy(audit_copy_token: string, cb?: Callback<AssetReportAuditCopyRemoveResponse>): Promise<AssetReportAuditCopyRemoveResponse>;
    removeItem(access_token: string, cb?: Callback<ItemRemoveResponse>): Promise<ItemRemoveResponse>;
    resetLogin(access_token: string, cb?: Callback<SandboxItemResetLoginResponse>): Promise<SandboxItemResetLoginResponse>;
    sandboxPublicTokenCreate(institution_id: string, initial_products: Array<string>, options: SandboxPublicTokenCreateRequestOptions, cb?: Callback<SandboxPublicTokenCreateResponse>): Promise<SandboxPublicTokenCreateResponse>;
    sandboxItemFireWebhook(access_token: string, webhook_code: SandboxItemFireWebhookRequestWebhookCodeEnum, cb?: Callback<SandboxItemFireWebhookResponse>): Promise<SandboxItemFireWebhookResponse>;
    sandboxItemSetVerificationStatus(access_token: string, account_id: string, verification_status: string, cb?: Callback<SandboxItemSetVerificationStatusResponse>): Promise<SandboxItemSetVerificationStatusResponse>;
    searchInstitutionsByName(query: string, products: Array<string>, options?: InstitutionSearchRequestOptions, cb?: Callback<InstitutionSearchResponse>): Promise<InstitutionSearchResponse>;
    updateItemWebhook(access_token: string, webhook: string, cb?: Callback<ItemWebhookUpdateResponse>): Promise<ItemWebhookUpdateResponse>;
}
declare class PlaidError extends Error {
    constructor(body: any);
}
declare const plaidRequest: (caller: Promise<axios.AxiosResponse>, cb?: Callback<any> | undefined) => any;
export { Client, environments, PlaidError, plaidRequest };
