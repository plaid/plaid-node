"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plaidRequest = exports.PlaidError = exports.environments = exports.Client = void 0;
var api_1 = require("./generated-code/api");
// NOTE: This version will only support latest.
var DEFAULT_VERSION = '2020-09-14';
var environments = {
    production: 'https://production.plaid.com',
    sandbox: 'https://sandbox.plaid.com',
    development: 'https://development.plaid.com',
};
exports.environments = environments;
var Client = /** @class */ (function () {
    function Client(config) {
        var _a;
        if (typeof config !== 'object' || config === null) {
            throw new Error('Unexpected parameter type. ' +
                'Refer to https://github.com/plaid/plaid-node ' +
                'for how to create a Plaid client.');
        }
        if (config.clientID === null) {
            throw new Error('Missing Plaid "clientID"');
        }
        if (config.secret === null) {
            throw new Error('Missing Plaid "secret"');
        }
        if (![
            environments.production,
            environments.sandbox,
            environments.development,
        ].includes(config.env)) {
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
        this.openAPIClient = new api_1.PlaidApi(config.env);
        this.openAPIClient.defaultHeaders = (_a = {},
            _a['Plaid-Version'] = DEFAULT_VERSION,
            _a);
    }
    // asset_report/create
    Client.prototype.createAssetReport = function (access_tokens, days_requested, options, cb) {
        return plaidRequest(this.openAPIClient.assetReportCreate({
            client_id: this.client_id,
            secret: this.secret,
            access_tokens: access_tokens,
            days_requested: days_requested,
            options: options,
        }), cb);
    };
    // asset_report/audit_copy/create
    Client.prototype.createAuditCopy = function (asset_report_token, auditor_id, cb) {
        return plaidRequest(this.openAPIClient.assetReportAuditCopyCreate({
            client_id: this.client_id,
            secret: this.secret,
            asset_report_token: asset_report_token,
            auditor_id: auditor_id,
        }), cb);
    };
    // deposit_switch/create
    Client.prototype.createDepositSwitch = function (target_account_id, target_access_token, cb) {
        return plaidRequest(this.openAPIClient.depositSwitchCreate({
            client_id: this.client_id,
            secret: this.secret,
            target_access_token: target_access_token,
            target_account_id: target_account_id,
        }), cb);
    };
    // deposit_switch/token/create
    Client.prototype.createDepositSwitchToken = function (deposit_switch_id, cb) {
        return plaidRequest(this.openAPIClient.depositSwitchTokenCreate({
            client_id: this.client_id,
            secret: this.secret,
            deposit_switch_id: deposit_switch_id,
        }), cb);
    };
    Client.prototype.createLinkToken = function (options, cb) {
        options.client_id = this.client_id;
        options.secret = this.secret;
        return plaidRequest(this.openAPIClient.linkTokenCreate(options), cb);
    };
    // payment_initiation/payment/create
    Client.prototype.createPayment = function (recipient_id, reference, amount, schedule, cb) {
        return plaidRequest(this.openAPIClient.paymentInitiationPaymentCreate({
            client_id: this.client_id,
            secret: this.secret,
            recipient_id: recipient_id,
            reference: reference,
            amount: amount,
            schedule: schedule,
        }), cb);
    };
    // /payment_initiation/recipient/create
    Client.prototype.createPaymentRecipient = function (name, iban, address, bacs, cb) {
        return plaidRequest(this.openAPIClient.paymentInitiationRecipientCreate({
            client_id: this.client_id,
            secret: this.secret,
            name: name,
            iban: iban,
            bacs: bacs,
            address: address,
        }), cb);
    };
    // processor/token/create
    // processor/apex/processor_token/create
    // processor/stripe/bank_account_token/create
    Client.prototype.createProcessorToken = function (access_token, account_id, processor, cb) {
        var options = {
            client_id: this.client_id,
            secret: this.secret,
            access_token: access_token,
            account_id: account_id,
        };
        if (processor == 'stripe') {
            return plaidRequest(this.openAPIClient.processorStripeBankAccountTokenCreate(options), cb);
        }
        else if (processor == 'apex') {
            return plaidRequest(this.openAPIClient.processorApexProcessorTokenCreate(options), cb);
        }
        else {
            var optionsWithProcessor = __assign(__assign({}, options), { processor: processor });
            return plaidRequest(this.openAPIClient.processorTokenCreate(optionsWithProcessor), cb);
        }
    };
    // processor/stripe/bank_account_token/create
    Client.prototype.createStripeToken = function (access_token, account_id, cb) {
        return this.createProcessorToken(access_token, account_id, 'stripe', cb);
    };
    // item/public_token/exchange
    Client.prototype.exchangePublicToken = function (public_token, cb) {
        return plaidRequest(this.openAPIClient.itemPublicTokenExchange({
            client_id: this.client_id,
            secret: this.secret,
            public_token: public_token,
        }), cb);
    };
    // asset_report/filter
    Client.prototype.filterAssetReport = function (asset_report_token, account_ids_to_exclude, cb) {
        return plaidRequest(this.openAPIClient.assetReportFilter({
            client_id: this.client_id,
            secret: this.secret,
            asset_report_token: asset_report_token,
            account_ids_to_exclude: account_ids_to_exclude,
        }), cb);
    };
    // accounts/get
    Client.prototype.getAccounts = function (access_token, cb) {
        return plaidRequest(this.openAPIClient.accountsGet({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
        }), cb);
    };
    // asset_report/get
    Client.prototype.getAssetReport = function (asset_report_token, include_insights, cb) {
        return plaidRequest(this.openAPIClient.assetReportGet({
            asset_report_token: asset_report_token,
            client_id: this.client_id,
            include_insights: include_insights,
            secret: this.secret,
        }), cb);
    };
    // asset_report/pdf/get
    Client.prototype.getAssetReportPdf = function (asset_report_token, cb) {
        return plaidRequest(this.openAPIClient.assetReportPDFGet({
            asset_report_token: asset_report_token,
            client_id: this.client_id,
            secret: this.secret,
        }), cb);
    };
    // asset_report/audit_copy/get
    Client.prototype.getAuditCopy = function (audit_copy_token, cb) {
        return plaidRequest(this.openAPIClient.assetReportAuditCopyGet({
            client_id: this.client_id,
            secret: this.secret,
            audit_copy_token: audit_copy_token,
        }), cb);
    };
    // auth/get
    Client.prototype.getAuth = function (access_token, options, cb) {
        return plaidRequest(this.openAPIClient.authGet({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
            options: options,
        }), cb);
    };
    // accounts/balance/get
    Client.prototype.getBalance = function (access_token, options, cb) {
        return plaidRequest(this.openAPIClient.balanceGet({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
            options: options,
        }), cb);
    };
    // categories/get
    Client.prototype.getCategories = function (cb) {
        return plaidRequest(this.openAPIClient.categoriesGet({}), cb);
    };
    // deposit_switch/get
    Client.prototype.getDepositSwitch = function (deposit_switch_id, cb) {
        return plaidRequest(this.openAPIClient.depositSwitchGet({
            client_id: this.client_id,
            secret: this.secret,
            deposit_switch_id: deposit_switch_id,
        }), cb);
    };
    // investments/holdings/get
    Client.prototype.getHoldings = function (access_token, options, cb) {
        return plaidRequest(this.openAPIClient.investmentsHoldingsGet({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
            options: options,
        }), cb);
    };
    // identity/get
    Client.prototype.getIdentity = function (access_token, cb) {
        return plaidRequest(this.openAPIClient.identityGet({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
        }), cb);
    };
    // institutions/get_by_id
    Client.prototype.getInstitutionById = function (institution_id, options, cb) {
        return plaidRequest(this.openAPIClient.institutionsGetByID({
            client_id: this.client_id,
            institution_id: institution_id,
            secret: this.secret,
            options: options,
        }), cb);
    };
    // institutions/get
    Client.prototype.getInstitutions = function (count, offset, options, cb) {
        return plaidRequest(this.openAPIClient.institutionsGet({
            client_id: this.client_id,
            count: count,
            offset: offset,
            secret: this.secret,
            options: options,
        }), cb);
    };
    // investments/transactions/get
    Client.prototype.getInvestmentTransactions = function (access_token, start_date, end_date, options, cb) {
        return plaidRequest(this.openAPIClient.investmentsTransactionsGet({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
            start_date: start_date,
            end_date: end_date,
            options: options,
        }), cb);
    };
    // item/get
    Client.prototype.getItem = function (access_token, cb) {
        return plaidRequest(this.openAPIClient.itemGet({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
        }), cb);
    };
    // liabilities/get
    Client.prototype.getLiabilities = function (access_token, options, cb) {
        return plaidRequest(this.openAPIClient.liabilitiesGet({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
            options: options,
        }), cb);
    };
    //TODO: OpenAPI GET LINK TOKEN!
    Client.prototype.getLinkToken = function () { };
    // payment_initiation/payment/get
    Client.prototype.getPayment = function (payment_id, cb) {
        return plaidRequest(this.openAPIClient.paymentIntiationPaymentGet({
            client_id: this.client_id,
            payment_id: payment_id,
            secret: this.secret,
        }), cb);
    };
    // payment_initiation/recipient/get
    Client.prototype.getPaymentRecipient = function (recipient_id, cb) {
        return plaidRequest(this.openAPIClient.paymentInitiationRecipientGet({
            client_id: this.client_id,
            recipient_id: recipient_id,
            secret: this.secret,
        }), cb);
    };
    // transactions/get
    Client.prototype.getTransactions = function (access_token, start_date, end_date, options, cb) {
        return plaidRequest(this.openAPIClient.transactionsGet({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
            start_date: start_date,
            end_date: end_date,
            options: options,
        }), cb);
    };
    // webhook_verification_key/get
    Client.prototype.getWebhookVerificationKey = function (key_id, cb) {
        return plaidRequest(this.openAPIClient.webhookVerificationKeyGet({
            client_id: this.client_id,
            key_id: key_id,
            secret: this.secret,
        }), cb);
    };
    // item/import
    Client.prototype.importItem = function (products, user_auth, options, cb) {
        return plaidRequest(this.openAPIClient.itemImport({
            client_id: this.client_id,
            products: products,
            secret: this.secret,
            user_auth: user_auth,
            options: options,
        }), cb);
    };
    // item/access_token/invalidate
    Client.prototype.invalidateAccessToken = function (access_token, cb) {
        return plaidRequest(this.openAPIClient.itemAccessTokenInvalidate({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
        }), cb);
    };
    // payment_initiation/recipient/list
    Client.prototype.listPaymentRecipients = function (cb) {
        return plaidRequest(this.openAPIClient.paymentInitiationRecipientList({
            client_id: this.client_id,
            secret: this.secret
        }), cb);
    };
    // payment_initiation/payment/list
    Client.prototype.listPayments = function (options, cb) {
        return plaidRequest(this.openAPIClient.paymentInitiationPaymentList({
            client_id: this.client_id,
            secret: this.secret,
            count: ((options === null || options === void 0 ? void 0 : options.count) != null) ? options.count : undefined,
            cursor: ((options === null || options === void 0 ? void 0 : options.cursor) != null) ? options.cursor : undefined,
        }), cb);
    };
    // processor/auth/get
    Client.prototype.getAuthProcessor = function (processor_token, cb) {
        return plaidRequest(this.openAPIClient.processorAuthGet({
            client_id: this.client_id,
            processor_token: processor_token,
            secret: this.secret,
        }), cb);
    };
    // processor/balance/get
    Client.prototype.getBalanceProcessor = function (processor_token, cb) {
        return plaidRequest(this.openAPIClient.processorBalanceGet({
            client_id: this.client_id,
            processor_token: processor_token,
            secret: this.secret,
        }), cb);
    };
    // processor/identity/get
    Client.prototype.getIdentityProcessor = function (processor_token, cb) {
        return plaidRequest(this.openAPIClient.processorIdentityGet({
            client_id: this.client_id,
            processor_token: processor_token,
            secret: this.secret,
        }), cb);
    };
    // asset_report/refresh
    Client.prototype.refreshAssetReport = function (asset_report_token, days_requested, options, cb) {
        return plaidRequest(this.openAPIClient.assetReportRefresh({
            client_id: this.client_id,
            asset_report_token: asset_report_token,
            days_requested: days_requested,
            secret: this.secret,
            options: options,
        }), cb);
    };
    // transactions/refresh
    Client.prototype.refreshTransactions = function (access_token, cb) {
        return plaidRequest(this.openAPIClient.transactionsRefresh({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
        }), cb);
    };
    // asset_report/remove
    Client.prototype.removeAssetReport = function (asset_report_token, cb) {
        return plaidRequest(this.openAPIClient.assetReportRemove({
            asset_report_token: asset_report_token,
            client_id: this.client_id,
            secret: this.secret,
        }), cb);
    };
    // asset_report/audit_copy/remove
    Client.prototype.removeAuditCopy = function (audit_copy_token, cb) {
        return plaidRequest(this.openAPIClient.assetReportAuditCopyRemove({
            audit_copy_token: audit_copy_token,
            client_id: this.client_id,
            secret: this.secret,
        }), cb);
    };
    // item/remove
    Client.prototype.removeItem = function (access_token, cb) {
        return plaidRequest(this.openAPIClient.itemRemove({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
        }), cb);
    };
    // sandbox/item/reset_login
    Client.prototype.resetLogin = function (access_token, cb) {
        return plaidRequest(this.openAPIClient.sandboxItemResetLogin({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
        }), cb);
    };
    // sandbox/public_token/create
    Client.prototype.sandboxPublicTokenCreate = function (institution_id, initial_products, options, cb) {
        return plaidRequest(this.openAPIClient.sandboxPublicTokenCreate({
            client_id: this.client_id,
            institution_id: institution_id,
            initial_products: initial_products,
            secret: this.secret,
            options: options,
        }), cb);
    };
    // sandbox/item/fire_webhook
    Client.prototype.sandboxItemFireWebhook = function (access_token, webhook_code, cb) {
        return plaidRequest(this.openAPIClient.sandboxItemFireWebhook({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
            webhook_code: webhook_code,
        }), cb);
    };
    // sandbox/item/set_verification_status
    Client.prototype.sandboxItemSetVerificationStatus = function (access_token, account_id, verification_status, cb) {
        return plaidRequest(this.openAPIClient.sandboxItemSetVerificationStatus({
            access_token: access_token,
            account_id: account_id,
            client_id: this.client_id,
            secret: this.secret,
            verification_status: verification_status,
        }), cb);
    };
    // institutions/search
    Client.prototype.searchInstitutionsByName = function (query, products, options, cb) {
        return plaidRequest(this.openAPIClient.institutionsSearch({
            client_id: this.client_id,
            secret: this.secret,
            options: options,
            products: products,
            query: query,
        }), cb);
    };
    // item/webhook/update
    Client.prototype.updateItemWebhook = function (access_token, webhook, cb) {
        return plaidRequest(this.openAPIClient.itemWebhookUpdate({
            access_token: access_token,
            client_id: this.client_id,
            secret: this.secret,
            webhook: webhook,
        }), cb);
    };
    return Client;
}());
exports.Client = Client;
// Helpers
var PlaidError = /** @class */ (function (_super) {
    __extends(PlaidError, _super);
    //@ts-ignore
    function PlaidError(body) {
        var _this = _super.call(this, body.error_code) || this;
        _this.name = 'PlaidError';
        if (typeof body === 'object') {
            Object.assign(_this, body);
        }
        return _this;
    }
    return PlaidError;
}(Error));
exports.PlaidError = PlaidError;
var rejectWithPlaidError = function (data) {
    var _a;
    var error = (_a = data.response) === null || _a === void 0 ? void 0 : _a.body;
    if (typeof error === 'object' && error !== null) {
        error.status_code = data.statusCode;
        return new PlaidError(error);
    }
    // Unknown body type returned, return a standard API_ERROR
    return new PlaidError({
        error_type: 'API_ERROR',
        status_code: data.statusCode,
        error_code: 'INTERNAL_SERVER_ERROR',
        error_message: String(error),
        display_message: null,
        request_id: null,
    });
};
var wrapPromise = function (request) {
    return new Promise(function (resolve, reject) {
        request
            .then(function (resp) {
            return resolve(resp.body);
        })
            .catch(function (err) {
            return reject(rejectWithPlaidError(err));
        });
    });
};
var callbackOptions = function (request, cb) {
    return request
        .then(function (resp) {
        cb(null, resp.body);
    })
        .catch(function (err, _) {
        cb(rejectWithPlaidError(err), null);
    });
};
var plaidRequest = function (request, cb) {
    if (cb) {
        return callbackOptions(request, cb);
    }
    else {
        return wrapPromise(request);
    }
};
exports.plaidRequest = plaidRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSw0Q0FtRThCO0FBc0I5QiwrQ0FBK0M7QUFDL0MsSUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDO0FBRXJDLElBQU0sWUFBWSxHQUFzQjtJQUN0QyxVQUFVLEVBQUUsOEJBQThCO0lBQzFDLE9BQU8sRUFBRSwyQkFBMkI7SUFDcEMsV0FBVyxFQUFFLCtCQUErQjtDQUM3QyxDQUFDO0FBazZCZSxvQ0FBWTtBQWg2QjdCO0lBT0UsZ0JBQVksTUFBYzs7UUFDeEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNqRCxNQUFNLElBQUksS0FBSyxDQUNiLDZCQUE2QjtnQkFDM0IsK0NBQStDO2dCQUMvQyxtQ0FBbUMsQ0FDdEMsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUMzQztRQUVELElBQ0UsQ0FBQztZQUNOLFlBQVksQ0FBQyxVQUFVO1lBQ3ZCLFlBQVksQ0FBQyxPQUFPO1lBQ3BCLFlBQVksQ0FBQyxXQUFXO1NBRWxCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDdEI7WUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUN0RDtRQUVELElBQUks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YXMgcmVxdWVzdCBmcm9tICdyZXF1ZXN0JztcblxuaW1wb3J0IHtcbiAgQWNjb3VudHNHZXRSZXNwb25zZSxcbiAgQW1vdW50LFxuICBBc3NldFJlcG9ydEF1ZGl0Q29weUNyZWF0ZVJlc3BvbnNlLFxuICBBc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZVJlc3BvbnNlLFxuICBBc3NldFJlcG9ydENyZWF0ZVJlcXVlc3RPcHRpb25zLFxuICBBc3NldFJlcG9ydENyZWF0ZVJlc3BvbnNlLFxuICBBc3NldFJlcG9ydEZpbHRlclJlc3BvbnNlLFxuICBBc3NldFJlcG9ydEdldFJlc3BvbnNlLFxuICBBc3NldFJlcG9ydFJlZnJlc2hSZXF1ZXN0T3B0aW9ucyxcbiAgQXNzZXRSZXBvcnRSZWZyZXNoUmVzcG9uc2UsXG4gIEFzc2V0UmVwb3J0UmVtb3ZlUmVzcG9uc2UsXG4gIEF1dGhHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgQXV0aEdldFJlc3BvbnNlLFxuICBCYWxhbmNlR2V0UmVxdWVzdE9wdGlvbnMsXG4gIEJhbGFuY2VHZXRSZXNwb25zZSxcbiAgQ2F0ZWdvcmllc0dldFJlc3BvbnNlLFxuICBEZXBvc2l0U3dpdGNoQ3JlYXRlUmVzcG9uc2UsXG4gIERlcG9zaXRTd2l0Y2hHZXRSZXNwb25zZSxcbiAgRGVwb3NpdFN3aXRjaFRva2VuQ3JlYXRlUmVzcG9uc2UsXG4gIElkZW50aXR5R2V0UmVzcG9uc2UsXG4gIEluc3RpdHV0aW9uU2VhcmNoUmVxdWVzdE9wdGlvbnMsXG4gIEluc3RpdHV0aW9uU2VhcmNoUmVzcG9uc2UsXG4gIEluc3RpdHV0aW9uc0dldEJ5SWRSZXF1ZXN0T3B0aW9ucyxcbiAgSW5zdGl0dXRpb25zR2V0QnlJZFJlc3BvbnNlLFxuICBJbnN0aXR1dGlvbnNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgSW5zdGl0dXRpb25zR2V0UmVzcG9uc2UsXG4gIEludmVzdG1lbnRzSG9sZGluZ3NHZXRSZXF1ZXN0LFxuICBJbnZlc3RtZW50c0hvbGRpbmdzR2V0UmVxdWVzdE9wdGlvbnMsXG4gIEludmVzdG1lbnRzVHJhbnNhY3Rpb25zR2V0UmVxdWVzdE9wdGlvbnMsXG4gIEludmVzdG1lbnRzVHJhbnNhY3Rpb25zR2V0UmVzcG9uc2UsXG4gIEl0ZW1BY2Nlc3NUb2tlbkludmFsaWRhdGVSZXNwb25zZSxcbiAgSXRlbUdldFJlc3BvbnNlLFxuICBJdGVtSW1wb3J0UmVxdWVzdE9wdGlvbnMsXG4gIEl0ZW1JbXBvcnRSZXF1ZXN0VXNlckF1dGgsXG4gIEl0ZW1JbXBvcnRSZXNwb25zZSxcbiAgSXRlbVB1YmxpY1Rva2VuRXhjaGFuZ2VSZXNwb25zZSxcbiAgSXRlbVJlbW92ZVJlc3BvbnNlLFxuICBJdGVtV2ViaG9va1VwZGF0ZVJlc3BvbnNlLFxuICBMaWFiaWxpdGllc0dldFJlcXVlc3RPcHRpb25zLFxuICBMaWFiaWxpdGllc0dldFJlc3BvbnNlLFxuICBMaW5rVG9rZW5DcmVhdGVSZXF1ZXN0LFxuICBMaW5rVG9rZW5DcmVhdGVSZXNwb25zZSxcbiAgUGF5bWVudEluaXRpYXRpb25BZGRyZXNzLFxuICBQYXltZW50SW5pdGlhdGlvblBheW1lbnRDcmVhdGVSZXF1ZXN0U2NoZWR1bGUsXG4gIFBheW1lbnRJbml0aWF0aW9uUGF5bWVudENyZWF0ZVJlc3BvbnNlLFxuICBQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2UsXG4gIFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlUmVxdWVzdEJhY3MsXG4gIFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlUmVzcG9uc2UsXG4gIFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50R2V0UmVzcG9uc2UsXG4gIFBheW1lbnRJbnRpYXRpb25QYXltZW50R2V0UmVzcG9uc2UsXG4gIFBsYWlkQXBpLFxuICBQcm9jZXNzb3JBdXRoR2V0UmVzcG9uc2UsXG4gIFByb2Nlc3NvckJhbGFuY2VHZXRSZXNwb25zZSxcbiAgUHJvY2Vzc29ySWRlbnRpdHlHZXRSZXNwb25zZSxcbiAgUHJvY2Vzc29yU3RyaXBlQmFua0FjY291bnRUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBQcm9jZXNzb3JUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBTYW5kYm94SXRlbUZpcmVXZWJob29rUmVxdWVzdCxcbiAgU2FuZGJveEl0ZW1GaXJlV2ViaG9va1Jlc3BvbnNlLFxuICBTYW5kYm94SXRlbVJlc2V0TG9naW5SZXNwb25zZSxcbiAgU2FuZGJveEl0ZW1TZXRWZXJpZmljYXRpb25TdGF0dXNSZXNwb25zZSxcbiAgU2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlUmVxdWVzdE9wdGlvbnMsXG4gIFNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBUcmFuc2FjdGlvbnNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgVHJhbnNhY3Rpb25zR2V0UmVzcG9uc2UsXG4gIFRyYW5zYWN0aW9uc1JlZnJlc2hSZXNwb25zZSxcbiAgV2ViaG9va1ZlcmlmaWNhdGlvbktleUdldFJlc3BvbnNlLFxufSBmcm9tICcuL2dlbmVyYXRlZC1jb2RlL2FwaSc7XG5cbi8vIFR5cGUgRGVmaW5pdGlvbnNcbmludGVyZmFjZSBQbGFpZEVudmlyb25tZW50cyB7XG4gIHByb2R1Y3Rpb246ICdodHRwczovL3Byb2R1Y3Rpb24ucGxhaWQuY29tJztcbiAgc2FuZGJveDogJ2h0dHBzOi8vc2FuZGJveC5wbGFpZC5jb20nO1xuICBkZXZlbG9wbWVudDogJ2h0dHBzOi8vZGV2ZWxvcG1lbnQucGxhaWQuY29tJztcbiAgW2Vudjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ29uZmlnIHtcbiAgY2xpZW50SUQ6IHN0cmluZztcbiAgc2VjcmV0OiBzdHJpbmc7XG4gIGVudjogUGxhaWRFbnZpcm9ubWVudHM7XG4gIG9wdGlvbnM6IE9iamVjdDtcbn1cblxudHlwZSBDYWxsYmFjazxUIGV4dGVuZHMgT2JqZWN0PiA9IChcbiAgZXJyOiBFcnJvciB8IG51bGwsXG4gIHJlc3BvbnNlOiBUIHwgbnVsbCxcbikgPT4gdm9pZDtcblxuLy8gTk9URTogVGhpcyB2ZXJzaW9uIHdpbGwgb25seSBzdXBwb3J0IGxhdGVzdC5cbmNvbnN0IERFRkFVTFRfVkVSU0lPTiA9ICcyMDIwLTA5LTE0JztcblxuY29uc3QgZW52aXJvbm1lbnRzOiBQbGFpZEVudmlyb25tZW50cyA9IHtcbiAgcHJvZHVjdGlvbjogJ2h0dHBzOi8vcHJvZHVjdGlvbi5wbGFpZC5jb20nLFxuICBzYW5kYm94OiAnaHR0cHM6Ly9zYW5kYm94LnBsYWlkLmNvbScsXG4gIGRldmVsb3BtZW50OiAnaHR0cHM6Ly9kZXZlbG9wbWVudC5wbGFpZC5jb20nLFxufTtcblxuY2xhc3MgQ2xpZW50IHtcbiAgY2xpZW50X2lkOiBzdHJpbmc7XG4gIHNlY3JldDogc3RyaW5nO1xuICBlbnY6IFBsYWlkRW52aXJvbm1lbnRzO1xuICBjbGllbnRfcmVxdWVzdF9vcHRzOiBPYmplY3Q7XG4gIG9wZW5BUElDbGllbnQ6IFBsYWlkQXBpO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdvYmplY3QnIHx8IGNvbmZpZyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVW5leHBlY3RlZCBwYXJhbWV0ZXIgdHlwZS4gJyArXG4gICAgICAgICAgJ1JlZmVyIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9wbGFpZC9wbGFpZC1ub2RlICcgK1xuICAgICAgICAgICdmb3IgaG93IHRvIGNyZWF0ZSBhIFBsYWlkIGNsaWVudC4nLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNsaWVudElEID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgUGxhaWQgXCJjbGllbnRJRFwiJyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zZWNyZXQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBQbGFpZCBcInNlY3JldFwiJyk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgIVtcblx0ZW52aXJvbm1lbnRzLnByb2R1Y3Rpb24sXG5cdGVudmlyb25tZW50cy5zYW5kYm94LFxuXHRlbnZpcm9ubWVudHMuZGV2ZWxvcG1lbnQsXG5cdC8vQHRzLWlnbm9yZVxuICAgICAgXS5pbmNsdWRlcyhjb25maWcuZW52KVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYWlkIGVudmlyb25tZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvbyBtYW55IGFyZ3VtZW50cyB0byBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIHRoaXMuY2xpZW50X2lkID0gY29uZmlnLmNsaWVudElEO1xuICAgIHRoaXMuc2VjcmV0ID0gY29uZmlnLnNlY3JldDtcbiAgICB0aGlzLmVudiA9IGNvbmZpZy5lbnY7XG5cbiAgICBpZiAoY29uZmlnLm9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgY29uZmlnLm9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmNsaWVudF9yZXF1ZXN0X29wdHMgPSBjb25maWcub3B0aW9ucztcblxuICAgIC8vIE5ldyBnZW5lcmF0ZWQgaW50ZXJmYWNlXG4gICAgdGhpcy5vcGVuQVBJQ2xpZW50ID0gbmV3IFBsYWlkQXBpKChjb25maWcuZW52IGFzIHVua25vd24pIGFzIHN0cmluZyk7XG5cbiAgICB0aGlzLm9wZW5BUElDbGllbnQuZGVmYXVsdEhlYWRlcnMgPSB7XG4gICAgICBbJ1BsYWlkLVZlcnNpb24nXTogREVGQVVMVF9WRVJTSU9OLFxuICAgIH07XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvY3JlYXRlXG4gIGNyZWF0ZUFzc2V0UmVwb3J0KFxuICAgIGFjY2Vzc190b2tlbnM6IEFycmF5PHN0cmluZz4sXG4gICAgZGF5c19yZXF1ZXN0ZWQ6IG51bWJlcixcbiAgICBvcHRpb25zPzogQXNzZXRSZXBvcnRDcmVhdGVSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0Q3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0Q3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0Q3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYWNjZXNzX3Rva2VucyxcbiAgICAgICAgZGF5c19yZXF1ZXN0ZWQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvYXVkaXRfY29weS9jcmVhdGVcbiAgY3JlYXRlQXVkaXRDb3B5KFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGF1ZGl0b3JfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0QXVkaXRDb3B5Q3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0QXVkaXRDb3B5Q3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0QXVkaXRDb3B5Q3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICBhdWRpdG9yX2lkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gZGVwb3NpdF9zd2l0Y2gvY3JlYXRlXG4gIGNyZWF0ZURlcG9zaXRTd2l0Y2goXG4gICAgdGFyZ2V0X2FjY291bnRfaWQ6IHN0cmluZyxcbiAgICB0YXJnZXRfYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxEZXBvc2l0U3dpdGNoQ3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPERlcG9zaXRTd2l0Y2hDcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuZGVwb3NpdFN3aXRjaENyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHRhcmdldF9hY2Nlc3NfdG9rZW4sXG4gICAgICAgIHRhcmdldF9hY2NvdW50X2lkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gZGVwb3NpdF9zd2l0Y2gvdG9rZW4vY3JlYXRlXG4gIGNyZWF0ZURlcG9zaXRTd2l0Y2hUb2tlbihcbiAgICBkZXBvc2l0X3N3aXRjaF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8RGVwb3NpdFN3aXRjaFRva2VuQ3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPERlcG9zaXRTd2l0Y2hUb2tlbkNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5kZXBvc2l0U3dpdGNoVG9rZW5DcmVhdGUoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBkZXBvc2l0X3N3aXRjaF9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZUxpbmtUb2tlbihcbiAgICBvcHRpb25zOiBMaW5rVG9rZW5DcmVhdGVSZXF1ZXN0LFxuICAgIGNiPzogQ2FsbGJhY2s8TGlua1Rva2VuQ3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPExpbmtUb2tlbkNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgb3B0aW9ucy5jbGllbnRfaWQgPSB0aGlzLmNsaWVudF9pZDtcbiAgICBvcHRpb25zLnNlY3JldCA9IHRoaXMuc2VjcmV0O1xuXG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdCh0aGlzLm9wZW5BUElDbGllbnQubGlua1Rva2VuQ3JlYXRlKG9wdGlvbnMpLCBjYik7XG4gIH1cblxuICAvLyBwYXltZW50X2luaXRpYXRpb24vcGF5bWVudC9jcmVhdGVcbiAgY3JlYXRlUGF5bWVudChcbiAgICByZWNpcGllbnRfaWQ6IHN0cmluZyxcbiAgICByZWZlcmVuY2U6IHN0cmluZyxcbiAgICBhbW91bnQ6IEFtb3VudCxcbiAgICBzY2hlZHVsZT86IFBheW1lbnRJbml0aWF0aW9uUGF5bWVudENyZWF0ZVJlcXVlc3RTY2hlZHVsZSxcbiAgICBjYj86IENhbGxiYWNrPFBheW1lbnRJbml0aWF0aW9uUGF5bWVudENyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQYXltZW50SW5pdGlhdGlvblBheW1lbnRDcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEluaXRpYXRpb25QYXltZW50Q3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgcmVjaXBpZW50X2lkLFxuICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgc2NoZWR1bGUsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyAvcGF5bWVudF9pbml0aWF0aW9uL3JlY2lwaWVudC9jcmVhdGVcbiAgY3JlYXRlUGF5bWVudFJlY2lwaWVudChcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaWJhbj86IHN0cmluZyxcbiAgICBhZGRyZXNzPzogUGF5bWVudEluaXRpYXRpb25BZGRyZXNzLFxuICAgIGJhY3M/OiBQYXltZW50SW5pdGlhdGlvblJlY2lwaWVudENyZWF0ZVJlcXVlc3RCYWNzLFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRDcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRDcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRDcmVhdGUoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBuYW1lLFxuICAgICAgICBpYmFuLFxuICAgICAgICBiYWNzLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29yL3Rva2VuL2NyZWF0ZVxuICAvLyBwcm9jZXNzb3IvYXBleC9wcm9jZXNzb3JfdG9rZW4vY3JlYXRlXG4gIC8vIHByb2Nlc3Nvci9zdHJpcGUvYmFua19hY2NvdW50X3Rva2VuL2NyZWF0ZVxuICBjcmVhdGVQcm9jZXNzb3JUb2tlbihcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBhY2NvdW50X2lkOiBzdHJpbmcsXG4gICAgcHJvY2Vzc29yOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxQcm9jZXNzb3JUb2tlbkNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQcm9jZXNzb3JUb2tlbkNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgYWNjb3VudF9pZCxcbiAgICB9O1xuICAgIGlmIChwcm9jZXNzb3IgPT0gJ3N0cmlwZScpIHtcbiAgICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wcm9jZXNzb3JTdHJpcGVCYW5rQWNjb3VudFRva2VuQ3JlYXRlKG9wdGlvbnMpLFxuICAgICAgICBjYixcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzb3IgPT0gJ2FwZXgnKSB7XG4gICAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29yQXBleFByb2Nlc3NvclRva2VuQ3JlYXRlKG9wdGlvbnMpLFxuICAgICAgICBjYixcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9wdGlvbnNXaXRoUHJvY2Vzc29yID0geyAuLi5vcHRpb25zLCBwcm9jZXNzb3IgfTtcbiAgICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wcm9jZXNzb3JUb2tlbkNyZWF0ZShvcHRpb25zV2l0aFByb2Nlc3NvciksXG4gICAgICAgIGNiLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBwcm9jZXNzb3Ivc3RyaXBlL2JhbmtfYWNjb3VudF90b2tlbi9jcmVhdGVcbiAgY3JlYXRlU3RyaXBlVG9rZW4oXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29yU3RyaXBlQmFua0FjY291bnRUb2tlbkNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQcm9jZXNzb3JTdHJpcGVCYW5rQWNjb3VudFRva2VuQ3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVQcm9jZXNzb3JUb2tlbihhY2Nlc3NfdG9rZW4sIGFjY291bnRfaWQsICdzdHJpcGUnLCBjYik7XG4gIH1cblxuICAvLyBpdGVtL3B1YmxpY190b2tlbi9leGNoYW5nZVxuICBleGNoYW5nZVB1YmxpY1Rva2VuKFxuICAgIHB1YmxpY190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbVB1YmxpY1Rva2VuRXhjaGFuZ2VSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbVB1YmxpY1Rva2VuRXhjaGFuZ2VSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaXRlbVB1YmxpY1Rva2VuRXhjaGFuZ2Uoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBwdWJsaWNfdG9rZW4sXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvZmlsdGVyXG4gIGZpbHRlckFzc2V0UmVwb3J0KFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGFjY291bnRfaWRzX3RvX2V4Y2x1ZGU6IEFycmF5PHN0cmluZz4sXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEZpbHRlclJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEZpbHRlclJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEZpbHRlcih7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGFzc2V0X3JlcG9ydF90b2tlbixcbiAgICAgICAgYWNjb3VudF9pZHNfdG9fZXhjbHVkZSxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFjY291bnRzL2dldFxuICBnZXRBY2NvdW50cyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEFjY291bnRzR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFjY291bnRzR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFjY291bnRzR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvZ2V0XG4gIGdldEFzc2V0UmVwb3J0KFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGluY2x1ZGVfaW5zaWdodHM/OiBib29sZWFuLFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QXNzZXRSZXBvcnRHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRHZXQoe1xuICAgICAgICBhc3NldF9yZXBvcnRfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIGluY2x1ZGVfaW5zaWdodHMsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvcGRmL2dldFxuICBnZXRBc3NldFJlcG9ydFBkZihcbiAgICBhc3NldF9yZXBvcnRfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEJ1ZmZlcj4sXG4gICk6IFByb21pc2U8QnVmZmVyPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydFBERkdldCh7XG4gICAgICAgIGFzc2V0X3JlcG9ydF90b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9hdWRpdF9jb3B5L2dldFxuICBnZXRBdWRpdENvcHkoXG4gICAgYXVkaXRfY29weV90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QXNzZXRSZXBvcnRHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRBdWRpdENvcHlHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBhdWRpdF9jb3B5X3Rva2VuLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXV0aC9nZXRcbiAgZ2V0QXV0aChcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBvcHRpb25zPzogQXV0aEdldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8QXV0aEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBdXRoR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmF1dGhHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW46IGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFjY291bnRzL2JhbGFuY2UvZ2V0XG4gIGdldEJhbGFuY2UoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEJhbGFuY2VHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEJhbGFuY2VHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QmFsYW5jZUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5iYWxhbmNlR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBjYXRlZ29yaWVzL2dldFxuICBnZXRDYXRlZ29yaWVzKFxuICAgIGNiPzogQ2FsbGJhY2s8Q2F0ZWdvcmllc0dldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxDYXRlZ29yaWVzR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KHRoaXMub3BlbkFQSUNsaWVudC5jYXRlZ29yaWVzR2V0KHt9KSwgY2IpO1xuICB9XG5cbiAgLy8gZGVwb3NpdF9zd2l0Y2gvZ2V0XG4gIGdldERlcG9zaXRTd2l0Y2goXG4gICAgZGVwb3NpdF9zd2l0Y2hfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPERlcG9zaXRTd2l0Y2hHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8RGVwb3NpdFN3aXRjaEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5kZXBvc2l0U3dpdGNoR2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgZGVwb3NpdF9zd2l0Y2hfaWQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpbnZlc3RtZW50cy9ob2xkaW5ncy9nZXRcbiAgZ2V0SG9sZGluZ3MoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEludmVzdG1lbnRzSG9sZGluZ3NHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEludmVzdG1lbnRzSG9sZGluZ3NHZXRSZXF1ZXN0PixcbiAgKTogUHJvbWlzZTxJbnZlc3RtZW50c0hvbGRpbmdzR2V0UmVxdWVzdD4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW52ZXN0bWVudHNIb2xkaW5nc0dldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGlkZW50aXR5L2dldFxuICBnZXRJZGVudGl0eShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPElkZW50aXR5R2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPElkZW50aXR5R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmlkZW50aXR5R2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaW5zdGl0dXRpb25zL2dldF9ieV9pZFxuICBnZXRJbnN0aXR1dGlvbkJ5SWQoXG4gICAgaW5zdGl0dXRpb25faWQ6IHN0cmluZyxcbiAgICBvcHRpb25zPzogSW5zdGl0dXRpb25zR2V0QnlJZFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW5zdGl0dXRpb25zR2V0QnlJZFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJbnN0aXR1dGlvbnNHZXRCeUlkUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lmluc3RpdHV0aW9uc0dldEJ5SUQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBpbnN0aXR1dGlvbl9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGluc3RpdHV0aW9ucy9nZXRcbiAgZ2V0SW5zdGl0dXRpb25zKFxuICAgIGNvdW50OiBudW1iZXIsXG4gICAgb2Zmc2V0OiBudW1iZXIsXG4gICAgb3B0aW9ucz86IEluc3RpdHV0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW5zdGl0dXRpb25zR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEluc3RpdHV0aW9uc0dldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pbnN0aXR1dGlvbnNHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBjb3VudCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaW52ZXN0bWVudHMvdHJhbnNhY3Rpb25zL2dldFxuICBnZXRJbnZlc3RtZW50VHJhbnNhY3Rpb25zKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIHN0YXJ0X2RhdGU6IHN0cmluZyxcbiAgICBlbmRfZGF0ZTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBJbnZlc3RtZW50c1RyYW5zYWN0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHN0YXJ0X2RhdGUsXG4gICAgICAgIGVuZF9kYXRlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS9nZXRcbiAgZ2V0SXRlbShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1HZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gbGlhYmlsaXRpZXMvZ2V0XG4gIGdldExpYWJpbGl0aWVzKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBMaWFiaWxpdGllc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8TGlhYmlsaXRpZXNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8TGlhYmlsaXRpZXNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQubGlhYmlsaXRpZXNHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvL1RPRE86IE9wZW5BUEkgR0VUIExJTksgVE9LRU4hXG4gIGdldExpbmtUb2tlbigpIHt9XG5cbiAgLy8gcGF5bWVudF9pbml0aWF0aW9uL3BheW1lbnQvZ2V0XG4gIGdldFBheW1lbnQoXG4gICAgcGF5bWVudF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEludGlhdGlvblBheW1lbnRHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UGF5bWVudEludGlhdGlvblBheW1lbnRHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEludGlhdGlvblBheW1lbnRHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwYXltZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gcGF5bWVudF9pbml0aWF0aW9uL3JlY2lwaWVudC9nZXRcbiAgZ2V0UGF5bWVudFJlY2lwaWVudChcbiAgICByZWNpcGllbnRfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50R2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50R2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgcmVjaXBpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gdHJhbnNhY3Rpb25zL2dldFxuICBnZXRUcmFuc2FjdGlvbnMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgc3RhcnRfZGF0ZTogc3RyaW5nLFxuICAgIGVuZF9kYXRlOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IFRyYW5zYWN0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8VHJhbnNhY3Rpb25zR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFRyYW5zYWN0aW9uc0dldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC50cmFuc2FjdGlvbnNHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW46IGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgc3RhcnRfZGF0ZSxcbiAgICAgICAgZW5kX2RhdGUsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyB3ZWJob29rX3ZlcmlmaWNhdGlvbl9rZXkvZ2V0XG4gIGdldFdlYmhvb2tWZXJpZmljYXRpb25LZXkoXG4gICAga2V5X2lkOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxXZWJob29rVmVyaWZpY2F0aW9uS2V5R2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFdlYmhvb2tWZXJpZmljYXRpb25LZXlHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQud2ViaG9va1ZlcmlmaWNhdGlvbktleUdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIGtleV9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGl0ZW0vaW1wb3J0XG4gIGltcG9ydEl0ZW0oXG4gICAgcHJvZHVjdHM6IEFycmF5PHN0cmluZz4sXG4gICAgdXNlcl9hdXRoOiBJdGVtSW1wb3J0UmVxdWVzdFVzZXJBdXRoLFxuICAgIG9wdGlvbnM/OiBJdGVtSW1wb3J0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxJdGVtSW1wb3J0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEl0ZW1JbXBvcnRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaXRlbUltcG9ydCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICB1c2VyX2F1dGgsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpdGVtL2FjY2Vzc190b2tlbi9pbnZhbGlkYXRlXG4gIGludmFsaWRhdGVBY2Nlc3NUb2tlbihcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1BY2Nlc3NUb2tlbkludmFsaWRhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbUFjY2Vzc1Rva2VuSW52YWxpZGF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtQWNjZXNzVG9rZW5JbnZhbGlkYXRlKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gcGF5bWVudF9pbml0aWF0aW9uL3JlY2lwaWVudC9saXN0XG4gIGxpc3RQYXltZW50UmVjaXBpZW50cyhcbiAgICBjYj86IENhbGxiYWNrPFBheW1lbnRJbml0aWF0aW9uUGF5bWVudExpc3RSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UGF5bWVudEluaXRpYXRpb25QYXltZW50TGlzdFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wYXltZW50SW5pdGlhdGlvblJlY2lwaWVudExpc3Qoe1xuICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXRcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHBheW1lbnRfaW5pdGlhdGlvbi9wYXltZW50L2xpc3RcbiAgbGlzdFBheW1lbnRzKFxuICAgIG9wdGlvbnM/OiB7Y291bnQ6IG51bWJlciwgY3Vyc29yOiBzdHJpbmcgfSxcbiAgICBjYj86IENhbGxiYWNrPFBheW1lbnRJbml0aWF0aW9uUGF5bWVudExpc3RSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UGF5bWVudEluaXRpYXRpb25QYXltZW50TGlzdFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgY291bnQ6IChvcHRpb25zPy5jb3VudCAhPSBudWxsKSA/IG9wdGlvbnMuY291bnQgOiB1bmRlZmluZWQsXG4gICAgICAgIGN1cnNvcjogKG9wdGlvbnM/LmN1cnNvciAhPSBudWxsKSA/IG9wdGlvbnMuY3Vyc29yIDogdW5kZWZpbmVkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29yL2F1dGgvZ2V0XG4gIGdldEF1dGhQcm9jZXNzb3IoXG4gICAgcHJvY2Vzc29yX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxQcm9jZXNzb3JBdXRoR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFByb2Nlc3NvckF1dGhHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29yQXV0aEdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHByb2Nlc3Nvcl90b2tlbixcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHByb2Nlc3Nvci9iYWxhbmNlL2dldFxuICBnZXRCYWxhbmNlUHJvY2Vzc29yKFxuICAgIHByb2Nlc3Nvcl90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29yQmFsYW5jZUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQcm9jZXNzb3JCYWxhbmNlR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvckJhbGFuY2VHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwcm9jZXNzb3JfdG9rZW4sXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwcm9jZXNzb3IvaWRlbnRpdHkvZ2V0XG4gIGdldElkZW50aXR5UHJvY2Vzc29yKFxuICAgIHByb2Nlc3Nvcl90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29ySWRlbnRpdHlHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UHJvY2Vzc29ySWRlbnRpdHlHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29ySWRlbnRpdHlHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwcm9jZXNzb3JfdG9rZW4sXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvcmVmcmVzaFxuICByZWZyZXNoQXNzZXRSZXBvcnQoXG4gICAgYXNzZXRfcmVwb3J0X3Rva2VuOiBzdHJpbmcsXG4gICAgZGF5c19yZXF1ZXN0ZWQ/OiBudW1iZXIsXG4gICAgb3B0aW9ucz86IEFzc2V0UmVwb3J0UmVmcmVzaFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRSZWZyZXNoUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0UmVmcmVzaFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydFJlZnJlc2goe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBhc3NldF9yZXBvcnRfdG9rZW4sXG4gICAgICAgIGRheXNfcmVxdWVzdGVkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gdHJhbnNhY3Rpb25zL3JlZnJlc2hcbiAgcmVmcmVzaFRyYW5zYWN0aW9ucyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFRyYW5zYWN0aW9uc1JlZnJlc2hSZXNwb25zZT4sXG4gICk6IFByb21pc2U8VHJhbnNhY3Rpb25zUmVmcmVzaFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC50cmFuc2FjdGlvbnNSZWZyZXNoKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L3JlbW92ZVxuICByZW1vdmVBc3NldFJlcG9ydChcbiAgICBhc3NldF9yZXBvcnRfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0UmVtb3ZlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0UmVtb3ZlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0UmVtb3ZlKHtcbiAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2F1ZGl0X2NvcHkvcmVtb3ZlXG4gIHJlbW92ZUF1ZGl0Q29weShcbiAgICBhdWRpdF9jb3B5X3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZSh7XG4gICAgICAgIGF1ZGl0X2NvcHlfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpdGVtL3JlbW92ZVxuICByZW1vdmVJdGVtKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbVJlbW92ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtUmVtb3ZlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1SZW1vdmUoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBzYW5kYm94L2l0ZW0vcmVzZXRfbG9naW5cbiAgcmVzZXRMb2dpbihcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFNhbmRib3hJdGVtUmVzZXRMb2dpblJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxTYW5kYm94SXRlbVJlc2V0TG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuc2FuZGJveEl0ZW1SZXNldExvZ2luKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gc2FuZGJveC9wdWJsaWNfdG9rZW4vY3JlYXRlXG4gIHNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZShcbiAgICBpbnN0aXR1dGlvbl9pZDogc3RyaW5nLFxuICAgIGluaXRpYWxfcHJvZHVjdHM6IEFycmF5PHN0cmluZz4sXG4gICAgb3B0aW9uczogU2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlUmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxTYW5kYm94UHVibGljVG9rZW5DcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8U2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIGluc3RpdHV0aW9uX2lkLFxuICAgICAgICBpbml0aWFsX3Byb2R1Y3RzLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gc2FuZGJveC9pdGVtL2ZpcmVfd2ViaG9va1xuICBzYW5kYm94SXRlbUZpcmVXZWJob29rKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIHdlYmhvb2tfY29kZTogU2FuZGJveEl0ZW1GaXJlV2ViaG9va1JlcXVlc3QuV2ViaG9va0NvZGVFbnVtLFxuICAgIGNiPzogQ2FsbGJhY2s8U2FuZGJveEl0ZW1GaXJlV2ViaG9va1Jlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxTYW5kYm94SXRlbUZpcmVXZWJob29rUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnNhbmRib3hJdGVtRmlyZVdlYmhvb2soe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHdlYmhvb2tfY29kZSxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHNhbmRib3gvaXRlbS9zZXRfdmVyaWZpY2F0aW9uX3N0YXR1c1xuICBzYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1cyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBhY2NvdW50X2lkOiBzdHJpbmcsXG4gICAgdmVyaWZpY2F0aW9uX3N0YXR1czogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8U2FuZGJveEl0ZW1TZXRWZXJpZmljYXRpb25TdGF0dXNSZXNwb25zZT4sXG4gICk6IFByb21pc2U8U2FuZGJveEl0ZW1TZXRWZXJpZmljYXRpb25TdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuc2FuZGJveEl0ZW1TZXRWZXJpZmljYXRpb25TdGF0dXMoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGFjY291bnRfaWQsXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHZlcmlmaWNhdGlvbl9zdGF0dXMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpbnN0aXR1dGlvbnMvc2VhcmNoXG4gIHNlYXJjaEluc3RpdHV0aW9uc0J5TmFtZShcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHByb2R1Y3RzOiBBcnJheTxzdHJpbmc+LFxuICAgIG9wdGlvbnM/OiBJbnN0aXR1dGlvblNlYXJjaFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW5zdGl0dXRpb25TZWFyY2hSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SW5zdGl0dXRpb25TZWFyY2hSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW5zdGl0dXRpb25zU2VhcmNoKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS93ZWJob29rL3VwZGF0ZVxuICB1cGRhdGVJdGVtV2ViaG9vayhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICB3ZWJob29rOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxJdGVtV2ViaG9va1VwZGF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtV2ViaG9va1VwZGF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtV2ViaG9va1VwZGF0ZSh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgd2ViaG9vayxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzXG5jbGFzcyBQbGFpZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvL0B0cy1pZ25vcmVcbiAgY29uc3RydWN0b3IoYm9keTogYW55KSB7XG4gICAgc3VwZXIoYm9keS5lcnJvcl9jb2RlKTtcbiAgICB0aGlzLm5hbWUgPSAnUGxhaWRFcnJvcic7XG5cbiAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdvYmplY3QnKSB7XG4gICAgICAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLCBib2R5KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVqZWN0V2l0aFBsYWlkRXJyb3IgPSAoZGF0YTogcmVxdWVzdC5SZXF1ZXN0KTogUGxhaWRFcnJvciA9PiB7XG4gIGNvbnN0IGVycm9yID0gZGF0YS5yZXNwb25zZT8uYm9keTtcblxuICBpZiAodHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiBlcnJvciAhPT0gbnVsbCkge1xuICAgIGVycm9yLnN0YXR1c19jb2RlID0gKChkYXRhIGFzIHVua25vd24pIGFzIHJlcXVlc3QuUmVzcG9uc2UpLnN0YXR1c0NvZGU7XG5cbiAgICByZXR1cm4gbmV3IFBsYWlkRXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgLy8gVW5rbm93biBib2R5IHR5cGUgcmV0dXJuZWQsIHJldHVybiBhIHN0YW5kYXJkIEFQSV9FUlJPUlxuICByZXR1cm4gbmV3IFBsYWlkRXJyb3Ioe1xuICAgIGVycm9yX3R5cGU6ICdBUElfRVJST1InLFxuICAgIHN0YXR1c19jb2RlOiAoKGRhdGEgYXMgdW5rbm93bikgYXMgcmVxdWVzdC5SZXNwb25zZSkuc3RhdHVzQ29kZSxcbiAgICBlcnJvcl9jb2RlOiAnSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICBlcnJvcl9tZXNzYWdlOiBTdHJpbmcoZXJyb3IpLFxuICAgIGRpc3BsYXlfbWVzc2FnZTogbnVsbCxcbiAgICByZXF1ZXN0X2lkOiBudWxsLFxuICB9KTtcbn07XG5cbmNvbnN0IHdyYXBQcm9taXNlID0gKFxuICByZXF1ZXN0OiBQcm9taXNlPHtcbiAgICByZXNwb25zZTogaHR0cC5JbmNvbWluZ01lc3NhZ2U7XG4gICAgYm9keTogYW55O1xuICB9PixcbikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlcXVlc3RcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3AuYm9keSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IHJlcXVlc3QuUmVxdWVzdCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHJlamVjdFdpdGhQbGFpZEVycm9yKGVycikpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgY2FsbGJhY2tPcHRpb25zID0gKHJlcXVlc3Q6IGFueSwgY2I6IENhbGxiYWNrPGh0dHAuSW5jb21pbmdNZXNzYWdlPikgPT4ge1xuICByZXR1cm4gcmVxdWVzdFxuICAgIC50aGVuKChyZXNwOiByZXF1ZXN0LlJlc3BvbnNlKSA9PiB7XG4gICAgICBjYihudWxsLCByZXNwLmJvZHkpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IHJlcXVlc3QuUmVxdWVzdCwgXzogYW55KSA9PiB7XG4gICAgICBjYihyZWplY3RXaXRoUGxhaWRFcnJvcihlcnIpLCBudWxsKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHBsYWlkUmVxdWVzdCA9IChcbiAgcmVxdWVzdDogUHJvbWlzZTx7XG4gICAgcmVzcG9uc2U6IGh0dHAuSW5jb21pbmdNZXNzYWdlO1xuICAgIGJvZHk6IGFueTtcbiAgfT4sXG4gIGNiPzogQ2FsbGJhY2s8YW55PixcbikgPT4ge1xuICBpZiAoY2IpIHtcbiAgICByZXR1cm4gY2FsbGJhY2tPcHRpb25zKHJlcXVlc3QsIGNiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gd3JhcFByb21pc2UocmVxdWVzdCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IENsaWVudCwgZW52aXJvbm1lbnRzLCBQbGFpZEVycm9yLCBwbGFpZFJlcXVlc3QgfTtcbiJdfQ==