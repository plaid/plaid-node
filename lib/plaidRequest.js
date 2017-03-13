'use strict';

var R = require('ramda');
var request = require('request');
var pjson = require('../package.json');

// Max timeout of ten minutes
var DEFAULT_TIMEOUT_IN_MILLIS = 10 * 60 * 1000;

var wrapPromise = function(promise, cb) {
  if (cb) {
    return promise.then(function(args) {
      if (R.isArrayLike(args)) {
        // call outside of promise stack
        setImmediate(function() {
          R.apply(R.partial(cb, [null]), args);
        });
      } else {
        setImmediate(function() {
          cb(null, args);
        });
      }
    }).catch(function(err) {
      setImmediate(function() {
        cb(err);
      });
    });
  }
  return promise;
};

var handleApiResponse = function(resolve, reject, err, res, $body, isMfa) {
  if (res != null) {
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
    return resolve($body);

  // plaid error
  } else {
    return reject($body);
  }
};

var plaidRequest = function(context, requestSpec, clientRequestOptions, cb) {
  var uri = context.env + requestSpec.path;
  var method = 'POST';
  var requestJSON = R.merge(R.dissoc('env', context), requestSpec.body);
  var headers = {
    'User-Agent': 'Plaid Node v' + pjson.version
  };

  // merge the default request options with the client specified options,
  // this allows for clients to supply extra options to the request function
  var requestOptions = R.merge({
    uri: uri,
    method: method,
    json: requestJSON,
    headers: headers,
    timeout: DEFAULT_TIMEOUT_IN_MILLIS
  }, clientRequestOptions);

  return wrapPromise(new Promise(function(resolve, reject) {
    request(requestOptions, function(err, res, body) {
      handleApiResponse(resolve, reject, err, res, body,
        requestSpec.includeMfaResponse);
    });
  }), cb);
};

module.exports = plaidRequest;
