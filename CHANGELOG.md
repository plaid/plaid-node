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
