'use strict';

var P = require('bluebird');
var R = require('ramda');

var plaidEnvironments = require('./plaidEnvironments');
var plaidRequest = require('./plaidRequest');
var wrapPromise = require('./wrapPromise');

// Default version of Plaid API, if not specified by the client.
const DEFAULT_VERSION = '2019-05-29';

// Client(String, String, String, String, Object?)
function Client(client_id, secret, public_key, env, options) {
  if (R.isNil(client_id)) {
    throw new Error('Missing Plaid "client_id"');
  }

  if (R.isNil(secret)) {
    throw new Error('Missing Plaid "secret"');
  }

  if (R.isNil(public_key)) {
    throw new Error('Missing Plaid "public_key"');
  }

  if (!R.any(R.equals(env), R.values(plaidEnvironments))) {
    throw new Error('Invalid Plaid environment');
  }

  this.client_id = client_id;
  this.secret = secret;
  this.env = env;
  this.public_key = public_key;

  if (options == null) {
    options = {};
  }
  if (options.version == null) {
    options.version = DEFAULT_VERSION;
  }
  this.client_request_opts = options;
}

// Private
var requestWithAccessToken = function(path) {
  return function(access_token, options, cb) {
    return this._authenticatedRequest({
      path: path,
      body: {
        access_token: access_token,
      }
    }, options, cb);
  };
};

Client.prototype._authenticatedRequest =
  function _authenticatedRequest(requestSpec, options, cb, withPublicKey) {
    // juggle arguments
    if (typeof options === 'function') {
      cb = options;
      options = {};
    } else {
      requestSpec.body.options = options;
    }

    var context = R.merge({env: this.env}, withPublicKey ? {
        public_key: this.public_key,
      } : {
        client_id: this.client_id,
        secret: this.secret,
      }
    );

    return plaidRequest(context, requestSpec, this.client_request_opts, cb);
  };

// createPublicToken(String, Function)
Client.prototype.createPublicToken =
  requestWithAccessToken('/item/public_token/create', false);

// exchangePublicToken(String, Function)
Client.prototype.exchangePublicToken =
  function(public_token, cb) {
    return this._authenticatedRequest({
      path: '/item/public_token/exchange',
      body: {
        public_token: public_token,
      }
    }, cb);
  };

// updateAccessTokenVersion(String, Function)
Client.prototype.updateAccessTokenVersion =
  function(legacy_access_token, cb) {
    return this._authenticatedRequest({
      path: '/item/access_token/update_version',
      body: {
        access_token_v1: legacy_access_token,
      }
    }, cb);
  };

// updateItemWebhook(String, String, Function)
Client.prototype.updateItemWebhook =
  function(access_token, webhook, cb) {
    return this._authenticatedRequest({
      path: '/item/webhook/update',
      body: {
        access_token: access_token,
        webhook: webhook,
      }
    }, cb);
  };

// createProcessorToken(String, String, String, Function)
Client.prototype.createProcessorToken =
  function(access_token, account_id, processor, cb) {
    var endpoint = processor === 'stripe' ?
      '/processor/stripe/bank_account_token/create' :
      '/processor/' + processor + '/processor_token/create';
    return this._authenticatedRequest({
      path: endpoint,
      body: {
        access_token: access_token,
        account_id: account_id,
      }
    }, cb);
  };

Client.prototype.createStripeToken = function(access_token, account_id, cb) {
  return this.createProcessorToken(access_token, account_id, 'stripe', cb);
};

// invalidateAccessToken(String, Function)
Client.prototype.invalidateAccessToken =
  requestWithAccessToken('/item/access_token/invalidate');

// removeItem(String, Function)
Client.prototype.removeItem =
  requestWithAccessToken('/item/remove');

// getItem(String, Function)
Client.prototype.getItem =
  requestWithAccessToken('/item/get');

// getAccounts(String, Object?, Function)
Client.prototype.getAccounts =
  requestWithAccessToken('/accounts/get');

// getBalance(String, Object?, Function)
Client.prototype.getBalance =
  requestWithAccessToken('/accounts/balance/get');

// getAuth(String, Object?, Function)
Client.prototype.getAuth =
  requestWithAccessToken('/auth/get');

// getIncome(String, Function)
// getIdentity(String, Function)
Client.prototype.getIdentity =
  requestWithAccessToken('/identity/get');

// getIncome(String, Function)
Client.prototype.getIncome =
  requestWithAccessToken('/income/get');

// getTransactions(String, Date, Date, Object?, Function)
Client.prototype.getTransactions =
  function(access_token, start_date, end_date, options, cb) {
    return this._authenticatedRequest({
      path: '/transactions/get',
      body: {
        access_token: access_token,
        start_date: start_date,
        end_date: end_date,
      },
    }, options, cb);
  };

// getAllTransactions(String, Date, Date, Object?, Function)
Client.prototype.getAllTransactions =
  function(access_token, start_date, end_date, options, cb) {
    // juggle arguments
    if (typeof options === 'function') {
      cb = options;
      options = {};
    } else {
      options = R.defaultTo({}, options);
    }

    var self = this;

    return wrapPromise(P.coroutine(function*() {
      var transactions = [];
      var transactionsCount = 0;
      var response = {};
      while (true) {
        const transactionsResponse = yield self.getTransactions(
          access_token,
          start_date,
          end_date,
          R.merge(options, {
            count: 500, // largest allowed value
            offset: transactions.length,
          })
        );

        response.accounts = transactionsResponse.accounts;
        response.item  = transactionsResponse.item;

        if (transactionsResponse.transactions != null) {
          transactions = R.concat(
            transactions, transactionsResponse.transactions);
          transactionsCount += transactionsResponse.transactions.length;
        }

        if (transactionsCount >= transactionsResponse.total_transactions) {
          break;
        }
      }

      response.total_transactions = transactionsCount;
      response.transactions = transactions;

      return response;
    })(), cb, {no_spread: true});
  };

