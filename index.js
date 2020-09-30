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
var generated_code_1 = require("./generated-code");
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
        this.openAPIClient = new generated_code_1.PlaidApi({
            baseOptions: {
                headers: (_a = {},
                    _a['Plaid-Version'] = DEFAULT_VERSION,
                    _a),
            },
        }, config.env);
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
    // link/token/create/
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
    Client.prototype.getAccounts = function (access_token, options, cb) {
        return plaidRequest(this.openAPIClient.accountsGet({
            access_token: access_token,
            client_id: this.client_id,
            options: options,
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
        }, { json: true, responseType: 'arraybuffer' }), cb);
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
    Client.prototype.getInstitutionById = function (institution_id, country_codes, options, cb) {
        return plaidRequest(this.openAPIClient.institutionsGetByID({
            client_id: this.client_id,
            country_codes: country_codes,
            institution_id: institution_id,
            secret: this.secret,
            options: options,
        }), cb);
    };
    // institutions/get
    Client.prototype.getInstitutions = function (count, offset, country_codes, options, cb) {
        return plaidRequest(this.openAPIClient.institutionsGet({
            client_id: this.client_id,
            count: count,
            offset: offset,
            country_codes: country_codes,
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
    // link/token/get
    Client.prototype.getLinkToken = function (link_token, cb) {
        return plaidRequest(this.openAPIClient.linkTokenGet({
            client_id: this.client_id,
            link_token: link_token,
            secret: this.secret,
        }), cb);
    };
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
            secret: this.secret,
        }), cb);
    };
    // payment_initiation/payment/list
    Client.prototype.listPayments = function (options, cb) {
        return plaidRequest(this.openAPIClient.paymentInitiationPaymentList({
            client_id: this.client_id,
            secret: this.secret,
            count: (options === null || options === void 0 ? void 0 : options.count) != null ? options.count : undefined,
            cursor: (options === null || options === void 0 ? void 0 : options.cursor) != null ? options.cursor : undefined,
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
    Client.prototype.searchInstitutionsByName = function (query, products, country_codes, options, cb) {
        return plaidRequest(this.openAPIClient.institutionsSearch({
            client_id: this.client_id,
            secret: this.secret,
            query: query,
            products: products,
            country_codes: country_codes,
            options: options,
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
    var _a, _b;
    var error = (_a = data.response) === null || _a === void 0 ? void 0 : _a.data;
    if (typeof error === 'object' && error !== null) {
        error.status_code = (_b = data.response) === null || _b === void 0 ? void 0 : _b.status;
        return new PlaidError(error);
    }
    // Unknown body type returned, return a standard API_ERROR
    return new PlaidError({
        error_type: 'API_ERROR',
        status_code: data.code,
        error_code: 'INTERNAL_SERVER_ERROR',
        error_message: String(error),
        display_message: null,
        request_id: null,
    });
};
var wrapPromise = function (caller) {
    return new Promise(function (resolve, reject) {
        caller
            .then(function (resp) {
            return resolve(resp.data);
        })
            .catch(function (err) {
            return reject(rejectWithPlaidError(err));
        });
    });
};
var callbackOptions = function (request, cb) {
    return request
        .then(function (resp) {
        cb(null, resp.data);
    })
        .catch(function (err, _) {
        cb(rejectWithPlaidError(err), null);
    });
};
var plaidRequest = function (caller, cb) {
    if (cb) {
        return callbackOptions(caller, cb);
    }
    else {
        return wrapPromise(caller);
    }
};
exports.plaidRequest = plaidRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxtREFzRTBCO0FBc0IxQiwrQ0FBK0M7QUFDL0MsSUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDO0FBRXJDLElBQU0sWUFBWSxHQUFzQjtJQUN0QyxVQUFVLEVBQUUsOEJBQThCO0lBQzFDLE9BQU8sRUFBRSwyQkFBMkI7SUFDcEMsV0FBVyxFQUFFLCtCQUErQjtDQUM3QyxDQUFDO0FBdTdCZSxvQ0FBWTtBQXI3QjdCO0lBT0UsZ0JBQVksTUFBYzs7UUFDeEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNqRCxNQUFNLElBQUksS0FBSyxDQUNiLDZCQUE2QjtnQkFDM0IsK0NBQStDO2dCQUMvQyxtQ0FBbUMsQ0FDdEMsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUMzQztRQUVELElBQ0UsQ0FBQztZQUNDLFlBQVksQ0FBQyxVQUFVO1lBQ3ZCLFlBQVksQ0FBQyxPQUFPO1lBQ3BCLFlBQVksQ0FBQyxXQUFXO1NBRXpCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDdEI7WUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUN0RDtRQUVELElBQUks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Q0FBTTtRQUNuQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRixJQUFNLFlBQVksR0FBRyxVQUNuQixNQUFvQyxFQUNwQyxFQUFrQjtJQUVsQixJQUFJLEVBQUUsRUFBRTtRQUNOLE9BQU8sZUFBZSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNwQztTQUFNO1FBQ0wsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDNUI7QUFDSCxDQUFDLENBQUM7QUFFeUMsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7XG4gIEFjY291bnRzR2V0UmVxdWVzdE9wdGlvbnMsXG4gIEFjY291bnRzR2V0UmVzcG9uc2UsXG4gIEFtb3VudCxcbiAgQXNzZXRSZXBvcnRBdWRpdENvcHlDcmVhdGVSZXNwb25zZSxcbiAgQXNzZXRSZXBvcnRBdWRpdENvcHlSZW1vdmVSZXNwb25zZSxcbiAgQXNzZXRSZXBvcnRDcmVhdGVSZXF1ZXN0T3B0aW9ucyxcbiAgQXNzZXRSZXBvcnRDcmVhdGVSZXNwb25zZSxcbiAgQXNzZXRSZXBvcnRGaWx0ZXJSZXNwb25zZSxcbiAgQXNzZXRSZXBvcnRHZXRSZXNwb25zZSxcbiAgQXNzZXRSZXBvcnRSZWZyZXNoUmVxdWVzdE9wdGlvbnMsXG4gIEFzc2V0UmVwb3J0UmVmcmVzaFJlc3BvbnNlLFxuICBBc3NldFJlcG9ydFJlbW92ZVJlc3BvbnNlLFxuICBBdXRoR2V0UmVxdWVzdE9wdGlvbnMsXG4gIEF1dGhHZXRSZXNwb25zZSxcbiAgQmFsYW5jZUdldFJlcXVlc3RPcHRpb25zLFxuICBCYWxhbmNlR2V0UmVzcG9uc2UsXG4gIENhdGVnb3JpZXNHZXRSZXNwb25zZSxcbiAgQ291bnRyeUNvZGUsXG4gIERlcG9zaXRTd2l0Y2hDcmVhdGVSZXNwb25zZSxcbiAgRGVwb3NpdFN3aXRjaEdldFJlc3BvbnNlLFxuICBEZXBvc2l0U3dpdGNoVG9rZW5DcmVhdGVSZXNwb25zZSxcbiAgSWRlbnRpdHlHZXRSZXNwb25zZSxcbiAgSW5zdGl0dXRpb25TZWFyY2hSZXF1ZXN0T3B0aW9ucyxcbiAgSW5zdGl0dXRpb25TZWFyY2hSZXNwb25zZSxcbiAgSW5zdGl0dXRpb25zR2V0QnlJZFJlcXVlc3RPcHRpb25zLFxuICBJbnN0aXR1dGlvbnNHZXRCeUlkUmVzcG9uc2UsXG4gIEluc3RpdHV0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICBJbnN0aXR1dGlvbnNHZXRSZXNwb25zZSxcbiAgSW52ZXN0bWVudHNIb2xkaW5nc0dldFJlcXVlc3QsXG4gIEludmVzdG1lbnRzSG9sZGluZ3NHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgSW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgSW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXRSZXNwb25zZSxcbiAgSXRlbUFjY2Vzc1Rva2VuSW52YWxpZGF0ZVJlc3BvbnNlLFxuICBJdGVtR2V0UmVzcG9uc2UsXG4gIEl0ZW1JbXBvcnRSZXF1ZXN0T3B0aW9ucyxcbiAgSXRlbUltcG9ydFJlcXVlc3RVc2VyQXV0aCxcbiAgSXRlbUltcG9ydFJlc3BvbnNlLFxuICBJdGVtUHVibGljVG9rZW5FeGNoYW5nZVJlc3BvbnNlLFxuICBJdGVtUmVtb3ZlUmVzcG9uc2UsXG4gIEl0ZW1XZWJob29rVXBkYXRlUmVzcG9uc2UsXG4gIExpYWJpbGl0aWVzR2V0UmVxdWVzdE9wdGlvbnMsXG4gIExpYWJpbGl0aWVzR2V0UmVzcG9uc2UsXG4gIExpbmtUb2tlbkNyZWF0ZVJlcXVlc3QsXG4gIExpbmtUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBMaW5rVG9rZW5HZXRSZXNwb25zZSxcbiAgUGF5bWVudEluaXRpYXRpb25BZGRyZXNzLFxuICBQYXltZW50SW5pdGlhdGlvblBheW1lbnRDcmVhdGVSZXF1ZXN0U2NoZWR1bGUsXG4gIFBheW1lbnRJbml0aWF0aW9uUGF5bWVudENyZWF0ZVJlc3BvbnNlLFxuICBQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2UsXG4gIFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlUmVxdWVzdEJhY3MsXG4gIFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlUmVzcG9uc2UsXG4gIFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50R2V0UmVzcG9uc2UsXG4gIFBheW1lbnRJbnRpYXRpb25QYXltZW50R2V0UmVzcG9uc2UsXG4gIFBsYWlkQXBpLFxuICBQcm9jZXNzb3JBdXRoR2V0UmVzcG9uc2UsXG4gIFByb2Nlc3NvckJhbGFuY2VHZXRSZXNwb25zZSxcbiAgUHJvY2Vzc29ySWRlbnRpdHlHZXRSZXNwb25zZSxcbiAgUHJvY2Vzc29yU3RyaXBlQmFua0FjY291bnRUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBQcm9jZXNzb3JUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBTYW5kYm94SXRlbUZpcmVXZWJob29rUmVxdWVzdFdlYmhvb2tDb2RlRW51bSxcbiAgU2FuZGJveEl0ZW1GaXJlV2ViaG9va1Jlc3BvbnNlLFxuICBTYW5kYm94SXRlbVJlc2V0TG9naW5SZXNwb25zZSxcbiAgU2FuZGJveEl0ZW1TZXRWZXJpZmljYXRpb25TdGF0dXNSZXNwb25zZSxcbiAgU2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlUmVxdWVzdE9wdGlvbnMsXG4gIFNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBUcmFuc2FjdGlvbnNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgVHJhbnNhY3Rpb25zR2V0UmVzcG9uc2UsXG4gIFRyYW5zYWN0aW9uc1JlZnJlc2hSZXNwb25zZSxcbiAgV2ViaG9va1ZlcmlmaWNhdGlvbktleUdldFJlc3BvbnNlLFxufSBmcm9tICcuL2dlbmVyYXRlZC1jb2RlJztcblxuLy8gVHlwZSBEZWZpbml0aW9uc1xuaW50ZXJmYWNlIFBsYWlkRW52aXJvbm1lbnRzIHtcbiAgcHJvZHVjdGlvbjogJ2h0dHBzOi8vcHJvZHVjdGlvbi5wbGFpZC5jb20nO1xuICBzYW5kYm94OiAnaHR0cHM6Ly9zYW5kYm94LnBsYWlkLmNvbSc7XG4gIGRldmVsb3BtZW50OiAnaHR0cHM6Ly9kZXZlbG9wbWVudC5wbGFpZC5jb20nO1xuICBbZW52OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDb25maWcge1xuICBjbGllbnRJRDogc3RyaW5nO1xuICBzZWNyZXQ6IHN0cmluZztcbiAgZW52OiBQbGFpZEVudmlyb25tZW50cztcbiAgb3B0aW9uczogT2JqZWN0O1xufVxuXG50eXBlIENhbGxiYWNrPFQgZXh0ZW5kcyBPYmplY3Q+ID0gKFxuICBlcnI6IEVycm9yIHwgbnVsbCxcbiAgcmVzcG9uc2U6IFQgfCBudWxsLFxuKSA9PiB2b2lkO1xuXG4vLyBOT1RFOiBUaGlzIHZlcnNpb24gd2lsbCBvbmx5IHN1cHBvcnQgbGF0ZXN0LlxuY29uc3QgREVGQVVMVF9WRVJTSU9OID0gJzIwMjAtMDktMTQnO1xuXG5jb25zdCBlbnZpcm9ubWVudHM6IFBsYWlkRW52aXJvbm1lbnRzID0ge1xuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly9wcm9kdWN0aW9uLnBsYWlkLmNvbScsXG4gIHNhbmRib3g6ICdodHRwczovL3NhbmRib3gucGxhaWQuY29tJyxcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwczovL2RldmVsb3BtZW50LnBsYWlkLmNvbScsXG59O1xuXG5jbGFzcyBDbGllbnQge1xuICBjbGllbnRfaWQ6IHN0cmluZztcbiAgc2VjcmV0OiBzdHJpbmc7XG4gIGVudjogUGxhaWRFbnZpcm9ubWVudHM7XG4gIGNsaWVudF9yZXF1ZXN0X29wdHM6IE9iamVjdDtcbiAgb3BlbkFQSUNsaWVudDogUGxhaWRBcGk7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ29iamVjdCcgfHwgY29uZmlnID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdVbmV4cGVjdGVkIHBhcmFtZXRlciB0eXBlLiAnICtcbiAgICAgICAgICAnUmVmZXIgdG8gaHR0cHM6Ly9naXRodWIuY29tL3BsYWlkL3BsYWlkLW5vZGUgJyArXG4gICAgICAgICAgJ2ZvciBob3cgdG8gY3JlYXRlIGEgUGxhaWQgY2xpZW50LicsXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2xpZW50SUQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBQbGFpZCBcImNsaWVudElEXCInKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNlY3JldCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFBsYWlkIFwic2VjcmV0XCInKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhW1xuICAgICAgICBlbnZpcm9ubWVudHMucHJvZHVjdGlvbixcbiAgICAgICAgZW52aXJvbm1lbnRzLnNhbmRib3gsXG4gICAgICAgIGVudmlyb25tZW50cy5kZXZlbG9wbWVudCxcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBdLmluY2x1ZGVzKGNvbmZpZy5lbnYpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUGxhaWQgZW52aXJvbm1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVG9vIG1hbnkgYXJndW1lbnRzIHRvIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGllbnRfaWQgPSBjb25maWcuY2xpZW50SUQ7XG4gICAgdGhpcy5zZWNyZXQgPSBjb25maWcuc2VjcmV0O1xuICAgIHRoaXMuZW52ID0gY29uZmlnLmVudjtcblxuICAgIGlmIChjb25maWcub3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBjb25maWcub3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuY2xpZW50X3JlcXVlc3Rfb3B0cyA9IGNvbmZpZy5vcHRpb25zO1xuXG4gICAgLy8gTmV3IGdlbmVyYXRlZCBpbnRlcmZhY2VcbiAgICB0aGlzLm9wZW5BUElDbGllbnQgPSBuZXcgUGxhaWRBcGkoXG4gICAgICB7XG4gICAgICAgIGJhc2VPcHRpb25zOiB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgWydQbGFpZC1WZXJzaW9uJ106IERFRkFVTFRfVkVSU0lPTixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIChjb25maWcuZW52IGFzIHVua25vd24pIGFzIHN0cmluZyxcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2NyZWF0ZVxuICBjcmVhdGVBc3NldFJlcG9ydChcbiAgICBhY2Nlc3NfdG9rZW5zOiBBcnJheTxzdHJpbmc+LFxuICAgIGRheXNfcmVxdWVzdGVkOiBudW1iZXIsXG4gICAgb3B0aW9ucz86IEFzc2V0UmVwb3J0Q3JlYXRlUmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydENyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydENyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydENyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGFjY2Vzc190b2tlbnMsXG4gICAgICAgIGRheXNfcmVxdWVzdGVkLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2F1ZGl0X2NvcHkvY3JlYXRlXG4gIGNyZWF0ZUF1ZGl0Q29weShcbiAgICBhc3NldF9yZXBvcnRfdG9rZW46IHN0cmluZyxcbiAgICBhdWRpdG9yX2lkOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEF1ZGl0Q29weUNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEF1ZGl0Q29weUNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEF1ZGl0Q29weUNyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGFzc2V0X3JlcG9ydF90b2tlbixcbiAgICAgICAgYXVkaXRvcl9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGRlcG9zaXRfc3dpdGNoL2NyZWF0ZVxuICBjcmVhdGVEZXBvc2l0U3dpdGNoKFxuICAgIHRhcmdldF9hY2NvdW50X2lkOiBzdHJpbmcsXG4gICAgdGFyZ2V0X2FjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8RGVwb3NpdFN3aXRjaENyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxEZXBvc2l0U3dpdGNoQ3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmRlcG9zaXRTd2l0Y2hDcmVhdGUoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICB0YXJnZXRfYWNjZXNzX3Rva2VuLFxuICAgICAgICB0YXJnZXRfYWNjb3VudF9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGRlcG9zaXRfc3dpdGNoL3Rva2VuL2NyZWF0ZVxuICBjcmVhdGVEZXBvc2l0U3dpdGNoVG9rZW4oXG4gICAgZGVwb3NpdF9zd2l0Y2hfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPERlcG9zaXRTd2l0Y2hUb2tlbkNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxEZXBvc2l0U3dpdGNoVG9rZW5DcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuZGVwb3NpdFN3aXRjaFRva2VuQ3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgZGVwb3NpdF9zd2l0Y2hfaWQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBsaW5rL3Rva2VuL2NyZWF0ZS9cbiAgY3JlYXRlTGlua1Rva2VuKFxuICAgIG9wdGlvbnM6IExpbmtUb2tlbkNyZWF0ZVJlcXVlc3QsXG4gICAgY2I/OiBDYWxsYmFjazxMaW5rVG9rZW5DcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8TGlua1Rva2VuQ3JlYXRlUmVzcG9uc2U+IHtcbiAgICBvcHRpb25zLmNsaWVudF9pZCA9IHRoaXMuY2xpZW50X2lkO1xuICAgIG9wdGlvbnMuc2VjcmV0ID0gdGhpcy5zZWNyZXQ7XG5cbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KHRoaXMub3BlbkFQSUNsaWVudC5saW5rVG9rZW5DcmVhdGUob3B0aW9ucyksIGNiKTtcbiAgfVxuXG4gIC8vIHBheW1lbnRfaW5pdGlhdGlvbi9wYXltZW50L2NyZWF0ZVxuICBjcmVhdGVQYXltZW50KFxuICAgIHJlY2lwaWVudF9pZDogc3RyaW5nLFxuICAgIHJlZmVyZW5jZTogc3RyaW5nLFxuICAgIGFtb3VudDogQW1vdW50LFxuICAgIHNjaGVkdWxlPzogUGF5bWVudEluaXRpYXRpb25QYXltZW50Q3JlYXRlUmVxdWVzdFNjaGVkdWxlLFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEluaXRpYXRpb25QYXltZW50Q3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFBheW1lbnRJbml0aWF0aW9uUGF5bWVudENyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wYXltZW50SW5pdGlhdGlvblBheW1lbnRDcmVhdGUoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICByZWNpcGllbnRfaWQsXG4gICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBzY2hlZHVsZSxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIC9wYXltZW50X2luaXRpYXRpb24vcmVjaXBpZW50L2NyZWF0ZVxuICBjcmVhdGVQYXltZW50UmVjaXBpZW50KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpYmFuPzogc3RyaW5nLFxuICAgIGFkZHJlc3M/OiBQYXltZW50SW5pdGlhdGlvbkFkZHJlc3MsXG4gICAgYmFjcz86IFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlUmVxdWVzdEJhY3MsXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW5pdGlhdGlvblJlY2lwaWVudENyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQYXltZW50SW5pdGlhdGlvblJlY2lwaWVudENyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wYXltZW50SW5pdGlhdGlvblJlY2lwaWVudENyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGliYW4sXG4gICAgICAgIGJhY3MsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwcm9jZXNzb3IvdG9rZW4vY3JlYXRlXG4gIC8vIHByb2Nlc3Nvci9hcGV4L3Byb2Nlc3Nvcl90b2tlbi9jcmVhdGVcbiAgLy8gcHJvY2Vzc29yL3N0cmlwZS9iYW5rX2FjY291bnRfdG9rZW4vY3JlYXRlXG4gIGNyZWF0ZVByb2Nlc3NvclRva2VuKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGFjY291bnRfaWQ6IHN0cmluZyxcbiAgICBwcm9jZXNzb3I6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFByb2Nlc3NvclRva2VuQ3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFByb2Nlc3NvclRva2VuQ3JlYXRlUmVzcG9uc2U+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICBhY2NvdW50X2lkLFxuICAgIH07XG4gICAgaWYgKHByb2Nlc3NvciA9PSAnc3RyaXBlJykge1xuICAgICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvclN0cmlwZUJhbmtBY2NvdW50VG9rZW5DcmVhdGUob3B0aW9ucyksXG4gICAgICAgIGNiLFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3NvciA9PSAnYXBleCcpIHtcbiAgICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wcm9jZXNzb3JBcGV4UHJvY2Vzc29yVG9rZW5DcmVhdGUob3B0aW9ucyksXG4gICAgICAgIGNiLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3B0aW9uc1dpdGhQcm9jZXNzb3IgPSB7IC4uLm9wdGlvbnMsIHByb2Nlc3NvciB9O1xuICAgICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvclRva2VuQ3JlYXRlKG9wdGlvbnNXaXRoUHJvY2Vzc29yKSxcbiAgICAgICAgY2IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByb2Nlc3Nvci9zdHJpcGUvYmFua19hY2NvdW50X3Rva2VuL2NyZWF0ZVxuICBjcmVhdGVTdHJpcGVUb2tlbihcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBhY2NvdW50X2lkOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxQcm9jZXNzb3JTdHJpcGVCYW5rQWNjb3VudFRva2VuQ3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFByb2Nlc3NvclN0cmlwZUJhbmtBY2NvdW50VG9rZW5DcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVByb2Nlc3NvclRva2VuKGFjY2Vzc190b2tlbiwgYWNjb3VudF9pZCwgJ3N0cmlwZScsIGNiKTtcbiAgfVxuXG4gIC8vIGl0ZW0vcHVibGljX3Rva2VuL2V4Y2hhbmdlXG4gIGV4Y2hhbmdlUHVibGljVG9rZW4oXG4gICAgcHVibGljX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxJdGVtUHVibGljVG9rZW5FeGNoYW5nZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtUHVibGljVG9rZW5FeGNoYW5nZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtUHVibGljVG9rZW5FeGNoYW5nZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHB1YmxpY190b2tlbixcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9maWx0ZXJcbiAgZmlsdGVyQXNzZXRSZXBvcnQoXG4gICAgYXNzZXRfcmVwb3J0X3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZHNfdG9fZXhjbHVkZTogQXJyYXk8c3RyaW5nPixcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0RmlsdGVyUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0RmlsdGVyUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0RmlsdGVyKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICBhY2NvdW50X2lkc190b19leGNsdWRlLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYWNjb3VudHMvZ2V0XG4gIGdldEFjY291bnRzKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBBY2NvdW50c0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8QWNjb3VudHNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QWNjb3VudHNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYWNjb3VudHNHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvZ2V0XG4gIGdldEFzc2V0UmVwb3J0KFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGluY2x1ZGVfaW5zaWdodHM/OiBib29sZWFuLFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QXNzZXRSZXBvcnRHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRHZXQoe1xuICAgICAgICBhc3NldF9yZXBvcnRfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIGluY2x1ZGVfaW5zaWdodHMsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvcGRmL2dldFxuICBnZXRBc3NldFJlcG9ydFBkZihcbiAgICBhc3NldF9yZXBvcnRfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEJ1ZmZlcj4sXG4gICk6IFByb21pc2U8QnVmZmVyPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydFBERkdldChcbiAgICAgICAge1xuICAgICAgICAgIGFzc2V0X3JlcG9ydF90b2tlbixcbiAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIH0sXG4gICAgICAgIHsganNvbjogdHJ1ZSwgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0sXG4gICAgICApLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9hdWRpdF9jb3B5L2dldFxuICBnZXRBdWRpdENvcHkoXG4gICAgYXVkaXRfY29weV90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QXNzZXRSZXBvcnRHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRBdWRpdENvcHlHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBhdWRpdF9jb3B5X3Rva2VuLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXV0aC9nZXRcbiAgZ2V0QXV0aChcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBvcHRpb25zPzogQXV0aEdldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8QXV0aEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBdXRoR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmF1dGhHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW46IGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFjY291bnRzL2JhbGFuY2UvZ2V0XG4gIGdldEJhbGFuY2UoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEJhbGFuY2VHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEJhbGFuY2VHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QmFsYW5jZUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5iYWxhbmNlR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBjYXRlZ29yaWVzL2dldFxuICBnZXRDYXRlZ29yaWVzKFxuICAgIGNiPzogQ2FsbGJhY2s8Q2F0ZWdvcmllc0dldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxDYXRlZ29yaWVzR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KHRoaXMub3BlbkFQSUNsaWVudC5jYXRlZ29yaWVzR2V0KHt9KSwgY2IpO1xuICB9XG5cbiAgLy8gZGVwb3NpdF9zd2l0Y2gvZ2V0XG4gIGdldERlcG9zaXRTd2l0Y2goXG4gICAgZGVwb3NpdF9zd2l0Y2hfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPERlcG9zaXRTd2l0Y2hHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8RGVwb3NpdFN3aXRjaEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5kZXBvc2l0U3dpdGNoR2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgZGVwb3NpdF9zd2l0Y2hfaWQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpbnZlc3RtZW50cy9ob2xkaW5ncy9nZXRcbiAgZ2V0SG9sZGluZ3MoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEludmVzdG1lbnRzSG9sZGluZ3NHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEludmVzdG1lbnRzSG9sZGluZ3NHZXRSZXF1ZXN0PixcbiAgKTogUHJvbWlzZTxJbnZlc3RtZW50c0hvbGRpbmdzR2V0UmVxdWVzdD4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW52ZXN0bWVudHNIb2xkaW5nc0dldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGlkZW50aXR5L2dldFxuICBnZXRJZGVudGl0eShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPElkZW50aXR5R2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPElkZW50aXR5R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmlkZW50aXR5R2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaW5zdGl0dXRpb25zL2dldF9ieV9pZFxuICBnZXRJbnN0aXR1dGlvbkJ5SWQoXG4gICAgaW5zdGl0dXRpb25faWQ6IHN0cmluZyxcbiAgICBjb3VudHJ5X2NvZGVzOiBBcnJheTxDb3VudHJ5Q29kZT4sXG4gICAgb3B0aW9ucz86IEluc3RpdHV0aW9uc0dldEJ5SWRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEluc3RpdHV0aW9uc0dldEJ5SWRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SW5zdGl0dXRpb25zR2V0QnlJZFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pbnN0aXR1dGlvbnNHZXRCeUlEKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgY291bnRyeV9jb2RlcyxcbiAgICAgICAgaW5zdGl0dXRpb25faWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpbnN0aXR1dGlvbnMvZ2V0XG4gIGdldEluc3RpdHV0aW9ucyhcbiAgICBjb3VudDogbnVtYmVyLFxuICAgIG9mZnNldDogbnVtYmVyLFxuICAgIGNvdW50cnlfY29kZXM6IEFycmF5PENvdW50cnlDb2RlPixcbiAgICBvcHRpb25zPzogSW5zdGl0dXRpb25zR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxJbnN0aXR1dGlvbnNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SW5zdGl0dXRpb25zR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lmluc3RpdHV0aW9uc0dldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIGNvdW50LFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGNvdW50cnlfY29kZXMsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpbnZlc3RtZW50cy90cmFuc2FjdGlvbnMvZ2V0XG4gIGdldEludmVzdG1lbnRUcmFuc2FjdGlvbnMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgc3RhcnRfZGF0ZTogc3RyaW5nLFxuICAgIGVuZF9kYXRlOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEludmVzdG1lbnRzVHJhbnNhY3Rpb25zR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxJbnZlc3RtZW50c1RyYW5zYWN0aW9uc0dldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJbnZlc3RtZW50c1RyYW5zYWN0aW9uc0dldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pbnZlc3RtZW50c1RyYW5zYWN0aW9uc0dldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgc3RhcnRfZGF0ZSxcbiAgICAgICAgZW5kX2RhdGUsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpdGVtL2dldFxuICBnZXRJdGVtKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1HZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBsaWFiaWxpdGllcy9nZXRcbiAgZ2V0TGlhYmlsaXRpZXMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IExpYWJpbGl0aWVzR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxMaWFiaWxpdGllc0dldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxMaWFiaWxpdGllc0dldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5saWFiaWxpdGllc0dldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGxpbmsvdG9rZW4vZ2V0XG4gIGdldExpbmtUb2tlbihcbiAgICBsaW5rX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxMaW5rVG9rZW5HZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8TGlua1Rva2VuR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmxpbmtUb2tlbkdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIGxpbmtfdG9rZW4sXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgIClcbiAgfVxuXG4gIC8vIHBheW1lbnRfaW5pdGlhdGlvbi9wYXltZW50L2dldFxuICBnZXRQYXltZW50KFxuICAgIHBheW1lbnRfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFBheW1lbnRJbnRpYXRpb25QYXltZW50R2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFBheW1lbnRJbnRpYXRpb25QYXltZW50R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbnRpYXRpb25QYXltZW50R2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgcGF5bWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHBheW1lbnRfaW5pdGlhdGlvbi9yZWNpcGllbnQvZ2V0XG4gIGdldFBheW1lbnRSZWNpcGllbnQoXG4gICAgcmVjaXBpZW50X2lkOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW5pdGlhdGlvblJlY2lwaWVudEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQYXltZW50SW5pdGlhdGlvblJlY2lwaWVudEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wYXltZW50SW5pdGlhdGlvblJlY2lwaWVudEdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHJlY2lwaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHRyYW5zYWN0aW9ucy9nZXRcbiAgZ2V0VHJhbnNhY3Rpb25zKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIHN0YXJ0X2RhdGU6IHN0cmluZyxcbiAgICBlbmRfZGF0ZTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBUcmFuc2FjdGlvbnNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPFRyYW5zYWN0aW9uc0dldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxUcmFuc2FjdGlvbnNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQudHJhbnNhY3Rpb25zR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHN0YXJ0X2RhdGUsXG4gICAgICAgIGVuZF9kYXRlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gd2ViaG9va192ZXJpZmljYXRpb25fa2V5L2dldFxuICBnZXRXZWJob29rVmVyaWZpY2F0aW9uS2V5KFxuICAgIGtleV9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8V2ViaG9va1ZlcmlmaWNhdGlvbktleUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxXZWJob29rVmVyaWZpY2F0aW9uS2V5R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LndlYmhvb2tWZXJpZmljYXRpb25LZXlHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBrZXlfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpdGVtL2ltcG9ydFxuICBpbXBvcnRJdGVtKFxuICAgIHByb2R1Y3RzOiBBcnJheTxzdHJpbmc+LFxuICAgIHVzZXJfYXV0aDogSXRlbUltcG9ydFJlcXVlc3RVc2VyQXV0aCxcbiAgICBvcHRpb25zPzogSXRlbUltcG9ydFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbUltcG9ydFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtSW1wb3J0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1JbXBvcnQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgdXNlcl9hdXRoLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS9hY2Nlc3NfdG9rZW4vaW52YWxpZGF0ZVxuICBpbnZhbGlkYXRlQWNjZXNzVG9rZW4oXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxJdGVtQWNjZXNzVG9rZW5JbnZhbGlkYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEl0ZW1BY2Nlc3NUb2tlbkludmFsaWRhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaXRlbUFjY2Vzc1Rva2VuSW52YWxpZGF0ZSh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHBheW1lbnRfaW5pdGlhdGlvbi9yZWNpcGllbnQvbGlzdFxuICBsaXN0UGF5bWVudFJlY2lwaWVudHMoXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFBheW1lbnRJbml0aWF0aW9uUGF5bWVudExpc3RSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRMaXN0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHBheW1lbnRfaW5pdGlhdGlvbi9wYXltZW50L2xpc3RcbiAgbGlzdFBheW1lbnRzKFxuICAgIG9wdGlvbnM/OiB7IGNvdW50OiBudW1iZXI7IGN1cnNvcjogc3RyaW5nIH0sXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFBheW1lbnRJbml0aWF0aW9uUGF5bWVudExpc3RSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEluaXRpYXRpb25QYXltZW50TGlzdCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGNvdW50OiBvcHRpb25zPy5jb3VudCAhPSBudWxsID8gb3B0aW9ucy5jb3VudCA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3Vyc29yOiBvcHRpb25zPy5jdXJzb3IgIT0gbnVsbCA/IG9wdGlvbnMuY3Vyc29yIDogdW5kZWZpbmVkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29yL2F1dGgvZ2V0XG4gIGdldEF1dGhQcm9jZXNzb3IoXG4gICAgcHJvY2Vzc29yX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxQcm9jZXNzb3JBdXRoR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFByb2Nlc3NvckF1dGhHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29yQXV0aEdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHByb2Nlc3Nvcl90b2tlbixcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHByb2Nlc3Nvci9iYWxhbmNlL2dldFxuICBnZXRCYWxhbmNlUHJvY2Vzc29yKFxuICAgIHByb2Nlc3Nvcl90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29yQmFsYW5jZUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQcm9jZXNzb3JCYWxhbmNlR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvckJhbGFuY2VHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwcm9jZXNzb3JfdG9rZW4sXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwcm9jZXNzb3IvaWRlbnRpdHkvZ2V0XG4gIGdldElkZW50aXR5UHJvY2Vzc29yKFxuICAgIHByb2Nlc3Nvcl90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29ySWRlbnRpdHlHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UHJvY2Vzc29ySWRlbnRpdHlHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29ySWRlbnRpdHlHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwcm9jZXNzb3JfdG9rZW4sXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvcmVmcmVzaFxuICByZWZyZXNoQXNzZXRSZXBvcnQoXG4gICAgYXNzZXRfcmVwb3J0X3Rva2VuOiBzdHJpbmcsXG4gICAgZGF5c19yZXF1ZXN0ZWQ/OiBudW1iZXIsXG4gICAgb3B0aW9ucz86IEFzc2V0UmVwb3J0UmVmcmVzaFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRSZWZyZXNoUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0UmVmcmVzaFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydFJlZnJlc2goe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBhc3NldF9yZXBvcnRfdG9rZW4sXG4gICAgICAgIGRheXNfcmVxdWVzdGVkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gdHJhbnNhY3Rpb25zL3JlZnJlc2hcbiAgcmVmcmVzaFRyYW5zYWN0aW9ucyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFRyYW5zYWN0aW9uc1JlZnJlc2hSZXNwb25zZT4sXG4gICk6IFByb21pc2U8VHJhbnNhY3Rpb25zUmVmcmVzaFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC50cmFuc2FjdGlvbnNSZWZyZXNoKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L3JlbW92ZVxuICByZW1vdmVBc3NldFJlcG9ydChcbiAgICBhc3NldF9yZXBvcnRfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0UmVtb3ZlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0UmVtb3ZlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0UmVtb3ZlKHtcbiAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2F1ZGl0X2NvcHkvcmVtb3ZlXG4gIHJlbW92ZUF1ZGl0Q29weShcbiAgICBhdWRpdF9jb3B5X3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZSh7XG4gICAgICAgIGF1ZGl0X2NvcHlfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpdGVtL3JlbW92ZVxuICByZW1vdmVJdGVtKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbVJlbW92ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtUmVtb3ZlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1SZW1vdmUoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBzYW5kYm94L2l0ZW0vcmVzZXRfbG9naW5cbiAgcmVzZXRMb2dpbihcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFNhbmRib3hJdGVtUmVzZXRMb2dpblJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxTYW5kYm94SXRlbVJlc2V0TG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuc2FuZGJveEl0ZW1SZXNldExvZ2luKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gc2FuZGJveC9wdWJsaWNfdG9rZW4vY3JlYXRlXG4gIHNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZShcbiAgICBpbnN0aXR1dGlvbl9pZDogc3RyaW5nLFxuICAgIGluaXRpYWxfcHJvZHVjdHM6IEFycmF5PHN0cmluZz4sXG4gICAgb3B0aW9uczogU2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlUmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxTYW5kYm94UHVibGljVG9rZW5DcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8U2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIGluc3RpdHV0aW9uX2lkLFxuICAgICAgICBpbml0aWFsX3Byb2R1Y3RzLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gc2FuZGJveC9pdGVtL2ZpcmVfd2ViaG9va1xuICBzYW5kYm94SXRlbUZpcmVXZWJob29rKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIHdlYmhvb2tfY29kZTogU2FuZGJveEl0ZW1GaXJlV2ViaG9va1JlcXVlc3RXZWJob29rQ29kZUVudW0sXG4gICAgY2I/OiBDYWxsYmFjazxTYW5kYm94SXRlbUZpcmVXZWJob29rUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFNhbmRib3hJdGVtRmlyZVdlYmhvb2tSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuc2FuZGJveEl0ZW1GaXJlV2ViaG9vayh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgd2ViaG9va19jb2RlLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gc2FuZGJveC9pdGVtL3NldF92ZXJpZmljYXRpb25fc3RhdHVzXG4gIHNhbmRib3hJdGVtU2V0VmVyaWZpY2F0aW9uU3RhdHVzKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGFjY291bnRfaWQ6IHN0cmluZyxcbiAgICB2ZXJpZmljYXRpb25fc3RhdHVzOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxTYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1c1Jlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxTYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5zYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1cyh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgYWNjb3VudF9pZCxcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgdmVyaWZpY2F0aW9uX3N0YXR1cyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGluc3RpdHV0aW9ucy9zZWFyY2hcbiAgc2VhcmNoSW5zdGl0dXRpb25zQnlOYW1lKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcHJvZHVjdHM6IEFycmF5PHN0cmluZz4sXG4gICAgY291bnRyeV9jb2RlczogQXJyYXk8Q291bnRyeUNvZGU+LFxuICAgIG9wdGlvbnM/OiBJbnN0aXR1dGlvblNlYXJjaFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW5zdGl0dXRpb25TZWFyY2hSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SW5zdGl0dXRpb25TZWFyY2hSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW5zdGl0dXRpb25zU2VhcmNoKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBjb3VudHJ5X2NvZGVzLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS93ZWJob29rL3VwZGF0ZVxuICB1cGRhdGVJdGVtV2ViaG9vayhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICB3ZWJob29rOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxJdGVtV2ViaG9va1VwZGF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtV2ViaG9va1VwZGF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtV2ViaG9va1VwZGF0ZSh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgd2ViaG9vayxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzXG5jbGFzcyBQbGFpZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvL0B0cy1pZ25vcmVcbiAgY29uc3RydWN0b3IoYm9keTogYW55KSB7XG4gICAgc3VwZXIoYm9keS5lcnJvcl9jb2RlKTtcbiAgICB0aGlzLm5hbWUgPSAnUGxhaWRFcnJvcic7XG5cbiAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdvYmplY3QnKSB7XG4gICAgICAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLCBib2R5KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVqZWN0V2l0aFBsYWlkRXJyb3IgPSAoZGF0YTogYXhpb3MuQXhpb3NFcnJvcik6IFBsYWlkRXJyb3IgPT4ge1xuICBjb25zdCBlcnJvciA9IGRhdGEucmVzcG9uc2U/LmRhdGE7XG5cbiAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgZXJyb3IgIT09IG51bGwpIHtcbiAgICBlcnJvci5zdGF0dXNfY29kZSA9IGRhdGEucmVzcG9uc2U/LnN0YXR1cztcblxuICAgIHJldHVybiBuZXcgUGxhaWRFcnJvcihlcnJvcik7XG4gIH1cblxuICAvLyBVbmtub3duIGJvZHkgdHlwZSByZXR1cm5lZCwgcmV0dXJuIGEgc3RhbmRhcmQgQVBJX0VSUk9SXG4gIHJldHVybiBuZXcgUGxhaWRFcnJvcih7XG4gICAgZXJyb3JfdHlwZTogJ0FQSV9FUlJPUicsXG4gICAgc3RhdHVzX2NvZGU6IGRhdGEuY29kZSxcbiAgICBlcnJvcl9jb2RlOiAnSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICBlcnJvcl9tZXNzYWdlOiBTdHJpbmcoZXJyb3IpLFxuICAgIGRpc3BsYXlfbWVzc2FnZTogbnVsbCxcbiAgICByZXF1ZXN0X2lkOiBudWxsLFxuICB9KTtcbn07XG5cbmNvbnN0IHdyYXBQcm9taXNlID0gKGNhbGxlcjogUHJvbWlzZTxheGlvcy5BeGlvc1Jlc3BvbnNlPikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNhbGxlclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcC5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogYXhpb3MuQXhpb3NFcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHJlamVjdFdpdGhQbGFpZEVycm9yKGVycikpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgY2FsbGJhY2tPcHRpb25zID0gKHJlcXVlc3Q6IGFueSwgY2I6IENhbGxiYWNrPGF4aW9zLkF4aW9zUmVzcG9uc2U+KSA9PiB7XG4gIHJldHVybiByZXF1ZXN0XG4gICAgLnRoZW4oKHJlc3A6IGF4aW9zLkF4aW9zUmVzcG9uc2UpID0+IHtcbiAgICAgIGNiKG51bGwsIHJlc3AuZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogYXhpb3MuQXhpb3NFcnJvciwgXzogYW55KSA9PiB7XG4gICAgICBjYihyZWplY3RXaXRoUGxhaWRFcnJvcihlcnIpLCBudWxsKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHBsYWlkUmVxdWVzdCA9IChcbiAgY2FsbGVyOiBQcm9taXNlPGF4aW9zLkF4aW9zUmVzcG9uc2U+LFxuICBjYj86IENhbGxiYWNrPGFueT4sXG4pID0+IHtcbiAgaWYgKGNiKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrT3B0aW9ucyhjYWxsZXIsIGNiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gd3JhcFByb21pc2UoY2FsbGVyKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgQ2xpZW50LCBlbnZpcm9ubWVudHMsIFBsYWlkRXJyb3IsIHBsYWlkUmVxdWVzdCB9O1xuIl19