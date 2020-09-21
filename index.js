
import * as PlaidGeneratedAPI from './generated-node/dist/api';

// Default version TODO: (cfarmer) Update this to latest on 9/14
// NOTE: This version will only support latest.
const DEFAULT_VERSION = '2019-05-29';

export class Client {
    constructor(configs) {
        // Check if config is object

        // Check if missing Client ID

        // Check if missing Plaid Secret

        //Add ACCESS_TOKEN to wrapper!

        // Set env vars as this!
    }

    // Request wrapper for body vars + path!

    // asset_report/create
    createAssetReport() { }

    // asset_report/audit_copy/create
    createAuditCopy() { }

    // deposit_switch/create
    createDepositSwitch() { }

    // deposit_switch/token/create
    createDepositSwitchToken() { }

    // link/token/create
    createLinkToken() { }

    // payment_initiation/payment/create
    createPayment() { }

    // /payment_initiation/recipient/create
    createPaymentRecipient() { }

    // payment_initiation/payment/token/create
    createPaymentToken() { }

    // processor/token/create
    // processor/apex/processor_token/create
    createProcessorToken() { }

    // item/public_token/create
    createPublicToken() { }

    // processor/stripe/bank_account_token/create
    createStripeToken() { }

    // item/public_token/exchange
    exchangePublicToken() { }

    // asset_report/filter
    filterAssetReport() { }

    // accounts/get
    getAccounts() { }

    //??? CUSTOM FUNCTION only used in plaid-node
    getAllTransactions() { }

    // asset_report/get
    getAssetReport() { }

    // asset_report/pdf/get
    getAssetReportPdf() { }

    // asset_report/audit_copy/create
    getAuditCopy() { }

    // auth/get
    getAuth() { }

    // accounts/balance/get
    getBalance() { }

    // categories/get
    getCategories() { }

    // deposit_switch/get
    getDepositSwitch() { }

    // investments/holdings/get
    getHoldings() { }

    // identity/get
    getIdentity() { }

    // institutions/get_by_id
    getInstitutionById() { }

    // institutions/get
    getInstitutions() { }

    // investments/transactions/get
    getInvestmentTransactions() { }

    // item/get
    getItem() { }

    // liabilities/get
    getLiabilities() { }

    //TODO: OpenAPI GET LINK TOKEN!
    getLinkToken() { }

    // payment_initiation/payment/get
    getPayment() { }

    // payment_initiation/recipient/get
    getPaymentRecipient() { }

    // transactions/get
    getTransactions() { }

    // webhook_verification_key/get
    getWebhookVerificationKey() { }

    // item/import
    importItem() { }

    // item/access_token/invalidate
    invalidateAccessToken() { }

    // payment_initiation/recipient/list
    listPaymentRecipients() { }

    // payment_initiation/payment/list
    listPayments() { }

    // PROCESSOR AUTH GET
    // processor/auth/get

    // PROCESSOR BALANCE GET
    // processor/balance/get

    // PROCESSOR IDENTITY GET
    // processor/identity/get

    // asset_report/refresh
    refreshAssetReport() { }

    // transactions/refresh
    refreshTransactions() { }

    // asset_report/remove
    removeAssetReport() { }

    // asset_report/audit_copy/remove
    removeAuditCopy() { }

    // item/remove
    removeItem() { }

    // sandbox/item/reset_login
    resetLogin() { }

    // sandbox/public_token/create
    sandboxPublicTokenCreate() { }

    // sandbox/item/fire_webhook
    sandboxItemFireWebhook() { }

    // sandbox/item/set_verification_status
    sandboxItemSetVerificationStatus() { }

    // institutions/search
    searchInstitutionsByName() { }

    // item/webhook/update
    updateItemWebhook() { }
}
