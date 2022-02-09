# plaid-node [![Circle CI](https://circleci.com/gh/plaid/plaid-node.svg?style=svg&circle-token=2efcf082d8df7e119325a4dbed9a1091ff5db422)](https://circleci.com/gh/plaid/plaid-node) [![npm version](https://badge.fury.io/js/plaid.svg)](http://badge.fury.io/js/plaid)

The official node.js client library for the [Plaid API][1].

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Install](#install)
  - [Versioning](#versioning)
- [Getting started](#getting-started)
- [Error Handling](#error-handling)
- [Examples](#examples)
  - [Payment Initiation](#payment-initiation)
- [Promise Support](#promise-support)
- [Support](#support)
- [Contributing](#contributing)
- [License](#license)

## Install

```console
$ npm install plaid
```

### Versioning

This release only supports the latest Plaid API version, `2020-09-14`, and is generated from our [OpenAPI schema](https://github.com/plaid/plaid-openapi).

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

const client = new PlaidApi(configuration);
```

For information about what has changed between versions and how to update your integration, head to the [API upgrade guide][api-upgrades].

The plaid-node client library is typically updated on a biweekly basis. The canonical source for the latest version number is the [client library changelog](https://github.com/plaid/plaid-node/blob/master/CHANGELOG.md).

## Data type differences from API and from previous versions

### Enums
While the API and previous library versions represent enums using strings, this current library uses Node enums.

Old:
```
products: ['auth', 'transactions'],
country_codes: ['US'],
```

Current:
```
products: [Products.Auth, Products.Transactions],
country_codes: [Products.Us],
```

## Getting started

The module supports all Plaid API endpoints. For complete information about the API, head
to the [docs][2].

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

- `PlaidEnvironments.production` - production use, creates `Item`s on https://production.plaid.com
- `PlaidEnvironments.development` - use for integration development and testing, creates `Item`s on https://development.plaid.com
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

## Error Handling

All errors can now be caught using `try/catch` with `async/await` or through promise chaining.

```typescript
try {
  await plaidClient.transactionsGet(request);
} catch (error) {
  const err = error.response.data;
}

or;

plaidClient
  .transactionsGet(request)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.response.data);
  });
```

## Examples

Exchange a `public_token` from [Plaid Link][6] for a Plaid `access_token` and then
retrieve account data:

```typescript
const response = await plaidClient.itemPublicTokenExchange({ public_token });
const access_token = response.data.access_token;
const accounts_response = await plaidClient.accountsGet({ access_token });
const accounts = accounts_response.data.accounts;
```

Retrieve transactions for a transactions user for the last thirty days:

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

### Payment Initiation

For more information about this product, head to the [Payment Initiation docs][14].

Create payment recipient using IBAN and address without BACS

```typescript
const name = 'John Doe';
const iban = 'NL02ABNA0123456789';
const address = {
  street: ['street name 999'],
  city: 'London',
  postal_code: '99999',
  country: 'GB',
};

// Passing bacs as null
const response = await plaidClient.paymentInitiationRecipientCreate({
  name,
  iban,
  address,
});
console.log(response.data.recipient_id);
```

Create payment recipient using BACS with no IBAN or address

```typescript
const name = 'John Doe';
const bacs = {
  account: '26207729',
  sort_code: '560029',
};

// For UK recipients, only bacs is required. iban and address are null
const response = await plaidClient.paymentInitiationRecipientCreate({
  name,
  bacs,
});
console.log(response.data.recipient_id);
```

Create payment

```typescript
const reference = 'testPayment';
const amount = {
  currency: 'GBP',
  value: 100.0,
};

const response = await plaidClient.paymentInitiationPaymentCreate({
  recipient_id,
  reference,
  amount,
});
console.log(response.data.payment_id);
console.log(response.data.status);
```

Create Link Token (for Payment Initiation only)

```typescript
const response = await plaidClient.linkTokenCreate({
  user: {
    client_user_id: '123-test-user-id',
  },
  client_name: 'Plaid Test App',
  products: ['payment_initiation'],
  country_codes: ['GB'],
  language: 'en',
  payment_initiation: {
    payment_id: 'some_payment_id',
  },
});

console.log(response.data.link_token);
```

Download Asset Report PDF

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
    .then((accessToken) => plaidClient.accountsGet({ accessToken }))
    .then((accountsResponse) => console.log(accountsResponse.accounts))
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
[13]: https://github.com/plaid/plaid-node-legacy
[api-upgrades]: https://plaid.com/docs/api/versioning/
[14]: https://plaid.com/docs/payment-initiation/