// getCreditDetails(String, Function)
Client.prototype.getCreditDetails =
  requestWithAccessToken('/credit_details/get');

// getHoldings(String, Function)
Client.prototype.getHoldings =
  requestWithAccessToken('/investments/holdings/get');

// getInvestmentTransactions(String, Date, Date, Object?, Function)
Client.prototype.getInvestmentTransactions =
  function(access_token, start_date, end_date, options, cb) {
    return this._authenticatedRequest({
      path: '/investments/transactions/get',
      body: {
        access_token: access_token,
        start_date: start_date,
        end_date: end_date,
      },
    }, options, cb);
  };

// getLiabilities(String, Function)
Client.prototype.getLiabilities = requestWithAccessToken('/liabilities/get');

// createAssetReport([String], Number, Object, Function)
Client.prototype.createAssetReport =
  function(access_tokens, days_requested, options, cb) {
    return this._authenticatedRequest({
      path: '/asset_report/create',
      body: {
        access_tokens: access_tokens,
        days_requested: days_requested,
      },
    }, options, cb);
  };

// filterAssetReport(String, [String], Function)
Client.prototype.filterAssetReport =
  function(asset_report_token, account_ids_to_exclude, cb) {
    return this._authenticatedRequest({
      path: '/asset_report/filter',
      body: {
        asset_report_token: asset_report_token,
        account_ids_to_exclude: account_ids_to_exclude,
      },
    }, cb);
  };

// refreshAssetReport(String, Number, Object?, Function)
Client.prototype.refreshAssetReport =
  function(asset_report_token, days_requested, options, cb) {
    return this._authenticatedRequest({
      path: '/asset_report/refresh',
      body: {
        asset_report_token: asset_report_token,
        days_requested: days_requested,
      },
    }, options, cb);
  };


// getAssetReport(String, Boolean, Function)
Client.prototype.getAssetReport =
  function(asset_report_token, include_insights, cb) {
    return this._authenticatedRequest({
      path: '/asset_report/get',
      body: {
        asset_report_token: asset_report_token,
        include_insights: include_insights,
      },
    }, cb);
  };

// getAssetReportPdf(String, Function)
Client.prototype.getAssetReportPdf =
function(asset_report_token, cb) {
  return this._authenticatedRequest({
    path: '/asset_report/pdf/get',
    body: {
      asset_report_token: asset_report_token,
    },
    binary: true,
  }, cb);
};

// createAuditCopy(String, String, Function)
Client.prototype.createAuditCopy =
function(asset_report_token, auditor_id, cb) {
  return this._authenticatedRequest({
    path: '/asset_report/audit_copy/create',
    body: {
      asset_report_token: asset_report_token,
      auditor_id: auditor_id,
    },
  }, cb);
};

// getAuditCopy(String, Function)
Client.prototype.getAuditCopy =
  function(audit_copy_token, cb) {
    return this._authenticatedRequest({
      path: '/asset_report/audit_copy/get',
      body: {
        audit_copy_token: audit_copy_token,
      },
    }, cb);
  };

// removeAuditCopy(String, Function)
Client.prototype.removeAuditCopy =
function(audit_copy_token, cb) {
  return this._authenticatedRequest({
    path: '/asset_report/audit_copy/remove',
    body: {
      audit_copy_token: audit_copy_token,
    },
  }, cb);
};

// removeAssetReport(String, Function)
Client.prototype.removeAssetReport =
function(asset_report_token, cb) {
  return this._authenticatedRequest({
    path: '/asset_report/remove',
    body: {
      asset_report_token: asset_report_token,
    },
  }, cb);
};

// getInstitutions(Number, Number, Function);
Client.prototype.getInstitutions =
  function(count, offset, options, cb) {
    return this._authenticatedRequest({
      path: '/institutions/get',
      body: {
        count: count,
        offset: offset
      },
    }, options, cb);
  };

// getInstitutionById(String, Object?, Function);
Client.prototype.getInstitutionById =
  function(institution_id, options, cb) {
    return this._authenticatedRequest({
      path: '/institutions/get_by_id',
      body: {
        institution_id: institution_id,
      }
    }, options, cb, true);
  };

// searchInstitutionsByName(String, [String], Object?, Function)
Client.prototype.searchInstitutionsByName =
 function(query, products, options, cb) {
    return this._authenticatedRequest({
      path: '/institutions/search',
      body: {
        query: query,
        products: products,
      }
    }, options, cb, true);
};

// getCategories(Function)
Client.prototype.getCategories =
  function(cb) {
    return plaidRequest({
      env: this.env
    }, {
      path: '/categories/get'
    }, this.client_request_opts, cb);
  };

// resetLogin(String, Function) - sandbox only
Client.prototype.resetLogin =
  requestWithAccessToken('/sandbox/item/reset_login');

// sandboxPublicTokenCreate(String, Array, Object?, Function) - sandbox only
Client.prototype.sandboxPublicTokenCreate =
function(institution_id, initial_products, options, cb) {
  return this._authenticatedRequest({
    path: '/sandbox/public_token/create',
    body: {
      institution_id: institution_id,
      initial_products: initial_products,
    },
  }, options, cb, true);
};

// sandboxItemFireWebhook(String, String, Function) - sandbox only
Client.prototype.sandboxItemFireWebhook =
function(access_token, webhook_code, cb) {
  return this._authenticatedRequest({
    path: '/sandbox/item/fire_webhook',
    body: {
      access_token: access_token,
      webhook_code: webhook_code,
    },
  }, cb, true);
};

module.exports = Client;
