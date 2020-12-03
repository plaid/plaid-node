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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsbURBc0YwQjtBQUUxQixvREFBd0M7QUFzQnhDLCtDQUErQztBQUMvQyxJQUFNLGVBQWUsR0FBRyxZQUFZLENBQUM7QUFFckMsSUFBTSxZQUFZLEdBQXNCO0lBQ3RDLFVBQVUsRUFBRSw4QkFBOEI7SUFDMUMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQyxXQUFXLEVBQUUsK0JBQStCO0NBQzdDLENBQUM7QUEwakNlLG9DQUFZO0FBeGpDN0I7SUFPRSxnQkFBWSxNQUFjOztRQUN4QixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ2pELE1BQU0sSUFBSSxLQUFLLENBQ2IsNkJBQTZCO2dCQUMzQiwrQ0FBK0M7Z0JBQy9DLG1DQUFtQyxDQUN0QyxDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUM3QztRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFDRSxDQUFDO1lBQ0MsWUFBWSxDQUFDLFVBQVU7WUFDdkIsWUFBWSxDQUFDLE9BQU87WUFDcEIsWUFBWSxDQUFDLFdBQVc7U0FFekIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUN0QjtZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxt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J2F4aW9zJztcblxuaW1wb3J0IHtcbiAgQWNjb3VudHNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgQWNjb3VudHNHZXRSZXNwb25zZSxcbiAgQW1vdW50LFxuICBBc3NldFJlcG9ydEF1ZGl0Q29weUNyZWF0ZVJlc3BvbnNlLFxuICBBc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZVJlc3BvbnNlLFxuICBBc3NldFJlcG9ydENyZWF0ZVJlcXVlc3RPcHRpb25zLFxuICBBc3NldFJlcG9ydENyZWF0ZVJlc3BvbnNlLFxuICBBc3NldFJlcG9ydEZpbHRlclJlc3BvbnNlLFxuICBBc3NldFJlcG9ydEdldFJlc3BvbnNlLFxuICBBc3NldFJlcG9ydFJlZnJlc2hSZXF1ZXN0T3B0aW9ucyxcbiAgQXNzZXRSZXBvcnRSZWZyZXNoUmVzcG9uc2UsXG4gIEFzc2V0UmVwb3J0UmVtb3ZlUmVzcG9uc2UsXG4gIEF1dGhHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgQXV0aEdldFJlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJCYWxhbmNlR2V0UmVzcG9uc2UsXG4gIEJhbmtUcmFuc2ZlckNhbmNlbFJlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJDcmVhdGVSZXF1ZXN0LFxuICBCYW5rVHJhbnNmZXJDcmVhdGVSZXNwb25zZSxcbiAgQmFua1RyYW5zZmVyRXZlbnRMaXN0UmVxdWVzdCxcbiAgQmFua1RyYW5zZmVyRXZlbnRMaXN0UmVzcG9uc2UsXG4gIEJhbmtUcmFuc2ZlckV2ZW50U3luY1Jlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJFdmVudFR5cGUsXG4gIEJhbmtUcmFuc2ZlckZhaWx1cmUsXG4gIEJhbmtUcmFuc2ZlckdldFJlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJMaXN0UmVxdWVzdCxcbiAgQmFua1RyYW5zZmVyTGlzdFJlc3BvbnNlLFxuICBCYW5rVHJhbnNmZXJNaWdyYXRlQWNjb3VudFJlc3BvbnNlLFxuICBCYWxhbmNlR2V0UmVxdWVzdE9wdGlvbnMsXG4gIEJhbGFuY2VHZXRSZXNwb25zZSxcbiAgQ2F0ZWdvcmllc0dldFJlc3BvbnNlLFxuICBDb3VudHJ5Q29kZSxcbiAgRGVwb3NpdFN3aXRjaENyZWF0ZVJlc3BvbnNlLFxuICBEZXBvc2l0U3dpdGNoR2V0UmVzcG9uc2UsXG4gIERlcG9zaXRTd2l0Y2hUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBFeHRlcm5hbFBheW1lbnRTY2hlZHVsZSxcbiAgSWRlbnRpdHlHZXRSZXNwb25zZSxcbiAgSW5zdGl0dXRpb25zU2VhcmNoUmVxdWVzdE9wdGlvbnMsXG4gIEluc3RpdHV0aW9uc1NlYXJjaFJlc3BvbnNlLFxuICBJbnN0aXR1dGlvbnNHZXRCeUlkUmVxdWVzdE9wdGlvbnMsXG4gIEluc3RpdHV0aW9uc0dldEJ5SWRSZXNwb25zZSxcbiAgSW5zdGl0dXRpb25zR2V0UmVxdWVzdE9wdGlvbnMsXG4gIEluc3RpdHV0aW9uc0dldFJlc3BvbnNlLFxuICBJbnZlc3RtZW50c0hvbGRpbmdzR2V0UmVxdWVzdCxcbiAgSW52ZXN0bWVudEhvbGRpbmdzR2V0UmVxdWVzdE9wdGlvbnMsXG4gIEludmVzdG1lbnRzVHJhbnNhY3Rpb25zR2V0UmVxdWVzdE9wdGlvbnMsXG4gIEludmVzdG1lbnRzVHJhbnNhY3Rpb25zR2V0UmVzcG9uc2UsXG4gIEl0ZW1BY2Nlc3NUb2tlbkludmFsaWRhdGVSZXNwb25zZSxcbiAgSXRlbUdldFJlc3BvbnNlLFxuICBJdGVtSW1wb3J0UmVxdWVzdE9wdGlvbnMsXG4gIEl0ZW1JbXBvcnRSZXF1ZXN0VXNlckF1dGgsXG4gIEl0ZW1JbXBvcnRSZXNwb25zZSxcbiAgSXRlbVB1YmxpY1Rva2VuRXhjaGFuZ2VSZXNwb25zZSxcbiAgSXRlbVJlbW92ZVJlc3BvbnNlLFxuICBJdGVtV2ViaG9va1VwZGF0ZVJlc3BvbnNlLFxuICBMaWFiaWxpdGllc0dldFJlcXVlc3RPcHRpb25zLFxuICBMaWFiaWxpdGllc0dldFJlc3BvbnNlLFxuICBMaW5rVG9rZW5DcmVhdGVSZXF1ZXN0LFxuICBMaW5rVG9rZW5DcmVhdGVSZXNwb25zZSxcbiAgTGlua1Rva2VuR2V0UmVzcG9uc2UsXG4gIFBheW1lbnRJbml0aWF0aW9uQWRkcmVzcyxcbiAgUGF5bWVudEluaXRpYXRpb25QYXltZW50Q3JlYXRlUmVzcG9uc2UsXG4gIFBheW1lbnRJbml0aWF0aW9uUGF5bWVudExpc3RSZXNwb25zZSxcbiAgUGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRDcmVhdGVSZXNwb25zZSxcbiAgUGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRHZXRSZXNwb25zZSxcbiAgUGF5bWVudEluaXRpYXRpb25QYXltZW50R2V0UmVzcG9uc2UsXG4gIFBsYWlkQXBpLFxuICBQcm9jZXNzb3JBdXRoR2V0UmVzcG9uc2UsXG4gIFByb2Nlc3NvckJhbGFuY2VHZXRSZXNwb25zZSxcbiAgUHJvY2Vzc29ySWRlbnRpdHlHZXRSZXNwb25zZSxcbiAgUHJvY2Vzc29yU3RyaXBlQmFua0FjY291bnRUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBQcm9jZXNzb3JUb2tlbkNyZWF0ZVJlc3BvbnNlLFxuICBQcm9kdWN0cyxcbiAgUmVjaXBpZW50QkFDUyxcbiAgU2FuZGJveEJhbmtUcmFuc2ZlclNpbXVsYXRlUmVzcG9uc2UsXG4gIFNhbmRib3hJdGVtRmlyZVdlYmhvb2tSZXF1ZXN0V2ViaG9va0NvZGVFbnVtLFxuICBTYW5kYm94SXRlbUZpcmVXZWJob29rUmVzcG9uc2UsXG4gIFNhbmRib3hJdGVtUmVzZXRMb2dpblJlc3BvbnNlLFxuICBTYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1c1Jlc3BvbnNlLFxuICBTYW5kYm94UHVibGljVG9rZW5DcmVhdGVSZXF1ZXN0T3B0aW9ucyxcbiAgU2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlUmVzcG9uc2UsXG4gIFNhbmRib3hJdGVtU2V0VmVyaWZpY2F0aW9uU3RhdHVzUmVxdWVzdFZlcmlmaWNhdGlvblN0YXR1c0VudW0sXG4gIFRyYW5zYWN0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICBUcmFuc2FjdGlvbnNHZXRSZXNwb25zZSxcbiAgVHJhbnNhY3Rpb25zUmVmcmVzaFJlc3BvbnNlLFxuICBXZWJob29rVmVyaWZpY2F0aW9uS2V5R2V0UmVzcG9uc2UsXG59IGZyb20gJy4vZ2VuZXJhdGVkLWNvZGUnO1xuXG5pbXBvcnQgKiBhcyBwanNvbiBmcm9tICcuL3BhY2thZ2UuanNvbic7XG5cbi8vIFR5cGUgRGVmaW5pdGlvbnNcbmludGVyZmFjZSBQbGFpZEVudmlyb25tZW50cyB7XG4gIHByb2R1Y3Rpb246ICdodHRwczovL3Byb2R1Y3Rpb24ucGxhaWQuY29tJztcbiAgc2FuZGJveDogJ2h0dHBzOi8vc2FuZGJveC5wbGFpZC5jb20nO1xuICBkZXZlbG9wbWVudDogJ2h0dHBzOi8vZGV2ZWxvcG1lbnQucGxhaWQuY29tJztcbiAgW2Vudjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ29uZmlnIHtcbiAgY2xpZW50SUQ6IHN0cmluZztcbiAgc2VjcmV0OiBzdHJpbmc7XG4gIGVudjogUGxhaWRFbnZpcm9ubWVudHM7XG4gIG9wdGlvbnM6IE9iamVjdDtcbn1cblxudHlwZSBDYWxsYmFjazxUIGV4dGVuZHMgT2JqZWN0PiA9IChcbiAgZXJyOiBFcnJvciB8IG51bGwsXG4gIHJlc3BvbnNlOiBUIHwgbnVsbCxcbikgPT4gdm9pZDtcblxuLy8gTk9URTogVGhpcyB2ZXJzaW9uIHdpbGwgb25seSBzdXBwb3J0IGxhdGVzdC5cbmNvbnN0IERFRkFVTFRfVkVSU0lPTiA9ICcyMDIwLTA5LTE0JztcblxuY29uc3QgZW52aXJvbm1lbnRzOiBQbGFpZEVudmlyb25tZW50cyA9IHtcbiAgcHJvZHVjdGlvbjogJ2h0dHBzOi8vcHJvZHVjdGlvbi5wbGFpZC5jb20nLFxuICBzYW5kYm94OiAnaHR0cHM6Ly9zYW5kYm94LnBsYWlkLmNvbScsXG4gIGRldmVsb3BtZW50OiAnaHR0cHM6Ly9kZXZlbG9wbWVudC5wbGFpZC5jb20nLFxufTtcblxuY2xhc3MgQ2xpZW50IHtcbiAgY2xpZW50X2lkOiBzdHJpbmc7XG4gIHNlY3JldDogc3RyaW5nO1xuICBlbnY6IFBsYWlkRW52aXJvbm1lbnRzO1xuICBjbGllbnRfcmVxdWVzdF9vcHRzOiBPYmplY3Q7XG4gIG9wZW5BUElDbGllbnQ6IFBsYWlkQXBpO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdvYmplY3QnIHx8IGNvbmZpZyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVW5leHBlY3RlZCBwYXJhbWV0ZXIgdHlwZS4gJyArXG4gICAgICAgICAgJ1JlZmVyIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9wbGFpZC9wbGFpZC1ub2RlICcgK1xuICAgICAgICAgICdmb3IgaG93IHRvIGNyZWF0ZSBhIFBsYWlkIGNsaWVudC4nLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNsaWVudElEID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgUGxhaWQgXCJjbGllbnRJRFwiJyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zZWNyZXQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBQbGFpZCBcInNlY3JldFwiJyk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgIVtcbiAgICAgICAgZW52aXJvbm1lbnRzLnByb2R1Y3Rpb24sXG4gICAgICAgIGVudmlyb25tZW50cy5zYW5kYm94LFxuICAgICAgICBlbnZpcm9ubWVudHMuZGV2ZWxvcG1lbnQsXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgXS5pbmNsdWRlcyhjb25maWcuZW52KVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYWlkIGVudmlyb25tZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvbyBtYW55IGFyZ3VtZW50cyB0byBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIHRoaXMuY2xpZW50X2lkID0gY29uZmlnLmNsaWVudElEO1xuICAgIHRoaXMuc2VjcmV0ID0gY29uZmlnLnNlY3JldDtcbiAgICB0aGlzLmVudiA9IGNvbmZpZy5lbnY7XG5cbiAgICBpZiAoY29uZmlnLm9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgY29uZmlnLm9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmNsaWVudF9yZXF1ZXN0X29wdHMgPSBjb25maWcub3B0aW9ucztcblxuICAgIC8vIE5ldyBnZW5lcmF0ZWQgaW50ZXJmYWNlXG4gICAgdGhpcy5vcGVuQVBJQ2xpZW50ID0gbmV3IFBsYWlkQXBpKFxuICAgICAge1xuICAgICAgICBiYXNlT3B0aW9uczoge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFsnUGxhaWQtVmVyc2lvbiddOiBERUZBVUxUX1ZFUlNJT04sXG4gICAgICAgICAgICBbJ1VzZXItQWdlbnQnXTogJ1BsYWlkIE5vZGUgdicgKyBwanNvbi52ZXJzaW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgKGNvbmZpZy5lbnYgYXMgdW5rbm93bikgYXMgc3RyaW5nLFxuICAgICk7XG4gIH1cblxuICAvLyBiYW5rX3RyYW5zZmVyL2JhbGFuY2UvZ2V0XG4gIGJhbmtUcmFuc2ZlckJhbGFuY2VHZXQoXG4gICAgb3JpZ2luYXRpb25fYWNjb3VudF9pZD86IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEJhbmtUcmFuc2ZlckJhbGFuY2VHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QmFua1RyYW5zZmVyQmFsYW5jZUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5iYW5rVHJhbnNmZXJCYWxhbmNlR2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3JpZ2luYXRpb25fYWNjb3VudF9pZDogb3JpZ2luYXRpb25fYWNjb3VudF9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGJhbmtfdHJhbnNmZXIvY2FuY2VsXG4gIGJhbmtUcmFuc2ZlckNhbmNlbChcbiAgICBiYW5rX3RyYW5zZmVyX2lkOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxCYW5rVHJhbnNmZXJDYW5jZWxSZXNwb25zZT5cbiAgKTogUHJvbWlzZTxCYW5rVHJhbnNmZXJDYW5jZWxSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYmFua1RyYW5zZmVyQ2FuY2VsKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYmFua190cmFuc2Zlcl9pZDogYmFua190cmFuc2Zlcl9pZFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYmFua190cmFuc2Zlci9jcmVhdGVcbiAgYmFua1RyYW5zZmVyQ3JlYXRlKFxuICAgIG9wdGlvbnM6IEJhbmtUcmFuc2ZlckNyZWF0ZVJlcXVlc3QsXG4gICAgY2I/OiBDYWxsYmFjazxCYW5rVHJhbnNmZXJDcmVhdGVSZXNwb25zZT5cbiAgKTogUHJvbWlzZTxCYW5rVHJhbnNmZXJDcmVhdGVSZXNwb25zZT4ge1xuICAgIG9wdGlvbnMuY2xpZW50X2lkID0gdGhpcy5jbGllbnRfaWQ7XG4gICAgb3B0aW9ucy5zZWNyZXQgPSB0aGlzLnNlY3JldDtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KHRoaXMub3BlbkFQSUNsaWVudC5iYW5rVHJhbnNmZXJDcmVhdGUob3B0aW9ucyksIGNiKTtcbiAgfVxuXG4gIC8vIGJhbmtfdHJhbnNmZXIvZXZlbnQvbGlzdFxuICBiYW5rVHJhbnNmZXJFdmVudExpc3QoXG4gICAgb3B0aW9uczogQmFua1RyYW5zZmVyRXZlbnRMaXN0UmVxdWVzdCxcbiAgICBjYj86IENhbGxiYWNrPEJhbmtUcmFuc2ZlckV2ZW50TGlzdFJlc3BvbnNlPlxuICApOiBQcm9taXNlPEJhbmtUcmFuc2ZlckV2ZW50TGlzdFJlc3BvbnNlPiB7XG4gICAgb3B0aW9ucy5jbGllbnRfaWQgPSB0aGlzLmNsaWVudF9pZDtcbiAgICBvcHRpb25zLnNlY3JldCA9IHRoaXMuc2VjcmV0O1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QodGhpcy5vcGVuQVBJQ2xpZW50LmJhbmtUcmFuc2ZlckV2ZW50TGlzdChvcHRpb25zKSwgY2IpO1xuICB9XG5cbiAgLy8gYmFua190cmFuc2Zlci9ldmVudC9zeW5jXG4gIGJhbmtUcmFuc2ZlckV2ZW50U3luYyhcbiAgICBhZnRlcl9pZDogbnVtYmVyLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICAgIGNiPzogQ2FsbGJhY2s8QmFua1RyYW5zZmVyRXZlbnRTeW5jUmVzcG9uc2U+XG4gICk6IFByb21pc2U8QmFua1RyYW5zZmVyRXZlbnRTeW5jUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmJhbmtUcmFuc2ZlckV2ZW50U3luYyh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGFmdGVyX2lkOiBhZnRlcl9pZCxcbiAgICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYmFua190cmFuc2Zlci9nZXRcbiAgYmFua1RyYW5zZmVyR2V0KFxuICAgIGJhbmtfdHJhbnNmZXJfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEJhbmtUcmFuc2ZlckdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxCYW5rVHJhbnNmZXJHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYmFua1RyYW5zZmVyR2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYmFua190cmFuc2Zlcl9pZDogYmFua190cmFuc2Zlcl9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGJhbmtfdHJhbnNmZXIvbGlzdFxuICBiYW5rVHJhbnNmZXJMaXN0KFxuICAgIG9wdGlvbnM6IEJhbmtUcmFuc2Zlckxpc3RSZXF1ZXN0LFxuICAgIGNiPzogQ2FsbGJhY2s8QmFua1RyYW5zZmVyTGlzdFJlc3BvbnNlPlxuICApOiBQcm9taXNlPEJhbmtUcmFuc2Zlckxpc3RSZXNwb25zZT4ge1xuICAgIG9wdGlvbnMuY2xpZW50X2lkID0gdGhpcy5jbGllbnRfaWQ7XG4gICAgb3B0aW9ucy5zZWNyZXQgPSB0aGlzLnNlY3JldDtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KHRoaXMub3BlbkFQSUNsaWVudC5iYW5rVHJhbnNmZXJMaXN0KG9wdGlvbnMpLCBjYik7XG4gIH1cblxuICAvLyBiYW5rX3RyYW5zZmVyL21pZ3JhdGVfYWNjb3VudFxuICBiYW5rVHJhbnNmZXJNaWdyYXRlQWNjb3VudChcbiAgICBhY2NvdW50X251bWJlcjogc3RyaW5nLFxuICAgIHJvdXRpbmdfbnVtYmVyOiBzdHJpbmcsXG4gICAgYWNjb3VudF90eXBlOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxCYW5rVHJhbnNmZXJNaWdyYXRlQWNjb3VudFJlc3BvbnNlPlxuICApOiBQcm9taXNlPEJhbmtUcmFuc2Zlck1pZ3JhdGVBY2NvdW50UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmJhbmtUcmFuc2Zlck1pZ3JhdGVBY2NvdW50KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgYWNjb3VudF9udW1iZXI6IGFjY291bnRfbnVtYmVyLFxuICAgICAgICByb3V0aW5nX251bWJlcjogcm91dGluZ19udW1iZXIsXG4gICAgICAgIGFjY291bnRfdHlwZTogYWNjb3VudF90eXBlLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2NyZWF0ZVxuICBjcmVhdGVBc3NldFJlcG9ydChcbiAgICBhY2Nlc3NfdG9rZW5zOiBBcnJheTxzdHJpbmc+LFxuICAgIGRheXNfcmVxdWVzdGVkOiBudW1iZXIsXG4gICAgb3B0aW9ucz86IEFzc2V0UmVwb3J0Q3JlYXRlUmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydENyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydENyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydENyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGFjY2Vzc190b2tlbnMsXG4gICAgICAgIGRheXNfcmVxdWVzdGVkLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2F1ZGl0X2NvcHkvY3JlYXRlXG4gIGNyZWF0ZUF1ZGl0Q29weShcbiAgICBhc3NldF9yZXBvcnRfdG9rZW46IHN0cmluZyxcbiAgICBhdWRpdG9yX2lkOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEF1ZGl0Q29weUNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEF1ZGl0Q29weUNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEF1ZGl0Q29weUNyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGFzc2V0X3JlcG9ydF90b2tlbixcbiAgICAgICAgYXVkaXRvcl9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGRlcG9zaXRfc3dpdGNoL2NyZWF0ZVxuICBjcmVhdGVEZXBvc2l0U3dpdGNoKFxuICAgIHRhcmdldF9hY2NvdW50X2lkOiBzdHJpbmcsXG4gICAgdGFyZ2V0X2FjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8RGVwb3NpdFN3aXRjaENyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxEZXBvc2l0U3dpdGNoQ3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmRlcG9zaXRTd2l0Y2hDcmVhdGUoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICB0YXJnZXRfYWNjZXNzX3Rva2VuLFxuICAgICAgICB0YXJnZXRfYWNjb3VudF9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGRlcG9zaXRfc3dpdGNoL3Rva2VuL2NyZWF0ZVxuICBjcmVhdGVEZXBvc2l0U3dpdGNoVG9rZW4oXG4gICAgZGVwb3NpdF9zd2l0Y2hfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPERlcG9zaXRTd2l0Y2hUb2tlbkNyZWF0ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxEZXBvc2l0U3dpdGNoVG9rZW5DcmVhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuZGVwb3NpdFN3aXRjaFRva2VuQ3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgZGVwb3NpdF9zd2l0Y2hfaWQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBsaW5rL3Rva2VuL2NyZWF0ZS9cbiAgY3JlYXRlTGlua1Rva2VuKFxuICAgIG9wdGlvbnM6IExpbmtUb2tlbkNyZWF0ZVJlcXVlc3QsXG4gICAgY2I/OiBDYWxsYmFjazxMaW5rVG9rZW5DcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8TGlua1Rva2VuQ3JlYXRlUmVzcG9uc2U+IHtcbiAgICBvcHRpb25zLmNsaWVudF9pZCA9IHRoaXMuY2xpZW50X2lkO1xuICAgIG9wdGlvbnMuc2VjcmV0ID0gdGhpcy5zZWNyZXQ7XG5cbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KHRoaXMub3BlbkFQSUNsaWVudC5saW5rVG9rZW5DcmVhdGUob3B0aW9ucyksIGNiKTtcbiAgfVxuXG4gIC8vIHBheW1lbnRfaW5pdGlhdGlvbi9wYXltZW50L2NyZWF0ZVxuICBjcmVhdGVQYXltZW50KFxuICAgIHJlY2lwaWVudF9pZDogc3RyaW5nLFxuICAgIHJlZmVyZW5jZTogc3RyaW5nLFxuICAgIGFtb3VudDogQW1vdW50LFxuICAgIHNjaGVkdWxlPzogRXh0ZXJuYWxQYXltZW50U2NoZWR1bGUsXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW5pdGlhdGlvblBheW1lbnRDcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UGF5bWVudEluaXRpYXRpb25QYXltZW50Q3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbml0aWF0aW9uUGF5bWVudENyZWF0ZSh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHJlY2lwaWVudF9pZCxcbiAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHNjaGVkdWxlLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gL3BheW1lbnRfaW5pdGlhdGlvbi9yZWNpcGllbnQvY3JlYXRlXG4gIGNyZWF0ZVBheW1lbnRSZWNpcGllbnQoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGliYW4/OiBzdHJpbmcsXG4gICAgYWRkcmVzcz86IFBheW1lbnRJbml0aWF0aW9uQWRkcmVzcyxcbiAgICBiYWNzPzogUmVjaXBpZW50QkFDUyxcbiAgICBjYj86IENhbGxiYWNrPFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbml0aWF0aW9uUmVjaXBpZW50Q3JlYXRlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaWJhbixcbiAgICAgICAgYmFjcyxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHByb2Nlc3Nvci90b2tlbi9jcmVhdGVcbiAgLy8gcHJvY2Vzc29yL2FwZXgvcHJvY2Vzc29yX3Rva2VuL2NyZWF0ZVxuICAvLyBwcm9jZXNzb3Ivc3RyaXBlL2JhbmtfYWNjb3VudF90b2tlbi9jcmVhdGVcbiAgY3JlYXRlUHJvY2Vzc29yVG9rZW4oXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZDogc3RyaW5nLFxuICAgIHByb2Nlc3Nvcjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29yVG9rZW5DcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UHJvY2Vzc29yVG9rZW5DcmVhdGVSZXNwb25zZT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIGFjY291bnRfaWQsXG4gICAgfTtcbiAgICBpZiAocHJvY2Vzc29yID09ICdzdHJpcGUnKSB7XG4gICAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29yU3RyaXBlQmFua0FjY291bnRUb2tlbkNyZWF0ZShvcHRpb25zKSxcbiAgICAgICAgY2IsXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzc29yID09ICdhcGV4Jykge1xuICAgICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvckFwZXhQcm9jZXNzb3JUb2tlbkNyZWF0ZShvcHRpb25zKSxcbiAgICAgICAgY2IsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcHRpb25zV2l0aFByb2Nlc3NvciA9IHsgLi4ub3B0aW9ucywgcHJvY2Vzc29yIH07XG4gICAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29yVG9rZW5DcmVhdGUob3B0aW9uc1dpdGhQcm9jZXNzb3IpLFxuICAgICAgICBjYixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJvY2Vzc29yL3N0cmlwZS9iYW5rX2FjY291bnRfdG9rZW4vY3JlYXRlXG4gIGNyZWF0ZVN0cmlwZVRva2VuKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGFjY291bnRfaWQ6IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFByb2Nlc3NvclN0cmlwZUJhbmtBY2NvdW50VG9rZW5DcmVhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UHJvY2Vzc29yU3RyaXBlQmFua0FjY291bnRUb2tlbkNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUHJvY2Vzc29yVG9rZW4oYWNjZXNzX3Rva2VuLCBhY2NvdW50X2lkLCAnc3RyaXBlJywgY2IpO1xuICB9XG5cbiAgLy8gaXRlbS9wdWJsaWNfdG9rZW4vZXhjaGFuZ2VcbiAgZXhjaGFuZ2VQdWJsaWNUb2tlbihcbiAgICBwdWJsaWNfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1QdWJsaWNUb2tlbkV4Y2hhbmdlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEl0ZW1QdWJsaWNUb2tlbkV4Y2hhbmdlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1QdWJsaWNUb2tlbkV4Y2hhbmdlKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgcHVibGljX3Rva2VuLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2ZpbHRlclxuICBmaWx0ZXJBc3NldFJlcG9ydChcbiAgICBhc3NldF9yZXBvcnRfdG9rZW46IHN0cmluZyxcbiAgICBhY2NvdW50X2lkc190b19leGNsdWRlOiBBcnJheTxzdHJpbmc+LFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRGaWx0ZXJSZXNwb25zZT4sXG4gICk6IFByb21pc2U8QXNzZXRSZXBvcnRGaWx0ZXJSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXNzZXRSZXBvcnRGaWx0ZXIoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBhc3NldF9yZXBvcnRfdG9rZW4sXG4gICAgICAgIGFjY291bnRfaWRzX3RvX2V4Y2x1ZGUsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhY2NvdW50cy9nZXRcbiAgZ2V0QWNjb3VudHMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEFjY291bnRzR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxBY2NvdW50c0dldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBY2NvdW50c0dldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hY2NvdW50c0dldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9nZXRcbiAgZ2V0QXNzZXRSZXBvcnQoXG4gICAgYXNzZXRfcmVwb3J0X3Rva2VuOiBzdHJpbmcsXG4gICAgaW5jbHVkZV9pbnNpZ2h0cz86IGJvb2xlYW4sXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEdldCh7XG4gICAgICAgIGFzc2V0X3JlcG9ydF90b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgaW5jbHVkZV9pbnNpZ2h0cyxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGFzc2V0X3JlcG9ydC9wZGYvZ2V0XG4gIGdldEFzc2V0UmVwb3J0UGRmKFxuICAgIGFzc2V0X3JlcG9ydF90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8QnVmZmVyPixcbiAgKTogUHJvbWlzZTxCdWZmZXI+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0UGRmR2V0KFxuICAgICAgICB7XG4gICAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgfSxcbiAgICAgICAgeyBqc29uOiB0cnVlLCByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSxcbiAgICAgICksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2F1ZGl0X2NvcHkvZ2V0XG4gIGdldEF1ZGl0Q29weShcbiAgICBhdWRpdF9jb3B5X3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEF1ZGl0Q29weUdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGF1ZGl0X2NvcHlfdG9rZW4sXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhdXRoL2dldFxuICBnZXRBdXRoKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBBdXRoR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxBdXRoR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEF1dGhHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuYXV0aEdldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbjogYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYWNjb3VudHMvYmFsYW5jZS9nZXRcbiAgZ2V0QmFsYW5jZShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBvcHRpb25zPzogQmFsYW5jZUdldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8QmFsYW5jZUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxCYWxhbmNlR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmJhbGFuY2VHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW46IGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGNhdGVnb3JpZXMvZ2V0XG4gIGdldENhdGVnb3JpZXMoXG4gICAgY2I/OiBDYWxsYmFjazxDYXRlZ29yaWVzR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPENhdGVnb3JpZXNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QodGhpcy5vcGVuQVBJQ2xpZW50LmNhdGVnb3JpZXNHZXQoe30pLCBjYik7XG4gIH1cblxuICAvLyBkZXBvc2l0X3N3aXRjaC9nZXRcbiAgZ2V0RGVwb3NpdFN3aXRjaChcbiAgICBkZXBvc2l0X3N3aXRjaF9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8RGVwb3NpdFN3aXRjaEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxEZXBvc2l0U3dpdGNoR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmRlcG9zaXRTd2l0Y2hHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBkZXBvc2l0X3N3aXRjaF9pZCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGludmVzdG1lbnRzL2hvbGRpbmdzL2dldFxuICBnZXRIb2xkaW5ncyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBvcHRpb25zPzogSW52ZXN0bWVudEhvbGRpbmdzR2V0UmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxJbnZlc3RtZW50c0hvbGRpbmdzR2V0UmVxdWVzdD4sXG4gICk6IFByb21pc2U8SW52ZXN0bWVudHNIb2xkaW5nc0dldFJlcXVlc3Q+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmludmVzdG1lbnRzSG9sZGluZ3NHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpZGVudGl0eS9nZXRcbiAgZ2V0SWRlbnRpdHkoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxJZGVudGl0eUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJZGVudGl0eUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pZGVudGl0eUdldCh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGluc3RpdHV0aW9ucy9nZXRfYnlfaWRcbiAgZ2V0SW5zdGl0dXRpb25CeUlkKFxuICAgIGluc3RpdHV0aW9uX2lkOiBzdHJpbmcsXG4gICAgY291bnRyeV9jb2RlczogQXJyYXk8Q291bnRyeUNvZGU+LFxuICAgIG9wdGlvbnM/OiBJbnN0aXR1dGlvbnNHZXRCeUlkUmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxJbnN0aXR1dGlvbnNHZXRCeUlkUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEluc3RpdHV0aW9uc0dldEJ5SWRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW5zdGl0dXRpb25zR2V0QnlJZCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIGNvdW50cnlfY29kZXMsXG4gICAgICAgIGluc3RpdHV0aW9uX2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaW5zdGl0dXRpb25zL2dldFxuICBnZXRJbnN0aXR1dGlvbnMoXG4gICAgY291bnQ6IG51bWJlcixcbiAgICBvZmZzZXQ6IG51bWJlcixcbiAgICBjb3VudHJ5X2NvZGVzOiBBcnJheTxDb3VudHJ5Q29kZT4sXG4gICAgb3B0aW9ucz86IEluc3RpdHV0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW5zdGl0dXRpb25zR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEluc3RpdHV0aW9uc0dldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pbnN0aXR1dGlvbnNHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBjb3VudCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBjb3VudHJ5X2NvZGVzLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaW52ZXN0bWVudHMvdHJhbnNhY3Rpb25zL2dldFxuICBnZXRJbnZlc3RtZW50VHJhbnNhY3Rpb25zKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIHN0YXJ0X2RhdGU6IHN0cmluZyxcbiAgICBlbmRfZGF0ZTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBJbnZlc3RtZW50c1RyYW5zYWN0aW9uc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaW52ZXN0bWVudHNUcmFuc2FjdGlvbnNHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHN0YXJ0X2RhdGUsXG4gICAgICAgIGVuZF9kYXRlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS9nZXRcbiAgZ2V0SXRlbShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEl0ZW1HZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbUdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5pdGVtR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gbGlhYmlsaXRpZXMvZ2V0XG4gIGdldExpYWJpbGl0aWVzKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBMaWFiaWxpdGllc0dldFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8TGlhYmlsaXRpZXNHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8TGlhYmlsaXRpZXNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQubGlhYmlsaXRpZXNHZXQoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBsaW5rL3Rva2VuL2dldFxuICBnZXRMaW5rVG9rZW4oXG4gICAgbGlua190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8TGlua1Rva2VuR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPExpbmtUb2tlbkdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5saW5rVG9rZW5HZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBsaW5rX3Rva2VuLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApXG4gIH1cblxuICAvLyBwYXltZW50X2luaXRpYXRpb24vcGF5bWVudC9nZXRcbiAgZ2V0UGF5bWVudChcbiAgICBwYXltZW50X2lkOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW5pdGlhdGlvblBheW1lbnRHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UGF5bWVudEluaXRpYXRpb25QYXltZW50R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnBheW1lbnRJbnRpYXRpb25QYXltZW50R2V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgcGF5bWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHBheW1lbnRfaW5pdGlhdGlvbi9yZWNpcGllbnQvZ2V0XG4gIGdldFBheW1lbnRSZWNpcGllbnQoXG4gICAgcmVjaXBpZW50X2lkOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW5pdGlhdGlvblJlY2lwaWVudEdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQYXltZW50SW5pdGlhdGlvblJlY2lwaWVudEdldFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5wYXltZW50SW5pdGlhdGlvblJlY2lwaWVudEdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHJlY2lwaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHRyYW5zYWN0aW9ucy9nZXRcbiAgZ2V0VHJhbnNhY3Rpb25zKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIHN0YXJ0X2RhdGU6IHN0cmluZyxcbiAgICBlbmRfZGF0ZTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBUcmFuc2FjdGlvbnNHZXRSZXF1ZXN0T3B0aW9ucyxcbiAgICBjYj86IENhbGxiYWNrPFRyYW5zYWN0aW9uc0dldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxUcmFuc2FjdGlvbnNHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQudHJhbnNhY3Rpb25zR2V0KHtcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHN0YXJ0X2RhdGUsXG4gICAgICAgIGVuZF9kYXRlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gd2ViaG9va192ZXJpZmljYXRpb25fa2V5L2dldFxuICBnZXRXZWJob29rVmVyaWZpY2F0aW9uS2V5KFxuICAgIGtleV9pZDogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8V2ViaG9va1ZlcmlmaWNhdGlvbktleUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxXZWJob29rVmVyaWZpY2F0aW9uS2V5R2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LndlYmhvb2tWZXJpZmljYXRpb25LZXlHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBrZXlfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpdGVtL2ltcG9ydFxuICBpbXBvcnRJdGVtKFxuICAgIHByb2R1Y3RzOiBBcnJheTxzdHJpbmc+LFxuICAgIHVzZXJfYXV0aDogSXRlbUltcG9ydFJlcXVlc3RVc2VyQXV0aCxcbiAgICBvcHRpb25zPzogSXRlbUltcG9ydFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbUltcG9ydFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtSW1wb3J0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1JbXBvcnQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgdXNlcl9hdXRoLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaXRlbS9hY2Nlc3NfdG9rZW4vaW52YWxpZGF0ZVxuICBpbnZhbGlkYXRlQWNjZXNzVG9rZW4oXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxJdGVtQWNjZXNzVG9rZW5JbnZhbGlkYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEl0ZW1BY2Nlc3NUb2tlbkludmFsaWRhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaXRlbUFjY2Vzc1Rva2VuSW52YWxpZGF0ZSh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHBheW1lbnRfaW5pdGlhdGlvbi9yZWNpcGllbnQvbGlzdFxuICBsaXN0UGF5bWVudFJlY2lwaWVudHMoXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFBheW1lbnRJbml0aWF0aW9uUGF5bWVudExpc3RSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEluaXRpYXRpb25SZWNpcGllbnRMaXN0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHBheW1lbnRfaW5pdGlhdGlvbi9wYXltZW50L2xpc3RcbiAgbGlzdFBheW1lbnRzKFxuICAgIG9wdGlvbnM/OiB7IGNvdW50OiBudW1iZXI7IGN1cnNvcjogc3RyaW5nIH0sXG4gICAgY2I/OiBDYWxsYmFjazxQYXltZW50SW5pdGlhdGlvblBheW1lbnRMaXN0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFBheW1lbnRJbml0aWF0aW9uUGF5bWVudExpc3RSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucGF5bWVudEluaXRpYXRpb25QYXltZW50TGlzdCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIGNvdW50OiBvcHRpb25zPy5jb3VudCAhPSBudWxsID8gb3B0aW9ucy5jb3VudCA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3Vyc29yOiBvcHRpb25zPy5jdXJzb3IgIT0gbnVsbCA/IG9wdGlvbnMuY3Vyc29yIDogdW5kZWZpbmVkLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29yL2F1dGgvZ2V0XG4gIGdldEF1dGhQcm9jZXNzb3IoXG4gICAgcHJvY2Vzc29yX3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxQcm9jZXNzb3JBdXRoR2V0UmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFByb2Nlc3NvckF1dGhHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29yQXV0aEdldCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHByb2Nlc3Nvcl90b2tlbixcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHByb2Nlc3Nvci9iYWxhbmNlL2dldFxuICBnZXRCYWxhbmNlUHJvY2Vzc29yKFxuICAgIHByb2Nlc3Nvcl90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29yQmFsYW5jZUdldFJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxQcm9jZXNzb3JCYWxhbmNlR2V0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnByb2Nlc3NvckJhbGFuY2VHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwcm9jZXNzb3JfdG9rZW4sXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBwcm9jZXNzb3IvaWRlbnRpdHkvZ2V0XG4gIGdldElkZW50aXR5UHJvY2Vzc29yKFxuICAgIHByb2Nlc3Nvcl90b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8UHJvY2Vzc29ySWRlbnRpdHlHZXRSZXNwb25zZT4sXG4gICk6IFByb21pc2U8UHJvY2Vzc29ySWRlbnRpdHlHZXRSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQucHJvY2Vzc29ySWRlbnRpdHlHZXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBwcm9jZXNzb3JfdG9rZW4sXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBhc3NldF9yZXBvcnQvcmVmcmVzaFxuICByZWZyZXNoQXNzZXRSZXBvcnQoXG4gICAgYXNzZXRfcmVwb3J0X3Rva2VuOiBzdHJpbmcsXG4gICAgZGF5c19yZXF1ZXN0ZWQ/OiBudW1iZXIsXG4gICAgb3B0aW9ucz86IEFzc2V0UmVwb3J0UmVmcmVzaFJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8QXNzZXRSZXBvcnRSZWZyZXNoUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0UmVmcmVzaFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydFJlZnJlc2goe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBhc3NldF9yZXBvcnRfdG9rZW4sXG4gICAgICAgIGRheXNfcmVxdWVzdGVkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gdHJhbnNhY3Rpb25zL3JlZnJlc2hcbiAgcmVmcmVzaFRyYW5zYWN0aW9ucyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFRyYW5zYWN0aW9uc1JlZnJlc2hSZXNwb25zZT4sXG4gICk6IFByb21pc2U8VHJhbnNhY3Rpb25zUmVmcmVzaFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC50cmFuc2FjdGlvbnNSZWZyZXNoKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L3JlbW92ZVxuICByZW1vdmVBc3NldFJlcG9ydChcbiAgICBhc3NldF9yZXBvcnRfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPEFzc2V0UmVwb3J0UmVtb3ZlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPEFzc2V0UmVwb3J0UmVtb3ZlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LmFzc2V0UmVwb3J0UmVtb3ZlKHtcbiAgICAgICAgYXNzZXRfcmVwb3J0X3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gYXNzZXRfcmVwb3J0L2F1ZGl0X2NvcHkvcmVtb3ZlXG4gIHJlbW92ZUF1ZGl0Q29weShcbiAgICBhdWRpdF9jb3B5X3Rva2VuOiBzdHJpbmcsXG4gICAgY2I/OiBDYWxsYmFjazxBc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxBc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5hc3NldFJlcG9ydEF1ZGl0Q29weVJlbW92ZSh7XG4gICAgICAgIGF1ZGl0X2NvcHlfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBpdGVtL3JlbW92ZVxuICByZW1vdmVJdGVtKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbVJlbW92ZVJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxJdGVtUmVtb3ZlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lml0ZW1SZW1vdmUoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBzYW5kYm94L2l0ZW0vcmVzZXRfbG9naW5cbiAgcmVzZXRMb2dpbihcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBjYj86IENhbGxiYWNrPFNhbmRib3hJdGVtUmVzZXRMb2dpblJlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxTYW5kYm94SXRlbVJlc2V0TG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuc2FuZGJveEl0ZW1SZXNldExvZ2luKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gc2FuZGJveC9iYW5rX3RyYW5zZmVyL3NpbXVsYXRlXG4gIHNhbmRib3hCYW5rVHJhbnNmZXJTaW11bGF0ZShcbiAgICBiYW5rX3RyYW5zZmVyX2lkOiBzdHJpbmcsXG4gICAgZXZlbnRfdHlwZTogQmFua1RyYW5zZmVyRXZlbnRUeXBlLFxuICAgIGZhaWx1cmVfcmVhc29uPzogQmFua1RyYW5zZmVyRmFpbHVyZSxcbiAgICBjYj86IENhbGxiYWNrPFNhbmRib3hCYW5rVHJhbnNmZXJTaW11bGF0ZVJlc3BvbnNlPlxuICApOiBQcm9taXNlPFNhbmRib3hCYW5rVHJhbnNmZXJTaW11bGF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5zYW5kYm94QmFua1RyYW5zZmVyU2ltdWxhdGUoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICBiYW5rX3RyYW5zZmVyX2lkOiBiYW5rX3RyYW5zZmVyX2lkLFxuICAgICAgICBldmVudF90eXBlOiBldmVudF90eXBlLFxuICAgICAgICBmYWlsdXJlX3JlYXNvbjogZmFpbHVyZV9yZWFzb24sXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cblxuICAvLyBzYW5kYm94L3B1YmxpY190b2tlbi9jcmVhdGVcbiAgc2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlKFxuICAgIGluc3RpdHV0aW9uX2lkOiBzdHJpbmcsXG4gICAgaW5pdGlhbF9wcm9kdWN0czogQXJyYXk8UHJvZHVjdHM+LFxuICAgIG9wdGlvbnM6IFNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZVJlcXVlc3RPcHRpb25zLFxuICAgIGNiPzogQ2FsbGJhY2s8U2FuZGJveFB1YmxpY1Rva2VuQ3JlYXRlUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFNhbmRib3hQdWJsaWNUb2tlbkNyZWF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHBsYWlkUmVxdWVzdChcbiAgICAgIHRoaXMub3BlbkFQSUNsaWVudC5zYW5kYm94UHVibGljVG9rZW5DcmVhdGUoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBpbnN0aXR1dGlvbl9pZCxcbiAgICAgICAgaW5pdGlhbF9wcm9kdWN0cyxcbiAgICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHNhbmRib3gvaXRlbS9maXJlX3dlYmhvb2tcbiAgc2FuZGJveEl0ZW1GaXJlV2ViaG9vayhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICB3ZWJob29rX2NvZGU6IFNhbmRib3hJdGVtRmlyZVdlYmhvb2tSZXF1ZXN0V2ViaG9va0NvZGVFbnVtLFxuICAgIGNiPzogQ2FsbGJhY2s8U2FuZGJveEl0ZW1GaXJlV2ViaG9va1Jlc3BvbnNlPixcbiAgKTogUHJvbWlzZTxTYW5kYm94SXRlbUZpcmVXZWJob29rUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnNhbmRib3hJdGVtRmlyZVdlYmhvb2soe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHdlYmhvb2tfY29kZSxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHNhbmRib3gvaXRlbS9zZXRfdmVyaWZpY2F0aW9uX3N0YXR1c1xuICBzYW5kYm94SXRlbVNldFZlcmlmaWNhdGlvblN0YXR1cyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBhY2NvdW50X2lkOiBzdHJpbmcsXG4gICAgdmVyaWZpY2F0aW9uX3N0YXR1czogU2FuZGJveEl0ZW1TZXRWZXJpZmljYXRpb25TdGF0dXNSZXF1ZXN0VmVyaWZpY2F0aW9uU3RhdHVzRW51bSxcbiAgICBjYj86IENhbGxiYWNrPFNhbmRib3hJdGVtU2V0VmVyaWZpY2F0aW9uU3RhdHVzUmVzcG9uc2U+LFxuICApOiBQcm9taXNlPFNhbmRib3hJdGVtU2V0VmVyaWZpY2F0aW9uU3RhdHVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50LnNhbmRib3hJdGVtU2V0VmVyaWZpY2F0aW9uU3RhdHVzKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBhY2NvdW50X2lkLFxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgICBzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuICAgICAgICB2ZXJpZmljYXRpb25fc3RhdHVzLFxuICAgICAgfSksXG4gICAgICBjYixcbiAgICApO1xuICB9XG5cbiAgLy8gaW5zdGl0dXRpb25zL3NlYXJjaFxuICBzZWFyY2hJbnN0aXR1dGlvbnNCeU5hbWUoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBwcm9kdWN0czogQXJyYXk8UHJvZHVjdHM+LFxuICAgIGNvdW50cnlfY29kZXM6IEFycmF5PENvdW50cnlDb2RlPixcbiAgICBvcHRpb25zPzogSW5zdGl0dXRpb25zU2VhcmNoUmVxdWVzdE9wdGlvbnMsXG4gICAgY2I/OiBDYWxsYmFjazxJbnN0aXR1dGlvbnNTZWFyY2hSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SW5zdGl0dXRpb25zU2VhcmNoUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gcGxhaWRSZXF1ZXN0KFxuICAgICAgdGhpcy5vcGVuQVBJQ2xpZW50Lmluc3RpdHV0aW9uc1NlYXJjaCh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgY291bnRyeV9jb2RlcyxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH0pLFxuICAgICAgY2IsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGl0ZW0vd2ViaG9vay91cGRhdGVcbiAgdXBkYXRlSXRlbVdlYmhvb2soXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgd2ViaG9vazogc3RyaW5nLFxuICAgIGNiPzogQ2FsbGJhY2s8SXRlbVdlYmhvb2tVcGRhdGVSZXNwb25zZT4sXG4gICk6IFByb21pc2U8SXRlbVdlYmhvb2tVcGRhdGVSZXNwb25zZT4ge1xuICAgIHJldHVybiBwbGFpZFJlcXVlc3QoXG4gICAgICB0aGlzLm9wZW5BUElDbGllbnQuaXRlbVdlYmhvb2tVcGRhdGUoe1xuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQsXG4gICAgICAgIHdlYmhvb2ssXG4gICAgICB9KSxcbiAgICAgIGNiLFxuICAgICk7XG4gIH1cbn1cblxuLy8gSGVscGVyc1xuY2xhc3MgUGxhaWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLy9AdHMtaWdub3JlXG4gIGNvbnN0cnVjdG9yKGJvZHk6IGFueSkge1xuICAgIHN1cGVyKGJvZHkuZXJyb3JfY29kZSk7XG4gICAgdGhpcy5uYW1lID0gJ1BsYWlkRXJyb3InO1xuXG4gICAgaWYgKHR5cGVvZiBib2R5ID09PSAnb2JqZWN0Jykge1xuICAgICAgKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcywgYm9keSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHJlamVjdFdpdGhQbGFpZEVycm9yID0gKGRhdGE6IGF4aW9zLkF4aW9zRXJyb3IpOiBQbGFpZEVycm9yID0+IHtcbiAgY29uc3QgZXJyb3IgPSBkYXRhLnJlc3BvbnNlPy5kYXRhO1xuXG4gIGlmICh0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmIGVycm9yICE9PSBudWxsKSB7XG4gICAgZXJyb3Iuc3RhdHVzX2NvZGUgPSBkYXRhLnJlc3BvbnNlPy5zdGF0dXM7XG5cbiAgICByZXR1cm4gbmV3IFBsYWlkRXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgLy8gVW5rbm93biBib2R5IHR5cGUgcmV0dXJuZWQsIHJldHVybiBhIHN0YW5kYXJkIEFQSV9FUlJPUlxuICByZXR1cm4gbmV3IFBsYWlkRXJyb3Ioe1xuICAgIGVycm9yX3R5cGU6ICdBUElfRVJST1InLFxuICAgIHN0YXR1c19jb2RlOiBkYXRhLmNvZGUsXG4gICAgZXJyb3JfY29kZTogJ0lOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gICAgZXJyb3JfbWVzc2FnZTogU3RyaW5nKGVycm9yKSxcbiAgICBkaXNwbGF5X21lc3NhZ2U6IG51bGwsXG4gICAgcmVxdWVzdF9pZDogbnVsbCxcbiAgfSk7XG59O1xuXG5jb25zdCB3cmFwUHJvbWlzZSA9IChjYWxsZXI6IFByb21pc2U8YXhpb3MuQXhpb3NSZXNwb25zZT4pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjYWxsZXJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3AuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGF4aW9zLkF4aW9zRXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZWplY3RXaXRoUGxhaWRFcnJvcihlcnIpKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGNhbGxiYWNrT3B0aW9ucyA9IChyZXF1ZXN0OiBhbnksIGNiOiBDYWxsYmFjazxheGlvcy5BeGlvc1Jlc3BvbnNlPikgPT4ge1xuICByZXR1cm4gcmVxdWVzdFxuICAgIC50aGVuKChyZXNwOiBheGlvcy5BeGlvc1Jlc3BvbnNlKSA9PiB7XG4gICAgICBjYihudWxsLCByZXNwLmRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IGF4aW9zLkF4aW9zRXJyb3IsIF86IGFueSkgPT4ge1xuICAgICAgY2IocmVqZWN0V2l0aFBsYWlkRXJyb3IoZXJyKSwgbnVsbCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBwbGFpZFJlcXVlc3QgPSAoXG4gIGNhbGxlcjogUHJvbWlzZTxheGlvcy5BeGlvc1Jlc3BvbnNlPixcbiAgY2I/OiBDYWxsYmFjazxhbnk+LFxuKSA9PiB7XG4gIGlmIChjYikge1xuICAgIHJldHVybiBjYWxsYmFja09wdGlvbnMoY2FsbGVyLCBjYik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHdyYXBQcm9taXNlKGNhbGxlcik7XG4gIH1cbn07XG5cbmV4cG9ydCB7IENsaWVudCwgZW52aXJvbm1lbnRzLCBQbGFpZEVycm9yLCBwbGFpZFJlcXVlc3QgfTtcbiJdfQ==