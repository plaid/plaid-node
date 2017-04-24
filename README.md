plaid-node  [![Circle CI](https://circleci.com/gh/plaid/plaid-node.svg?style=svg&circle-token=2efcf082d8df7e119325a4dbed9a1091ff5db422)](https://circleci.com/gh/plaid/plaid-node)  [![npm version](https://badge.fury.io/js/plaid.svg)](http://badge.fury.io/js/plaid)
==============

A node.js client library for the [Plaid API][1].

**Note:** This module was recently refactored and released as version `2.0.x` to support [Plaid's updated API][11]. The previous module version, 1.2.0, and API legacy documentation, is still available via npm and mirroed as [`plaid-legacy`][13]. 

## Table of Contents

- [plaid-node](#plaid-node)
  * [Install](#install)
  * [Getting started](#getting-started)
  * [Methods](#methods)
  * [Callbacks](#callbacks)
  * [Error Handling](#error-handling)
  * [Examples](#examples)
  * [Promise Support](#promise-support)
  * [Support](#support)
  * [Contributing](#contributing)
  * [License](#license)

## Install

```console
$ npm install plaid
```

## Getting started

The module supports all Plaid API endpoints.  For complete information about the API, head
to the [docs][2].

All endpoints require a valid `client_id`, `secret`, and `public_key` to
access and are accessible from a valid instance of a Plaid `Client`:

```javascript
const plaid = require('plaid');

const plaidClient = new plaid.Client(client_id, secret, public_key, plaid_env, options);
```

The `plaid_env` parameter dictates which Plaid API environment you will access. Values are:
- `plaid.environments.production` - production use, creates `Item`s on https://production.plaid.com
- `plaid.environments.development` - use for integration development and testing, creates `Item`s on https://development.plaid.com
- `plaid.environments.sandbox` - quickly build out your integration with stateful test data, creates `Item`s on https://sandbox.plaid.com

The `options` parameter is optional and allows for clients to override the default options used to make requests. e.g.

```javascript
const patientClient = new plaid.Client(client_id, secret, public_key, plaid_env, {
  timeout: 10 * 60 * 1000, // 30 minutes
  agent: 'Patient Agent'
});
```

See [here][12] for a complete list of options. The default timeout for requests is 10 minutes.

## Methods

Once an instance of the client has been created you use the following methods:

```javascript
const plaid = require('plaid');

// Initialize client
const plaidClient = new plaid.Client(client_id, secret, public_key, plaid_env, options);

// createPublicToken(String, Function)
plaidClient.createPublicToken(access_token, cb);
// exchangePublicToken(String, Function)
plaidClient.exchangePublicToken(public_token, cb);
// createProcessorToken(String, String, String, Function)
plaidClient.createProcessorToken(access_token, account_id, processor, cb);

// invalidateAccessToken(String, Function)
plaidClient.invalidateAccessToken(access_token, cb);
// updateAccessTokenVersion(String, Function)
plaidClient.updateAccessTokenVersion(legacy_access_token, cb);
// deleteItem(String, Function)
plaidClient.deleteItem(access_token, cb);
// getItem(String, Function)
plaidClient.getItem(access_token, cb);
// updateItemWebhook(String, String, Function)
plaidClient.updateItemWebhook(access_token, webhook, cb);

// getAccounts(String, Object?, Function)
plaidClient.getAccounts(access_token, options, cb);
// getBalance(String, Object?, Function)
plaidClient.getBalance(access_token, options, cb);
// getAuth(String, Object?, Function)
plaidClient.getAuth(access_token, options, cb);
// getIdentity(String, Function)
plaidClient.getIdentity(access_token, cb);
// getIncome(String, Function)
plaidClient.getIncome(access_token, cb);
// getCreditDetails(String, Function)
plaidClient.getCreditDetails(access_token, cb);

// getTransactions(String, Date(YYYY-MM-DD), Date(YYYY-MM-DD), Object?, Function)
plaidClient.getTransactions(access_token, start_date, end_date, options, cb);

// createStripeToken(String, String, Function)
plaidClient.createStripeToken(access_token, account_id, cb);

// getInstitutions(Number, Number, Function);
plaidClient.getInstitutions(count, offset, cb);
// getInstitutionsById(String, Object?, Function)
plaidClient.getInstitutionById(institution_id, options, cb);
// searchInstitutionsByName(String, [String], Object?, Function)
plaidClient.searchInstitutionsByName(query, products, options, cb);

// getCategories(Function)
plaidClient.getCategories(cb);

// resetLogin(String, Function)
// Sandbox-only endpoint to trigger an `ITEM_LOGIN_REQUIRED` error
plaidClient.resetLogin(access_token, cb);
```

**All parameters except `options` are required. If the options parameter is omitted, the last argument to the function
will be interpreted as the callback.**

## Callbacks

All requests have callbacks of the following form:

```javascript
function callback(err, response) {
  // err can be a network error or a Plaid API error (i.e. invalid credentials)
}
```

## Error Handling

The `err` argument passed to either callback style can either be an instance of `Error`
or a [Plaid API error][3] object.  An `Error` object
is only passed back in the case of a HTTP connection error.  The following code distinguishes
between a Plaid error and a standard Error instance:

```javascript
function callback(err, response) {
  if (err != null) {
    if (err.error_code != null) {
      // This is a Plaid error
      console.log(err.error_code + ': ' + err.error_message);
    } else {
      // This is a connection error, an Error object
      console.log(err.toString());
    }
  }
}
```

## Examples

Exchange a `public_token` from [Plaid Link][6] for a Plaid `access_token` and then
retrieve account data:

```javascript
plaidClient.exchangePublicToken(public_token, function(err, res) {
  const access_token = res.access_token;

  plaidClient.getAccounts(access_token, function(err, res) {
    console.log(res.accounts);
  });
});
```

Retrieve transactions for a transactions user for the last thirty days:

```javascript

const now = moment();
const today = now.format('YYYY-MM-DD');
const thirtyDaysAgo = now.subtract(30, 'days').format('YYYY-MM-DD');

plaidClient.getTransactions(access_token, thirtyDaysAgo, today, (err, res) => {
  console.log(`You have ${res.transactions.length} transactions from the last thirty days.`);
});
```

Get accounts for a particular `Item`:

```javascript
plaidClient.getAccounts(access_token, {
  account_ids: ['123456790']
}, (err, res) => {
  console.log(res.accounts);
});

// The library also juggles arguments, when options is omitted

plaidClient.getAccounts(access_token, (err, res) => {
  console.log(res.accounts);
});
```

## Promise Support

Every method returns a promise, so you don't have to use the callbacks.

API methods that return either a success or an error can be used with the
usual `then/else` paradigm, e.g.

```javascript
plaidPromise.then(successResponse => {
  // ...
}).catch(err => {
  // ...
});
```

Plaid API methods that may return an MFA response pass an array of responses
to the next promise. The first element of the array is the `mfaResponse`, and
the second element is the `successResponse`. You can use destructuring to
improve readability.

For example:

```javascript
const plaid = require('plaid');

const plaidClient = new plaid.Client(CLIENT_ID, SECRET, PUBLIC_KEY, plaid.environments.SANDBOX);

plaidClient.getInstitutions(1, 0).then(successResponse => {
  return successResponse.institutions;
}).catch(err => {
  throw new Error(`Unreachable code block for example: ${err}`);
}).then(institutions => {
  const institution = institutions[0];
  const institutionId = institution.institution_id;
  const products = ['transactions', 'info', 'numbers'];

  const credentials = {
    username: 'user_good',
    password: 'pass_good'
  };

  return plaidClient.createItem(credentials, institutionId, products);
}).then(([mfaResponse, successResponse]) => {
  if (mfaResponse) {
    throw new Error(`Unreachable code block for example: ${mfaResponse}`);
  }

  return plaidClient.getAccounts(successResponse.access_token);
}).catch(err => {
  throw new Error(`Unreachable code block for example: ${err}`);
}).then(successResponse => {
  console.log(successResponse.accounts);
});
```

The following is also valid:

```javascript
const promise = plaidClient.createItem(credentials, institutionId, products);

promise.then(array => {
  const mfaResponse = array[0];
  const successResponse = array[1];

  // do something
}).catch(err => {
  console.log(err);
});
```

## Support

Open an [issue][4]!

## Contributing

Click [here][7]!

## License
[MIT][5]

[1]: https://plaid.com
[2]: https://plaid.com/docs
[4]: https://github.com/plaid/plaid-node/issues/new
[5]: https://github.com/plaid/plaid-node/blob/master/LICENSE
[6]: https://plaid.com/docs/api#creating-items-with-plaid-link
[7]: ./CONTRIBUTING.md
[9]: https://plaid.com/docs/link/stripe
[10]: https://stripe.com/docs/api#create_bank_account_token
[11]: https://blog.plaid.com/improving-our-api/
[12]: https://github.com/request/request/blob/master/README.md#requestoptions-callback
[13]: https://github.com/plaid/plaid-node-legacy
