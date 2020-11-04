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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsbURBc0YwQjtBQUUxQixvREFBd0M7QUFzQnhDLCtDQUErQztBQUMvQyxJQUFNLGVBQWUsR0FBRyxZQUFZLENBQUM7QUFFckMsSUFBTSxZQUFZLEdBQXNCO0lBQ3RDLFVBQVUsRUFBRSw4QkFBOEI7SUFDMUMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQyxXQUFXLEVBQUUsK0JBQStCO0NBQzdDLENBQUM7QUEwakNlLG9DQUFZO0FBeGpDN0I7SUFPRSxnQkFBWSxNQUFjOztRQUN4QixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ2pELE1BQU0sSUFBSSxLQUFLLENBQ2IsNkJBQTZCO2dCQUMzQiwrQ0FBK0M7Z0JBQy9DLG1DQUFtQyxDQUN0QyxDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUM3QztRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFDRSxDQUFDO1lBQ0MsWUFBWSxDQUFDLFVBQVU7WUFDdkIsWUFBWSxDQUFDLE9BQU87WUFDcEIsWUFBWSxDQUFDLFdBQVc7U0FFekIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUN0QjtZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxt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J2F4aW9zJztcblxuaW1wb3J0IHtcbiAgQWNjb3VudHNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgQWNjb3VudHNHZXRSZXNwb25zZSxcbiAgQW1vdW50LFxuICBBc3NldFJlcG9ydEF1ZGl0Q29weUNyZWF0ZVJlc3BvbnNlLFxuICBBc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZVJlc3BvbnNlLFxuICBBc3NldFJlcG9ydENyZWF0ZVJlcXVlc3RPcHRpb25zLFxuICBBc3NldFJlcG9ydENyZWF0ZVJlc3BvbnNlLFxuICBBc3NldFJlcG9ydEZpbHRlclJlc3BvbnNlLFxuICBBc3NldFJlcG9ydEdldFJlc3BvbnNlLFxuICBBc3NldFJlcG9ydFJlZnJlc2hSZXF1ZXN0T3B0aW9ucyxcbiAgQXNzZXRSZXBvcnRSZWZyZXNoUmVzcG9uc2UsXG4gIEFzc2V0UmVwb3J0UmVtb3ZlUmVzcG9uc2UsXG4gIEF1dGhHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgQXV0aEdldFJlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJCYWxhbmNlR2V0UmVzcG9uc2UsXG4gIEJhbmtUcmFuc2ZlckNhbmNlbFJlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJDcmVhdGVSZXF1ZXN0LFxuICBCYW5rVHJhbnNmZXJDcmVhdGVSZXNwb25zZSxcbiAgQmFua1RyYW5zZmVyRXZlbnRMaXN0UmVxdWVzdCxcbiAgQmFua1RyYW5zZmVyRXZlbnRMaXN0UmVzcG9uc2UsXG4gIEJhbmtUcmFuc2ZlckV2ZW50U3luY1Jlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJFdmVudFR5cGUsXG4gIEJhbmtUcmFuc2ZlckZhaWx1cmUsXG4gIEJhbmtUcmFuc2ZlckdldFJlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJMaXN0UmVxdWVzdCxcbiAgQmFua1RyYW5zZmVyTGlzdFJlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJNaWdyYXRlQWNjb3VudFJlc3BvbnNlLFxuICBCYWxhbmNlR2V0UmVxdWVzdE9wdGlvbnMsXG4gIEJhbGFuY2VHZXRSZXNwb25zZSxcbiAgQ2F0ZWdvcmllc0dldFJlc3BvbnNlLFxuICBDb3VudHJ5Q29kZSxcbiAgRGVwb3NpdFN3aXRjaENyZWF0ZVJlc3BvbnNlLFxuICBEZXBvc2l0U3dpdGNoR2V0UmVzcG9uc2UsXG4gIERlcG9zaXRTd2l0Y2hUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBJZGVudGl0eUdldFJlc3BvbnNlLFxuICBJbnN0aXR1dGlvbnNTZWFyY2hSZXF1ZXN0T3B0aW9ucyxcbiAgSW5zdGl0dXRpb25TZWFyY2hSZXNwb25zZSxcbiAgSW5zdGl0dXRpb25zR2V0QnlJZFJlcXVlc3RPcHRpb25zLFxuICBJbnN0aXR1dGlvbnNHZXRCeUlkUmVzcG9uc2UsXG4gIEluc3RpdHV0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICBJbnN0aXR1dGlvbnNHZXRSZXNwb25zZSxcbiAgSW52ZXN0bWVudHNIb2xkaW5nc0dldFJlcXVlc3QsXG4gIEludmVzdG1lbnRIb2xkaW5nc0dldFJlcXVlc3RPcHRpb25zLFxuICBJbnZlc3RtZW50c1RyYW5zYWN0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICBJbnZlc3RtZW50c1RyYW5zYWN0aW9uc0dldFJlc3BvbnNlLFxuICBJdGVtQWNjZXNzVG9rZW5JbnZhbGlkYXRlUmVzcG9uc2UsXG4gIEl0ZW1HZXRSZXNwb25zZSxcbiAgSXRlbUltcG9ydFJlcXVlc3RPcHRpb25zLFxuICBJdGVtSW1wb3J0UmVxdWVzdFVzZXJBdXRoLFxuICBJdGVtSW1wb3J0UmVzcG9uc2UsXG4gIEl0ZW1QdWJsaWNUb2tlbkV4Y2hhbmdlUmVzcG9uc2UsXG4gIEl0ZW1SZW1vdmVSZXNwb25zZSxcbiAgSXRlbVdlYmhvb2tVcGRhdGVSZXNwb25zZSxcbiAgTGlhYmlsaXRpZXNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgTGlhYmlsaXRpZXNHZXRSZXNwb25zZSxcbiAgTGlua1Rva2VuQ3JlYXRlUmVxdWVzdCxcbiAgTGlua1Rva2VuQ3JlYXRlUmVzcG9uc2UsXG4gIExpbmtUb2tlbkdldFJlc3BvbnNlLFxuICBQYXltZW50SW5pdGlhdGlvbkFkZHJlc3MsXG4gIFBheW1lbnRJbml0aWF0aW9uUGF5bWVudENyZWF0ZVJlcXVlc3RTY2hlZHVsZSxcbiAgUGF5bWVudEluaXRpYXRpb25QYXltZW50Q3JlYXRlUmVzcG9uc2UsXG4gIFBheW1lbnRJbml0aWF0aW9uUGF5bWVudExpc3RSZXNwb25zZSxcbiAgUGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRDcmVhdGVSZXF1ZXN0QmFjcyxcbiAgUGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRDcmVhdGVSZXNwb25zZSxcbiAgUGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRHZXRSZXNwb25zZSxcbiAgUGF5bWVudEludGlhdGlvblBheW1lbnRHZXRSZXNwb25zZSxcbiAgUGxhaWRBcGksXG4gIFByb2Nlc3NvckF1dGhHZXRSZXNwb25zZSxcbiAgUHJvY2Vzc29yQmFsYW5jZUdldFJlc3BvbnNlLFxuICBQcm9jZXNzb3JJZGVudGl0eUdldFJlc3BvbnNlLFxuICBQcm9jZXNzb3JTdHJpcGVCYW5rQWNjb3VudFRva2VuQ3JlYXRlUmVzcG9uc2UsXG4gIFByb2Nlc3NvclRva2VuQ3JlYXRlUmVzcG9uc2UsXG4gIFByb2R1Y3RzLFxuICBTYW5kYm94QmFua1RyYW5zZmVyU2ltdWxhdGVSZXNwb25zZSxcbiAgU2FuZGJveEl0ZW1GaXJlV2ViaG9va1JlcXVlc3RXZWJob29rQ29kZUVudW0sXG4gIFNhbmRib3hJdGVtRmlyZVdlYmhvb2tSZXNwb25zZSxcbiAgU2FuZGJveEl0ZW1SZXNldExvZ2luUmVzcG9uc2UsXG4gIFNhbmRib3hJdGVtU2V0VmVyaWZpY2F0aW9uU3RhdHVzUmVzcG9uc2UsXG4gIFNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZVJlcXVlc3RPcHRpb25zLFxuICBTYW5kYm94UHVibGljVG9rZW5DcmVhdGVSZXNwb25zZSxcbiAgU2FuZGJveEl0ZW1TZXRWZXJpZmljYXRpb25TdGF0dXNSZXF1ZXN0VmVyaWZpY2F0aW9uU3RhdHVzRW51bSxcbiAgVHJhbnNhY3Rpb25zR2V0UmVxdWVzdE9wdGlvbnMsXG4gIFRyYW5zYWN0aW9uc0dldFJlc3BvbnNlLFxuICBUcmFuc2FjdGlvbnNSZWZyZXNoUmVzcG9uc2UsXG4gIFdlYmhvb2tWZXJpZmljYXRpb25LZXlHZXRSZXNwb25zZSxcbn0gZnJvbSAnLi9nZW5lcmF0ZWQtY29kZSc7XG5cbmltcG9ydCAqIGFzIHBqc29uIGZyb20gJy4vcGFja2FnZS5qc29uJztcblxuLy8gVHlwZSBEZWZpbml0aW9uc1xuaW50ZXJmYWNlIFBsYWlkRW52aXJvbm1lbnRzIHtcbiAgcHJvZHVjdGlvbjogJ2h0dHBzOi8vcHJvZHVjdGlvbi5wbGFpZC5jb20nO1xuICBzYW5kYm94OiAnaHR0cHM6Ly9zYW5kYm94LnBsYWlkLmNvbSc7XG4gIGRldmVsb3BtZW50OiAnaHR0cHM6Ly9kZXZlbG9wbWVudC5wbGFpZC5jb20nO1xuICBbZW52OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDb25maWcge1xuICBjbGllbnRJRDogc3RyaW5nO1xuICBzZWNyZXQ6IHN0cmluZztcbiAgZW52OiBQbGFpZEVudmlyb25tZW50cztcbiAgb3B0aW9uczogT2JqZWN0O1xufVxuXG50eXBlIENhbGxiYWNrPFQgZXh0ZW5kcyBPYmplY3Q+ID0gKFxuICBlcnI6IEVycm9yIHwgbnVsbCxcbiAgcmVzcG9uc2U6IFQgfCBudWxsLFxuKSA9PiB2b2lkO1xuXG4vLyBOT1RFOiBUaGlzIHZlcnNpb24gd2lsbCBvbmx5IHN1cHBvcnQgbGF0ZXN0LlxuY29uc3QgREVGQVVMVF9WRVJTSU9OID0gJzIwMjAtMDktMTQnO1xuXG5jb25zdCBlbnZpcm9ubWVudHM6IFBsYWlkRW52aXJvbm1lbnRzID0ge1xuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly9wcm9kdWN0aW9uLnBsYWlkLmNvbScsXG4gIHNhbmRib3g6ICdodHRwczovL3NhbmRib3gucGxhaWQuY29tJyxcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwczovL2RldmVsb3BtZW50LnBsYWlkLmNvbScsXG59O1xuXG5jbGFzcyBDbGllbnQge1xuICBjbGllbnRfaWQ6IHN0cmluZztcbiAgc2VjcmV0OiBzdHJpbmc7XG4gIGVudjogUGxhaWRFbnZpcm9ubWVudHM7XG4gIGNsaWVudF9yZXF1ZXN0X29wdHM6IE9iamVjdDtcbiAgb3BlbkFQSUNsaWVudDogUGxhaWRBcGk7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ29iamVjdCcgfHwgY29uZmlnID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdVbmV4cGVjdGVkIHBhcmFtZXRlciB0eXBlLiAnICtcbiAgICAgICAgICAnUmVmZXIgdG8gaHR0cHM6Ly9naXRodWIuY29tL3BsYWlkL3BsYWlkLW5vZGUgJyArXG4gICAgICAgICAgJ2ZvciBob3cgdG8gY3JlYXRlIGEgUGxhaWQgY2xpZW50LicsXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2xpZW50SUQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBQbGFpZCBcImNsaWVudElEXCInKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNlY3JldCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFBsYWlkIFwic2VjcmV0XCInKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhW1xuICAgICAgICBlbnZpcm9ubWVudHMucHJvZHVjdGlvbixcbiAgICAgICAgZW52aXJvbm1lbnRzLnNhbmRib3gsXG4gICAgICAgIGVudmlyb25tZW50cy5kZXZlbG9wbWVudCxcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBdLmluY2x1ZGVzKGNvbmZpZy5lbnYpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUGxhaWQgZW52aXJvbm1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVG9vIG1hbnkgYXJndW1lbnRzIHRvIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGllbnRfaWQgPSBjb25maWcuY2xpZW50SUQ7XG4gICAgdGhpcy5zZWNyZXQgPSBjb25maWcuc2VjcmV0O1xuICAgIHRoaXMuZW52ID0gY29uZmlnLmVudjtcblxuICAgIGlmIChjb25maWcub3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBjb25maWcub3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuY2xpZW50X3JlcXVlc3Rfb3B0cyA9IGNvbmZpZy5vcHRpb25zO1xuXG4gICAgLy8gTmV3IGdlbmVyYXRlZCBpbnRlcmZhY2VcbiAgICB0aGlzLm9wZW5BUElDbGllbnQgPSBuZXcgUGxhaWRBcGkoXG4gICAgICB7XG4gICAgICAgIGJhc2VPcHRpb25zOiB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgWydQbGFpZC1WZXJzaW9uJ106IERFRkFVTFRfVkVSU0lPTixcblx0ICAgIFsnVXNlci1BZ2VudCddOiAnUGxhaWQgTm9kZSB2JyArIHBqc29uLnZlcnNpb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAoY29uZmlnLmVudiBhcyB1bmtub3duKSBhcyBzdHJpbmcsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGJhbmtfdHJhbnNmZXIvYmFsYW5jZS9nZXRcbiAgYmFua1RyYW5zZmVyQmFsYW5jZUdldChcbiAgICBvcmlnaW5hdGlvbl9hY2NvdW50X2lkPzogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8QmFua1RyYW5zZmVyQmFsYW5jZUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxCYW5rVHJhbnNmZXJCYWxhbmNlR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmJhbmtUcmFuc2ZlckJhbGFuY2VHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcmlnaW5hdGlvbl9hY2NvdW50X2lkOiBvcmlnaW5hdGlvbl9hY2NvdW50X2lkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYmFua190cmFuc2Zlci9jYW5jZWxcbiAgYmFua1RyYW5zZmVyQ2FuY2VsKFxuICAgIGJhbmtfdHJhbnNmZXJfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEJhbmtUcmFuc2ZlckNhbmNlbFJlc3BvbnNlPlxuICApOiBQcm9taXNlPEJhbmtUcmFuc2ZlckNhbmNlbFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5iYW5rVHJhbnNmZXJDYW5jZWwoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBiYW5rX3RyYW5zZmVyX2lkOiBiYW5rX3RyYW5zZmVyX2lkXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBiYW5rX3RyYW5zZmVyL2NyZWF0ZVxuICBiYW5rVHJhbnNmZXJDcmVhdGUoXG4gICAgb3B0aW9uczogQmFua1RyYW5zZmVyQ3JlYXRlUmVxdWVzdCxcbiAgICBjYj86IENhbGxiYWNrPEJhbmtUcmFuc2ZlckNyZWF0ZVJlc3BvbnNlPlxuICApOiBQcm9taXNlPEJhbmtUcmFuc2ZlckNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgb3B0aW9ucy5jbGllbnRfaWQgPSB0aGlzLmNsaWVudF9pZDtcbiAgICBvcHRpb25zLnNlY3JldCA9IHRoaXMuc2VjcmV0O1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QodGhpcy5vcGVuQVBJQ2xpZW50LmJhbmtUcmFuc2ZlckNyZWF0ZShvcHRpb25zKSwgY2IpO1xuICB9XG5cbiAgLy8gYmFua190cmFuc2Zlci9ldmVudC9saXN0XG4gIGJhbmtUcmFuc2ZlckV2ZW50TGlzdChcbiAgICBvcHRpb25zOiBCYW5rVHJhbnNmZXJFdmVudExpc3RSZXF1ZXN0LFxuICAgIGNiPzogQ2FsbGJhY2s8QmFua1RyYW5zZmVyRXZlbnRMaXN0UmVzcG9uc2U+XG4gICk6IFByb21pc2U8QmFua1RyYW5zZmVyRXZlbnRMaXN0UmVzcG9uc2U+IHtcbiAgICBvcHRpb25zLmNsaWVudF9pZCA9IHRoaXMuY2xpZW50X2lkO1xuICAgIG9wdGlvbnMuc2VjcmV0ID0gdGhpcy5zZWNyZXQ7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdCh0aGlzLm9wZW5BUElDbGllbnQuYmFua1RyYW5zZmVyRXZlbnRMaXN0KG9wdGlvbnMpLCBjYik7XG4gIH1cblxuICAvLyBiYW5rX3RyYW5zZmVyL2V2ZW50L3N5bmNcbiAgYmFua1RyYW5zZmVyRXZlbnRTeW5jKFxuICAgIGFmdGVyX2lkOiBudW1iZXIsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICAgY2I/OiBDYWxsYmFjazxCYW5rVHJhbnNmZXJFdmVudFN5bmNSZXNwb25zZT5cbiAgKTogUHJvbWlzZTxCYW5rVHJhbnNmZXJFdmVudFN5bmNSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYmFua1RyYW5zZmVyRXZlbnRTeW5jKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYWZ0ZXJfaWQ6IGFmdGVyX2lkLFxuICAgICAgICBjb3VudDogY291bnQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBiYW5rX3RyYW5zZmVyL2dldFxuICBiYW5rVHJhbnNmZXJHZXQoXG4gICAgYmFua190cmFuc2Zlcl9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8QmFua1RyYW5zZmVyR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEJhbmtUcmFuc2ZlckdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5iYW5rVHJhbnNmZXJHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBiYW5rX3RyYW5zZmVyX2lkOiBiYW5rX3RyYW5zZmVyX2lkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYmFua190cmFuc2Zlci9saXN0XG4gIGJhbmtUcmFuc2Zlckxpc3QoXG4gICAgb3B0aW9uczogQmFua1RyYW5zZmVyTGlzdFJlcXVlc3QsXG4gICAgY2I/OiBDYWxsYmFjazxCYW5rVHJhbnNmZXJMaXN0UmVzcG9uc2U+XG4gICk6IFByb21pc2U8QmFua1RyYW5zZmVyTGlzdFJlc3BvbnNlPiB7XG4gICAgb3B0aW9ucy5jbGllbnRfaWQgPSB0aGlzLmNsaWVudF9pZDtcbiAgICBvcHRpb25zLnNlY3JldCA9IHRoaXMuc2VjcmV0O1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QodGhpcy5vcGVuQVBJQ2xpZW50LmJhbmtUcmFuc2Zlckxpc3Qob3B0aW9ucyksIGNiKTtcbiAgfVxuXG4gIC8vIGJhbmtfdHJhbnNmZXIvbWlncmF0ZV9hY2NvdW50XG4gIGJhbmtUcmFuc2Zlck1pZ3JhdGVBY2NvdW50KFxuICAgIGFjY291bnRfbnVtYmVyOiBzdHJpbmcsXG4gICAgcm91dGluZ19udW1iZXI6IHN0cmluZyxcbiAgICBhY2NvdW50X3R5cGU6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEJhbmtUcmFuc2Zlck1pZ3JhdGVBY2NvdW50UmVzcG9uc2U+XG4gICk6IFByb21pc2U8QmFua1RyYW5zZmVyTWlncmF0ZUFjY291bnRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYmFua1RyYW5zZmVyTWlncmF0ZUFjY291bnQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBhY2NvdW50X251bWJlcjogYWNjb3VudF9udW1iZXIsXG4gICAgICAgIHJvdXRpbmdfbnVtYmVyOiByb3V0aW5nX251bWJlcixcbiAgICAgICAgYWNjb3VudF90eXBlOiBhY2NvdW50X3R5cGUsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvY3JlYXRlXG4gIGNyZWF0ZUFzc2V0UmVwb3J0KFxuICAgIGFjY2Vzc190b2tlbnM6IEFycmF5PHN0cmluZz4sXG4gICAgZGF5c19yZXF1ZXN0ZWQ6IG51bWJlcixcbiAgICBvcHRpb25zPzogQXNzZXRSZXBvcnRDcmVhdGVSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0Q3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0Q3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0Q3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYWNjZXNzX3Rva2VucyxcbiAgICAgICAgZGF5c19yZXF1ZXN0ZWQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvYXVkaXRfY29weS9jcmVhdGVcbiAgY3JlYXRlQXVkaXRDb3B5KFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGF1ZGl0b3JfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0QXVkaXRDb3B5Q3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0QXVkaXRDb3B5Q3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0QXVkaXRDb3B5Q3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICBhdWRpdG9yX2lkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gZGVwb3NpdF9zd2l0Y2gvY3JlYXRlXG4gIGNyZWF0ZURlcG9zaXRTd2l0Y2goXG4gICAgdGFyZ2V0X2FjY291bnRfaWQ6IHN0cmluZyxcbiAgICB0YXJnZXRfYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxEZXBvc2l0U3dpdGNoQ3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPERlcG9zaXRTd2l0Y2hDcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuZGVwb3NpdFN3aXRjaENyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHRhcmdldF9hY2Nlc3NfdG9rZW4sXG4gICAgICAgIHRhcmdldF9hY2NvdW50X2lkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gZGVwb3NpdF9zd2l0Y2gvdG9rZW4vY3JlYXRlXG4gIGNyZWF0ZURlcG9zaXRTd2l0Y2hUb2tlbihcbiAgICBkZXBvc2l0X3N3aXRjaF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8RGVwb3NpdFN3aXRjaFRva2VuQ3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPERlcG9zaXRTd2l0Y2hUb2tlbkNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5kZXBvc2l0U3dpdGNoVG9rZW5DcmVhdGUoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBkZXBvc2l0X3N3aXRjaF9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGxpbmsvdG9rZW4vY3JlYXRlL1xuICBjcmVhdGVMaW5rVG9rZW4oXG4gICAgb3B0aW9uczogTGlua1Rva2VuQ3JlYXRlUmVxdWVzdCxcbiAgICBjYj86IENhbGxiYWNrPExpbmtUb2tlbkNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxMaW5rVG9rZW5DcmVhdGVSZXNwb25zZT4ge1xuICAgIG9wdGlvbnMuY2xpZW50X2lkID0gdGhpcy5jbGllbnRfaWQ7XG4gICAgb3B0aW9ucy5zZWNyZXQgPSB0aGlzLnNlY3JldDtcblxuICAgIHJldHVybiBwbGFpZFJlcXVlc3QodGhpcy5vcGVuQVBJQ2xpZW50LmxpbmtUb2tlbkNyZWF0ZShvcHRpb25zKSwgY2IpO1xuICB9XG5cbiAgLy8gcGF5bWVudF9pbml0aWF0aW9uL3BheW1lbnQvY3JlYXRlXG4gIGNyZWF0ZVBheW1lbnQoXG4gICAgcmVjaXBpZW50X2lkOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlOiBzdHJpbmcsXG4gICAgYW1vdW50OiBBbW91bnQsXG4gICAgc2NoZWR1bGU/OiBQYXltZW50SW5pdGlhdGlvblBheW1lbnRDcmVhdGVSZXF1ZXN0U2NoZWR1bGUsXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW5pdGlhdGlvblBheW1lbnRDcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UGF5bWVudEluaXRpYXRpb25QYXltZW50Q3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbml0aWF0aW9uUGF5bWVudENyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHJlY2lwaWVudF9pZCxcbiAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHNjaGVkdWxlLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gL3BheW1lbnRfaW5pdGlhdGlvbi9yZWNpcGllbnQvY3JlYXRlXG4gIGNyZWF0ZVBheW1lbnRSZWNpcGllbnQoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGliYW4/OiBzdHJpbmcsXG4gICAgYWRkcmVzcz86IFBheW1lbnRJbml0aWF0aW9uQWRkcmVzcyxcbiAgICBiYWNzPzogUGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRDcmVhdGVSZXF1ZXN0QmFjcyxcbiAgICBjYj86IENhbGxiYWNrPFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaWJhbixcbiAgICAgICAgYmFjcyxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHByb2Nlc3Nvci90b2tlbi9jcmVhdGVcbiAgLy8gcHJvY2Vzc29yL2FwZXgvcHJvY2Vzc29yX3Rva2VuL2NyZWF0ZVxuICAvLyBwcm9jZXNzb3Ivc3RyaXBlL2JhbmtfYWNjb3VudF90b2tlbi9jcmVhdGVcbiAgY3JlYXRlUHJvY2Vzc29yVG9rZW4oXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZDogc3RyaW5nLFxuICAgIHByb2Nlc3Nvcjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29yVG9rZW5DcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UHJvY2Vzc29yVG9rZW5DcmVhdGVSZXNwb25zZT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIGFjY291bnRfaWQsXG4gICAgfTtcbiAgICBpZiAocHJvY2Vzc29yID09ICdzdHJpcGUnKSB7XG4gICAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29yU3RyaXBlQmFua0FjY291bnRUb2tlbkNyZWF0ZShvcHRpb25zKSxcbiAgICAgICAgY2IsXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzc29yID09ICdhcGV4Jykge1xuICAgICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvckFwZXhQcm9jZXNzb3JUb2tlbkNyZWF0ZShvcHRpb25zKSxcbiAgICAgICAgY2IsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcHRpb25zV2l0aFByb2Nlc3NvciA9IHsgLi4ub3B0aW9ucywgcHJvY2Vzc29yIH07XG4gICAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29yVG9rZW5DcmVhdGUob3B0aW9uc1dpdGhQcm9jZXNzb3IpLFxuICAgICAgICBjYixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJvY2Vzc29yL3N0cmlwZS9iYW5rX2FjY291bnRfdG9rZW4vY3JlYXRlXG4gIGNyZWF0ZVN0cmlwZVRva2VuKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGFjY291bnRfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFByb2Nlc3NvclN0cmlwZUJhbmtBY2NvdW50VG9rZW5DcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UHJvY2Vzc29yU3RyaXBlQmFua0FjY291bnRUb2tlbkNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUHJvY2Vzc29yVG9rZW4oYWNjZXNzX3Rva2VuLCBhY2NvdW50X2lkLCAnc3RyaXBlJywgY2IpO1xuICB9XG5cbiAgLy8gaXRlbS9wdWJsaWNfdG9rZW4vZXhjaGFuZ2VcbiAgZXhjaGFuZ2VQdWJsaWNUb2tlbihcbiAgICBwdWJsaWNfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1QdWJsaWNUb2tlbkV4Y2hhbmdlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEl0ZW1QdWJsaWNUb2tlbkV4Y2hhbmdlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1QdWJsaWNUb2tlbkV4Y2hhbmdlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgcHVibGljX3Rva2VuLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2ZpbHRlclxuICBmaWx0ZXJBc3NldFJlcG9ydChcbiAgICBhc3NldF9yZXBvcnRfdG9rZW46IHN0cmluZyxcbiAgICBhY2NvdW50X2lkc190b19leGNsdWRlOiBBcnJheTxzdHJpbmc+LFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRGaWx0ZXJSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QXNzZXRSZXBvcnRGaWx0ZXJSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRGaWx0ZXIoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBhc3NldF9yZXBvcnRfdG9rZW4sXG4gICAgICAgIGFjY291bnRfaWRzX3RvX2V4Y2x1ZGUsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhY2NvdW50cy9nZXRcbiAgZ2V0QWNjb3VudHMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEFjY291bnRzR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxBY2NvdW50c0dldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBY2NvdW50c0dldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hY2NvdW50c0dldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9nZXRcbiAgZ2V0QXNzZXRSZXBvcnQoXG4gICAgYXNzZXRfcmVwb3J0X3Rva2VuOiBzdHJpbmcsXG4gICAgaW5jbHVkZV9pbnNpZ2h0cz86IGJvb2xlYW4sXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEdldCh7XG4gICAgICAgIGFzc2V0X3JlcG9ydF90b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgaW5jbHVkZV9pbnNpZ2h0cyxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9wZGYvZ2V0XG4gIGdldEFzc2V0UmVwb3J0UGRmKFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8QnVmZmVyPixcbiAgKTogUHJvbWlzZTxCdWZmZXI+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0UERGR2V0KFxuICAgICAgICB7XG4gICAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgfSxcbiAgICAgICAgeyBqc29uOiB0cnVlLCByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSxcbiAgICAgICksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2F1ZGl0X2NvcHkvZ2V0XG4gIGdldEF1ZGl0Q29weShcbiAgICBhdWRpdF9jb3B5X3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEF1ZGl0Q29weUdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGF1ZGl0X2NvcHlfdG9rZW4sXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhdXRoL2dldFxuICBnZXRBdXRoKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBBdXRoR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxBdXRoR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEF1dGhHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXV0aEdldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbjogYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYWNjb3VudHMvYmFsYW5jZS9nZXRcbiAgZ2V0QmFsYW5jZShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBvcHRpb25zPzogQmFsYW5jZUdldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8QmFsYW5jZUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxCYWxhbmNlR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmJhbGFuY2VHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW46IGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGNhdGVnb3JpZXMvZ2V0XG4gIGdldENhdGVnb3JpZXMoXG4gICAgY2I/OiBDYWxsYmFjazxDYXRlZ29yaWVzR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPENhdGVnb3JpZXNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QodGhpcy5vcGVuQVBJQ2xpZW50LmNhdGVnb3JpZXNHZXQoe30pLCBjYik7XG4gIH1cblxuICAvLyBkZXBvc2l0X3N3aXRjaC9nZXRcbiAgZ2V0RGVwb3NpdFN3aXRjaChcbiAgICBkZXBvc2l0X3N3aXRjaF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8RGVwb3NpdFN3aXRjaEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxEZXBvc2l0U3dpdGNoR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmRlcG9zaXRTd2l0Y2hHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBkZXBvc2l0X3N3aXRjaF9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGludmVzdG1lbnRzL2hvbGRpbmdzL2dldFxuICBnZXRIb2xkaW5ncyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBvcHRpb25zPzogSW52ZXN0bWVudEhvbGRpbmdzR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxJbnZlc3RtZW50c0hvbGRpbmdzR2V0UmVxdWVzdD4sXG4gICk6IFByb21pc2U8SW52ZXN0bWVudHNIb2xkaW5nc0dldFJlcXVlc3Q+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmludmVzdG1lbnRzSG9sZGluZ3NHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpZGVudGl0eS9nZXRcbiAgZ2V0SWRlbnRpdHkoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxJZGVudGl0eUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJZGVudGl0eUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pZGVudGl0eUdldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGluc3RpdHV0aW9ucy9nZXRfYnlfaWRcbiAgZ2V0SW5zdGl0dXRpb25CeUlkKFxuICAgIGluc3RpdHV0aW9uX2lkOiBzdHJpbmcsXG4gICAgY291bnRyeV9jb2RlczogQXJyYXk8Q291bnRyeUNvZGU+LFxuICAgIG9wdGlvbnM/OiBJbnN0aXR1dGlvbnNHZXRCeUlkUmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxJbnN0aXR1dGlvbnNHZXRCeUlkUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEluc3RpdHV0aW9uc0dldEJ5SWRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW5zdGl0dXRpb25zR2V0QnlJRCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIGNvdW50cnlfY29kZXMsXG4gICAgICAgIGluc3RpdHV0aW9uX2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaW5zdGl0dXRpb25zL2dldFxuICBnZXRJbnN0aXR1dGlvbnMoXG4gICAgY291bnQ6IG51bWJlcixcbiAgICBvZmZzZXQ6IG51bWJlcixcbiAgICBjb3VudHJ5X2NvZGVzOiBBcnJheTxDb3VudHJ5Q29kZT4sXG4gICAgb3B0aW9ucz86IEluc3RpdHV0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW5zdGl0dXRpb25zR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEluc3RpdHV0aW9uc0dldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pbnN0aXR1dGlvbnNHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBjb3VudCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBjb3VudHJ5X2NvZGVzLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaW52ZXN0bWVudHMvdHJhbnNhY3Rpb25zL2dldFxuICBnZXRJbnZlc3RtZW50VHJhbnNhY3Rpb25zKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIHN0YXJ0X2RhdGU6IHN0cmluZyxcbiAgICBlbmRfZGF0ZTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBJbnZlc3RtZW50c1RyYW5zYWN0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHN0YXJ0X2RhdGUsXG4gICAgICAgIGVuZF9kYXRlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS9nZXRcbiAgZ2V0SXRlbShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1HZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gbGlhYmlsaXRpZXMvZ2V0XG4gIGdldExpYWJpbGl0aWVzKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBMaWFiaWxpdGllc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8TGlhYmlsaXRpZXNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8TGlhYmlsaXRpZXNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQubGlhYmlsaXRpZXNHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBsaW5rL3Rva2VuL2dldFxuICBnZXRMaW5rVG9rZW4oXG4gICAgbGlua190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8TGlua1Rva2VuR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPExpbmtUb2tlbkdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5saW5rVG9rZW5HZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBsaW5rX3Rva2VuLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApXG4gIH1cblxuICAvLyBwYXltZW50X2luaXRpYXRpb24vcGF5bWVudC9nZXRcbiAgZ2V0UGF5bWVudChcbiAgICBwYXltZW50X2lkOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW50aWF0aW9uUGF5bWVudEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQYXltZW50SW50aWF0aW9uUGF5bWVudEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wYXltZW50SW50aWF0aW9uUGF5bWVudEdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHBheW1lbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwYXltZW50X2luaXRpYXRpb24vcmVjaXBpZW50L2dldFxuICBnZXRQYXltZW50UmVjaXBpZW50KFxuICAgIHJlY2lwaWVudF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICByZWNpcGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyB0cmFuc2FjdGlvbnMvZ2V0XG4gIGdldFRyYW5zYWN0aW9ucyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBzdGFydF9kYXRlOiBzdHJpbmcsXG4gICAgZW5kX2RhdGU6IHN0cmluZyxcbiAgICBvcHRpb25zPzogVHJhbnNhY3Rpb25zR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxUcmFuc2FjdGlvbnNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8VHJhbnNhY3Rpb25zR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnRyYW5zYWN0aW9uc0dldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbjogYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBzdGFydF9kYXRlLFxuICAgICAgICBlbmRfZGF0ZSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHdlYmhvb2tfdmVyaWZpY2F0aW9uX2tleS9nZXRcbiAgZ2V0V2ViaG9va1ZlcmlmaWNhdGlvbktleShcbiAgICBrZXlfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFdlYmhvb2tWZXJpZmljYXRpb25LZXlHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8V2ViaG9va1ZlcmlmaWNhdGlvbktleUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC53ZWJob29rVmVyaWZpY2F0aW9uS2V5R2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAga2V5X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS9pbXBvcnRcbiAgaW1wb3J0SXRlbShcbiAgICBwcm9kdWN0czogQXJyYXk8c3RyaW5nPixcbiAgICB1c2VyX2F1dGg6IEl0ZW1JbXBvcnRSZXF1ZXN0VXNlckF1dGgsXG4gICAgb3B0aW9ucz86IEl0ZW1JbXBvcnRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1JbXBvcnRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbUltcG9ydFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtSW1wb3J0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHVzZXJfYXV0aCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGl0ZW0vYWNjZXNzX3Rva2VuL2ludmFsaWRhdGVcbiAgaW52YWxpZGF0ZUFjY2Vzc1Rva2VuKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbUFjY2Vzc1Rva2VuSW52YWxpZGF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtQWNjZXNzVG9rZW5JbnZhbGlkYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1BY2Nlc3NUb2tlbkludmFsaWRhdGUoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwYXltZW50X2luaXRpYXRpb24vcmVjaXBpZW50L2xpc3RcbiAgbGlzdFBheW1lbnRSZWNpcGllbnRzKFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEluaXRpYXRpb25QYXltZW50TGlzdFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50TGlzdCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwYXltZW50X2luaXRpYXRpb24vcGF5bWVudC9saXN0XG4gIGxpc3RQYXltZW50cyhcbiAgICBvcHRpb25zPzogeyBjb3VudDogbnVtYmVyOyBjdXJzb3I6IHN0cmluZyB9LFxuICAgIGNiPzogQ2FsbGJhY2s8UGF5bWVudEluaXRpYXRpb25QYXltZW50TGlzdFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbml0aWF0aW9uUGF5bWVudExpc3Qoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBjb3VudDogb3B0aW9ucz8uY291bnQgIT0gbnVsbCA/IG9wdGlvbnMuY291bnQgOiB1bmRlZmluZWQsXG4gICAgICAgIGN1cnNvcjogb3B0aW9ucz8uY3Vyc29yICE9IG51bGwgPyBvcHRpb25zLmN1cnNvciA6IHVuZGVmaW5lZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHByb2Nlc3Nvci9hdXRoL2dldFxuICBnZXRBdXRoUHJvY2Vzc29yKFxuICAgIHByb2Nlc3Nvcl90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29yQXV0aEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQcm9jZXNzb3JBdXRoR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvckF1dGhHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwcm9jZXNzb3JfdG9rZW4sXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwcm9jZXNzb3IvYmFsYW5jZS9nZXRcbiAgZ2V0QmFsYW5jZVByb2Nlc3NvcihcbiAgICBwcm9jZXNzb3JfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFByb2Nlc3NvckJhbGFuY2VHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UHJvY2Vzc29yQmFsYW5jZUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wcm9jZXNzb3JCYWxhbmNlR2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgcHJvY2Vzc29yX3Rva2VuLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29yL2lkZW50aXR5L2dldFxuICBnZXRJZGVudGl0eVByb2Nlc3NvcihcbiAgICBwcm9jZXNzb3JfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFByb2Nlc3NvcklkZW50aXR5R2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFByb2Nlc3NvcklkZW50aXR5R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvcklkZW50aXR5R2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgcHJvY2Vzc29yX3Rva2VuLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L3JlZnJlc2hcbiAgcmVmcmVzaEFzc2V0UmVwb3J0KFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGRheXNfcmVxdWVzdGVkPzogbnVtYmVyLFxuICAgIG9wdGlvbnM/OiBBc3NldFJlcG9ydFJlZnJlc2hSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0UmVmcmVzaFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydFJlZnJlc2hSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRSZWZyZXNoKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICBkYXlzX3JlcXVlc3RlZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHRyYW5zYWN0aW9ucy9yZWZyZXNoXG4gIHJlZnJlc2hUcmFuc2FjdGlvbnMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxUcmFuc2FjdGlvbnNSZWZyZXNoUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFRyYW5zYWN0aW9uc1JlZnJlc2hSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQudHJhbnNhY3Rpb25zUmVmcmVzaCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9yZW1vdmVcbiAgcmVtb3ZlQXNzZXRSZXBvcnQoXG4gICAgYXNzZXRfcmVwb3J0X3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydFJlbW92ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydFJlbW92ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydFJlbW92ZSh7XG4gICAgICAgIGFzc2V0X3JlcG9ydF90b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9hdWRpdF9jb3B5L3JlbW92ZVxuICByZW1vdmVBdWRpdENvcHkoXG4gICAgYXVkaXRfY29weV90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRBdWRpdENvcHlSZW1vdmVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QXNzZXRSZXBvcnRBdWRpdENvcHlSZW1vdmVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRBdWRpdENvcHlSZW1vdmUoe1xuICAgICAgICBhdWRpdF9jb3B5X3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS9yZW1vdmVcbiAgcmVtb3ZlSXRlbShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1SZW1vdmVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbVJlbW92ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtUmVtb3ZlKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gc2FuZGJveC9pdGVtL3Jlc2V0X2xvZ2luXG4gIHJlc2V0TG9naW4oXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxTYW5kYm94SXRlbVJlc2V0TG9naW5SZXNwb25zZT4sXG4gICk6IFByb21pc2U8U2FuZGJveEl0ZW1SZXNldExvZ2luUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnNhbmRib3hJdGVtUmVzZXRMb2dpbih7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHNhbmRib3gvYmFua190cmFuc2Zlci9zaW11bGF0ZVxuICBzYW5kYm94QmFua1RyYW5zZmVyU2ltdWxhdGUoXG4gICAgYmFua190cmFuc2Zlcl9pZDogc3RyaW5nLFxuICAgIGV2ZW50X3R5cGU6IEJhbmtUcmFuc2ZlckV2ZW50VHlwZSxcbiAgICBmYWlsdXJlX3JlYXNvbj86IEJhbmtUcmFuc2ZlckZhaWx1cmUsXG4gICAgY2I/OiBDYWxsYmFjazxTYW5kYm94QmFua1RyYW5zZmVyU2ltdWxhdGVSZXNwb25zZT5cbiAgKTogUHJvbWlzZTxTYW5kYm94QmFua1RyYW5zZmVyU2ltdWxhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuc2FuZGJveEJhbmtUcmFuc2ZlclNpbXVsYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYmFua190cmFuc2Zlcl9pZDogYmFua190cmFuc2Zlcl9pZCxcbiAgICAgICAgZXZlbnRfdHlwZTogZXZlbnRfdHlwZSxcbiAgICAgICAgZmFpbHVyZV9yZWFzb246IGZhaWx1cmVfcmVhc29uLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gc2FuZGJveC9wdWJsaWNfdG9rZW4vY3JlYXRlXG4gIHNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZShcbiAgICBpbnN0aXR1dGlvbl9pZDogc3RyaW5nLFxuICAgIGluaXRpYWxfcHJvZHVjdHM6IEFycmF5PFByb2R1Y3RzPixcbiAgICBvcHRpb25zOiBTYW5kYm94UHVibGljVG9rZW5DcmVhdGVSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPFNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxTYW5kYm94UHVibGljVG9rZW5DcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuc2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgaW5zdGl0dXRpb25faWQsXG4gICAgICAgIGluaXRpYWxfcHJvZHVjdHMsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBzYW5kYm94L2l0ZW0vZmlyZV93ZWJob29rXG4gIHNhbmRib3hJdGVtRmlyZVdlYmhvb2soXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgd2ViaG9va19jb2RlOiBTYW5kYm94SXRlbUZpcmVXZWJob29rUmVxdWVzdFdlYmhvb2tDb2RlRW51bSxcbiAgICBjYj86IENhbGxiYWNrPFNhbmRib3hJdGVtRmlyZVdlYmhvb2tSZXNwb25zZT4sXG4gICk6IFByb21pc2U8U2FuZGJveEl0ZW1GaXJlV2ViaG9va1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5zYW5kYm94SXRlbUZpcmVXZWJob29rKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICB3ZWJob29rX2NvZGUsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBzYW5kYm94L2l0ZW0vc2V0X3ZlcmlmaWNhdGlvbl9zdGF0dXNcbiAgc2FuZGJveEl0ZW1TZXRWZXJpZmljYXRpb25TdGF0dXMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZDogc3RyaW5nLFxuICAgIHZlcmlmaWNhdGlvbl9zdGF0dXM6IFNhbmRib3hJdGVtU2V0VmVyaWZpY2F0aW9uU3RhdHVzUmVxdWVzdFZlcmlmaWNhdGlvblN0YXR1c0VudW0sXG4gICAgY2I/OiBDYWxsYmFjazxTYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1c1Jlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxTYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5zYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1cyh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgYWNjb3VudF9pZCxcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgdmVyaWZpY2F0aW9uX3N0YXR1cyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGluc3RpdHV0aW9ucy9zZWFyY2hcbiAgc2VhcmNoSW5zdGl0dXRpb25zQnlOYW1lKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcHJvZHVjdHM6IEFycmF5PFByb2R1Y3RzPixcbiAgICBjb3VudHJ5X2NvZGVzOiBBcnJheTxDb3VudHJ5Q29kZT4sXG4gICAgb3B0aW9ucz86IEluc3RpdHV0aW9uc1NlYXJjaFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW5zdGl0dXRpb25TZWFyY2hSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SW5zdGl0dXRpb25TZWFyY2hSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW5zdGl0dXRpb25zU2VhcmNoKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBjb3VudHJ5X2NvZGVzLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS93ZWJob29rL3VwZGF0ZVxuICB1cGRhdGVJdGVtV2ViaG9vayhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICB3ZWJob29rOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxJdGVtV2ViaG9va1VwZGF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtV2ViaG9va1VwZGF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtV2ViaG9va1VwZGF0ZSh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgd2ViaG9vayxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzXG5jbGFzcyBQbGFpZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvL0B0cy1pZ25vcmVcbiAgY29uc3RydWN0b3IoYm9keTogYW55KSB7XG4gICAgc3VwZXIoYm9keS5lcnJvcl9jb2RlKTtcbiAgICB0aGlzLm5hbWUgPSAnUGxhaWRFcnJvcic7XG5cbiAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdvYmplY3QnKSB7XG4gICAgICAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLCBib2R5KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVqZWN0V2l0aFBsYWlkRXJyb3IgPSAoZGF0YTogYXhpb3MuQXhpb3NFcnJvcik6IFBsYWlkRXJyb3IgPT4ge1xuICBjb25zdCBlcnJvciA9IGRhdGEucmVzcG9uc2U/LmRhdGE7XG5cbiAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgZXJyb3IgIT09IG51bGwpIHtcbiAgICBlcnJvci5zdGF0dXNfY29kZSA9IGRhdGEucmVzcG9uc2U/LnN0YXR1cztcblxuICAgIHJldHVybiBuZXcgUGxhaWRFcnJvcihlcnJvcik7XG4gIH1cblxuICAvLyBVbmtub3duIGJvZHkgdHlwZSByZXR1cm5lZCwgcmV0dXJuIGEgc3RhbmRhcmQgQVBJX0VSUk9SXG4gIHJldHVybiBuZXcgUGxhaWRFcnJvcih7XG4gICAgZXJyb3JfdHlwZTogJ0FQSV9FUlJPUicsXG4gICAgc3RhdHVzX2NvZGU6IGRhdGEuY29kZSxcbiAgICBlcnJvcl9jb2RlOiAnSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICBlcnJvcl9tZXNzYWdlOiBTdHJpbmcoZXJyb3IpLFxuICAgIGRpc3BsYXlfbWVzc2FnZTogbnVsbCxcbiAgICByZXF1ZXN0X2lkOiBudWxsLFxuICB9KTtcbn07XG5cbmNvbnN0IHdyYXBQcm9taXNlID0gKGNhbGxlcjogUHJvbWlzZTxheGlvcy5BeGlvc1Jlc3BvbnNlPikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNhbGxlclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcC5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogYXhpb3MuQXhpb3NFcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHJlamVjdFdpdGhQbGFpZEVycm9yKGVycikpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgY2FsbGJhY2tPcHRpb25zID0gKHJlcXVlc3Q6IGFueSwgY2I6IENhbGxiYWNrPGF4aW9zLkF4aW9zUmVzcG9uc2U+KSA9PiB7XG4gIHJldHVybiByZXF1ZXN0XG4gICAgLnRoZW4oKHJlc3A6IGF4aW9zLkF4aW9zUmVzcG9uc2UpID0+IHtcbiAgICAgIGNiKG51bGwsIHJlc3AuZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogYXhpb3MuQXhpb3NFcnJvciwgXzogYW55KSA9PiB7XG4gICAgICBjYihyZWplY3RXaXRoUGxhaWRFcnJvcihlcnIpLCBudWxsKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHBsYWlkUmVxdWVzdCA9IChcbiAgY2FsbGVyOiBQcm9taXNlPGF4aW9zLkF4aW9zUmVzcG9uc2U+LFxuICBjYj86IENhbGxiYWNrPGFueT4sXG4pID0+IHtcbiAgaWYgKGNiKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrT3B0aW9ucyhjYWxsZXIsIGNiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gd3JhcFByb21pc2UoY2FsbGVyKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgQ2xpZW50LCBlbnZpcm9ubWVudHMsIFBsYWlkRXJyb3IsIHBsYWlkUmVxdWVzdCB9O1xuIl19