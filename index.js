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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plaidRequest = exports.PlaidError = exports.environments = exports.Client = void 0;
var generated_code_1 = require("./generated-code");
var pjson = __importStar(require("./package.json"));
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
                    _a['User-Agent'] = 'Plaid Node v' + pjson.version,
                    _a),
            },
        }, config.env);
    }
    // bank_transfer/balance/get
    Client.prototype.bankTransferBalanceGet = function (origination_account_id, cb) {
        return plaidRequest(this.openAPIClient.bankTransferBalanceGet({
            client_id: this.client_id,
            secret: this.secret,
            origination_account_id: origination_account_id,
        }), cb);
    };
    // bank_transfer/cancel
    Client.prototype.bankTransferCancel = function (bank_transfer_id, cb) {
        return plaidRequest(this.openAPIClient.bankTransferCancel({
            client_id: this.client_id,
            secret: this.secret,
            bank_transfer_id: bank_transfer_id
        }), cb);
    };
    // bank_transfer/create
    Client.prototype.bankTransferCreate = function (options, cb) {
        options.client_id = this.client_id;
        options.secret = this.secret;
        return plaidRequest(this.openAPIClient.bankTransferCreate(options), cb);
    };
    // bank_transfer/event/list
    Client.prototype.bankTransferEventList = function (options, cb) {
        options.client_id = this.client_id;
        options.secret = this.secret;
        return plaidRequest(this.openAPIClient.bankTransferEventList(options), cb);
    };
    // bank_transfer/event/sync
    Client.prototype.bankTransferEventSync = function (after_id, count, cb) {
        return plaidRequest(this.openAPIClient.bankTransferEventSync({
            client_id: this.client_id,
            secret: this.secret,
            after_id: after_id,
            count: count,
        }), cb);
    };
    // bank_transfer/get
    Client.prototype.bankTransferGet = function (bank_transfer_id, cb) {
        return plaidRequest(this.openAPIClient.bankTransferGet({
            client_id: this.client_id,
            secret: this.secret,
            bank_transfer_id: bank_transfer_id,
        }), cb);
    };
    // bank_transfer/list
    Client.prototype.bankTransferList = function (options, cb) {
        options.client_id = this.client_id;
        options.secret = this.secret;
        return plaidRequest(this.openAPIClient.bankTransferList(options), cb);
    };
    // bank_transfer/migrate_account
    Client.prototype.bankTransferMigrateAccount = function (account_number, routing_number, account_type, cb) {
        return plaidRequest(this.openAPIClient.bankTransferMigrateAccount({
            client_id: this.client_id,
            secret: this.secret,
            account_number: account_number,
            routing_number: routing_number,
            account_type: account_type,
        }), cb);
    };
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
        return plaidRequest(this.openAPIClient.assetReportPdfGet({
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
        return plaidRequest(this.openAPIClient.accountsBalanceGet({
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
        return plaidRequest(this.openAPIClient.institutionsGetById({
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
    // sandbox/bank_transfer/simulate
    Client.prototype.sandboxBankTransferSimulate = function (bank_transfer_id, event_type, failure_reason, cb) {
        return plaidRequest(this.openAPIClient.sandboxBankTransferSimulate({
            client_id: this.client_id,
            secret: this.secret,
            bank_transfer_id: bank_transfer_id,
            event_type: event_type,
            failure_reason: failure_reason,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsbURBb0YwQjtBQUUxQixvREFBd0M7QUFzQnhDLCtDQUErQztBQUMvQyxJQUFNLGVBQWUsR0FBRyxZQUFZLENBQUM7QUFFckMsSUFBTSxZQUFZLEdBQXNCO0lBQ3RDLFVBQVUsRUFBRSw4QkFBOEI7SUFDMUMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQyxXQUFXLEVBQUUsK0JBQStCO0NBQzdDLENBQUM7QUEwakNlLG9DQUFZO0FBeGpDN0I7SUFPRSxnQkFBWSxNQUFjOztRQUN4QixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ2pELE1BQU0sSUFBSSxLQUFLLENBQ2IsNkJBQTZCO2dCQUMzQiwrQ0FBK0M7Z0JBQy9DLG1DQUFtQyxDQUN0QyxDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUM3QztRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFDRSxDQUFDO1lBQ0MsWUFBWSxDQUFDLFVBQVU7WUFDdkIsWUFBWSxDQUFDLE9BQU87WUFDcEIsWUFBWSxDQUFDLFdBQVc7U0FFekIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUN0QjtZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxt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bSAnYXhpb3MnO1xuXG5pbXBvcnQge1xuICBBY2NvdW50c0dldFJlcXVlc3RPcHRpb25zLFxuICBBY2NvdW50c0dldFJlc3BvbnNlLFxuICBBbW91bnQsXG4gIEFzc2V0UmVwb3J0QXVkaXRDb3B5Q3JlYXRlUmVzcG9uc2UsXG4gIEFzc2V0UmVwb3J0QXVkaXRDb3B5UmVtb3ZlUmVzcG9uc2UsXG4gIEFzc2V0UmVwb3J0Q3JlYXRlUmVxdWVzdE9wdGlvbnMsXG4gIEFzc2V0UmVwb3J0Q3JlYXRlUmVzcG9uc2UsXG4gIEFzc2V0UmVwb3J0RmlsdGVyUmVzcG9uc2UsXG4gIEFzc2V0UmVwb3J0R2V0UmVzcG9uc2UsXG4gIEFzc2V0UmVwb3J0UmVmcmVzaFJlcXVlc3RPcHRpb25zLFxuICBBc3NldFJlcG9ydFJlZnJlc2hSZXNwb25zZSxcbiAgQXNzZXRSZXBvcnRSZW1vdmVSZXNwb25zZSxcbiAgQXV0aEdldFJlcXVlc3RPcHRpb25zLFxuICBBdXRoR2V0UmVzcG9uc2UsXG4gIEJhbmtUcmFuc2ZlckJhbGFuY2VHZXRSZXNwb25zZSxcbiAgQmFua1RyYW5zZmVyQ2FuY2VsUmVzcG9uc2UsXG4gIEJhbmtUcmFuc2ZlckNyZWF0ZVJlcXVlc3QsXG4gIEJhbmtUcmFuc2ZlckNyZWF0ZVJlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJFdmVudExpc3RSZXF1ZXN0LFxuICBCYW5rVHJhbnNmZXJFdmVudExpc3RSZXNwb25zZSxcbiAgQmFua1RyYW5zZmVyRXZlbnRTeW5jUmVzcG9uc2UsXG4gIEJhbmtUcmFuc2ZlckV2ZW50VHlwZSxcbiAgQmFua1RyYW5zZmVyRmFpbHVyZSxcbiAgQmFua1RyYW5zZmVyR2V0UmVzcG9uc2UsXG4gIEJhbmtUcmFuc2Zlckxpc3RSZXF1ZXN0LFxuICBCYW5rVHJhbnNmZXJMaXN0UmVzcG9uc2UsXG4gIEJhbmtUcmFuc2Zlck1pZ3JhdGVBY2NvdW50UmVzcG9uc2UsXG4gIENhdGVnb3JpZXNHZXRSZXNwb25zZSxcbiAgQ291bnRyeUNvZGUsXG4gIERlcG9zaXRTd2l0Y2hDcmVhdGVSZXNwb25zZSxcbiAgRGVwb3NpdFN3aXRjaEdldFJlc3BvbnNlLFxuICBEZXBvc2l0U3dpdGNoVG9rZW5DcmVhdGVSZXNwb25zZSxcbiAgRXh0ZXJuYWxQYXltZW50U2NoZWR1bGUsXG4gIElkZW50aXR5R2V0UmVzcG9uc2UsXG4gIEluc3RpdHV0aW9uc1NlYXJjaFJlcXVlc3RPcHRpb25zLFxuICBJbnN0aXR1dGlvbnNTZWFyY2hSZXNwb25zZSxcbiAgSW5zdGl0dXRpb25zR2V0QnlJZFJlcXVlc3RPcHRpb25zLFxuICBJbnN0aXR1dGlvbnNHZXRCeUlkUmVzcG9uc2UsXG4gIEluc3RpdHV0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICBJbnN0aXR1dGlvbnNHZXRSZXNwb25zZSxcbiAgSW52ZXN0bWVudHNIb2xkaW5nc0dldFJlcXVlc3QsXG4gIEludmVzdG1lbnRIb2xkaW5nc0dldFJlcXVlc3RPcHRpb25zLFxuICBJbnZlc3RtZW50c1RyYW5zYWN0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICBJbnZlc3RtZW50c1RyYW5zYWN0aW9uc0dldFJlc3BvbnNlLFxuICBJdGVtQWNjZXNzVG9rZW5JbnZhbGlkYXRlUmVzcG9uc2UsXG4gIEl0ZW1HZXRSZXNwb25zZSxcbiAgSXRlbUltcG9ydFJlcXVlc3RPcHRpb25zLFxuICBJdGVtSW1wb3J0UmVxdWVzdFVzZXJBdXRoLFxuICBJdGVtSW1wb3J0UmVzcG9uc2UsXG4gIEl0ZW1QdWJsaWNUb2tlbkV4Y2hhbmdlUmVzcG9uc2UsXG4gIEl0ZW1SZW1vdmVSZXNwb25zZSxcbiAgSXRlbVdlYmhvb2tVcGRhdGVSZXNwb25zZSxcbiAgTGlhYmlsaXRpZXNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgTGlhYmlsaXRpZXNHZXRSZXNwb25zZSxcbiAgTGlua1Rva2VuQ3JlYXRlUmVxdWVzdCxcbiAgTGlua1Rva2VuQ3JlYXRlUmVzcG9uc2UsXG4gIExpbmtUb2tlbkdldFJlc3BvbnNlLFxuICBQYXltZW50SW5pdGlhdGlvbkFkZHJlc3MsXG4gIFBheW1lbnRJbml0aWF0aW9uUGF5bWVudENyZWF0ZVJlc3BvbnNlLFxuICBQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2UsXG4gIFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlUmVzcG9uc2UsXG4gIFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50R2V0UmVzcG9uc2UsXG4gIFBheW1lbnRJbml0aWF0aW9uUGF5bWVudEdldFJlc3BvbnNlLFxuICBQbGFpZEFwaSxcbiAgUHJvY2Vzc29yQXV0aEdldFJlc3BvbnNlLFxuICBQcm9jZXNzb3JCYWxhbmNlR2V0UmVzcG9uc2UsXG4gIFByb2Nlc3NvcklkZW50aXR5R2V0UmVzcG9uc2UsXG4gIFByb2Nlc3NvclN0cmlwZUJhbmtBY2NvdW50VG9rZW5DcmVhdGVSZXNwb25zZSxcbiAgUHJvY2Vzc29yVG9rZW5DcmVhdGVSZXNwb25zZSxcbiAgUHJvZHVjdHMsXG4gIFJlY2lwaWVudEJBQ1MsXG4gIFNhbmRib3hCYW5rVHJhbnNmZXJTaW11bGF0ZVJlc3BvbnNlLFxuICBTYW5kYm94SXRlbUZpcmVXZWJob29rUmVxdWVzdFdlYmhvb2tDb2RlRW51bSxcbiAgU2FuZGJveEl0ZW1GaXJlV2ViaG9va1Jlc3BvbnNlLFxuICBTYW5kYm94SXRlbVJlc2V0TG9naW5SZXNwb25zZSxcbiAgU2FuZGJveEl0ZW1TZXRWZXJpZmljYXRpb25TdGF0dXNSZXNwb25zZSxcbiAgU2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlUmVxdWVzdE9wdGlvbnMsXG4gIFNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBTYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1c1JlcXVlc3RWZXJpZmljYXRpb25TdGF0dXNFbnVtLFxuICBUcmFuc2FjdGlvbnNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgVHJhbnNhY3Rpb25zR2V0UmVzcG9uc2UsXG4gIFRyYW5zYWN0aW9uc1JlZnJlc2hSZXNwb25zZSxcbiAgV2ViaG9va1ZlcmlmaWNhdGlvbktleUdldFJlc3BvbnNlLFxufSBmcm9tICcuL2dlbmVyYXRlZC1jb2RlJztcblxuaW1wb3J0ICogYXMgcGpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuXG4vLyBUeXBlIERlZmluaXRpb25zXG5pbnRlcmZhY2UgUGxhaWRFbnZpcm9ubWVudHMge1xuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly9wcm9kdWN0aW9uLnBsYWlkLmNvbSc7XG4gIHNhbmRib3g6ICdodHRwczovL3NhbmRib3gucGxhaWQuY29tJztcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwczovL2RldmVsb3BtZW50LnBsYWlkLmNvbSc7XG4gIFtlbnY6IHN0cmluZ106IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbmZpZyB7XG4gIGNsaWVudElEOiBzdHJpbmc7XG4gIHNlY3JldDogc3RyaW5nO1xuICBlbnY6IFBsYWlkRW52aXJvbm1lbnRzO1xuICBvcHRpb25zOiBPYmplY3Q7XG59XG5cbnR5cGUgQ2FsbGJhY2s8VCBleHRlbmRzIE9iamVjdD4gPSAoXG4gIGVycjogRXJyb3IgfCBudWxsLFxuICByZXNwb25zZTogVCB8IG51bGwsXG4pID0+IHZvaWQ7XG5cbi8vIE5PVEU6IFRoaXMgdmVyc2lvbiB3aWxsIG9ubHkgc3VwcG9ydCBsYXRlc3QuXG5jb25zdCBERUZBVUxUX1ZFUlNJT04gPSAnMjAyMC0wOS0xNCc7XG5cbmNvbnN0IGVudmlyb25tZW50czogUGxhaWRFbnZpcm9ubWVudHMgPSB7XG4gIHByb2R1Y3Rpb246ICdodHRwczovL3Byb2R1Y3Rpb24ucGxhaWQuY29tJyxcbiAgc2FuZGJveDogJ2h0dHBzOi8vc2FuZGJveC5wbGFpZC5jb20nLFxuICBkZXZlbG9wbWVudDogJ2h0dHBzOi8vZGV2ZWxvcG1lbnQucGxhaWQuY29tJyxcbn07XG5cbmNsYXNzIENsaWVudCB7XG4gIGNsaWVudF9pZDogc3RyaW5nO1xuICBzZWNyZXQ6IHN0cmluZztcbiAgZW52OiBQbGFpZEVudmlyb25tZW50cztcbiAgY2xpZW50X3JlcXVlc3Rfb3B0czogT2JqZWN0O1xuICBvcGVuQVBJQ2xpZW50OiBQbGFpZEFwaTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IENvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnb2JqZWN0JyB8fCBjb25maWcgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1VuZXhwZWN0ZWQgcGFyYW1ldGVyIHR5cGUuICcgK1xuICAgICAgICAgICdSZWZlciB0byBodHRwczovL2dpdGh1Yi5jb20vcGxhaWQvcGxhaWQtbm9kZSAnICtcbiAgICAgICAgICAnZm9yIGhvdyB0byBjcmVhdGUgYSBQbGFpZCBjbGllbnQuJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jbGllbnRJRCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFBsYWlkIFwiY2xpZW50SURcIicpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuc2VjcmV0ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgUGxhaWQgXCJzZWNyZXRcIicpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFbXG4gICAgICAgIGVudmlyb25tZW50cy5wcm9kdWN0aW9uLFxuICAgICAgICBlbnZpcm9ubWVudHMuc2FuZGJveCxcbiAgICAgICAgZW52aXJvbm1lbnRzLmRldmVsb3BtZW50LFxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIF0uaW5jbHVkZXMoY29uZmlnLmVudilcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQbGFpZCBlbnZpcm9ubWVudCcpO1xuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb28gbWFueSBhcmd1bWVudHMgdG8gY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsaWVudF9pZCA9IGNvbmZpZy5jbGllbnRJRDtcbiAgICB0aGlzLnNlY3JldCA9IGNvbmZpZy5zZWNyZXQ7XG4gICAgdGhpcy5lbnYgPSBjb25maWcuZW52O1xuXG4gICAgaWYgKGNvbmZpZy5vcHRpb25zID09IG51bGwpIHtcbiAgICAgIGNvbmZpZy5vcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5jbGllbnRfcmVxdWVzdF9vcHRzID0gY29uZmlnLm9wdGlvbnM7XG5cbiAgICAvLyBOZXcgZ2VuZXJhdGVkIGludGVyZmFjZVxuICAgIHRoaXMub3BlbkFQSUNsaWVudCA9IG5ldyBQbGFpZEFwaShcbiAgICAgIHtcbiAgICAgICAgYmFzZU9wdGlvbnM6IHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBbJ1BsYWlkLVZlcnNpb24nXTogREVGQVVMVF9WRVJTSU9OLFxuICAgICAgICAgICAgWydVc2VyLUFnZW50J106ICdQbGFpZCBOb2RlIHYnICsgcGpzb24udmVyc2lvbixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIChjb25maWcuZW52IGFzIHVua25vd24pIGFzIHN0cmluZyxcbiAgICApO1xuICB9XG5cbiAgLy8gYmFua190cmFuc2Zlci9iYWxhbmNlL2dldFxuICBiYW5rVHJhbnNmZXJCYWxhbmNlR2V0KFxuICAgIG9yaWdpbmF0aW9uX2FjY291bnRfaWQ/OiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxCYW5rVHJhbnNmZXJCYWxhbmNlR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEJhbmtUcmFuc2ZlckJhbGFuY2VHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYmFua1RyYW5zZmVyQmFsYW5jZUdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9yaWdpbmF0aW9uX2FjY291bnRfaWQ6IG9yaWdpbmF0aW9uX2FjY291bnRfaWQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBiYW5rX3RyYW5zZmVyL2NhbmNlbFxuICBiYW5rVHJhbnNmZXJDYW5jZWwoXG4gICAgYmFua190cmFuc2Zlcl9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8QmFua1RyYW5zZmVyQ2FuY2VsUmVzcG9uc2U+XG4gICk6IFByb21pc2U8QmFua1RyYW5zZmVyQ2FuY2VsUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmJhbmtUcmFuc2ZlckNhbmNlbCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGJhbmtfdHJhbnNmZXJfaWQ6IGJhbmtfdHJhbnNmZXJfaWRcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGJhbmtfdHJhbnNmZXIvY3JlYXRlXG4gIGJhbmtUcmFuc2ZlckNyZWF0ZShcbiAgICBvcHRpb25zOiBCYW5rVHJhbnNmZXJDcmVhdGVSZXF1ZXN0LFxuICAgIGNiPzogQ2FsbGJhY2s8QmFua1RyYW5zZmVyQ3JlYXRlUmVzcG9uc2U+XG4gICk6IFByb21pc2U8QmFua1RyYW5zZmVyQ3JlYXRlUmVzcG9uc2U+IHtcbiAgICBvcHRpb25zLmNsaWVudF9pZCA9IHRoaXMuY2xpZW50X2lkO1xuICAgIG9wdGlvbnMuc2VjcmV0ID0gdGhpcy5zZWNyZXQ7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdCh0aGlzLm9wZW5BUElDbGllbnQuYmFua1RyYW5zZmVyQ3JlYXRlKG9wdGlvbnMpLCBjYik7XG4gIH1cblxuICAvLyBiYW5rX3RyYW5zZmVyL2V2ZW50L2xpc3RcbiAgYmFua1RyYW5zZmVyRXZlbnRMaXN0KFxuICAgIG9wdGlvbnM6IEJhbmtUcmFuc2ZlckV2ZW50TGlzdFJlcXVlc3QsXG4gICAgY2I/OiBDYWxsYmFjazxCYW5rVHJhbnNmZXJFdmVudExpc3RSZXNwb25zZT5cbiAgKTogUHJvbWlzZTxCYW5rVHJhbnNmZXJFdmVudExpc3RSZXNwb25zZT4ge1xuICAgIG9wdGlvbnMuY2xpZW50X2lkID0gdGhpcy5jbGllbnRfaWQ7XG4gICAgb3B0aW9ucy5zZWNyZXQgPSB0aGlzLnNlY3JldDtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KHRoaXMub3BlbkFQSUNsaWVudC5iYW5rVHJhbnNmZXJFdmVudExpc3Qob3B0aW9ucyksIGNiKTtcbiAgfVxuXG4gIC8vIGJhbmtfdHJhbnNmZXIvZXZlbnQvc3luY1xuICBiYW5rVHJhbnNmZXJFdmVudFN5bmMoXG4gICAgYWZ0ZXJfaWQ6IG51bWJlcixcbiAgICBjb3VudD86IG51bWJlcixcbiAgICBjYj86IENhbGxiYWNrPEJhbmtUcmFuc2ZlckV2ZW50U3luY1Jlc3BvbnNlPlxuICApOiBQcm9taXNlPEJhbmtUcmFuc2ZlckV2ZW50U3luY1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5iYW5rVHJhbnNmZXJFdmVudFN5bmMoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBhZnRlcl9pZDogYWZ0ZXJfaWQsXG4gICAgICAgIGNvdW50OiBjb3VudCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGJhbmtfdHJhbnNmZXIvZ2V0XG4gIGJhbmtUcmFuc2ZlckdldChcbiAgICBiYW5rX3RyYW5zZmVyX2lkOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxCYW5rVHJhbnNmZXJHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QmFua1RyYW5zZmVyR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmJhbmtUcmFuc2ZlckdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGJhbmtfdHJhbnNmZXJfaWQ6IGJhbmtfdHJhbnNmZXJfaWQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBiYW5rX3RyYW5zZmVyL2xpc3RcbiAgYmFua1RyYW5zZmVyTGlzdChcbiAgICBvcHRpb25zOiBCYW5rVHJhbnNmZXJMaXN0UmVxdWVzdCxcbiAgICBjYj86IENhbGxiYWNrPEJhbmtUcmFuc2Zlckxpc3RSZXNwb25zZT5cbiAgKTogUHJvbWlzZTxCYW5rVHJhbnNmZXJMaXN0UmVzcG9uc2U+IHtcbiAgICBvcHRpb25zLmNsaWVudF9pZCA9IHRoaXMuY2xpZW50X2lkO1xuICAgIG9wdGlvbnMuc2VjcmV0ID0gdGhpcy5zZWNyZXQ7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdCh0aGlzLm9wZW5BUElDbGllbnQuYmFua1RyYW5zZmVyTGlzdChvcHRpb25zKSwgY2IpO1xuICB9XG5cbiAgLy8gYmFua190cmFuc2Zlci9taWdyYXRlX2FjY291bnRcbiAgYmFua1RyYW5zZmVyTWlncmF0ZUFjY291bnQoXG4gICAgYWNjb3VudF9udW1iZXI6IHN0cmluZyxcbiAgICByb3V0aW5nX251bWJlcjogc3RyaW5nLFxuICAgIGFjY291bnRfdHlwZTogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8QmFua1RyYW5zZmVyTWlncmF0ZUFjY291bnRSZXNwb25zZT5cbiAgKTogUHJvbWlzZTxCYW5rVHJhbnNmZXJNaWdyYXRlQWNjb3VudFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5iYW5rVHJhbnNmZXJNaWdyYXRlQWNjb3VudCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGFjY291bnRfbnVtYmVyOiBhY2NvdW50X251bWJlcixcbiAgICAgICAgcm91dGluZ19udW1iZXI6IHJvdXRpbmdfbnVtYmVyLFxuICAgICAgICBhY2NvdW50X3R5cGU6IGFjY291bnRfdHlwZSxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9jcmVhdGVcbiAgY3JlYXRlQXNzZXRSZXBvcnQoXG4gICAgYWNjZXNzX3Rva2VuczogU2V0PHN0cmluZz4sXG4gICAgZGF5c19yZXF1ZXN0ZWQ6IG51bWJlcixcbiAgICBvcHRpb25zPzogQXNzZXRSZXBvcnRDcmVhdGVSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0Q3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0Q3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0Q3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYWNjZXNzX3Rva2VucyxcbiAgICAgICAgZGF5c19yZXF1ZXN0ZWQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvYXVkaXRfY29weS9jcmVhdGVcbiAgY3JlYXRlQXVkaXRDb3B5KFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGF1ZGl0b3JfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0QXVkaXRDb3B5Q3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0QXVkaXRDb3B5Q3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0QXVkaXRDb3B5Q3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICBhdWRpdG9yX2lkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gZGVwb3NpdF9zd2l0Y2gvY3JlYXRlXG4gIGNyZWF0ZURlcG9zaXRTd2l0Y2goXG4gICAgdGFyZ2V0X2FjY291bnRfaWQ6IHN0cmluZyxcbiAgICB0YXJnZXRfYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxEZXBvc2l0U3dpdGNoQ3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPERlcG9zaXRTd2l0Y2hDcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuZGVwb3NpdFN3aXRjaENyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHRhcmdldF9hY2Nlc3NfdG9rZW4sXG4gICAgICAgIHRhcmdldF9hY2NvdW50X2lkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gZGVwb3NpdF9zd2l0Y2gvdG9rZW4vY3JlYXRlXG4gIGNyZWF0ZURlcG9zaXRTd2l0Y2hUb2tlbihcbiAgICBkZXBvc2l0X3N3aXRjaF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8RGVwb3NpdFN3aXRjaFRva2VuQ3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPERlcG9zaXRTd2l0Y2hUb2tlbkNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5kZXBvc2l0U3dpdGNoVG9rZW5DcmVhdGUoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBkZXBvc2l0X3N3aXRjaF9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGxpbmsvdG9rZW4vY3JlYXRlL1xuICBjcmVhdGVMaW5rVG9rZW4oXG4gICAgb3B0aW9uczogTGlua1Rva2VuQ3JlYXRlUmVxdWVzdCxcbiAgICBjYj86IENhbGxiYWNrPExpbmtUb2tlbkNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxMaW5rVG9rZW5DcmVhdGVSZXNwb25zZT4ge1xuICAgIG9wdGlvbnMuY2xpZW50X2lkID0gdGhpcy5jbGllbnRfaWQ7XG4gICAgb3B0aW9ucy5zZWNyZXQgPSB0aGlzLnNlY3JldDtcblxuICAgIHJldHVybiBwbGFpZFJlcXVlc3QodGhpcy5vcGVuQVBJQ2xpZW50LmxpbmtUb2tlbkNyZWF0ZShvcHRpb25zKSwgY2IpO1xuICB9XG5cbiAgLy8gcGF5bWVudF9pbml0aWF0aW9uL3BheW1lbnQvY3JlYXRlXG4gIGNyZWF0ZVBheW1lbnQoXG4gICAgcmVjaXBpZW50X2lkOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlOiBzdHJpbmcsXG4gICAgYW1vdW50OiBBbW91bnQsXG4gICAgc2NoZWR1bGU/OiBFeHRlcm5hbFBheW1lbnRTY2hlZHVsZSxcbiAgICBjYj86IENhbGxiYWNrPFBheW1lbnRJbml0aWF0aW9uUGF5bWVudENyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQYXltZW50SW5pdGlhdGlvblBheW1lbnRDcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEluaXRpYXRpb25QYXltZW50Q3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgcmVjaXBpZW50X2lkLFxuICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgc2NoZWR1bGUsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyAvcGF5bWVudF9pbml0aWF0aW9uL3JlY2lwaWVudC9jcmVhdGVcbiAgY3JlYXRlUGF5bWVudFJlY2lwaWVudChcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaWJhbj86IHN0cmluZyxcbiAgICBhZGRyZXNzPzogUGF5bWVudEluaXRpYXRpb25BZGRyZXNzLFxuICAgIGJhY3M/OiBSZWNpcGllbnRCQUNTLFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRDcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRDcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRDcmVhdGUoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBuYW1lLFxuICAgICAgICBpYmFuLFxuICAgICAgICBiYWNzLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29yL3Rva2VuL2NyZWF0ZVxuICAvLyBwcm9jZXNzb3IvYXBleC9wcm9jZXNzb3JfdG9rZW4vY3JlYXRlXG4gIC8vIHByb2Nlc3Nvci9zdHJpcGUvYmFua19hY2NvdW50X3Rva2VuL2NyZWF0ZVxuICBjcmVhdGVQcm9jZXNzb3JUb2tlbihcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBhY2NvdW50X2lkOiBzdHJpbmcsXG4gICAgcHJvY2Vzc29yOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxQcm9jZXNzb3JUb2tlbkNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQcm9jZXNzb3JUb2tlbkNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgYWNjb3VudF9pZCxcbiAgICB9O1xuICAgIGlmIChwcm9jZXNzb3IgPT0gJ3N0cmlwZScpIHtcbiAgICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wcm9jZXNzb3JTdHJpcGVCYW5rQWNjb3VudFRva2VuQ3JlYXRlKG9wdGlvbnMpLFxuICAgICAgICBjYixcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzb3IgPT0gJ2FwZXgnKSB7XG4gICAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29yQXBleFByb2Nlc3NvclRva2VuQ3JlYXRlKG9wdGlvbnMpLFxuICAgICAgICBjYixcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9wdGlvbnNXaXRoUHJvY2Vzc29yID0geyAuLi5vcHRpb25zLCBwcm9jZXNzb3IgfTtcbiAgICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wcm9jZXNzb3JUb2tlbkNyZWF0ZShvcHRpb25zV2l0aFByb2Nlc3NvciksXG4gICAgICAgIGNiLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBwcm9jZXNzb3Ivc3RyaXBlL2JhbmtfYWNjb3VudF90b2tlbi9jcmVhdGVcbiAgY3JlYXRlU3RyaXBlVG9rZW4oXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29yU3RyaXBlQmFua0FjY291bnRUb2tlbkNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQcm9jZXNzb3JTdHJpcGVCYW5rQWNjb3VudFRva2VuQ3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVQcm9jZXNzb3JUb2tlbihhY2Nlc3NfdG9rZW4sIGFjY291bnRfaWQsICdzdHJpcGUnLCBjYik7XG4gIH1cblxuICAvLyBpdGVtL3B1YmxpY190b2tlbi9leGNoYW5nZVxuICBleGNoYW5nZVB1YmxpY1Rva2VuKFxuICAgIHB1YmxpY190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbVB1YmxpY1Rva2VuRXhjaGFuZ2VSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbVB1YmxpY1Rva2VuRXhjaGFuZ2VSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaXRlbVB1YmxpY1Rva2VuRXhjaGFuZ2Uoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBwdWJsaWNfdG9rZW4sXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvZmlsdGVyXG4gIGZpbHRlckFzc2V0UmVwb3J0KFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGFjY291bnRfaWRzX3RvX2V4Y2x1ZGU6IEFycmF5PHN0cmluZz4sXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEZpbHRlclJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEZpbHRlclJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEZpbHRlcih7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGFzc2V0X3JlcG9ydF90b2tlbixcbiAgICAgICAgYWNjb3VudF9pZHNfdG9fZXhjbHVkZSxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFjY291bnRzL2dldFxuICBnZXRBY2NvdW50cyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBvcHRpb25zPzogQWNjb3VudHNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEFjY291bnRzR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFjY291bnRzR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFjY291bnRzR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2dldFxuICBnZXRBc3NldFJlcG9ydChcbiAgICBhc3NldF9yZXBvcnRfdG9rZW46IHN0cmluZyxcbiAgICBpbmNsdWRlX2luc2lnaHRzPzogYm9vbGVhbixcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0R2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0R2V0KHtcbiAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBpbmNsdWRlX2luc2lnaHRzLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L3BkZi9nZXRcbiAgZ2V0QXNzZXRSZXBvcnRQZGYoXG4gICAgYXNzZXRfcmVwb3J0X3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxCdWZmZXI+LFxuICApOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRQZGZHZXQoXG4gICAgICAgIHtcbiAgICAgICAgICBhc3NldF9yZXBvcnRfdG9rZW4sXG4gICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICB9LFxuICAgICAgICB7IGpzb246IHRydWUsIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9LFxuICAgICAgKSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvYXVkaXRfY29weS9nZXRcbiAgZ2V0QXVkaXRDb3B5KFxuICAgIGF1ZGl0X2NvcHlfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0R2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0QXVkaXRDb3B5R2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYXVkaXRfY29weV90b2tlbixcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGF1dGgvZ2V0XG4gIGdldEF1dGgoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEF1dGhHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEF1dGhHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QXV0aEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hdXRoR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhY2NvdW50cy9iYWxhbmNlL2dldFxuICBnZXRCYWxhbmNlKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBBY2NvdW50c0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8QWNjb3VudHNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QWNjb3VudHNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYWNjb3VudHNCYWxhbmNlR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBjYXRlZ29yaWVzL2dldFxuICBnZXRDYXRlZ29yaWVzKFxuICAgIGNiPzogQ2FsbGJhY2s8Q2F0ZWdvcmllc0dldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxDYXRlZ29yaWVzR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KHRoaXMub3BlbkFQSUNsaWVudC5jYXRlZ29yaWVzR2V0KHt9KSwgY2IpO1xuICB9XG5cbiAgLy8gZGVwb3NpdF9zd2l0Y2gvZ2V0XG4gIGdldERlcG9zaXRTd2l0Y2goXG4gICAgZGVwb3NpdF9zd2l0Y2hfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPERlcG9zaXRTd2l0Y2hHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8RGVwb3NpdFN3aXRjaEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5kZXBvc2l0U3dpdGNoR2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgZGVwb3NpdF9zd2l0Y2hfaWQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpbnZlc3RtZW50cy9ob2xkaW5ncy9nZXRcbiAgZ2V0SG9sZGluZ3MoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEludmVzdG1lbnRIb2xkaW5nc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW52ZXN0bWVudHNIb2xkaW5nc0dldFJlcXVlc3Q+LFxuICApOiBQcm9taXNlPEludmVzdG1lbnRzSG9sZGluZ3NHZXRSZXF1ZXN0PiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pbnZlc3RtZW50c0hvbGRpbmdzR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaWRlbnRpdHkvZ2V0XG4gIGdldElkZW50aXR5KFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8SWRlbnRpdHlHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SWRlbnRpdHlHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaWRlbnRpdHlHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpbnN0aXR1dGlvbnMvZ2V0X2J5X2lkXG4gIGdldEluc3RpdHV0aW9uQnlJZChcbiAgICBpbnN0aXR1dGlvbl9pZDogc3RyaW5nLFxuICAgIGNvdW50cnlfY29kZXM6IEFycmF5PENvdW50cnlDb2RlPixcbiAgICBvcHRpb25zPzogSW5zdGl0dXRpb25zR2V0QnlJZFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW5zdGl0dXRpb25zR2V0QnlJZFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJbnN0aXR1dGlvbnNHZXRCeUlkUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lmluc3RpdHV0aW9uc0dldEJ5SWQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBjb3VudHJ5X2NvZGVzLFxuICAgICAgICBpbnN0aXR1dGlvbl9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGluc3RpdHV0aW9ucy9nZXRcbiAgZ2V0SW5zdGl0dXRpb25zKFxuICAgIGNvdW50OiBudW1iZXIsXG4gICAgb2Zmc2V0OiBudW1iZXIsXG4gICAgY291bnRyeV9jb2RlczogQXJyYXk8Q291bnRyeUNvZGU+LFxuICAgIG9wdGlvbnM/OiBJbnN0aXR1dGlvbnNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEluc3RpdHV0aW9uc0dldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJbnN0aXR1dGlvbnNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW5zdGl0dXRpb25zR2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgY291bnQsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgY291bnRyeV9jb2RlcyxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGludmVzdG1lbnRzL3RyYW5zYWN0aW9ucy9nZXRcbiAgZ2V0SW52ZXN0bWVudFRyYW5zYWN0aW9ucyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBzdGFydF9kYXRlOiBzdHJpbmcsXG4gICAgZW5kX2RhdGU6IHN0cmluZyxcbiAgICBvcHRpb25zPzogSW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEludmVzdG1lbnRzVHJhbnNhY3Rpb25zR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEludmVzdG1lbnRzVHJhbnNhY3Rpb25zR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmludmVzdG1lbnRzVHJhbnNhY3Rpb25zR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBzdGFydF9kYXRlLFxuICAgICAgICBlbmRfZGF0ZSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGl0ZW0vZ2V0XG4gIGdldEl0ZW0oXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxJdGVtR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEl0ZW1HZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaXRlbUdldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGxpYWJpbGl0aWVzL2dldFxuICBnZXRMaWFiaWxpdGllcyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBvcHRpb25zPzogTGlhYmlsaXRpZXNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPExpYWJpbGl0aWVzR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPExpYWJpbGl0aWVzR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmxpYWJpbGl0aWVzR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gbGluay90b2tlbi9nZXRcbiAgZ2V0TGlua1Rva2VuKFxuICAgIGxpbmtfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPExpbmtUb2tlbkdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxMaW5rVG9rZW5HZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQubGlua1Rva2VuR2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgbGlua190b2tlbixcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKVxuICB9XG5cbiAgLy8gcGF5bWVudF9pbml0aWF0aW9uL3BheW1lbnQvZ2V0XG4gIGdldFBheW1lbnQoXG4gICAgcGF5bWVudF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEluaXRpYXRpb25QYXltZW50R2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFBheW1lbnRJbml0aWF0aW9uUGF5bWVudEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wYXltZW50SW50aWF0aW9uUGF5bWVudEdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHBheW1lbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwYXltZW50X2luaXRpYXRpb24vcmVjaXBpZW50L2dldFxuICBnZXRQYXltZW50UmVjaXBpZW50KFxuICAgIHJlY2lwaWVudF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICByZWNpcGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyB0cmFuc2FjdGlvbnMvZ2V0XG4gIGdldFRyYW5zYWN0aW9ucyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBzdGFydF9kYXRlOiBzdHJpbmcsXG4gICAgZW5kX2RhdGU6IHN0cmluZyxcbiAgICBvcHRpb25zPzogVHJhbnNhY3Rpb25zR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxUcmFuc2FjdGlvbnNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8VHJhbnNhY3Rpb25zR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnRyYW5zYWN0aW9uc0dldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbjogYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBzdGFydF9kYXRlLFxuICAgICAgICBlbmRfZGF0ZSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHdlYmhvb2tfdmVyaWZpY2F0aW9uX2tleS9nZXRcbiAgZ2V0V2ViaG9va1ZlcmlmaWNhdGlvbktleShcbiAgICBrZXlfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFdlYmhvb2tWZXJpZmljYXRpb25LZXlHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8V2ViaG9va1ZlcmlmaWNhdGlvbktleUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC53ZWJob29rVmVyaWZpY2F0aW9uS2V5R2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAga2V5X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS9pbXBvcnRcbiAgaW1wb3J0SXRlbShcbiAgICBwcm9kdWN0czogQXJyYXk8c3RyaW5nPixcbiAgICB1c2VyX2F1dGg6IEl0ZW1JbXBvcnRSZXF1ZXN0VXNlckF1dGgsXG4gICAgb3B0aW9ucz86IEl0ZW1JbXBvcnRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1JbXBvcnRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbUltcG9ydFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtSW1wb3J0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHVzZXJfYXV0aCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGl0ZW0vYWNjZXNzX3Rva2VuL2ludmFsaWRhdGVcbiAgaW52YWxpZGF0ZUFjY2Vzc1Rva2VuKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbUFjY2Vzc1Rva2VuSW52YWxpZGF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtQWNjZXNzVG9rZW5JbnZhbGlkYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1BY2Nlc3NUb2tlbkludmFsaWRhdGUoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwYXltZW50X2luaXRpYXRpb24vcmVjaXBpZW50L2xpc3RcbiAgbGlzdFBheW1lbnRSZWNpcGllbnRzKFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEluaXRpYXRpb25QYXltZW50TGlzdFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50TGlzdCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwYXltZW50X2luaXRpYXRpb24vcGF5bWVudC9saXN0XG4gIGxpc3RQYXltZW50cyhcbiAgICBvcHRpb25zPzogeyBjb3VudDogbnVtYmVyOyBjdXJzb3I6IHN0cmluZyB9LFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEluaXRpYXRpb25QYXltZW50TGlzdFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbml0aWF0aW9uUGF5bWVudExpc3Qoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBjb3VudDogb3B0aW9ucz8uY291bnQgIT0gbnVsbCA/IG9wdGlvbnMuY291bnQgOiB1bmRlZmluZWQsXG4gICAgICAgIGN1cnNvcjogb3B0aW9ucz8uY3Vyc29yICE9IG51bGwgPyBvcHRpb25zLmN1cnNvciA6IHVuZGVmaW5lZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHByb2Nlc3Nvci9hdXRoL2dldFxuICBnZXRBdXRoUHJvY2Vzc29yKFxuICAgIHByb2Nlc3Nvcl90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29yQXV0aEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQcm9jZXNzb3JBdXRoR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvckF1dGhHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwcm9jZXNzb3JfdG9rZW4sXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwcm9jZXNzb3IvYmFsYW5jZS9nZXRcbiAgZ2V0QmFsYW5jZVByb2Nlc3NvcihcbiAgICBwcm9jZXNzb3JfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFByb2Nlc3NvckJhbGFuY2VHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UHJvY2Vzc29yQmFsYW5jZUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wcm9jZXNzb3JCYWxhbmNlR2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgcHJvY2Vzc29yX3Rva2VuLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29yL2lkZW50aXR5L2dldFxuICBnZXRJZGVudGl0eVByb2Nlc3NvcihcbiAgICBwcm9jZXNzb3JfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFByb2Nlc3NvcklkZW50aXR5R2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFByb2Nlc3NvcklkZW50aXR5R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvcklkZW50aXR5R2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgcHJvY2Vzc29yX3Rva2VuLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L3JlZnJlc2hcbiAgcmVmcmVzaEFzc2V0UmVwb3J0KFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGRheXNfcmVxdWVzdGVkPzogbnVtYmVyLFxuICAgIG9wdGlvbnM/OiBBc3NldFJlcG9ydFJlZnJlc2hSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0UmVmcmVzaFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydFJlZnJlc2hSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRSZWZyZXNoKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICBkYXlzX3JlcXVlc3RlZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHRyYW5zYWN0aW9ucy9yZWZyZXNoXG4gIHJlZnJlc2hUcmFuc2FjdGlvbnMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxUcmFuc2FjdGlvbnNSZWZyZXNoUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFRyYW5zYWN0aW9uc1JlZnJlc2hSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQudHJhbnNhY3Rpb25zUmVmcmVzaCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9yZW1vdmVcbiAgcmVtb3ZlQXNzZXRSZXBvcnQoXG4gICAgYXNzZXRfcmVwb3J0X3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydFJlbW92ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydFJlbW92ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydFJlbW92ZSh7XG4gICAgICAgIGFzc2V0X3JlcG9ydF90b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9hdWRpdF9jb3B5L3JlbW92ZVxuICByZW1vdmVBdWRpdENvcHkoXG4gICAgYXVkaXRfY29weV90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRBdWRpdENvcHlSZW1vdmVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QXNzZXRSZXBvcnRBdWRpdENvcHlSZW1vdmVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRBdWRpdENvcHlSZW1vdmUoe1xuICAgICAgICBhdWRpdF9jb3B5X3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS9yZW1vdmVcbiAgcmVtb3ZlSXRlbShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1SZW1vdmVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbVJlbW92ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtUmVtb3ZlKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gc2FuZGJveC9pdGVtL3Jlc2V0X2xvZ2luXG4gIHJlc2V0TG9naW4oXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxTYW5kYm94SXRlbVJlc2V0TG9naW5SZXNwb25zZT4sXG4gICk6IFByb21pc2U8U2FuZGJveEl0ZW1SZXNldExvZ2luUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnNhbmRib3hJdGVtUmVzZXRMb2dpbih7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHNhbmRib3gvYmFua190cmFuc2Zlci9zaW11bGF0ZVxuICBzYW5kYm94QmFua1RyYW5zZmVyU2ltdWxhdGUoXG4gICAgYmFua190cmFuc2Zlcl9pZDogc3RyaW5nLFxuICAgIGV2ZW50X3R5cGU6IEJhbmtUcmFuc2ZlckV2ZW50VHlwZSxcbiAgICBmYWlsdXJlX3JlYXNvbj86IEJhbmtUcmFuc2ZlckZhaWx1cmUsXG4gICAgY2I/OiBDYWxsYmFjazxTYW5kYm94QmFua1RyYW5zZmVyU2ltdWxhdGVSZXNwb25zZT5cbiAgKTogUHJvbWlzZTxTYW5kYm94QmFua1RyYW5zZmVyU2ltdWxhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuc2FuZGJveEJhbmtUcmFuc2ZlclNpbXVsYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYmFua190cmFuc2Zlcl9pZDogYmFua190cmFuc2Zlcl9pZCxcbiAgICAgICAgZXZlbnRfdHlwZTogZXZlbnRfdHlwZSxcbiAgICAgICAgZmFpbHVyZV9yZWFzb246IGZhaWx1cmVfcmVhc29uLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gc2FuZGJveC9wdWJsaWNfdG9rZW4vY3JlYXRlXG4gIHNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZShcbiAgICBpbnN0aXR1dGlvbl9pZDogc3RyaW5nLFxuICAgIGluaXRpYWxfcHJvZHVjdHM6IEFycmF5PFByb2R1Y3RzPixcbiAgICBvcHRpb25zOiBTYW5kYm94UHVibGljVG9rZW5DcmVhdGVSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPFNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxTYW5kYm94UHVibGljVG9rZW5DcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuc2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgaW5zdGl0dXRpb25faWQsXG4gICAgICAgIGluaXRpYWxfcHJvZHVjdHMsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBzYW5kYm94L2l0ZW0vZmlyZV93ZWJob29rXG4gIHNhbmRib3hJdGVtRmlyZVdlYmhvb2soXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgd2ViaG9va19jb2RlOiBTYW5kYm94SXRlbUZpcmVXZWJob29rUmVxdWVzdFdlYmhvb2tDb2RlRW51bSxcbiAgICBjYj86IENhbGxiYWNrPFNhbmRib3hJdGVtRmlyZVdlYmhvb2tSZXNwb25zZT4sXG4gICk6IFByb21pc2U8U2FuZGJveEl0ZW1GaXJlV2ViaG9va1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5zYW5kYm94SXRlbUZpcmVXZWJob29rKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICB3ZWJob29rX2NvZGUsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBzYW5kYm94L2l0ZW0vc2V0X3ZlcmlmaWNhdGlvbl9zdGF0dXNcbiAgc2FuZGJveEl0ZW1TZXRWZXJpZmljYXRpb25TdGF0dXMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZDogc3RyaW5nLFxuICAgIHZlcmlmaWNhdGlvbl9zdGF0dXM6IFNhbmRib3hJdGVtU2V0VmVyaWZpY2F0aW9uU3RhdHVzUmVxdWVzdFZlcmlmaWNhdGlvblN0YXR1c0VudW0sXG4gICAgY2I/OiBDYWxsYmFjazxTYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1c1Jlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxTYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5zYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1cyh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgYWNjb3VudF9pZCxcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgdmVyaWZpY2F0aW9uX3N0YXR1cyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGluc3RpdHV0aW9ucy9zZWFyY2hcbiAgc2VhcmNoSW5zdGl0dXRpb25zQnlOYW1lKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcHJvZHVjdHM6IEFycmF5PFByb2R1Y3RzPixcbiAgICBjb3VudHJ5X2NvZGVzOiBBcnJheTxDb3VudHJ5Q29kZT4sXG4gICAgb3B0aW9ucz86IEluc3RpdHV0aW9uc1NlYXJjaFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW5zdGl0dXRpb25zU2VhcmNoUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEluc3RpdHV0aW9uc1NlYXJjaFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pbnN0aXR1dGlvbnNTZWFyY2goe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIGNvdW50cnlfY29kZXMsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpdGVtL3dlYmhvb2svdXBkYXRlXG4gIHVwZGF0ZUl0ZW1XZWJob29rKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIHdlYmhvb2s6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1XZWJob29rVXBkYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEl0ZW1XZWJob29rVXBkYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1XZWJob29rVXBkYXRlKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICB3ZWJob29rLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG59XG5cbi8vIEhlbHBlcnNcbmNsYXNzIFBsYWlkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8vQHRzLWlnbm9yZVxuICBjb25zdHJ1Y3Rvcihib2R5OiBhbnkpIHtcbiAgICBzdXBlcihib2R5LmVycm9yX2NvZGUpO1xuICAgIHRoaXMubmFtZSA9ICdQbGFpZEVycm9yJztcblxuICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMsIGJvZHkpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZWplY3RXaXRoUGxhaWRFcnJvciA9IChkYXRhOiBheGlvcy5BeGlvc0Vycm9yKTogUGxhaWRFcnJvciA9PiB7XG4gIGNvbnN0IGVycm9yID0gZGF0YS5yZXNwb25zZT8uZGF0YTtcblxuICBpZiAodHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiBlcnJvciAhPT0gbnVsbCkge1xuICAgIGVycm9yLnN0YXR1c19jb2RlID0gZGF0YS5yZXNwb25zZT8uc3RhdHVzO1xuXG4gICAgcmV0dXJuIG5ldyBQbGFpZEVycm9yKGVycm9yKTtcbiAgfVxuXG4gIC8vIFVua25vd24gYm9keSB0eXBlIHJldHVybmVkLCByZXR1cm4gYSBzdGFuZGFyZCBBUElfRVJST1JcbiAgcmV0dXJuIG5ldyBQbGFpZEVycm9yKHtcbiAgICBlcnJvcl90eXBlOiAnQVBJX0VSUk9SJyxcbiAgICBzdGF0dXNfY29kZTogZGF0YS5jb2RlLFxuICAgIGVycm9yX2NvZGU6ICdJTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgIGVycm9yX21lc3NhZ2U6IFN0cmluZyhlcnJvciksXG4gICAgZGlzcGxheV9tZXNzYWdlOiBudWxsLFxuICAgIHJlcXVlc3RfaWQ6IG51bGwsXG4gIH0pO1xufTtcblxuY29uc3Qgd3JhcFByb21pc2UgPSAoY2FsbGVyOiBQcm9taXNlPGF4aW9zLkF4aW9zUmVzcG9uc2U+KSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2FsbGVyXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiBheGlvcy5BeGlvc0Vycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiByZWplY3QocmVqZWN0V2l0aFBsYWlkRXJyb3IoZXJyKSk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBjYWxsYmFja09wdGlvbnMgPSAocmVxdWVzdDogYW55LCBjYjogQ2FsbGJhY2s8YXhpb3MuQXhpb3NSZXNwb25zZT4pID0+IHtcbiAgcmV0dXJuIHJlcXVlc3RcbiAgICAudGhlbigocmVzcDogYXhpb3MuQXhpb3NSZXNwb25zZSkgPT4ge1xuICAgICAgY2IobnVsbCwgcmVzcC5kYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBheGlvcy5BeGlvc0Vycm9yLCBfOiBhbnkpID0+IHtcbiAgICAgIGNiKHJlamVjdFdpdGhQbGFpZEVycm9yKGVyciksIG51bGwpO1xuICAgIH0pO1xufTtcblxuY29uc3QgcGxhaWRSZXF1ZXN0ID0gKFxuICBjYWxsZXI6IFByb21pc2U8YXhpb3MuQXhpb3NSZXNwb25zZT4sXG4gIGNiPzogQ2FsbGJhY2s8YW55PixcbikgPT4ge1xuICBpZiAoY2IpIHtcbiAgICByZXR1cm4gY2FsbGJhY2tPcHRpb25zKGNhbGxlciwgY2IpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB3cmFwUHJvbWlzZShjYWxsZXIpO1xuICB9XG59O1xuXG5leHBvcnQgeyBDbGllbnQsIGVudmlyb25tZW50cywgUGxhaWRFcnJvciwgcGxhaWRSZXF1ZXN0IH07XG4iXX0=