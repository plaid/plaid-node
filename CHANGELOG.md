See full changelog for the OpenAPI schema (OAS) [here](https://github.com/plaid/plaid-openapi/blob/master/CHANGELOG.md).

# 9.12.0
- Updating to OAS 2020-09-14_1.78.2
- Node library 9.11.0 was erroneously released as a `minor` version; 9.11.0 changes will be re-released as a `major` version shortly.

# 9.11.0
- Updating to OAS 2020-09-14_1.77.1

# Breaking changes
- Many enum fields have been de-anonymized and renamed, new names can be found in the `2020-09-14_1.64.15` change message

## OpenAPI Schema Changes
### 2020-09-14_1.77.1
- Fix extraneous field in enum that caused issue in code generation
- Added `asset_report_id` to the example for `/asset_report/relay/refresh`

### 2020-09-14_1.77.0
- Explicitly set `format: double` for non-integer numbers so generated fields prefer float64

### 2020-09-14_1.76.0
- Add three new endpoints for Assets: `/asset_report/relay/create`, `/asset_report/relay/get`, and `/asset_report/relay/rmeove`

### 2020-09-14_1.75.0
- Added `/asset_report/relay/refresh` endpoint

### 2020-09-14_1.74.0
- Add `recurring_transactions` to list of products

### 2020-09-14_1.73.0
- Add new endpoint for `/credit/bank_income/get`

### 2020-09-14_1.72.0
- Updated documentation URLs for all product endpoints. They can now be found
at `/docs/api/products/<product-name>/#endpoint` instead of `/docs/api/products/#endpoint`

### 2020-09-14_1.71.0
- internal changes

### 2020-09-14_1.70.0
- Remove deprecated `income_verification_id` from `/sandbox/income/fire_webhook`

### 2020-09-14_1.69.1
- Reorder processors enum

### 2020-09-14_1.69.0
- Added `/beta/transactions/v1/enhance` endpoint

### 2020-09-14_1.68.1
- Added `status` object to sample responses for `/institutions/get` and `institutions/search` endpoints

### 2020-09-14_1.68.0
- Mark `include_personal_finance_category_beta` property as deprecated.
- Add new argument `include_personal_finance_category` to TransactionsGetRequestOptions.
- Update docs for `/transactions/get` request and response, referencing personal_finance_category taxonomy csv file.

### 2020-09-14_1.67.1
- internal changes

### 2020-09-14_1.67.0
- Removed unused `/income/verification/summary/get` endpoint

### 2020-09-14_1.66.0
- Added Payment Consent endpoints

### 2020-09-14_1.65.0
- Removed unused `/income/verification/paystub/get` endpoint

### 2020-09-14_1.64.15
- De-anonymized enums:
  - `PaymentInitiationPaymentReverseResponse.properties.status` => `PaymentInitiationRefundStatus`
  - `PaymentInitiationPaymentCreateResponse.properties.status` => `PaymentInitiationPaymentCreateStatus`
  - `PaymentInitiationRefund.properties.status` => `PaymentInitiationRefundStatus`
  - `PaymentAmount.properties.currency` => `PaymentAmountCurrency`
  - `InvestmentTransaction.properties.type` => `InvestmentTransactionType`
  - `InvestmentTransaction.properties.subtype` => `InvestmentTransactionSubtype`
  - `TransferAuthorizationDecisionRationale.properties.code` => `TransferAuthorizationDecisionRationaleCode`
  - `TransferAuthorizationGuaranteeDecisionRationale.properties.code` => `TransferAuthorizationGuaranteeDecisionRationaleCode`
  - `TransferAuthorization.properties.decision` => `TransferAuthorizationDecision`
  - `TransferEventListRequest.properties.transfer_type` => `TransferEventListTransferType`
  - `BankTransferEventListRequest.properties.bank_transfer_type` => `BankTransferEventListBankTransferType`
  - `BankTransferEventListRequest.properties.direction` => `BankTransferEventListDirection`
  - `TransferIntentCreate.properties.status` => `TransferIntentStatus`
  - `TransferIntentGet.properties.status` => `TransferIntentStatus`
  - `TransferIntentGet.properties.authorization_decision` => `TransferIntentAuthorizationDecision`
- `IncomeVerificationPrecheckMilitaryInfo.properties.branch` is now a string field (previously enum)

### 2020-09-14_1.64.15
- Made `last_statement_balance` and `minimum_payment_amount` `nullable` for credit card liabilities schema to reflect existing API behavior.

### 2020-09-14_1.64.14
- Made `last_payment_amount` and `last_statement_issue_date` `nullable` for credit card liabilities schema to reflect existing API behavior.
- Fix transfers examples to reflect more consistent usage of `region` field.

# 9.10.1
- Updating to OAS 2020-09-14_1.64.13

## OpenAPI Schema Changes
### 2020-09-14_1.64.13
- Deprecate `idempotency_key` parameter in transfer/create

### 2020-09-14_1.64.12
- Removed the unused `required_product_access` and `optional_product_access` parameters from `RequestedScopes`

### 2020-09-14_1.64.11
- Fix some examples that were not consistent with their schemas
- Add `adjustments` as an investments transaction type to make OpenAPI file consistent with values returned by the API
- Clarify description field for `marital_status` to reflect possible values

### 2020-09-14_1.64.10
- Updated the external docs URL for Bank Transfers sandbox endpoints

### 2020-09-14_1.64.9
- De-anonymized the object filters under `LinkTokenCreateRequestAccountSubtypes`, as anonymous objects aren't compatible with the generated CLibs.
- De-anonymized some misc. objects
  - `PaymentInitiationMetadata/properties/maximum_payment_amount`
  - `PaystubOverride/properties/employer`
  - `PaystubOverride/properties/employee`
  - `PaystubOverride/properties/employee/properties/address`
  - `LiabilitiesDefaultUpdateWebhook/properties/account_ids_with_updated_liabilities`

### 2020-09-14_1.64.8
- Updated the description of the historical_balances array

### 2020-09-14_1.64.7
- Add new possible enums for income verification earnings breakdown canonical description

### 2020-09-14_1.64.6
- Hid a few product enum values that are deprecated or no longer valid for certain request fields. This affects the documentation only.

### 2020-09-14_1.64.5
- Make guarantee fields required in Transfer endpoints

### 2020-09-14_1.64.4
- Updated description for `failure_reason` field in Transfer endpoints

### 2020-09-14_1.64.3
- Make `repayment_id` required in `/transfer/repayment/return/list` endpoint

### 2020-09-14_1.64.2
- Update description for legal name field in `BankTransferUser` 

### 2020-09-14_1.64.1
- Update descriptions for `/transfer/repayment/list` and `/transfer/repayment/return/list` endpoints

### 2020-09-14_1.64.0
- Remove `scheme_automatic_downgrade` from `/payment_initiation/payment/create`

### 2020-09-14_1.63.1
- Update description for `/sandbox/transfer/sweep/simulate` endpoint

### 2020-09-14_1.63.0
- Refactor account subtype enums for greater specificity. This has no changes to the API but is a major semver change for Python, Node, Go, and Java client library interfaces to the AccountSubtype object within account filtering contexts in `/link/token/create`. The `AccountSubtype` namespace in this context is now prefixed with the AccountType. (Example for Node: Old: `AccountSubtype.checking` New: `DepositoryAccountSubtype.checking`)

### 2020-09-14_1.62.7
- Update description for `datetime` and `authorized_datetime` fields in Transactions endpoints

### 2020-09-14_1.62.6
- Make `sweep_id` / `sweep_amount` fields on Transfer Event nullable

### 2020-09-14_1.62.6
- Set `institution_status` to be nullable in `InstitutionsGetResponse`

### 2020-09-14_1.62.5
- Update external docs URLs for Transfer and Bank Transfer endpoints
- Update description for `ach_return_code` field in Transfer endpoints

### 2020-09-14_1.62.4
- Add `join_date` to `/application/get` and `/item/application/list`
- Remove `created_at` from `/application/get`

### 2020-09-14_1.62.3
- Updated various description fields for Income

### 2020-09-14_1.62.2
- Add `employment` as an available product in Product array.

### 2020-09-14_1.62.1
- Add `minItems` and `minLength` validation to various fields in `/institution/*` request schemas

### 2020-09-14_1.62.0
- Add guarantee_decision and guarantee_decision rationale fields to the transfer API
- Add repayment-related resources to the transfer API

### 2020-09-14_1.61.7
- Remove `receiver_pending` and `receiver_posted` from bank transfer event types.
- Remove `BankTransferReceiverDetails` from bank transfer event types.

### 2020-09-14_1.61.6
- Update description formatting for `sweep` and `amount` fields for sweep endpoints

### 2020-09-14_1.61.5
- Added `NEW_ACCOUNTS_AVAILABLE` webhook code as valid input to `/sandbox/item/fire_webhook`
- Update description for `/sandbox/item/fire_webhook`

### 2020-09-14_1.61.4
- Set the `minimum` for the `count` and `offset` fields in `InstitutionsGetRequest`
- Set `products`, `routing_numbers`, and `oauth` fields to be nullable in `InstitutionsGetRequestOptions`
- Set `products` to be nullable in `InstitutionsSearchRequest`
- Set `oauth`, `include_auth_metadata`, and `include_payment_initiation_metadata` fields to be nullable in `InstitutionsSearchRequestOptions`
- Set `payment_id` field to be nullable in `InstitutionsSearchPaymentInitiationOptions`

### 2020-09-14_1.61.3
- Adds `DOCUMENT_TYPE_NONE` enum value for document metadata

### 2020-09-14_1.61.2
- Relax length restrictions on the `currency` field in the `Pay` schema

### 2020-09-14_1.61.1
- Use new payment statuses in `PaymentStatusUpdateWebhook`

# 9.10.0
- Updating to OAS 2020-09-14_1.61.0

# 9.9.0
- Updating to OAS 2020-09-14_1.58.1

# 9.8.0
- Updating to OAS 2020-09-14_1.54.2

# 9.7.0
- Updating to OAS 2020-09-14_1.46.1

# 9.6.0
- Updating to OAS 2020-09-14_1.44.0

# 9.5.0
- Updating to OAS 2020-09-14_1.40.3

# 9.4.0
- Updating to OAS 2020-09-14_1.36.1

# 9.3.0
- Updating to OAS 2020-09-14_1.33.0.
- Bumped `axios` from `0.21.1` to `0.21.4` due to a vulnerability.

# 9.2.0
Updating to OAS 2020-09-14_1.31.1.

# 9.1.0
Updating to OAS 2020-09-14_1.26.1.

# 9.0.0
The official release of the `plaid-node` generated library. Refer to the beta migration guide for tips on migrating from older version of the libraries.

This particular version is pinned to OpenAPI version `2020-09-14_1.20.6`.

# 9.0.0-beta.15
- Added `options` field for the /deposit_switch/create endpoint.
- Type fixes, see full changelog [here](https://github.com/plaid/plaid-openapi/blob/master/CHANGELOG.md#2020-09-14_11912).

# 9.0.0-beta.14
Type fixes from `OpenAPI version 2020-09-14_1.16.2`, see full changelog [here](https://github.com/plaid/plaid-openapi/blob/master/CHANGELOG.md).

# 9.0.0-beta.13
Fix publish regression.

# 9.0.0-beta.12
Type fixes, see full changelog [here](https://github.com/plaid/plaid-openapi/blob/master/CHANGELOG.md).

# 9.0.0-beta.11
This version represents a transition in how we maintain our external client libraries. We are now using an [API spec](https://github.com/plaid/plaid-openapi) written in `OpenAPI 3.0.0` and running our definition file through [OpenAPITool's `typescript-axios` generator](https://github.com/OpenAPITools/openapi-generator). All tests have been rewritten in Typescript.

**Node Migration Guide**
## Client initialization
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
      'Plaid-Version': '2020-09-14'
    }
  }
});

new PlaidApi(configuration);
```

## Endpoints

All endpoint requests now take a request model, have better Typescript support and the functions have been renamed to move the verb to the end (e.g `getTransactions` is now `transactionsGet`).
Callbacks are no longer supported.

From:
```javascript
pCl.sandboxPublicTokenCreate(testConstants.INSTITUTION,
  testConstants.PRODUCTS, {}, cb);

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

## Errors
From:
```javascript
pCl.getTransactions(accessToken, startDate, endDate,
{ count: count, offset: offset }, (err, response) => {
  if (err) {
    if (err.status_code === 400 &&
      err.error_code === 'PRODUCT_NOT_READY') {
      setTimeout(() => {
        getTransactionsWithRetries(
          accessToken, startDate, endDate, count,
          offset, num_retries_remaining - 1, cb
        );
      }, 1000);
    } else {
      throw new Error(
        'Unexpected error while polling for transactions', err);
    }
  } else {
    cb(null, response);
  }
});
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

# 8.5.2
- Added additional EMI (E-Money Institution) support `options` to `/payment_initiation/payment/create`
- Updated `/payment_initiation/payment/get`, `/payment_initiation/recipient/get`, and `/payment_initiation/recipient/list` to return additional EMI related fields

# 8.5.1
- Upgrade package versions

# 8.5.0
- Add support for `options` to `/payment_initiation/payment/create`

# 8.4.0
- Added support for `min_last_updated_datetime` in the `/balance/get` request and
    `last_updated_datetime` in the `/balance/get` response.

# 8.3.0
- Added support for `/income/verification/paystubs/get`.

# 8.2.1
- Added support for `/income/verfication/create`.

# 8.2.0
- Added support for `/deposit_switch/alt/create` endpoint
- Added support for providing a `deposit_switch_id` to the `/link/token/create` endpoint
- Upgrade package versions

# 8.1.4
- Corrected the type description for `createPaymentRecipient`. [#396](https://github.com/plaid/plaid-node/pull/396)
- Added support for endpoints `/income/verification/paystub/get` and `/income/verification/summary/get` via `getPaystub` and `getSummary` respectively. [#400](https://github.com/plaid/plaid-node/pull/400)

# 8.1.3
Security patch

# 8.1.2
- Corrected typings for `ClientOptions` and `ClientConfigs`. `ClientOptions` now extends `AxiosRequestConfig` instead of `ClientConfigs`. Request configuration now is typed to underlying implementation. [#384](https://github.com/plaid/plaid-node/issues/384)

# 8.1.0
- The legacy `/item/public_token/create` endpoint is added back. This endpoint should only be used if you
    have your public_key enabled and are not yet migrated to link_tokens. It is marked deprecated.
- The legacy `/payment_initiation/payment/token/create` endpoint is added back. This endpoint should
    only be used if you have your public_key enabled and are not yet migrated to link_tokens. It is
    marked deprecated.

# 8.0.0

BREAKING CHANGES:

- The library has been pinned to the '2020-09-14' API release. Visit the [docs](https://plaid.com/docs/api/versioning/) to see what changed.
- the `/item/public_token/create` endpoint has been disabled in favor of the /link/token/create
    endpoint
- The `/item/add_token/create endpoint` has been disabled in favor of the /link/token/create
- The `/payment_initiation/payment/token/create` endpoint has been disabled in favor of the /link/token/create
    endpoint
- The `/item/remove` endpoint will no longer return a `removed` boolean.
- The `/item/delete` typescript type has been removed.
- The `/institutions/get`, `/institutions/get_by_id`, and `/institutions/search` now require
    `country_codes` to be passed in.

# 7.1.0

- Add support for Link Token get endpoint ([#354](https://github.com/plaid/plaid-node/pull/354))
  - `/link/token/get`

# 7.0.1

- Add `subtype` field for the InvestmentTransaction typescript definition

# 7.0.0

- Rename 'client_id' string to 'clientID' in errors ([#336](https://github.com/plaid/plaid-node/pull/336))
- Add typings for `getInstitutionById` with status ([#337](https://github.com/plaid/plaid-node/pull/337))
- Fix `AssetReportGetPdfResponse` binary response type ([#340](https://github.com/plaid/plaid-node/pull/340))

BREAKING CHANGES:

- Adds BACS support for payment initiation ([#334](https://github.com/plaid/plaid-node/pull/334))
- Fixes nullable typings for Account and AccountCommon ([#342](https://github.com/plaid/plaid-node/pull/342))

# 6.0.0

- Add typings for `merchant_name` to `Transaction` interface

BREAKING CHANGES:

- `plaid.Client` now accepts an object
- Removes the public key as input to `plaid.Client`. The public key is no longer needed by the API.
- Add support for the `/link/token/create` endpoint

# 5.2.0

- Improved typescript typings for `getHoldings` and `getInstitutionById`

# 5.1.0

- Improved typescript typings for `getInstitutionById`, `ClientOptions`, and `getWebhookVerificationKey`
- Make `getWebhookVerificationKey` compatible with async/await

# 5.0.0

- Replaced the deprecated `request` library with `axios`
- Removes support for the deprecated `/item/access_token/update_version` endpoint
- Updated license format in `package.json`
- Updates `PaymentRecipientGetResponse` typing

BREAKING CHANGES:

- `PaymentRecipientGetResponse.address` is now nullable
- Removes `plaidClient.updateAccessTokenVersion()`
- If your integration relies on passing custom `request` config to the `plaid.Client` constructor via the `options` argument, these options must be migrated to use `axios` equivalents.

# 4.11.0

- Add `client_user_id` field to the item add token endpoint ([#279](https://github.com/plaid/plaid-node/pull/279))
- Add `user_identity` field to the item add token endpoint ([#269](https://github.com/plaid/plaid-node/pull/269))
- Add missing `authorized_date` and `payment_channel` fields to the `Transaction` interface ([#266](https://github.com/plaid/plaid-node/pull/266))

# 4.10.0

- Add support for Sandbox set verification status endpoint ([#223](https://github.com/plaid/plaid-node/pull/223))
  - `/sandbox/item/set_verification_status`

# 4.9.0

- Add support for the item add token (BETA) ([#262](https://github.com/plaid/plaid-node/pull/262))

# 4.8.0

- Add a new `oauth` field to the `Institution` schema returned by `/institutions/` routes ([#255](https://github.com/plaid/plaid-node/pull/255))
- Add investment product status to the `Item` schema ([#258](https://github.com/plaid/plaid-node/pull/258))
- Add `transaction_code` field to the `Transaction` interface ([#257](https://github.com/plaid/plaid-node/pull/257))

# 4.7.0

- Add support for new Transactions Refresh endpoint ([#246](https://github.com/plaid/plaid-node/pull/246))
  - `/transactions/refresh/`

# 4.6.0

- Add support for new generic Processor Token endpoint ([#228](https://github.com/plaid/plaid-node/pull/228))
  - `/processor/token/create`
- Add support for webook verification ([#234](https://github.com/plaid/plaid-node/pull/234))
  - `/webhook_verification_key/get`

# 4.5.0

- Add support for new Deposit Switch product ([#237](https://github.com/plaid/plaid-node/pull/237))
  - `/item/import`
  - `/deposit_switch/create`
  - `/deposit_switch/get`
  - `/deposit_switch/token/create`

# 4.4.0

- Add support for new UK Payment Initiation product ([#232](https://github.com/plaid/plaid-node/pull/232))
  - `/payment_initiation/recipient/create`
  - `/payment_initiation/recipient/get`
  - `/payment_initiation/recipient/list`
  - `/payment_initiation/payment/create`
  - `/payment_initiation/payment/token/create`
  - `/payment_initiation/payment/get`
  - `/payment_initiation/payment/list`
- Add `consent_expiration_time` to the Item interface ([#233](https://github.com/plaid/plaid-node/pull/233))

# 4.1.0

- Add support for new Investments product ([#205](https://github.com/plaid/plaid-node/issues/205))
  - `/investments/transactions/get`
  - `/investments/holdings/get`

# 4.0.0

- Add support for [version `2019-05-29`](https://plaid.com/docs/api-upgrades/) of the Plaid API

# 3.1.2

- Allow client_app flag to be passed into the client config ([#196](https://github.com/plaid/plaid-node/issues/196))

# 3.1.1

- Add support for [`/sandbox/item/fire_webhook`][sandbox-item-fire-webhook] endpoint ([#191](https://github.com/plaid/plaid-node/pull/191))
- Migrate CI to CircleCI 2.0

# 3.1.0

- Fix flag name for retrieving institution display data, it is `include_optional_metadata`

# 3.0.0

- Remove direct integration endpoints since they are no longer supported
- `deleteItem` has been renamed `removeItem`
- Add `PlaidError` implementation

# 2.1.5

- Add `include_display_data` flag to institutions endpoints

# 2.1.1

- Fix handling of non-JSON bodies ([#136](https://github.com/plaid/plaid-node/issues/136))

# 2.1.0

- Add typescript typings ([#132](https://github.com/plaid/plaid-node/pull/132))

# 2.0.5

- Fix promise support for `createStripeToken` ([#129](https://github.com/plaid/plaid-node/pull/129))
- Fix type error for unexpected response body types [#128](https://github.com/plaid/plaid-node/pull/128))

# 2.0.4

- Add `createStripeToken` helper method (alias of `createProcessorToken(access_token, account_id, 'stripe', 'callback')`)

# 2.0.3

- Remove failing `POST /income/get` integration test

# 2.0.2

- Add `getIncome` method to retrieve [Income data](https://plaid.com/docs/api#income) for an Item
- `README` clarifications

# 2.0.1

- Remove use of `const` and `let` in favor of `var` to support older Node versions

# 2.0.0

- Refactor the entire library to support [Plaid's updated API](https://blog.plaid.com/improving-our-api)

[sandbox-item-fire-webhook]: https://plaid.com/docs/#firing-webhooks
