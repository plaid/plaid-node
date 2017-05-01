'use strict';

var R = require('ramda');

var plaidEnvironments = require('./plaidEnvironments.js');
var plaidRequest = require('./plaidRequest.js');

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
  this.client_request_opts = R.defaultTo({}, options);
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

// createItem(Object, String, [String], Object?, Function)
Client.prototype.createItem =
 function(credentials, institution_id, initial_products, options, cb) {
    return this._authenticatedRequest({
      path: '/item/create',
      body: {
        credentials: credentials,
        institution_id: institution_id,
        initial_products: initial_products,
      },
      includeMfaResponse: true
    }, options, cb);
  };

// answerItemMFA(String, String, [String], Object?, Function)
Client.prototype.answerItemMFA =
  function(access_token, mfa_type, responses, options, cb) {
    return this._authenticatedRequest({
      path: '/item/mfa',
      body: {
        access_token: access_token,
        mfa_type: mfa_type,
        responses: responses,
      },
      includeMfaResponse: true
    }, options, cb);
  };

// updateItemCredentials(String, Object, Object?, Function)
Client.prototype.updateItemCredentials =
 function(access_token, credentials, options, cb) {
    return this._authenticatedRequest({
      path: '/item/credentials/update',
      body: {
        access_token: access_token,
        credentials: credentials,
      },
      includeMfaResponse: true
    }, options, cb);
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
  this.createProcessorToken(access_token, account_id, 'stripe', cb);
};

// invalidateAccessToken(String, Function)
Client.prototype.invalidateAccessToken =
  requestWithAccessToken('/item/access_token/invalidate');

// deleteItem(String, Function)
Client.prototype.deleteItem =
  requestWithAccessToken('/item/delete');

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

// deactivateTransactions(String, Function)
Client.prototype.deactivateTransactions =
  requestWithAccessToken('/transactions/deactivate');

// getCreditDetails(String, Function)
Client.prototype.getCreditDetails =
  requestWithAccessToken('/credit_details/get');

// getInstitutions(Number, Number, Function);
Client.prototype.getInstitutions =
  function(count, offset, cb) {
    return this._authenticatedRequest({
      path: '/institutions/get',
      body: {
        count: count,
        offset: offset
      },
    }, cb);
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

module.exports = Client;
