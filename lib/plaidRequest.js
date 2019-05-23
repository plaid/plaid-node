'use strict';

var R = require('ramda');
var request = require('request');
var pjson = require('../package.json');

var PlaidError = require('./PlaidError');
var wrapPromise = require('./wrapPromise');


// Max timeout of ten minutes
var DEFAULT_TIMEOUT_IN_MILLIS = 10 * 60 * 1000;

var handleApiResponse = function(resolve, reject, err, res, $body, isMfa) {
  if (res != null && R.type($body) === 'Object') {
    $body.status_code = res.statusCode;
  }

  // network / usage errors
  if (err != null) {
    return reject(err);

  // success response (MFA)
  } else if (isMfa && res.statusCode === 200) {
    return resolve([null, $body]);

  // mfa response (MFA)
  } else if (isMfa && res.statusCode === 210) {
    return resolve([$body, null]);

  // success response (non mfa)
  } else if (res.statusCode === 200) {
    // extract request id from header for binary data,
    // i.e. mime type application/*
    if (res.headers['plaid-request-id'] != null &&
        res.headers['content-type'] != null &&
        res.headers['content-type'].indexOf('application') === 0) {
      return resolve({
        request_id: res.headers['plaid-request-id'],
        buffer: $body
      });
    }
    return resolve($body);

  // plaid error
  } else if (R.type($body) === 'Object') {
    return reject(new PlaidError($body));

  // Unknown body type returned, return a standard API_ERROR
  } else {
    return reject(new PlaidError({
      error_type: 'API_ERROR',
      status_code: res.statusCode,
      error_code: 'INTERNAL_SERVER_ERROR',
      error_message: String($body),
      display_message: null,
      request_id: null,
    }));
  }
};

var plaidRequest = function(context, requestSpec, clientRequestOptions, cb) {
  var uri = context.env + requestSpec.path;
  var method = 'POST';
  var requestJSON = R.merge(R.dissoc('env', context), requestSpec.body);
  var headers = {
    'User-Agent': 'Plaid Node v' + pjson.version
  };

  if (clientRequestOptions.version != null) {
    headers['Plaid-Version'] = clientRequestOptions.version;
  }

  if (clientRequestOptions.clientApp != null) {
    headers['Plaid-Client-App'] = clientRequestOptions.clientApp;
  }

  // merge the default request options with the client specified options,
  // this allows for clients to supply extra options to the request function
  var requestOptions = R.merge({
    uri: uri,
    method: method,
    json: requestJSON,
    headers: headers,
    timeout: DEFAULT_TIMEOUT_IN_MILLIS,
    encoding: requestSpec.binary ? null : 'utf8',
  }, clientRequestOptions);

  return wrapPromise(new Promise(function(resolve, reject) {
    request(requestOptions, function(err, res, body) {
      handleApiResponse(resolve, reject, err, res, body,
        requestSpec.includeMfaResponse);
    });
  }), cb);
};

module.exports = plaidRequest;
