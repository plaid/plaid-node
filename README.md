plaid-node  [![Circle CI](https://circleci.com/gh/plaid/plaid-node.svg?style=svg&circle-token=2efcf082d8df7e119325a4dbed9a1091ff5db422)](https://circleci.com/gh/plaid/plaid-node)  [![npm version](https://badge.fury.io/js/plaid.svg)](http://badge.fury.io/js/plaid)
==============

A node.js client library for the [Plaid API][1].

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

### Versioning

You can specify the Plaid API version you wish to use when initializing `plaid-node`. Releases prior to `2.6.x` do not support versioning.

```
const plaidClient = new plaid.Client(
  process.env.PLAID_CLIENT_ID,
  process.env.PLAID_SECRET,
  process.env.PUBLIC_KEY,
  plaid.environments.sandbox,
  {version: '2018-05-22'}
);
```

For information about what has changed between versions and how to update your integration, head to the [API upgrade guide][api-upgrades].


## Getting started

The module supports all Plaid API endpoints.  For complete information about the API, head
to the [docs][2].

All endpoints require a valid `client_id`, `secret`, and `public_key` to
access and are accessible from a valid instance of a Plaid `Client`:

```javascript
const plaid = require('plaid');

const plaidClient = new plaid.Client(client_id, secret, public_key, plaid_env, {version: '2018-05-22'});
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
const plaidClient = new plaid.Client(client_id, secret, public_key, plaid_env, {version: '2018-05-22'});

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
// removeItem(String, Function)
plaidClient.removeItem(access_token, cb);
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

// getAllTransactions(String, Date(YYYY-MM-DD), Date(YYYY-MM-DD), Object?, Function)
plaidClient.getAllTransactions(access_token, start_date, end_date, options, cb);

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
// Sandbox-only endpoint to create a `public_token`. Useful for writing integration tests without running Link.
plaidClient.sandboxPublicTokenCreate(institution_id, initial_products, options, cb);
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
    if (plaid.isPlaidError(err)) {
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

For example:

```javascript
'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const plaid = require('plaid');

const plaidClient = new plaid.Client(
  process.env.PLAID_CLIENT_ID,
  process.env.PLAID_SECRET,
  process.env.PUBLIC_KEY,
  plaid.environments.sandbox,
  {version: '2018-05-22'}
);

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/plaid_exchange', (req, res) => {
  var public_token = req.body.public_token;

  plaidClient.exchangePublicToken(public_token).then(res => {
    const access_token = res.access_token;

    plaidClient.getAccounts(access_token).then(res => {
      console.log(res.accounts);
    });
  }).catch(err => {
    // Indicates a network or runtime error.
    if (!plaid.isPlaidError(err)) {
      res.sendStatus(500);
      return;
    }

    // Indicates plaid API error
    console.log('/exchange token returned an error', {
      error_type: err.error_type,
      error_code: res.statusCode,
      error_message: err.error_message,
      display_message: err.display_message,
      request_id: err.request_id,
      status_code: err.status_code,
    });

    // Inspect error_type to handle the error in your application
    switch(err.error_type) {
        case 'INVALID_REQUEST':
          // ...
          break;
        case 'INVALID_INPUT':
          // ...
          break;
        case 'RATE_LIMIT_EXCEEDED':
          // ...
          break;
        case 'API_ERROR':
          // ...
          break;
        case 'ITEM_ERROR':
          // ...
          break;
        default:
          // fallthrough
    }

    res.sendStatus(500);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${ port }`);
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
[3]: https://plaid.com/docs/api/#errors-overview
[4]: https://github.com/plaid/plaid-node/issues/new
[5]: https://github.com/plaid/plaid-node/blob/master/LICENSE
[6]: https://plaid.com/docs/api#creating-items-with-plaid-link
[7]: ./CONTRIBUTING.md
[9]: https://plaid.com/docs/link/stripe
[10]: https://stripe.com/docs/api#create_bank_account_token
[11]: https://blog.plaid.com/improving-our-api/
[12]: https://github.com/request/request/blob/master/README.md#requestoptions-callback
[13]: https://github.com/plaid/plaid-node-legacy
[api-upgrades]: https://plaid.com/docs/api-upgrades