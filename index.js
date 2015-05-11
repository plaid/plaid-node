'use strict';

var R = require('ramda');
var request = require('request');

var Plaid = module.exports = {};

Plaid.environments = {
  production: 'https://api.plaid.com',
  tartan: 'https://tartan.plaid.com',
};

Plaid.Client = function(client_id, secret, env) {
  if (R.isNil(client_id)) {
    throw new Error('Missing Plaid "client_id"');
  }

  if (R.isNil(secret)) {
    throw new Error('Missing Plaid "secret"');
  }

  if (env !== Plaid.environments.tartan &&
      env !== Plaid.environments.production) {
    throw new Error('Invalid Plaid environment');
  }

  this.client_id = client_id;
  this.secret = secret;
  this.env = env;
};

// Private

Plaid.Client.prototype._addUser =
  function(product, type, credentials, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

  this._authenticatedRequest({
    uri: this.env + '/' + product,
    method: 'POST',
    body: {
      type: type,
      credentials: credentials,
      options: options,
    },
    includeMfaResponse: true,
  }, callback);
};

Plaid.Client.prototype._getUser =
  function(product, access_token, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this._authenticatedRequest({
      uri: this.env + '/' + product + '/get',
      method: 'POST',
      body: {
        access_token: access_token,
        options: options,
      },
      includeMfaResponse: false,
    }, callback);
};

Plaid.Client.prototype._stepUser =
  function(product, access_token, mfaResponse, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this._authenticatedRequest({
      uri: this.env + '/' + product + '/step',
      method: 'POST',
      body: {
        access_token: access_token,
        mfa: mfaResponse,
        options: options,
      },
      includeMfaResponse: true,
    }, callback);
};

Plaid.Client.prototype._patchUser =
  function(product, access_token, credentials, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this._authenticatedRequest({
      uri: this.env + '/' + product,
      method: 'PATCH',
      body: {
        access_token: access_token,
        credentials: credentials,
        options: options,
      },
      includeMfaResponse: true,
    }, callback);
};

Plaid.Client.prototype._deleteUser =
  function(product, access_token, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this._authenticatedRequest({
      uri: this.env + '/' + product,
      method: 'DELETE',
      body: {
        access_token: access_token,
        options: options,
      },
      includeMfaResponse: false,
    }, callback);
};

Plaid._publicRequest = function(options, callback) {
  request({
    uri: options.uri,
    method: options.method,
    json: options.body,
  }, function(err, res, $body) {
    if (err != null) {
      callback(err, null);
    } else if (res.statusCode !== 200) {
      callback(R.assoc('statusCode', res.statusCode, $body), null);
    } else {
      callback(null, $body);
    }
  });
};

Plaid.Client.prototype._authenticatedRequest = function(options, callback) {
  if (R.has('options', options.body)) {
    options.body.options = JSON.stringify(options.body.options);
  }

  request({
    uri: options.uri,
    method: options.method,
    json: R.merge({
      client_id: this.client_id,
      secret: this.secret,
    }, options.body),
  }, function(err, res, body) {
    handleApiResponse(err, res, body, options.includeMfaResponse, callback);
  });
};

// Authenticated Routes

// Auth
Plaid.Client.prototype.addAuthUser =
  R.partial(Plaid.Client.prototype._addUser, 'auth');
Plaid.Client.prototype.getAuthUser =
  R.partial(Plaid.Client.prototype._getUser, 'auth');
Plaid.Client.prototype.stepAuthUser =
  R.partial(Plaid.Client.prototype._stepUser, 'auth');
Plaid.Client.prototype.patchAuthUser =
  R.partial(Plaid.Client.prototype._patchUser, 'auth');
Plaid.Client.prototype.deleteAuthUser =
  R.partial(Plaid.Client.prototype._deleteUser, 'auth');

// Connect
Plaid.Client.prototype.addConnectUser =
  R.partial(Plaid.Client.prototype._addUser, 'connect');
Plaid.Client.prototype.getConnectUser =
  R.partial(Plaid.Client.prototype._getUser, 'connect');
Plaid.Client.prototype.stepConnectUser =
  R.partial(Plaid.Client.prototype._stepUser, 'connect');
Plaid.Client.prototype.patchConnectUser =
  R.partial(Plaid.Client.prototype._patchUser, 'connect');
Plaid.Client.prototype.deleteConnectUser =
  R.partial(Plaid.Client.prototype._deleteUser, 'connect');

// Info
Plaid.Client.prototype.addInfoUser =
  R.partial(Plaid.Client.prototype._addUser, 'info');
Plaid.Client.prototype.getInfoUser =
  R.partial(Plaid.Client.prototype._getUser, 'info');
Plaid.Client.prototype.stepInfoUser =
  R.partial(Plaid.Client.prototype._stepUser, 'info');
Plaid.Client.prototype.patchInfoUser =
  R.partial(Plaid.Client.prototype._patchUser, 'info');
Plaid.Client.prototype.deleteInfoUser =
  R.partial(Plaid.Client.prototype._deleteUser, 'info');


// exchangeToken
Plaid.Client.prototype.exchangeToken = function(public_token, callback) {
  this._authenticatedRequest({
    uri: this.env + '/exchange_token',
    method: 'POST',
    body: {
      public_token: public_token,
    },
    includeMfaResponse: false,
  }, callback);
};

// Balance
Plaid.Client.prototype.getBalance = function(access_token, callback) {
  this._authenticatedRequest({
    uri: this.env + '/balance',
    method: 'POST',
    body: {
      access_token: access_token,
    },
    includeMfaResponse: false,
  }, callback);
};

// Upgrade
Plaid.Client.prototype.upgradeUser =
  function(access_token, upgrade_to, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  this._authenticatedRequest({
    uri: this.env + '/upgrade',
    method: 'POST',
    body: {
      access_token: access_token,
      upgrade_to: upgrade_to,
      options: options,
    },
    includeMfaResponse: true,
  }, callback);
};

// Public Routes

Plaid.getCategory = function(category_id, env, callback) {
  this._publicRequest({
    uri: env + '/categories/' + category_id,
    method: 'GET',
    body: {},
  }, callback);
};

Plaid.getCategories = function(env, callback) {
  this._publicRequest({
    uri: env + '/categories',
    method: 'GET',
    body: {},
  }, callback);
};

Plaid.getInstitution = function(institution_id, env, callback) {
  this._publicRequest({
    uri: env + '/institutions/' + institution_id,
    method: 'GET',
    body: {},
  }, callback);
};

Plaid.getInstitutions = function(env, callback) {
  this._publicRequest({
    uri: env + '/institutions',
    method: 'GET',
    body: {},
  }, callback);
};

function handleApiResponse(err, res, $body, includeMfaResponse, callback) {
  if (res != null) {
    $body = R.assoc('statusCode', res.statusCode, $body);
  }

  if (includeMfaResponse) {
    if (err != null) {
      callback(err, null, null);
    } else if (res.statusCode === 200) {
      callback(null, null, $body);
    } else if (res.statusCode === 201) {
      callback(null, $body, null);
    } else {
      callback($body, null, null);
    }
  } else {
    if (err != null) {
      callback(err, null);
    } else if (res.statusCode === 200) {
      callback(null, $body);
    } else {
      callback($body, null);
    }
  }
}
