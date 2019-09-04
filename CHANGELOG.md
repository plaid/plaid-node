## 4.1.0

- Add support for new Investments product ([#205](https://github.com/plaid/plaid-node/issues/205))
  - `/investments/transactions/get`
  - `/investments/holdings/get`

## 4.0.0

- Add support for [version `2019-05-29`](https://plaid.com/docs/api-upgrades/) of the Plaid API

## 3.1.2

- Allow client_app flag to be passed into the client config ([#196](https://github.com/plaid/plaid-node/issues/196))

## 3.1.1

- Add support for [`/sandbox/item/fire_webhook`][sandbox-item-fire-webhook] endpoint ([#191](https://github.com/plaid/plaid-node/pull/191))
- Migrate CI to CircleCI 2.0

## 3.1.0

- Fix flag name for retrieving institution display data, it is `include_optional_metadata`

## 3.0.0

- Remove direct integration endpoints since they are no longer supported
- `deleteItem` has been renamed `removeItem`
- Add `PlaidError` implementation

## 2.1.5

- Add `include_display_data` flag to institutions endpoints

## 2.1.1

- Fix handling of non-JSON bodies ([#136](https://github.com/plaid/plaid-node/issues/136))

## 2.1.0

- Add typescript typings ([#132](https://github.com/plaid/plaid-node/pull/132))

## 2.0.5

- Fix promise support for `createStripeToken` ([#129](https://github.com/plaid/plaid-node/pull/129))
- Fix type error for unexpected response body types [#128](https://github.com/plaid/plaid-node/pull/128))

## 2.0.4

- Add `createStripeToken` helper method (alias of `createProcessorToken(access_token, account_id, 'stripe', 'callback')`)

## 2.0.3

- Remove failing `POST /income/get` integration test

## 2.0.2

- Add `getIncome` method to retrieve [Income data](https://plaid.com/docs/api#income) for an Item
- `README` clarifications

## 2.0.1

- Remove use of `const` and `let` in favor of `var` to support older Node versions

## 2.0.0

- Refactor the entire library to support [Plaid's updated API](https://blog.plaid.com/improving-our-api)

[sandbox-item-fire-webhook]: https://plaid.com/docs/#firing-webhooks
