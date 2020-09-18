/// <reference types="node" />
import http from 'http';
import { AccountsGetRequest } from '../model/accountsGetRequest';
import { AccountsGetResponse } from '../model/accountsGetResponse';
import { AssetReportAuditCopyCreateRequest } from '../model/assetReportAuditCopyCreateRequest';
import { AssetReportAuditCopyCreateResponse } from '../model/assetReportAuditCopyCreateResponse';
import { AssetReportAuditCopyGetRequest } from '../model/assetReportAuditCopyGetRequest';
import { AssetReportAuditCopyRemoveRequest } from '../model/assetReportAuditCopyRemoveRequest';
import { AssetReportAuditCopyRemoveResponse } from '../model/assetReportAuditCopyRemoveResponse';
import { AssetReportCreateRequest } from '../model/assetReportCreateRequest';
import { AssetReportCreateResponse } from '../model/assetReportCreateResponse';
import { AssetReportFilterRequest } from '../model/assetReportFilterRequest';
import { AssetReportFilterResponse } from '../model/assetReportFilterResponse';
import { AssetReportGetRequest } from '../model/assetReportGetRequest';
import { AssetReportGetResponse } from '../model/assetReportGetResponse';
import { AssetReportPDFGetRequest } from '../model/assetReportPDFGetRequest';
import { AssetReportRefreshRequest } from '../model/assetReportRefreshRequest';
import { AssetReportRefreshResponse } from '../model/assetReportRefreshResponse';
import { AssetReportRemoveRequest } from '../model/assetReportRemoveRequest';
import { AssetReportRemoveResponse } from '../model/assetReportRemoveResponse';
import { AuthGetRequest } from '../model/authGetRequest';
import { AuthGetResponse } from '../model/authGetResponse';
import { BalanceGetRequest } from '../model/balanceGetRequest';
import { BalanceGetResponse } from '../model/balanceGetResponse';
import { CategoriesGetResponse } from '../model/categoriesGetResponse';
import { DepositSwitchCreateRequest } from '../model/depositSwitchCreateRequest';
import { DepositSwitchCreateResponse } from '../model/depositSwitchCreateResponse';
import { DepositSwitchGetRequest } from '../model/depositSwitchGetRequest';
import { DepositSwitchGetResponse } from '../model/depositSwitchGetResponse';
import { DepositSwitchTokenCreateRequest } from '../model/depositSwitchTokenCreateRequest';
import { DepositSwitchTokenCreateResponse } from '../model/depositSwitchTokenCreateResponse';
import { IdentityGetRequest } from '../model/identityGetRequest';
import { IdentityGetResponse } from '../model/identityGetResponse';
import { InstitutionSearchRequest } from '../model/institutionSearchRequest';
import { InstitutionSearchResponse } from '../model/institutionSearchResponse';
import { InstitutionsGetByIdRequest } from '../model/institutionsGetByIdRequest';
import { InstitutionsGetByIdResponse } from '../model/institutionsGetByIdResponse';
import { InstitutionsGetRequest } from '../model/institutionsGetRequest';
import { InstitutionsGetResponse } from '../model/institutionsGetResponse';
import { InvestmentsHoldingsGetRequest } from '../model/investmentsHoldingsGetRequest';
import { InvestmentsHoldingsGetResponse } from '../model/investmentsHoldingsGetResponse';
import { InvestmentsTransactionsGetRequest } from '../model/investmentsTransactionsGetRequest';
import { InvestmentsTransactionsGetResponse } from '../model/investmentsTransactionsGetResponse';
import { ItemAccessTokenInvalidateRequest } from '../model/itemAccessTokenInvalidateRequest';
import { ItemAccessTokenInvalidateResponse } from '../model/itemAccessTokenInvalidateResponse';
import { ItemGetRequest } from '../model/itemGetRequest';
import { ItemGetResponse } from '../model/itemGetResponse';
import { ItemImportRequest } from '../model/itemImportRequest';
import { ItemImportResponse } from '../model/itemImportResponse';
import { ItemPublicTokenExchangeRequest } from '../model/itemPublicTokenExchangeRequest';
import { ItemPublicTokenExchangeResponse } from '../model/itemPublicTokenExchangeResponse';
import { ItemRemoveRequest } from '../model/itemRemoveRequest';
import { ItemRemoveResponse } from '../model/itemRemoveResponse';
import { ItemWebhookUpdateRequest } from '../model/itemWebhookUpdateRequest';
import { ItemWebhookUpdateResponse } from '../model/itemWebhookUpdateResponse';
import { LiabilitiesGetRequest } from '../model/liabilitiesGetRequest';
import { LiabilitiesGetResponse } from '../model/liabilitiesGetResponse';
import { LinkTokenCreateRequest } from '../model/linkTokenCreateRequest';
import { LinkTokenCreateResponse } from '../model/linkTokenCreateResponse';
import { PaymentInitiationPaymentCreateRequest } from '../model/paymentInitiationPaymentCreateRequest';
import { PaymentInitiationPaymentCreateResponse } from '../model/paymentInitiationPaymentCreateResponse';
import { PaymentInitiationPaymentListRequest } from '../model/paymentInitiationPaymentListRequest';
import { PaymentInitiationPaymentListResponse } from '../model/paymentInitiationPaymentListResponse';
import { PaymentInitiationRecipientCreateRequest } from '../model/paymentInitiationRecipientCreateRequest';
import { PaymentInitiationRecipientCreateResponse } from '../model/paymentInitiationRecipientCreateResponse';
import { PaymentInitiationRecipientGetRequest } from '../model/paymentInitiationRecipientGetRequest';
import { PaymentInitiationRecipientGetResponse } from '../model/paymentInitiationRecipientGetResponse';
import { PaymentInitiationRecipientListRequest } from '../model/paymentInitiationRecipientListRequest';
import { PaymentInitiationRecipientListResponse } from '../model/paymentInitiationRecipientListResponse';
import { PaymentIntiationPaymentGetRequest } from '../model/paymentIntiationPaymentGetRequest';
import { PaymentIntiationPaymentGetResponse } from '../model/paymentIntiationPaymentGetResponse';
import { ProcessorApexProcessorTokenCreateRequest } from '../model/processorApexProcessorTokenCreateRequest';
import { ProcessorApexProcessorTokenCreateResponse } from '../model/processorApexProcessorTokenCreateResponse';
import { ProcessorAuthGetRequest } from '../model/processorAuthGetRequest';
import { ProcessorAuthGetResponse } from '../model/processorAuthGetResponse';
import { ProcessorBalanceGetRequest } from '../model/processorBalanceGetRequest';
import { ProcessorBalanceGetResponse } from '../model/processorBalanceGetResponse';
import { ProcessorIdentityGetRequest } from '../model/processorIdentityGetRequest';
import { ProcessorIdentityGetResponse } from '../model/processorIdentityGetResponse';
import { ProcessorStripeBankAccountTokenCreateRequest } from '../model/processorStripeBankAccountTokenCreateRequest';
import { ProcessorStripeBankAccountTokenCreateResponse } from '../model/processorStripeBankAccountTokenCreateResponse';
import { ProcessorTokenCreateRequest } from '../model/processorTokenCreateRequest';
import { ProcessorTokenCreateResponse } from '../model/processorTokenCreateResponse';
import { SandboxItemFireWebhookRequest } from '../model/sandboxItemFireWebhookRequest';
import { SandboxItemFireWebhookResponse } from '../model/sandboxItemFireWebhookResponse';
import { SandboxItemResetLoginRequest } from '../model/sandboxItemResetLoginRequest';
import { SandboxItemResetLoginResponse } from '../model/sandboxItemResetLoginResponse';
import { SandboxItemSetVerificationStatusRequest } from '../model/sandboxItemSetVerificationStatusRequest';
import { SandboxItemSetVerificationStatusResponse } from '../model/sandboxItemSetVerificationStatusResponse';
import { SandboxPublicTokenCreateRequest } from '../model/sandboxPublicTokenCreateRequest';
import { SandboxPublicTokenCreateResponse } from '../model/sandboxPublicTokenCreateResponse';
import { TransactionsGetRequest } from '../model/transactionsGetRequest';
import { TransactionsGetResponse } from '../model/transactionsGetResponse';
import { TransactionsRefreshRequest } from '../model/transactionsRefreshRequest';
import { TransactionsRefreshResponse } from '../model/transactionsRefreshResponse';
import { WebhookVerificationKeyGetRequest } from '../model/webhookVerificationKeyGetRequest';
import { WebhookVerificationKeyGetResponse } from '../model/webhookVerificationKeyGetResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum PlaidApiApiKeys {
}
export declare class PlaidApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    defaultHeaders: any;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PlaidApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    accountsGet(accountsGetRequest: AccountsGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AccountsGetResponse;
    }>;
    assetReportAuditCopyCreate(assetReportAuditCopyCreateRequest: AssetReportAuditCopyCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AssetReportAuditCopyCreateResponse;
    }>;
    assetReportAuditCopyGet(assetReportAuditCopyGetRequest: AssetReportAuditCopyGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AssetReportGetResponse;
    }>;
    assetReportAuditCopyRemove(assetReportAuditCopyRemoveRequest: AssetReportAuditCopyRemoveRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AssetReportAuditCopyRemoveResponse;
    }>;
    assetReportCreate(assetReportCreateRequest: AssetReportCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AssetReportCreateResponse;
    }>;
    assetReportFilter(assetReportFilterRequest: AssetReportFilterRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AssetReportFilterResponse;
    }>;
    assetReportGet(assetReportGetRequest: AssetReportGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AssetReportGetResponse;
    }>;
    assetReportPDFGet(assetReportPDFGetRequest: AssetReportPDFGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    assetReportRefresh(assetReportRefreshRequest: AssetReportRefreshRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AssetReportRefreshResponse;
    }>;
    assetReportRemove(assetReportRemoveRequest: AssetReportRemoveRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AssetReportRemoveResponse;
    }>;
    authGet(authGetRequest: AuthGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AuthGetResponse;
    }>;
    balanceGet(balanceGetRequest: BalanceGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BalanceGetResponse;
    }>;
    categoriesGet(body: object, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CategoriesGetResponse;
    }>;
    depositSwitchCreate(depositSwitchCreateRequest: DepositSwitchCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DepositSwitchCreateResponse;
    }>;
    depositSwitchGet(depositSwitchGetRequest?: DepositSwitchGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DepositSwitchGetResponse;
    }>;
    depositSwitchTokenCreate(depositSwitchTokenCreateRequest: DepositSwitchTokenCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DepositSwitchTokenCreateResponse;
    }>;
    identityGet(identityGetRequest: IdentityGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: IdentityGetResponse;
    }>;
    institutionsGet(institutionsGetRequest: InstitutionsGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InstitutionsGetResponse;
    }>;
    institutionsGetByID(institutionsGetByIdRequest: InstitutionsGetByIdRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InstitutionsGetByIdResponse;
    }>;
    institutionsSearch(institutionSearchRequest: InstitutionSearchRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InstitutionSearchResponse;
    }>;
    investmentsHoldingsGet(investmentsHoldingsGetRequest: InvestmentsHoldingsGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InvestmentsHoldingsGetResponse;
    }>;
    investmentsTransactionsGet(investmentsTransactionsGetRequest: InvestmentsTransactionsGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InvestmentsTransactionsGetResponse;
    }>;
    itemAccessTokenInvalidate(itemAccessTokenInvalidateRequest: ItemAccessTokenInvalidateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ItemAccessTokenInvalidateResponse;
    }>;
    itemGet(itemGetRequest: ItemGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ItemGetResponse;
    }>;
    itemImport(itemImportRequest: ItemImportRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ItemImportResponse;
    }>;
    itemPublicTokenExchange(itemPublicTokenExchangeRequest: ItemPublicTokenExchangeRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ItemPublicTokenExchangeResponse;
    }>;
    itemRemove(itemRemoveRequest: ItemRemoveRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ItemRemoveResponse;
    }>;
    itemWebhookUpdate(itemWebhookUpdateRequest: ItemWebhookUpdateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ItemWebhookUpdateResponse;
    }>;
    liabilitiesGet(liabilitiesGetRequest: LiabilitiesGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LiabilitiesGetResponse;
    }>;
    linkTokenCreate(linkTokenCreateRequest: LinkTokenCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkTokenCreateResponse;
    }>;
    paymentInitiationPaymentCreate(paymentInitiationPaymentCreateRequest: PaymentInitiationPaymentCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentInitiationPaymentCreateResponse;
    }>;
    paymentInitiationPaymentList(paymentInitiationPaymentListRequest: PaymentInitiationPaymentListRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentInitiationPaymentListResponse;
    }>;
    paymentInitiationRecipientCreate(paymentInitiationRecipientCreateRequest: PaymentInitiationRecipientCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentInitiationRecipientCreateResponse;
    }>;
    paymentInitiationRecipientGet(paymentInitiationRecipientGetRequest: PaymentInitiationRecipientGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentInitiationRecipientGetResponse;
    }>;
    paymentInitiationRecipientList(paymentInitiationRecipientListRequest: PaymentInitiationRecipientListRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentInitiationRecipientListResponse;
    }>;
    paymentIntiationPaymentGet(paymentIntiationPaymentGetRequest: PaymentIntiationPaymentGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentIntiationPaymentGetResponse;
    }>;
    processorApexProcessorTokenCreate(processorApexProcessorTokenCreateRequest: ProcessorApexProcessorTokenCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProcessorApexProcessorTokenCreateResponse;
    }>;
    processorAuthGet(processorAuthGetRequest: ProcessorAuthGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProcessorAuthGetResponse;
    }>;
    processorBalanceGet(processorBalanceGetRequest: ProcessorBalanceGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProcessorBalanceGetResponse;
    }>;
    processorIdentityGet(processorIdentityGetRequest: ProcessorIdentityGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProcessorIdentityGetResponse;
    }>;
    processorStripeBankAccountTokenCreate(processorStripeBankAccountTokenCreateRequest: ProcessorStripeBankAccountTokenCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProcessorStripeBankAccountTokenCreateResponse;
    }>;
    processorTokenCreate(processorTokenCreateRequest: ProcessorTokenCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProcessorTokenCreateResponse;
    }>;
    sandboxItemFireWebhook(sandboxItemFireWebhookRequest: SandboxItemFireWebhookRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SandboxItemFireWebhookResponse;
    }>;
    sandboxItemResetLogin(sandboxItemResetLoginRequest: SandboxItemResetLoginRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SandboxItemResetLoginResponse;
    }>;
    sandboxItemSetVerificationStatus(sandboxItemSetVerificationStatusRequest: SandboxItemSetVerificationStatusRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SandboxItemSetVerificationStatusResponse;
    }>;
    sandboxPublicTokenCreate(sandboxPublicTokenCreateRequest: SandboxPublicTokenCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SandboxPublicTokenCreateResponse;
    }>;
    transactionsGet(transactionsGetRequest: TransactionsGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TransactionsGetResponse;
    }>;
    transactionsRefresh(transactionsRefreshRequest: TransactionsRefreshRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TransactionsRefreshResponse;
    }>;
    webhookVerificationKeyGet(webhookVerificationKeyGetRequest: WebhookVerificationKeyGetRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WebhookVerificationKeyGetResponse;
    }>;
}
