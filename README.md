# plaid-node [![npm version](https://badge.fury.io/js/plaid.svg)](http://badge.fury.io/js/plaid)

The official Node.js client library for the [Plaid API][1].

## Table of Contents

- [Installation](#install)
  - [Versioning](#versioning)
- [Getting started](#getting-started)
- [Error Handling](#error-handling)
- [Examples](#examples)
- [Promise Support](#promise-support)
- [Migration Guide](#migration-guide)
- [Support](#support)
- [Contributing](#contributing)
- [License](#license)

## Install

```console
$ npm install plaid
```

## Versioning

This release only supports the latest Plaid API version, `2020-09-14`, and is generated from our [OpenAPI schema](https://github.com/plaid/plaid-openapi).

For information about what has changed between versions and how to update your integration, head to the [API upgrade guide][api-upgrades].

The plaid-node client library is typically updated on a monthly basis. The canonical source for the latest version number is the [client library changelog](https://github.com/plaid/plaid-node/blob/master/CHANGELOG.md). New versions are published as [GitHub tags](https://github.com/plaid/plaid-node/tags), not as Releases. New versions are also published on [npm](https://www.npmjs.com/package/plaid). Plaid uses semantic versioning to version the client libraries, with potentially breaking changes being indicated by a major version bump.

All users are strongly recommended to use a recent version of the library, as older versions do not contain support for new endpoints and fields. For more details, see the [Migration Guide](#migration-guide).

## Getting started

Most endpoints require a valid `client_id` and `secret` as authentication. Attach them via the configuration.

```typescript
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': CLIENT_ID,
      'PLAID-SECRET': SECRET,
    },
  },
});
```

The `PlaidEnvironments` parameter dictates which Plaid API environment you will access. Values are:

- `PlaidEnvironments.production` - production use and live data testing, creates `Item`s on https://production.plaid.com
- `PlaidEnvironments.sandbox` - quickly build out your integration with stateful test data, creates `Item`s on https://sandbox.plaid.com

The `baseOptions` field allows for clients to override the default options used to make requests. e.g.

```typescript
const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    // Axios request options
  },
});
```

## Dates

Dates and datetimes in requests and responses are represented as strings.

Time zone information is required for request fields that accept datetimes. Failing to include time zone information will result in an error. See the following examples for guidance on syntax.

If the API reference documentation for a field specifies `format: date`, use a string formatted as `'YYYY-MM-DD'`:

```js
const start_date = '2022-05-05';
```

If the API reference documentation for a field specifies `format: date-time`, use a string formatted as `'YYYY-MM-DDTHH:mm:ssZ'`:

```js
const start_date = '2019-12-12T22:35:49Z';
```

## Error Handling

All errors can now be caught using `try/catch` with `async/await` or through promise chaining.

```typescript
try {
  await plaidClient.transactionsSync(request);
} catch (error) {
  const err = error.response.data;
}

// or

plaidClient
  .transactionsSync(request)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.response.data);
  });
```

Note that the full error object includes the API configuration object, including the request headers, which in turn include the API key and secret. To avoid logging your API secret, log only `error.data` and/or avoid logging the full `error.config.headers` object.

## Examples

For more examples, see the [test suites](https://github.com/plaid/plaid-node/tree/master/test), [Quickstart](https://github.com/plaid/quickstart/tree/master/node), or [API Reference documentation](https://plaid.com/docs/api/).

Exchange a `public_token` from [Plaid Link][6] for a Plaid `access_token` and then
retrieve account data:

```typescript
const response = await plaidClient.itemPublicTokenExchange({ public_token });
const access_token = response.data.access_token;
const accounts_response = await plaidClient.accountsGet({ access_token });
const accounts = accounts_response.data.accounts;
```

Retrieve the last 100 transactions for a transactions user (new, recommended method):

```typescript
const response = await plaidClient.transactionsSync({
  access_token
});
const transactions = response.data.transactions;
);
```

Retrieve the transactions for a transactions user for the last thirty days (using the older method):

```typescript
const now = moment();
const today = now.format('YYYY-MM-DD');
const thirtyDaysAgo = now.subtract(30, 'days').format('YYYY-MM-DD');

const response = await plaidClient.transactionsGet({
  access_token,
  start_date: thirtyDaysAgo,
  end_date: today,
});
const transactions = response.data.transactions;
console.log(
  `You have ${transactions.length} transactions from the last thirty days.`,
);
```

Get accounts for a particular `Item`:

```typescript
const response = await plaidClient.accountsGet({
  access_token,
  options: {
    account_ids: ['123456790'],
  },
});
console.log(response.data.accounts);
```

Download Asset Report PDF:

```typescript
const pdfResp = await plaidClient.assetReportPdfGet(
  {
    asset_report_token: assetReportToken,
  },
  {
    responseType: 'arraybuffer',
  },
);

fs.writeFileSync('asset_report.pdf', pdfResp.data);
```

## Promise Support

Every method returns a promise, so you can use `async/await` or promise chaining.

API methods that return either a success or an error can be used with the
usual `then/catch` paradigm, e.g.

```typescript
plaidPromise
  .then((successResponse) => {
    // ...
  })
  .catch((err) => {
    // ...
  });
```

For example:

```typescript
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': CLIENT_ID,
      'PLAID-SECRET': SECRET,
      'Plaid-Version': '2020-09-14',
    },
  },
});

const plaidClient = new PlaidApi(configuration);

const app = express();
const port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

app.post('/plaid_exchange', (req, res) => {
  var public_token = req.body.public_token;

  return plaidClient
    .itemPublicTokenExchange({ public_token })
    .then((tokenResponse) => tokenResponse.access_token)
    .then((access_token) => plaidClient.accountsGet({ access_token }))
    .then((accountsResponse) => console.log(accountsResponse.data.accounts))
    .catch((error) => {
      const err = error.response.data;

      // Indicates plaid API error
      console.error('/exchange token returned an error', {
        error_type: err.error_type,
        error_code: err.error_code,
        error_message: err.error_message,
        display_message: err.display_message,
        documentation_url: err.documentation_url,
        request_id: err.request_id,
      });

      // Inspect error_type to handle the error in your application
      switch (err.error_type) {
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
  console.log(`Listening on port ${port}`);
});
```

## Migration guide

### 9.0.0 or later to latest

Migrating from version 9.0.0 or later of the library to a recent version should involve very minor integration changes. Many customers will not need to make changes to their integrations at all. To see a list of all potentially-breaking changes since your current version, see the [client library changelog](https://github.com/plaid/plaid-node/blob/master/CHANGELOG.md) and search for "Breaking changes in this version". Breaking changes are annotated at the top of each major version header.

### Pre-9.0.0 to latest

Version 9.0.0 of the client library was released in August 2021 and represents a major interface change. Any customer migrating from a version prior to 9.0.0 should consult the migration guide below.

This version represents a transition in how we maintain our external client libraries. We are now using an [API spec](https://github.com/plaid/plaid-openapi) written in `OpenAPI 3.0.0` and running our definition file through [OpenAPITool's `typescript-axios` generator](https://github.com/OpenAPITools/openapi-generator). All tests have been rewritten in Typescript.

#### Client initialization

From:

```javascript
const configs = {
  clientID: CLIENT_ID,
  secret: SECRET,
  env: plaid.environments.sandbox,
  options: {
    version: '2020-09-14',
  },
};

new plaid.Client(configs);
```

To:

```typescript
const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': CLIENT_ID,
      'PLAID-SECRET': SECRET,
      'Plaid-Version': '2020-09-14',
    },
  },
});

new PlaidApi(configuration);
```

#### Endpoints

All endpoint requests now take a request model, have better Typescript support and the functions have been renamed to move the verb to the end (e.g `getTransactions` is now `transactionsGet`).
Callbacks are no longer supported.

From:

```javascript
pCl.sandboxPublicTokenCreate(
  testConstants.INSTITUTION,
  testConstants.PRODUCTS,
  {},
  cb,
);
```

To:

```typescript
const request: SandboxPublicTokenCreateRequest = {
  institution_id: TestConstants.INSTITUTION,
  initial_products: TestConstants.PRODUCTS as Products[],
  options,
};

const response = await plaidClient.sandboxPublicTokenCreate(request);
```

#### Errors

From:

```javascript
pCl.getTransactions(
  accessToken,
  startDate,
  endDate,
  { count: count, offset: offset },
  (err, response) => {
    if (err) {
      if (err.status_code === 400 && err.error_code === 'PRODUCT_NOT_READY') {
        setTimeout(() => {
          getTransactionsWithRetries(
            accessToken,
            startDate,
            endDate,
            count,
            offset,
            num_retries_remaining - 1,
            cb,
          );
        }, 1000);
      } else {
        throw new Error('Unexpected error while polling for transactions', err);
      }
    } else {
      cb(null, response);
    }
  },
);
```

To:

```typescript

plaidClient
  .transactionsGet(request)
  .then((response) => resolve(response.data))
  .catch(() => {
    setTimeout(() => {
      if (retriesLeft === 1) {
        return reject('Ran out of retries while polling for transactions');
      }
      getTransactionsWithRetries(
        plaidClient,
        access_token,
        start_date,
        end_date,
        count,
        offset,
        ms,
        retriesLeft - 1,
      ).then((response) => resolve(response));
    }, ms);
  });

or use `try/catch`

try {
  await plaidClient.transactionsGet(request);
} catch (error) {
  const err = error.response.data;
  ...
}
```

#### Enums

While the API and pre-9.0.0 versions represent enums using strings, 9.0.0 and later allows either strings or Node enums.

Old:

```typescript
products: ['auth', 'transactions'],
```

Current:

```typescript
products: ['auth', 'transactions'],

// or

const { Products } = require("plaid");

products: [Products.Auth, Products.Transactions],
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
[6]: https://plaid.com/docs/link/
[7]: ./CONTRIBUTING.md
[9]: https://plaid.com/docs/link/stripe
[10]: https://stripe.com/docs/api#create_bank_account_token
[11]: https://blog.plaid.com/improving-our-api/
[13]: https://github.com/plaid/plaid-node-legacy
[api-upgrades]: https://plaid.com/docs/api/versioning/
[14]: https://plaid.com/docs/payment-initiation/
