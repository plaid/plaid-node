## 4.11.0
- Add `client_user_id` field to the item add token endpoint ([#279](https://github.com/plaid/plaid-node/pull/279))
- Add `user_identity` field to the item add token endpoint ([#269](https://github.com/plaid/plaid-node/pull/269))
- Add missing `authorized_date` and `payment_channel` fields to the `Transaction` interface ([#266](https://github.com/plaid/plaid-node/pull/266))

## 4.10.0

- Add support for Sandbox set verification status endpoint ([#223](https://github.com/plaid/plaid-node/pull/223))
  - `/sandbox/item/set_verification_status`

## 4.9.0

- Add support for the item add token (BETA) ([#262](https://github.com/plaid/plaid-node/pull/262))

## 4.8.0

- Add a new `oauth` field to the `Institution` schema returned by `/institutions/` routes ([#255](https://github.com/plaid/plaid-node/pull/255))
- Add investment product status to the `Item` schema ([#258](https://github.com/plaid/plaid-node/pull/258))
- Add `transaction_code` field to the `Transaction` interface ([#257](https://github.com/plaid/plaid-node/pull/257))

## 4.7.0

- Add support for new Transactions Refresh endpoint ([#246](https://github.com/plaid/plaid-node/pull/246))
  - `/transactions/refresh/`

## 4.6.0

- Add support for new generic Processor Token endpoint ([#228](https://github.com/plaid/plaid-node/pull/228))
  - `/processor/token/create`
- Add support for webook verification ([#234](https://github.com/plaid/plaid-node/pull/234))
  - `/webhook_verification_key/get`

## 4.5.0

- Add support for new Deposit Switch product ([#237](https://github.com/plaid/plaid-node/pull/237))
  - `/item/import`
  - `/deposit_switch/create`
  - `/deposit_switch/get`
  - `/deposit_switch/token/create`

## 4.4.0

- Add support for new UK Payment Initiation product ([#232](https://github.com/plaid/plaid-node/pull/232))
  - `/payment_initiation/recipient/create`
  - `/payment_initiation/recipient/get`
  - `/payment_initiation/recipient/list`
  - `/payment_initiation/payment/create`
  - `/payment_initiation/payment/token/create`
  - `/payment_initiation/payment/get`
  - `/payment_initiation/payment/list`
- Add `consent_expiration_time` to the Item interface ([#233](https://github.com/plaid/plaid-node/pull/233))

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
