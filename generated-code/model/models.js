"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./aPR"));
__export(require("./account"));
__export(require("./accountBalance"));
__export(require("./accountSubtype"));
__export(require("./accountType"));
__export(require("./accountsGetRequest"));
__export(require("./accountsGetResponse"));
__export(require("./address"));
__export(require("./addressData"));
__export(require("./amount"));
__export(require("./assetReport"));
__export(require("./assetReportAuditCopyCreateRequest"));
__export(require("./assetReportAuditCopyCreateResponse"));
__export(require("./assetReportAuditCopyGetRequest"));
__export(require("./assetReportAuditCopyRemoveRequest"));
__export(require("./assetReportAuditCopyRemoveResponse"));
__export(require("./assetReportCreateRequest"));
__export(require("./assetReportCreateRequestOptions"));
__export(require("./assetReportCreateResponse"));
__export(require("./assetReportFilterRequest"));
__export(require("./assetReportFilterResponse"));
__export(require("./assetReportGetRequest"));
__export(require("./assetReportGetResponse"));
__export(require("./assetReportItem"));
__export(require("./assetReportPDFGetRequest"));
__export(require("./assetReportRefreshRequest"));
__export(require("./assetReportRefreshRequestOptions"));
__export(require("./assetReportRefreshResponse"));
__export(require("./assetReportRemoveRequest"));
__export(require("./assetReportRemoveResponse"));
__export(require("./assetReportUser"));
__export(require("./assetsErrorWebhook"));
__export(require("./assetsProductReadyWebhook"));
__export(require("./authGetRequest"));
__export(require("./authGetRequestOptions"));
__export(require("./authGetResponse"));
__export(require("./authGetResponseNumbers"));
__export(require("./automaticallyVerifiedWebhook"));
__export(require("./balanceGetRequest"));
__export(require("./balanceGetRequestOptions"));
__export(require("./balanceGetResponse"));
__export(require("./categoriesGetResponse"));
__export(require("./category"));
__export(require("./cause"));
__export(require("./countryCode"));
__export(require("./creditCardLiability"));
__export(require("./defaultUpdateWebhook"));
__export(require("./depositSwitchCreateRequest"));
__export(require("./depositSwitchCreateResponse"));
__export(require("./depositSwitchGetRequest"));
__export(require("./depositSwitchGetResponse"));
__export(require("./depositSwitchTokenCreateRequest"));
__export(require("./depositSwitchTokenCreateResponse"));
__export(require("./email"));
__export(require("./historicalBalance"));
__export(require("./historicalUpdateWebhook"));
__export(require("./holding"));
__export(require("./holdingsDefaultUpdateWebhook"));
__export(require("./identityGetRequest"));
__export(require("./identityGetResponse"));
__export(require("./inflowModel"));
__export(require("./initialUpdateWebhook"));
__export(require("./institution"));
__export(require("./institutionSearchRequest"));
__export(require("./institutionSearchRequestOptions"));
__export(require("./institutionSearchResponse"));
__export(require("./institutionStatus"));
__export(require("./institutionsGetByIdRequest"));
__export(require("./institutionsGetByIdRequestOptions"));
__export(require("./institutionsGetByIdResponse"));
__export(require("./institutionsGetRequest"));
__export(require("./institutionsGetRequestOptions"));
__export(require("./institutionsGetResponse"));
__export(require("./investmentTransaction"));
__export(require("./investmentsDefaultUpdateWebhook"));
__export(require("./investmentsHoldingsGetRequest"));
__export(require("./investmentsHoldingsGetRequestOptions"));
__export(require("./investmentsHoldingsGetResponse"));
__export(require("./investmentsTransactionsGetRequest"));
__export(require("./investmentsTransactionsGetRequestOptions"));
__export(require("./investmentsTransactionsGetResponse"));
__export(require("./item"));
__export(require("./itemAccessTokenInvalidateRequest"));
__export(require("./itemAccessTokenInvalidateResponse"));
__export(require("./itemErrorWebhook"));
__export(require("./itemGetRequest"));
__export(require("./itemGetResponse"));
__export(require("./itemImportRequest"));
__export(require("./itemImportRequestOptions"));
__export(require("./itemImportRequestUserAuth"));
__export(require("./itemImportResponse"));
__export(require("./itemProductReadyWebhook"));
__export(require("./itemPublicTokenCreateRequest"));
__export(require("./itemPublicTokenCreateResponse"));
__export(require("./itemPublicTokenExchangeRequest"));
__export(require("./itemPublicTokenExchangeResponse"));
__export(require("./itemRemoveRequest"));
__export(require("./itemRemoveResponse"));
__export(require("./itemStatus"));
__export(require("./itemStatusInvestments"));
__export(require("./itemStatusLastWebhook"));
__export(require("./itemStatusTransactions"));
__export(require("./itemWebhookUpdateRequest"));
__export(require("./itemWebhookUpdateResponse"));
__export(require("./jWTHeader"));
__export(require("./liabilitiesGetRequest"));
__export(require("./liabilitiesGetRequestOptions"));
__export(require("./liabilitiesGetResponse"));
__export(require("./liabilitiesObject"));
__export(require("./liabilityOverride"));
__export(require("./linkTokenCreateRequest"));
__export(require("./linkTokenCreateRequestAccountFilters"));
__export(require("./linkTokenCreateRequestAccountFiltersCredit"));
__export(require("./linkTokenCreateRequestAccountFiltersDepository"));
__export(require("./linkTokenCreateRequestAccountFiltersInvestment"));
__export(require("./linkTokenCreateRequestAccountFiltersLoan"));
__export(require("./linkTokenCreateRequestPaymentInitiation"));
__export(require("./linkTokenCreateRequestUser"));
__export(require("./linkTokenCreateResponse"));
__export(require("./location"));
__export(require("./mFA"));
__export(require("./meta"));
__export(require("./modelError"));
__export(require("./numbers"));
__export(require("./numbersACH"));
__export(require("./numbersBACS"));
__export(require("./numbersEFT"));
__export(require("./numbersInternational"));
__export(require("./overrideAccounts"));
__export(require("./owner"));
__export(require("./ownerOverride"));
__export(require("./pSLFStatus"));
__export(require("./paymentAmount"));
__export(require("./paymentInitiationAddress"));
__export(require("./paymentInitiationPayment"));
__export(require("./paymentInitiationPaymentCreateRequest"));
__export(require("./paymentInitiationPaymentCreateRequestSchedule"));
__export(require("./paymentInitiationPaymentCreateResponse"));
__export(require("./paymentInitiationPaymentListRequest"));
__export(require("./paymentInitiationPaymentListResponse"));
__export(require("./paymentInitiationRecipient"));
__export(require("./paymentInitiationRecipientCreateRequest"));
__export(require("./paymentInitiationRecipientCreateRequestBacs"));
__export(require("./paymentInitiationRecipientCreateResponse"));
__export(require("./paymentInitiationRecipientGetRequest"));
__export(require("./paymentInitiationRecipientGetResponse"));
__export(require("./paymentInitiationRecipientGetResponseBacs"));
__export(require("./paymentInitiationRecipientListRequest"));
__export(require("./paymentInitiationRecipientListResponse"));
__export(require("./paymentIntiationPaymentGetRequest"));
__export(require("./paymentIntiationPaymentGetResponse"));
__export(require("./paymentMeta"));
__export(require("./paymentStatusUpdateWebhook"));
__export(require("./pendingExpirationWebhook"));
__export(require("./phoneNumber"));
__export(require("./processorApexProcessorTokenCreateRequest"));
__export(require("./processorApexProcessorTokenCreateResponse"));
__export(require("./processorAuthGetRequest"));
__export(require("./processorAuthGetResponse"));
__export(require("./processorAuthGetResponseNumbers"));
__export(require("./processorBalanceGetRequest"));
__export(require("./processorBalanceGetResponse"));
__export(require("./processorIdentityGetRequest"));
__export(require("./processorIdentityGetResponse"));
__export(require("./processorStripeBankAccountTokenCreateRequest"));
__export(require("./processorStripeBankAccountTokenCreateResponse"));
__export(require("./processorTokenCreateRequest"));
__export(require("./processorTokenCreateResponse"));
__export(require("./productStatus"));
__export(require("./productStatusBreakdown"));
__export(require("./recaptchaRequiredError"));
__export(require("./sandboxItemFireWebhookRequest"));
__export(require("./sandboxItemFireWebhookResponse"));
__export(require("./sandboxItemResetLoginRequest"));
__export(require("./sandboxItemResetLoginResponse"));
__export(require("./sandboxItemSetVerificationStatusRequest"));
__export(require("./sandboxItemSetVerificationStatusResponse"));
__export(require("./sandboxPublicTokenCreateRequest"));
__export(require("./sandboxPublicTokenCreateRequestOptions"));
__export(require("./sandboxPublicTokenCreateResponse"));
__export(require("./security"));
__export(require("./servicerAddressData"));
__export(require("./standaloneAccountType"));
__export(require("./standaloneCurrencyCodeList"));
__export(require("./standaloneInvestmentTransactionSubtype"));
__export(require("./standaloneInvestmentTransactionType"));
__export(require("./studentLoan"));
__export(require("./studentLoanRepaymentModel"));
__export(require("./studentLoanStatus"));
__export(require("./studentRepaymentPlan"));
__export(require("./transaction"));
__export(require("./transactionCode"));
__export(require("./transactionOverride"));
__export(require("./transactionsGetRequest"));
__export(require("./transactionsGetRequestOptions"));
__export(require("./transactionsGetResponse"));
__export(require("./transactionsRefreshRequest"));
__export(require("./transactionsRefreshResponse"));
__export(require("./transactionsRemovedWebhook"));
__export(require("./userCustomPassword"));
__export(require("./userPermissionRevokedWebhook"));
__export(require("./verificationExpiredWebhook"));
__export(require("./warning"));
__export(require("./webhookUpdateAcknowledgedWebhook"));
__export(require("./webhookVerificationKeyGetRequest"));
__export(require("./webhookVerificationKeyGetResponse"));
const aPR_1 = require("./aPR");
const account_1 = require("./account");
const accountBalance_1 = require("./accountBalance");
const accountSubtype_1 = require("./accountSubtype");
const accountType_1 = require("./accountType");
const accountsGetRequest_1 = require("./accountsGetRequest");
const accountsGetResponse_1 = require("./accountsGetResponse");
const address_1 = require("./address");
const addressData_1 = require("./addressData");
const amount_1 = require("./amount");
const assetReport_1 = require("./assetReport");
const assetReportAuditCopyCreateRequest_1 = require("./assetReportAuditCopyCreateRequest");
const assetReportAuditCopyCreateResponse_1 = require("./assetReportAuditCopyCreateResponse");
const assetReportAuditCopyGetRequest_1 = require("./assetReportAuditCopyGetRequest");
const assetReportAuditCopyRemoveRequest_1 = require("./assetReportAuditCopyRemoveRequest");
const assetReportAuditCopyRemoveResponse_1 = require("./assetReportAuditCopyRemoveResponse");
const assetReportCreateRequest_1 = require("./assetReportCreateRequest");
const assetReportCreateRequestOptions_1 = require("./assetReportCreateRequestOptions");
const assetReportCreateResponse_1 = require("./assetReportCreateResponse");
const assetReportFilterRequest_1 = require("./assetReportFilterRequest");
const assetReportFilterResponse_1 = require("./assetReportFilterResponse");
const assetReportGetRequest_1 = require("./assetReportGetRequest");
const assetReportGetResponse_1 = require("./assetReportGetResponse");
const assetReportItem_1 = require("./assetReportItem");
const assetReportPDFGetRequest_1 = require("./assetReportPDFGetRequest");
const assetReportRefreshRequest_1 = require("./assetReportRefreshRequest");
const assetReportRefreshRequestOptions_1 = require("./assetReportRefreshRequestOptions");
const assetReportRefreshResponse_1 = require("./assetReportRefreshResponse");
const assetReportRemoveRequest_1 = require("./assetReportRemoveRequest");
const assetReportRemoveResponse_1 = require("./assetReportRemoveResponse");
const assetReportUser_1 = require("./assetReportUser");
const assetsErrorWebhook_1 = require("./assetsErrorWebhook");
const assetsProductReadyWebhook_1 = require("./assetsProductReadyWebhook");
const authGetRequest_1 = require("./authGetRequest");
const authGetRequestOptions_1 = require("./authGetRequestOptions");
const authGetResponse_1 = require("./authGetResponse");
const authGetResponseNumbers_1 = require("./authGetResponseNumbers");
const automaticallyVerifiedWebhook_1 = require("./automaticallyVerifiedWebhook");
const balanceGetRequest_1 = require("./balanceGetRequest");
const balanceGetRequestOptions_1 = require("./balanceGetRequestOptions");
const balanceGetResponse_1 = require("./balanceGetResponse");
const categoriesGetResponse_1 = require("./categoriesGetResponse");
const category_1 = require("./category");
const cause_1 = require("./cause");
const countryCode_1 = require("./countryCode");
const creditCardLiability_1 = require("./creditCardLiability");
const defaultUpdateWebhook_1 = require("./defaultUpdateWebhook");
const depositSwitchCreateRequest_1 = require("./depositSwitchCreateRequest");
const depositSwitchCreateResponse_1 = require("./depositSwitchCreateResponse");
const depositSwitchGetRequest_1 = require("./depositSwitchGetRequest");
const depositSwitchGetResponse_1 = require("./depositSwitchGetResponse");
const depositSwitchTokenCreateRequest_1 = require("./depositSwitchTokenCreateRequest");
const depositSwitchTokenCreateResponse_1 = require("./depositSwitchTokenCreateResponse");
const email_1 = require("./email");
const historicalBalance_1 = require("./historicalBalance");
const historicalUpdateWebhook_1 = require("./historicalUpdateWebhook");
const holding_1 = require("./holding");
const holdingsDefaultUpdateWebhook_1 = require("./holdingsDefaultUpdateWebhook");
const identityGetRequest_1 = require("./identityGetRequest");
const identityGetResponse_1 = require("./identityGetResponse");
const inflowModel_1 = require("./inflowModel");
const initialUpdateWebhook_1 = require("./initialUpdateWebhook");
const institution_1 = require("./institution");
const institutionSearchRequest_1 = require("./institutionSearchRequest");
const institutionSearchRequestOptions_1 = require("./institutionSearchRequestOptions");
const institutionSearchResponse_1 = require("./institutionSearchResponse");
const institutionStatus_1 = require("./institutionStatus");
const institutionsGetByIdRequest_1 = require("./institutionsGetByIdRequest");
const institutionsGetByIdRequestOptions_1 = require("./institutionsGetByIdRequestOptions");
const institutionsGetByIdResponse_1 = require("./institutionsGetByIdResponse");
const institutionsGetRequest_1 = require("./institutionsGetRequest");
const institutionsGetRequestOptions_1 = require("./institutionsGetRequestOptions");
const institutionsGetResponse_1 = require("./institutionsGetResponse");
const investmentTransaction_1 = require("./investmentTransaction");
const investmentsDefaultUpdateWebhook_1 = require("./investmentsDefaultUpdateWebhook");
const investmentsHoldingsGetRequest_1 = require("./investmentsHoldingsGetRequest");
const investmentsHoldingsGetRequestOptions_1 = require("./investmentsHoldingsGetRequestOptions");
const investmentsHoldingsGetResponse_1 = require("./investmentsHoldingsGetResponse");
const investmentsTransactionsGetRequest_1 = require("./investmentsTransactionsGetRequest");
const investmentsTransactionsGetRequestOptions_1 = require("./investmentsTransactionsGetRequestOptions");
const investmentsTransactionsGetResponse_1 = require("./investmentsTransactionsGetResponse");
const item_1 = require("./item");
const itemAccessTokenInvalidateRequest_1 = require("./itemAccessTokenInvalidateRequest");
const itemAccessTokenInvalidateResponse_1 = require("./itemAccessTokenInvalidateResponse");
const itemErrorWebhook_1 = require("./itemErrorWebhook");
const itemGetRequest_1 = require("./itemGetRequest");
const itemGetResponse_1 = require("./itemGetResponse");
const itemImportRequest_1 = require("./itemImportRequest");
const itemImportRequestOptions_1 = require("./itemImportRequestOptions");
const itemImportRequestUserAuth_1 = require("./itemImportRequestUserAuth");
const itemImportResponse_1 = require("./itemImportResponse");
const itemProductReadyWebhook_1 = require("./itemProductReadyWebhook");
const itemPublicTokenCreateRequest_1 = require("./itemPublicTokenCreateRequest");
const itemPublicTokenCreateResponse_1 = require("./itemPublicTokenCreateResponse");
const itemPublicTokenExchangeRequest_1 = require("./itemPublicTokenExchangeRequest");
const itemPublicTokenExchangeResponse_1 = require("./itemPublicTokenExchangeResponse");
const itemRemoveRequest_1 = require("./itemRemoveRequest");
const itemRemoveResponse_1 = require("./itemRemoveResponse");
const itemStatus_1 = require("./itemStatus");
const itemStatusInvestments_1 = require("./itemStatusInvestments");
const itemStatusLastWebhook_1 = require("./itemStatusLastWebhook");
const itemStatusTransactions_1 = require("./itemStatusTransactions");
const itemWebhookUpdateRequest_1 = require("./itemWebhookUpdateRequest");
const itemWebhookUpdateResponse_1 = require("./itemWebhookUpdateResponse");
const jWTHeader_1 = require("./jWTHeader");
const liabilitiesGetRequest_1 = require("./liabilitiesGetRequest");
const liabilitiesGetRequestOptions_1 = require("./liabilitiesGetRequestOptions");
const liabilitiesGetResponse_1 = require("./liabilitiesGetResponse");
const liabilitiesObject_1 = require("./liabilitiesObject");
const liabilityOverride_1 = require("./liabilityOverride");
const linkTokenCreateRequest_1 = require("./linkTokenCreateRequest");
const linkTokenCreateRequestAccountFilters_1 = require("./linkTokenCreateRequestAccountFilters");
const linkTokenCreateRequestAccountFiltersCredit_1 = require("./linkTokenCreateRequestAccountFiltersCredit");
const linkTokenCreateRequestAccountFiltersDepository_1 = require("./linkTokenCreateRequestAccountFiltersDepository");
const linkTokenCreateRequestAccountFiltersInvestment_1 = require("./linkTokenCreateRequestAccountFiltersInvestment");
const linkTokenCreateRequestAccountFiltersLoan_1 = require("./linkTokenCreateRequestAccountFiltersLoan");
const linkTokenCreateRequestPaymentInitiation_1 = require("./linkTokenCreateRequestPaymentInitiation");
const linkTokenCreateRequestUser_1 = require("./linkTokenCreateRequestUser");
const linkTokenCreateResponse_1 = require("./linkTokenCreateResponse");
const location_1 = require("./location");
const mFA_1 = require("./mFA");
const meta_1 = require("./meta");
const modelError_1 = require("./modelError");
const numbers_1 = require("./numbers");
const numbersACH_1 = require("./numbersACH");
const numbersBACS_1 = require("./numbersBACS");
const numbersEFT_1 = require("./numbersEFT");
const numbersInternational_1 = require("./numbersInternational");
const overrideAccounts_1 = require("./overrideAccounts");
const owner_1 = require("./owner");
const ownerOverride_1 = require("./ownerOverride");
const pSLFStatus_1 = require("./pSLFStatus");
const paymentAmount_1 = require("./paymentAmount");
const paymentInitiationAddress_1 = require("./paymentInitiationAddress");
const paymentInitiationPayment_1 = require("./paymentInitiationPayment");
const paymentInitiationPaymentCreateRequest_1 = require("./paymentInitiationPaymentCreateRequest");
const paymentInitiationPaymentCreateRequestSchedule_1 = require("./paymentInitiationPaymentCreateRequestSchedule");
const paymentInitiationPaymentCreateResponse_1 = require("./paymentInitiationPaymentCreateResponse");
const paymentInitiationPaymentListRequest_1 = require("./paymentInitiationPaymentListRequest");
const paymentInitiationPaymentListResponse_1 = require("./paymentInitiationPaymentListResponse");
const paymentInitiationRecipient_1 = require("./paymentInitiationRecipient");
const paymentInitiationRecipientCreateRequest_1 = require("./paymentInitiationRecipientCreateRequest");
const paymentInitiationRecipientCreateRequestBacs_1 = require("./paymentInitiationRecipientCreateRequestBacs");
const paymentInitiationRecipientCreateResponse_1 = require("./paymentInitiationRecipientCreateResponse");
const paymentInitiationRecipientGetRequest_1 = require("./paymentInitiationRecipientGetRequest");
const paymentInitiationRecipientGetResponse_1 = require("./paymentInitiationRecipientGetResponse");
const paymentInitiationRecipientGetResponseBacs_1 = require("./paymentInitiationRecipientGetResponseBacs");
const paymentInitiationRecipientListRequest_1 = require("./paymentInitiationRecipientListRequest");
const paymentInitiationRecipientListResponse_1 = require("./paymentInitiationRecipientListResponse");
const paymentIntiationPaymentGetRequest_1 = require("./paymentIntiationPaymentGetRequest");
const paymentIntiationPaymentGetResponse_1 = require("./paymentIntiationPaymentGetResponse");
const paymentMeta_1 = require("./paymentMeta");
const paymentStatusUpdateWebhook_1 = require("./paymentStatusUpdateWebhook");
const pendingExpirationWebhook_1 = require("./pendingExpirationWebhook");
const phoneNumber_1 = require("./phoneNumber");
const processorApexProcessorTokenCreateRequest_1 = require("./processorApexProcessorTokenCreateRequest");
const processorApexProcessorTokenCreateResponse_1 = require("./processorApexProcessorTokenCreateResponse");
const processorAuthGetRequest_1 = require("./processorAuthGetRequest");
const processorAuthGetResponse_1 = require("./processorAuthGetResponse");
const processorAuthGetResponseNumbers_1 = require("./processorAuthGetResponseNumbers");
const processorBalanceGetRequest_1 = require("./processorBalanceGetRequest");
const processorBalanceGetResponse_1 = require("./processorBalanceGetResponse");
const processorIdentityGetRequest_1 = require("./processorIdentityGetRequest");
const processorIdentityGetResponse_1 = require("./processorIdentityGetResponse");
const processorStripeBankAccountTokenCreateRequest_1 = require("./processorStripeBankAccountTokenCreateRequest");
const processorStripeBankAccountTokenCreateResponse_1 = require("./processorStripeBankAccountTokenCreateResponse");
const processorTokenCreateRequest_1 = require("./processorTokenCreateRequest");
const processorTokenCreateResponse_1 = require("./processorTokenCreateResponse");
const productStatus_1 = require("./productStatus");
const productStatusBreakdown_1 = require("./productStatusBreakdown");
const recaptchaRequiredError_1 = require("./recaptchaRequiredError");
const sandboxItemFireWebhookRequest_1 = require("./sandboxItemFireWebhookRequest");
const sandboxItemFireWebhookResponse_1 = require("./sandboxItemFireWebhookResponse");
const sandboxItemResetLoginRequest_1 = require("./sandboxItemResetLoginRequest");
const sandboxItemResetLoginResponse_1 = require("./sandboxItemResetLoginResponse");
const sandboxItemSetVerificationStatusRequest_1 = require("./sandboxItemSetVerificationStatusRequest");
const sandboxItemSetVerificationStatusResponse_1 = require("./sandboxItemSetVerificationStatusResponse");
const sandboxPublicTokenCreateRequest_1 = require("./sandboxPublicTokenCreateRequest");
const sandboxPublicTokenCreateRequestOptions_1 = require("./sandboxPublicTokenCreateRequestOptions");
const sandboxPublicTokenCreateResponse_1 = require("./sandboxPublicTokenCreateResponse");
const security_1 = require("./security");
const servicerAddressData_1 = require("./servicerAddressData");
const standaloneAccountType_1 = require("./standaloneAccountType");
const standaloneCurrencyCodeList_1 = require("./standaloneCurrencyCodeList");
const standaloneInvestmentTransactionSubtype_1 = require("./standaloneInvestmentTransactionSubtype");
const standaloneInvestmentTransactionType_1 = require("./standaloneInvestmentTransactionType");
const studentLoan_1 = require("./studentLoan");
const studentLoanRepaymentModel_1 = require("./studentLoanRepaymentModel");
const studentLoanStatus_1 = require("./studentLoanStatus");
const studentRepaymentPlan_1 = require("./studentRepaymentPlan");
const transaction_1 = require("./transaction");
const transactionCode_1 = require("./transactionCode");
const transactionOverride_1 = require("./transactionOverride");
const transactionsGetRequest_1 = require("./transactionsGetRequest");
const transactionsGetRequestOptions_1 = require("./transactionsGetRequestOptions");
const transactionsGetResponse_1 = require("./transactionsGetResponse");
const transactionsRefreshRequest_1 = require("./transactionsRefreshRequest");
const transactionsRefreshResponse_1 = require("./transactionsRefreshResponse");
const transactionsRemovedWebhook_1 = require("./transactionsRemovedWebhook");
const userCustomPassword_1 = require("./userCustomPassword");
const userPermissionRevokedWebhook_1 = require("./userPermissionRevokedWebhook");
const verificationExpiredWebhook_1 = require("./verificationExpiredWebhook");
const warning_1 = require("./warning");
const webhookUpdateAcknowledgedWebhook_1 = require("./webhookUpdateAcknowledgedWebhook");
const webhookVerificationKeyGetRequest_1 = require("./webhookVerificationKeyGetRequest");
const webhookVerificationKeyGetResponse_1 = require("./webhookVerificationKeyGetResponse");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "AccountSubtype": accountSubtype_1.AccountSubtype,
    "AccountType": accountType_1.AccountType,
    "CountryCode": countryCode_1.CountryCode,
    "SandboxItemFireWebhookRequest.WebhookCodeEnum": sandboxItemFireWebhookRequest_1.SandboxItemFireWebhookRequest.WebhookCodeEnum,
    "TransactionCode": transactionCode_1.TransactionCode,
};
let typeMap = {
    "APR": aPR_1.APR,
    "Account": account_1.Account,
    "AccountBalance": accountBalance_1.AccountBalance,
    "AccountsGetRequest": accountsGetRequest_1.AccountsGetRequest,
    "AccountsGetResponse": accountsGetResponse_1.AccountsGetResponse,
    "Address": address_1.Address,
    "AddressData": addressData_1.AddressData,
    "Amount": amount_1.Amount,
    "AssetReport": assetReport_1.AssetReport,
    "AssetReportAuditCopyCreateRequest": assetReportAuditCopyCreateRequest_1.AssetReportAuditCopyCreateRequest,
    "AssetReportAuditCopyCreateResponse": assetReportAuditCopyCreateResponse_1.AssetReportAuditCopyCreateResponse,
    "AssetReportAuditCopyGetRequest": assetReportAuditCopyGetRequest_1.AssetReportAuditCopyGetRequest,
    "AssetReportAuditCopyRemoveRequest": assetReportAuditCopyRemoveRequest_1.AssetReportAuditCopyRemoveRequest,
    "AssetReportAuditCopyRemoveResponse": assetReportAuditCopyRemoveResponse_1.AssetReportAuditCopyRemoveResponse,
    "AssetReportCreateRequest": assetReportCreateRequest_1.AssetReportCreateRequest,
    "AssetReportCreateRequestOptions": assetReportCreateRequestOptions_1.AssetReportCreateRequestOptions,
    "AssetReportCreateResponse": assetReportCreateResponse_1.AssetReportCreateResponse,
    "AssetReportFilterRequest": assetReportFilterRequest_1.AssetReportFilterRequest,
    "AssetReportFilterResponse": assetReportFilterResponse_1.AssetReportFilterResponse,
    "AssetReportGetRequest": assetReportGetRequest_1.AssetReportGetRequest,
    "AssetReportGetResponse": assetReportGetResponse_1.AssetReportGetResponse,
    "AssetReportItem": assetReportItem_1.AssetReportItem,
    "AssetReportPDFGetRequest": assetReportPDFGetRequest_1.AssetReportPDFGetRequest,
    "AssetReportRefreshRequest": assetReportRefreshRequest_1.AssetReportRefreshRequest,
    "AssetReportRefreshRequestOptions": assetReportRefreshRequestOptions_1.AssetReportRefreshRequestOptions,
    "AssetReportRefreshResponse": assetReportRefreshResponse_1.AssetReportRefreshResponse,
    "AssetReportRemoveRequest": assetReportRemoveRequest_1.AssetReportRemoveRequest,
    "AssetReportRemoveResponse": assetReportRemoveResponse_1.AssetReportRemoveResponse,
    "AssetReportUser": assetReportUser_1.AssetReportUser,
    "AssetsErrorWebhook": assetsErrorWebhook_1.AssetsErrorWebhook,
    "AssetsProductReadyWebhook": assetsProductReadyWebhook_1.AssetsProductReadyWebhook,
    "AuthGetRequest": authGetRequest_1.AuthGetRequest,
    "AuthGetRequestOptions": authGetRequestOptions_1.AuthGetRequestOptions,
    "AuthGetResponse": authGetResponse_1.AuthGetResponse,
    "AuthGetResponseNumbers": authGetResponseNumbers_1.AuthGetResponseNumbers,
    "AutomaticallyVerifiedWebhook": automaticallyVerifiedWebhook_1.AutomaticallyVerifiedWebhook,
    "BalanceGetRequest": balanceGetRequest_1.BalanceGetRequest,
    "BalanceGetRequestOptions": balanceGetRequestOptions_1.BalanceGetRequestOptions,
    "BalanceGetResponse": balanceGetResponse_1.BalanceGetResponse,
    "CategoriesGetResponse": categoriesGetResponse_1.CategoriesGetResponse,
    "Category": category_1.Category,
    "Cause": cause_1.Cause,
    "CreditCardLiability": creditCardLiability_1.CreditCardLiability,
    "DefaultUpdateWebhook": defaultUpdateWebhook_1.DefaultUpdateWebhook,
    "DepositSwitchCreateRequest": depositSwitchCreateRequest_1.DepositSwitchCreateRequest,
    "DepositSwitchCreateResponse": depositSwitchCreateResponse_1.DepositSwitchCreateResponse,
    "DepositSwitchGetRequest": depositSwitchGetRequest_1.DepositSwitchGetRequest,
    "DepositSwitchGetResponse": depositSwitchGetResponse_1.DepositSwitchGetResponse,
    "DepositSwitchTokenCreateRequest": depositSwitchTokenCreateRequest_1.DepositSwitchTokenCreateRequest,
    "DepositSwitchTokenCreateResponse": depositSwitchTokenCreateResponse_1.DepositSwitchTokenCreateResponse,
    "Email": email_1.Email,
    "HistoricalBalance": historicalBalance_1.HistoricalBalance,
    "HistoricalUpdateWebhook": historicalUpdateWebhook_1.HistoricalUpdateWebhook,
    "Holding": holding_1.Holding,
    "HoldingsDefaultUpdateWebhook": holdingsDefaultUpdateWebhook_1.HoldingsDefaultUpdateWebhook,
    "IdentityGetRequest": identityGetRequest_1.IdentityGetRequest,
    "IdentityGetResponse": identityGetResponse_1.IdentityGetResponse,
    "InflowModel": inflowModel_1.InflowModel,
    "InitialUpdateWebhook": initialUpdateWebhook_1.InitialUpdateWebhook,
    "Institution": institution_1.Institution,
    "InstitutionSearchRequest": institutionSearchRequest_1.InstitutionSearchRequest,
    "InstitutionSearchRequestOptions": institutionSearchRequestOptions_1.InstitutionSearchRequestOptions,
    "InstitutionSearchResponse": institutionSearchResponse_1.InstitutionSearchResponse,
    "InstitutionStatus": institutionStatus_1.InstitutionStatus,
    "InstitutionsGetByIdRequest": institutionsGetByIdRequest_1.InstitutionsGetByIdRequest,
    "InstitutionsGetByIdRequestOptions": institutionsGetByIdRequestOptions_1.InstitutionsGetByIdRequestOptions,
    "InstitutionsGetByIdResponse": institutionsGetByIdResponse_1.InstitutionsGetByIdResponse,
    "InstitutionsGetRequest": institutionsGetRequest_1.InstitutionsGetRequest,
    "InstitutionsGetRequestOptions": institutionsGetRequestOptions_1.InstitutionsGetRequestOptions,
    "InstitutionsGetResponse": institutionsGetResponse_1.InstitutionsGetResponse,
    "InvestmentTransaction": investmentTransaction_1.InvestmentTransaction,
    "InvestmentsDefaultUpdateWebhook": investmentsDefaultUpdateWebhook_1.InvestmentsDefaultUpdateWebhook,
    "InvestmentsHoldingsGetRequest": investmentsHoldingsGetRequest_1.InvestmentsHoldingsGetRequest,
    "InvestmentsHoldingsGetRequestOptions": investmentsHoldingsGetRequestOptions_1.InvestmentsHoldingsGetRequestOptions,
    "InvestmentsHoldingsGetResponse": investmentsHoldingsGetResponse_1.InvestmentsHoldingsGetResponse,
    "InvestmentsTransactionsGetRequest": investmentsTransactionsGetRequest_1.InvestmentsTransactionsGetRequest,
    "InvestmentsTransactionsGetRequestOptions": investmentsTransactionsGetRequestOptions_1.InvestmentsTransactionsGetRequestOptions,
    "InvestmentsTransactionsGetResponse": investmentsTransactionsGetResponse_1.InvestmentsTransactionsGetResponse,
    "Item": item_1.Item,
    "ItemAccessTokenInvalidateRequest": itemAccessTokenInvalidateRequest_1.ItemAccessTokenInvalidateRequest,
    "ItemAccessTokenInvalidateResponse": itemAccessTokenInvalidateResponse_1.ItemAccessTokenInvalidateResponse,
    "ItemErrorWebhook": itemErrorWebhook_1.ItemErrorWebhook,
    "ItemGetRequest": itemGetRequest_1.ItemGetRequest,
    "ItemGetResponse": itemGetResponse_1.ItemGetResponse,
    "ItemImportRequest": itemImportRequest_1.ItemImportRequest,
    "ItemImportRequestOptions": itemImportRequestOptions_1.ItemImportRequestOptions,
    "ItemImportRequestUserAuth": itemImportRequestUserAuth_1.ItemImportRequestUserAuth,
    "ItemImportResponse": itemImportResponse_1.ItemImportResponse,
    "ItemProductReadyWebhook": itemProductReadyWebhook_1.ItemProductReadyWebhook,
    "ItemPublicTokenCreateRequest": itemPublicTokenCreateRequest_1.ItemPublicTokenCreateRequest,
    "ItemPublicTokenCreateResponse": itemPublicTokenCreateResponse_1.ItemPublicTokenCreateResponse,
    "ItemPublicTokenExchangeRequest": itemPublicTokenExchangeRequest_1.ItemPublicTokenExchangeRequest,
    "ItemPublicTokenExchangeResponse": itemPublicTokenExchangeResponse_1.ItemPublicTokenExchangeResponse,
    "ItemRemoveRequest": itemRemoveRequest_1.ItemRemoveRequest,
    "ItemRemoveResponse": itemRemoveResponse_1.ItemRemoveResponse,
    "ItemStatus": itemStatus_1.ItemStatus,
    "ItemStatusInvestments": itemStatusInvestments_1.ItemStatusInvestments,
    "ItemStatusLastWebhook": itemStatusLastWebhook_1.ItemStatusLastWebhook,
    "ItemStatusTransactions": itemStatusTransactions_1.ItemStatusTransactions,
    "ItemWebhookUpdateRequest": itemWebhookUpdateRequest_1.ItemWebhookUpdateRequest,
    "ItemWebhookUpdateResponse": itemWebhookUpdateResponse_1.ItemWebhookUpdateResponse,
    "JWTHeader": jWTHeader_1.JWTHeader,
    "LiabilitiesGetRequest": liabilitiesGetRequest_1.LiabilitiesGetRequest,
    "LiabilitiesGetRequestOptions": liabilitiesGetRequestOptions_1.LiabilitiesGetRequestOptions,
    "LiabilitiesGetResponse": liabilitiesGetResponse_1.LiabilitiesGetResponse,
    "LiabilitiesObject": liabilitiesObject_1.LiabilitiesObject,
    "LiabilityOverride": liabilityOverride_1.LiabilityOverride,
    "LinkTokenCreateRequest": linkTokenCreateRequest_1.LinkTokenCreateRequest,
    "LinkTokenCreateRequestAccountFilters": linkTokenCreateRequestAccountFilters_1.LinkTokenCreateRequestAccountFilters,
    "LinkTokenCreateRequestAccountFiltersCredit": linkTokenCreateRequestAccountFiltersCredit_1.LinkTokenCreateRequestAccountFiltersCredit,
    "LinkTokenCreateRequestAccountFiltersDepository": linkTokenCreateRequestAccountFiltersDepository_1.LinkTokenCreateRequestAccountFiltersDepository,
    "LinkTokenCreateRequestAccountFiltersInvestment": linkTokenCreateRequestAccountFiltersInvestment_1.LinkTokenCreateRequestAccountFiltersInvestment,
    "LinkTokenCreateRequestAccountFiltersLoan": linkTokenCreateRequestAccountFiltersLoan_1.LinkTokenCreateRequestAccountFiltersLoan,
    "LinkTokenCreateRequestPaymentInitiation": linkTokenCreateRequestPaymentInitiation_1.LinkTokenCreateRequestPaymentInitiation,
    "LinkTokenCreateRequestUser": linkTokenCreateRequestUser_1.LinkTokenCreateRequestUser,
    "LinkTokenCreateResponse": linkTokenCreateResponse_1.LinkTokenCreateResponse,
    "Location": location_1.Location,
    "MFA": mFA_1.MFA,
    "Meta": meta_1.Meta,
    "ModelError": modelError_1.ModelError,
    "Numbers": numbers_1.Numbers,
    "NumbersACH": numbersACH_1.NumbersACH,
    "NumbersBACS": numbersBACS_1.NumbersBACS,
    "NumbersEFT": numbersEFT_1.NumbersEFT,
    "NumbersInternational": numbersInternational_1.NumbersInternational,
    "OverrideAccounts": overrideAccounts_1.OverrideAccounts,
    "Owner": owner_1.Owner,
    "OwnerOverride": ownerOverride_1.OwnerOverride,
    "PSLFStatus": pSLFStatus_1.PSLFStatus,
    "PaymentAmount": paymentAmount_1.PaymentAmount,
    "PaymentInitiationAddress": paymentInitiationAddress_1.PaymentInitiationAddress,
    "PaymentInitiationPayment": paymentInitiationPayment_1.PaymentInitiationPayment,
    "PaymentInitiationPaymentCreateRequest": paymentInitiationPaymentCreateRequest_1.PaymentInitiationPaymentCreateRequest,
    "PaymentInitiationPaymentCreateRequestSchedule": paymentInitiationPaymentCreateRequestSchedule_1.PaymentInitiationPaymentCreateRequestSchedule,
    "PaymentInitiationPaymentCreateResponse": paymentInitiationPaymentCreateResponse_1.PaymentInitiationPaymentCreateResponse,
    "PaymentInitiationPaymentListRequest": paymentInitiationPaymentListRequest_1.PaymentInitiationPaymentListRequest,
    "PaymentInitiationPaymentListResponse": paymentInitiationPaymentListResponse_1.PaymentInitiationPaymentListResponse,
    "PaymentInitiationRecipient": paymentInitiationRecipient_1.PaymentInitiationRecipient,
    "PaymentInitiationRecipientCreateRequest": paymentInitiationRecipientCreateRequest_1.PaymentInitiationRecipientCreateRequest,
    "PaymentInitiationRecipientCreateRequestBacs": paymentInitiationRecipientCreateRequestBacs_1.PaymentInitiationRecipientCreateRequestBacs,
    "PaymentInitiationRecipientCreateResponse": paymentInitiationRecipientCreateResponse_1.PaymentInitiationRecipientCreateResponse,
    "PaymentInitiationRecipientGetRequest": paymentInitiationRecipientGetRequest_1.PaymentInitiationRecipientGetRequest,
    "PaymentInitiationRecipientGetResponse": paymentInitiationRecipientGetResponse_1.PaymentInitiationRecipientGetResponse,
    "PaymentInitiationRecipientGetResponseBacs": paymentInitiationRecipientGetResponseBacs_1.PaymentInitiationRecipientGetResponseBacs,
    "PaymentInitiationRecipientListRequest": paymentInitiationRecipientListRequest_1.PaymentInitiationRecipientListRequest,
    "PaymentInitiationRecipientListResponse": paymentInitiationRecipientListResponse_1.PaymentInitiationRecipientListResponse,
    "PaymentIntiationPaymentGetRequest": paymentIntiationPaymentGetRequest_1.PaymentIntiationPaymentGetRequest,
    "PaymentIntiationPaymentGetResponse": paymentIntiationPaymentGetResponse_1.PaymentIntiationPaymentGetResponse,
    "PaymentMeta": paymentMeta_1.PaymentMeta,
    "PaymentStatusUpdateWebhook": paymentStatusUpdateWebhook_1.PaymentStatusUpdateWebhook,
    "PendingExpirationWebhook": pendingExpirationWebhook_1.PendingExpirationWebhook,
    "PhoneNumber": phoneNumber_1.PhoneNumber,
    "ProcessorApexProcessorTokenCreateRequest": processorApexProcessorTokenCreateRequest_1.ProcessorApexProcessorTokenCreateRequest,
    "ProcessorApexProcessorTokenCreateResponse": processorApexProcessorTokenCreateResponse_1.ProcessorApexProcessorTokenCreateResponse,
    "ProcessorAuthGetRequest": processorAuthGetRequest_1.ProcessorAuthGetRequest,
    "ProcessorAuthGetResponse": processorAuthGetResponse_1.ProcessorAuthGetResponse,
    "ProcessorAuthGetResponseNumbers": processorAuthGetResponseNumbers_1.ProcessorAuthGetResponseNumbers,
    "ProcessorBalanceGetRequest": processorBalanceGetRequest_1.ProcessorBalanceGetRequest,
    "ProcessorBalanceGetResponse": processorBalanceGetResponse_1.ProcessorBalanceGetResponse,
    "ProcessorIdentityGetRequest": processorIdentityGetRequest_1.ProcessorIdentityGetRequest,
    "ProcessorIdentityGetResponse": processorIdentityGetResponse_1.ProcessorIdentityGetResponse,
    "ProcessorStripeBankAccountTokenCreateRequest": processorStripeBankAccountTokenCreateRequest_1.ProcessorStripeBankAccountTokenCreateRequest,
    "ProcessorStripeBankAccountTokenCreateResponse": processorStripeBankAccountTokenCreateResponse_1.ProcessorStripeBankAccountTokenCreateResponse,
    "ProcessorTokenCreateRequest": processorTokenCreateRequest_1.ProcessorTokenCreateRequest,
    "ProcessorTokenCreateResponse": processorTokenCreateResponse_1.ProcessorTokenCreateResponse,
    "ProductStatus": productStatus_1.ProductStatus,
    "ProductStatusBreakdown": productStatusBreakdown_1.ProductStatusBreakdown,
    "RecaptchaRequiredError": recaptchaRequiredError_1.RecaptchaRequiredError,
    "SandboxItemFireWebhookRequest": sandboxItemFireWebhookRequest_1.SandboxItemFireWebhookRequest,
    "SandboxItemFireWebhookResponse": sandboxItemFireWebhookResponse_1.SandboxItemFireWebhookResponse,
    "SandboxItemResetLoginRequest": sandboxItemResetLoginRequest_1.SandboxItemResetLoginRequest,
    "SandboxItemResetLoginResponse": sandboxItemResetLoginResponse_1.SandboxItemResetLoginResponse,
    "SandboxItemSetVerificationStatusRequest": sandboxItemSetVerificationStatusRequest_1.SandboxItemSetVerificationStatusRequest,
    "SandboxItemSetVerificationStatusResponse": sandboxItemSetVerificationStatusResponse_1.SandboxItemSetVerificationStatusResponse,
    "SandboxPublicTokenCreateRequest": sandboxPublicTokenCreateRequest_1.SandboxPublicTokenCreateRequest,
    "SandboxPublicTokenCreateRequestOptions": sandboxPublicTokenCreateRequestOptions_1.SandboxPublicTokenCreateRequestOptions,
    "SandboxPublicTokenCreateResponse": sandboxPublicTokenCreateResponse_1.SandboxPublicTokenCreateResponse,
    "Security": security_1.Security,
    "ServicerAddressData": servicerAddressData_1.ServicerAddressData,
    "StandaloneAccountType": standaloneAccountType_1.StandaloneAccountType,
    "StandaloneCurrencyCodeList": standaloneCurrencyCodeList_1.StandaloneCurrencyCodeList,
    "StandaloneInvestmentTransactionSubtype": standaloneInvestmentTransactionSubtype_1.StandaloneInvestmentTransactionSubtype,
    "StandaloneInvestmentTransactionType": standaloneInvestmentTransactionType_1.StandaloneInvestmentTransactionType,
    "StudentLoan": studentLoan_1.StudentLoan,
    "StudentLoanRepaymentModel": studentLoanRepaymentModel_1.StudentLoanRepaymentModel,
    "StudentLoanStatus": studentLoanStatus_1.StudentLoanStatus,
    "StudentRepaymentPlan": studentRepaymentPlan_1.StudentRepaymentPlan,
    "Transaction": transaction_1.Transaction,
    "TransactionOverride": transactionOverride_1.TransactionOverride,
    "TransactionsGetRequest": transactionsGetRequest_1.TransactionsGetRequest,
    "TransactionsGetRequestOptions": transactionsGetRequestOptions_1.TransactionsGetRequestOptions,
    "TransactionsGetResponse": transactionsGetResponse_1.TransactionsGetResponse,
    "TransactionsRefreshRequest": transactionsRefreshRequest_1.TransactionsRefreshRequest,
    "TransactionsRefreshResponse": transactionsRefreshResponse_1.TransactionsRefreshResponse,
    "TransactionsRemovedWebhook": transactionsRemovedWebhook_1.TransactionsRemovedWebhook,
    "UserCustomPassword": userCustomPassword_1.UserCustomPassword,
    "UserPermissionRevokedWebhook": userPermissionRevokedWebhook_1.UserPermissionRevokedWebhook,
    "VerificationExpiredWebhook": verificationExpiredWebhook_1.VerificationExpiredWebhook,
    "Warning": warning_1.Warning,
    "WebhookUpdateAcknowledgedWebhook": webhookUpdateAcknowledgedWebhook_1.WebhookUpdateAcknowledgedWebhook,
    "WebhookVerificationKeyGetRequest": webhookVerificationKeyGetRequest_1.WebhookVerificationKeyGetRequest,
    "WebhookVerificationKeyGetResponse": webhookVerificationKeyGetResponse_1.WebhookVerificationKeyGetResponse,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map