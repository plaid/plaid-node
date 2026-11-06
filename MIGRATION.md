# Node SDK Migration Guide

Learn how to migrate to version 51 of the Plaid Node SDK, or continue using the previous SDK.

## Overview

Version 51 of `plaid` introduces a new SDK. Plaid can release updates to the new SDK more frequently, so new API features will be available in the SDK sooner after they launch.

The new SDK also requires less code for common tasks. Responses come back as the response body rather than wrapped in an HTTP response, you can iterate over paginated results without writing your own loop, and errors are typed so you can match them without inspecting `error.response.data`.

### Summary of updates

- Endpoints are grouped by product, such as `client.accounts.get` and `client.link.createToken`, instead of being methods on a single `PlaidApi` client.
- Calls return the response body directly, so you no longer access `.data` on every response.
- Errors are typed by HTTP status and include the parsed Plaid error, so you can match them with `instanceof`.
- Many paginated endpoints return an async iterable, so you do not need to write your own pagination loop.
- The new SDK has no runtime dependencies. The package still installs `axios`, which only `plaid/legacy` uses.
- Request and response field names are unchanged. They remain `snake_case`, such as `access_token` and `account_ids`.

> [!NOTE]
> Unlike the Go SDK migration, **field names and date formats do not change**. Dates remain strings, and enum members such as `Products.Auth` and `CountryCode.Us` keep the same names. Most of the work is in the call style, not the data.

## Migration walkthrough

Version 51 also includes the previous SDK as a separate `legacy` entry point in the same package. This allows you to upgrade to version 51 without changing any calls, then migrate to the new SDK one endpoint at a time.

The overall process for migrating is:

1. [Install version 51](#install-version-51).
2. [Switch your imports to the legacy entry point](#switch-your-imports-to-the-legacy-entry-point).
3. [Create a client with the new SDK](#create-a-client-with-the-new-sdk).
4. [Migrate calls one endpoint at a time](#migrate-calls-one-endpoint-at-a-time).
5. [Update pagination logic](#update-pagination-logic).
6. [Update error handling](#update-error-handling).
7. [Test your integration](#test-your-integration).
8. [Remove the legacy import](#remove-the-legacy-import).

## Install version 51

```bash
npm install plaid@51
```

> [!NOTE]
> Version 51 requires Node.js 18 or later. It also runs on Vercel, Cloudflare Workers, Deno 1.25+, Bun 1.0+, and React Native.

## Switch your imports to the legacy entry point

Version 51 contains two SDKs, each with its own import path:

| SDK          | Import path     |
| ------------ | --------------- |
| New SDK      | `plaid`         |
| Previous SDK | `plaid/legacy`  |

To use the previous SDK with version 51, update your import path:

```diff
- import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
+ import { Configuration, PlaidApi, PlaidEnvironments } from "plaid/legacy";
```

Exported names are unchanged apart from schema changes listed in the [changelog](CHANGELOG.md), such as the Business Verification renames, so the rest of your code does not need to change. To update all imports in your project on macOS or Linux, run the following command from the root of your project:

```bash
# Preview what would change
grep -rn --include=\*.ts --include=\*.tsx --include=\*.js --include=\*.mjs \
  -E "(from ['\"]plaid['\"]|require\\(['\"]plaid['\"]\\))" .
```

Review that list, then rewrite the matches with your editor's find-and-replace, changing
`plaid` to `plaid/legacy` in `import`/`require` statements only. A blind
search-and-replace will also hit the string `"plaid"` in comments, package names, and
log messages, so check the diff before committing. After updating, run your project's
tests.

> [!NOTE]
> Import from `plaid/legacy` rather than from individual files. Deep imports such as `plaid/dist/api` no longer resolve and fail with `ERR_PACKAGE_PATH_NOT_EXPORTED`. If TypeScript reports that it cannot find `plaid/legacy`, set `moduleResolution` to `node16`, `nodenext`, or `bundler` in your `tsconfig.json`.
>
> Jest before version 28 and webpack 4 do not read the package's `exports` map. For Jest 27, add `"moduleNameMapper": { "^plaid/legacy$": "<rootDir>/node_modules/plaid/dist/legacy/index.js" }`. For webpack 4, set `resolve.mainFields` to `["main"]` and alias `plaid/legacy$` to `plaid/dist/legacy/index.js`.

## Create a client with the new SDK

Create a client with the new SDK alongside your existing client. The two SDKs export different names, so no aliasing is required:

```typescript
import { Plaid, PlaidClient, PlaidEnvironment } from "plaid";
import { Configuration, CountryCode, PlaidApi, PlaidEnvironments, Products } from "plaid/legacy";

// new SDK
const client = new PlaidClient({
    clientId: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    version: "2020-09-14",
    environment: PlaidEnvironment.Sandbox,
});

// previous SDK
const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
            "PLAID-SECRET": process.env.PLAID_SECRET,
        },
    },
});
const legacyClient = new PlaidApi(configuration);
```

If your credentials are set in the `PLAID_CLIENT_ID` and `PLAID_SECRET` environment variables, you can omit them:

**New SDK, using environment variables**

```typescript
const client = new PlaidClient({ environment: PlaidEnvironment.Sandbox });
```

The new SDK reads `PLAID_CLIENT_ID`, `PLAID_SECRET`, and `PLAID_VERSION` from the environment when they are not passed explicitly.

> [!WARNING]
> Always set an environment explicitly. As in version 50, a client created without one sends requests to Production.

`PlaidEnvironment` has two members, `Sandbox` and `Production`. If you previously selected an environment with `PlaidEnvironments[process.env.PLAID_ENV]`, map the string yourself:

```typescript
const environment =
    process.env.PLAID_ENV === "production" ? PlaidEnvironment.Production : PlaidEnvironment.Sandbox;
const client = new PlaidClient({ environment });
```

### Retries

Like the previous SDK, the new SDK does not retry failed requests by default. To retry requests that fail with HTTP 408, 429, or 5xx, set `maxRetries`. Retries use exponential backoff:

```typescript
// retry a single request up to 2 times
await client.accounts.get({ access_token: accessToken }, { maxRetries: 2 });
```

Before enabling retries for operations that move money, such as `/transfer/create` or `/payment_initiation/payment/create`, make sure a repeated request is safe. A request that failed with a 5xx error may already have succeeded.

## Migrate calls one endpoint at a time

Replace each call to the previous SDK with the equivalent call to the new SDK. The following table summarizes the differences. TypeScript will flag most of these; for changes that it will not flag, see [Test your integration](#test-your-integration).

| Change             | Previous SDK                                      | New SDK                                                             |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------------------- |
| Making a call      | `plaidClient.accountsGet({ access_token })`        | `client.accounts.get({ access_token })`                              |
| Client grouping    | A single `PlaidApi` client                         | Grouped by product: `client.accounts`, `client.auth`, `client.link`… |
| Reading responses  | `response.data.accounts`                           | `response.accounts`                                                  |
| Client setup       | `new Configuration({ basePath, baseOptions })`     | `new PlaidClient({ clientId, secret, environment })`                 |
| Environments       | `PlaidEnvironments.sandbox`                        | `PlaidEnvironment.Sandbox`                                           |
| Errors             | `catch (e) { e.response.data }`                    | `catch (e) { if (e instanceof Plaid.BadRequestError) … }`            |
| Status and headers | `response.status`, `response.headers`              | `await client.accounts.get(...).withRawResponse()`                    |
| Retries            | None                                               | None unless you set `maxRetries`                                      |
| Downloads          | `response.data` as a Buffer                        | `BinaryResponse` with `.arrayBuffer()`, `.stream()`, `.blob()`        |
| Field names        | `snake_case`                                       | `snake_case` — unchanged                                              |
| Enums              | `Products.Auth`, `CountryCode.Us`                  | `Plaid.Products.Auth`, `Plaid.CountryCode.Us` — same members          |
| Dates              | `string`                                           | `string` — unchanged                                                  |

The following example calls `/accounts/balance/get` in each SDK:

**Previous SDK**

```typescript
const bal = await plaidClient.accountsBalanceGet({ access_token: accessToken });
for (const a of bal.data.accounts) {
    console.log(a.account_id, a.balances.current);
}
```

**New SDK**

```typescript
const bal = await client.accounts.getBalance({ access_token: accessToken });
for (const a of bal.accounts) {
    console.log(a.account_id, a.balances.current);
}
```

The following example calls `/link/token/create`. The request shape is identical; only the method name and the response access change:

**Previous SDK**

```typescript
const link = await plaidClient.linkTokenCreate({
    client_name: "My App",
    language: "en",
    country_codes: [CountryCode.Us],
    user: { client_user_id: "user-123" },
    products: [Products.Transactions],
});
const linkToken = link.data.link_token;
```

**New SDK**

```typescript
const link = await client.link.createToken({
    client_name: "My App",
    language: "en",
    country_codes: [Plaid.CountryCode.Us],
    user: { client_user_id: "user-123" },
    products: [Plaid.Products.Transactions],
});
const linkToken = link.link_token;
```

### Getting an access token

```typescript
// Previous SDK
const exch = await plaidClient.itemPublicTokenExchange({ public_token });
const accessToken = exch.data.access_token;

// New SDK
const exch = await client.item.exchangePublicToken({ public_token });
const accessToken = exch.access_token;
```

### Method names

Method names move from a flat verb-first form to a product-grouped form. Some common mappings:

| Previous SDK                      | New SDK                             |
| --------------------------------- | ----------------------------------- |
| `accountsGet`                     | `accounts.get`                      |
| `accountsBalanceGet`              | `accounts.getBalance`               |
| `authGet`                         | `auth.get`                          |
| `itemGet`                         | `item.get`                          |
| `itemPublicTokenExchange`         | `item.exchangePublicToken`          |
| `linkTokenCreate`                 | `link.createToken`                  |
| `sandboxPublicTokenCreate`        | `sandbox.createPublicToken`         |
| `transactionsSync`                | `transactions.sync`                 |
| `transactionsGet`                 | `transactions.get`                  |

Some products are grouped one level deeper, such as `client.transfer.authorization.create` for `/transfer/authorization/create` and `client.transfer.event.sync` for `/transfer/event/sync`. Their request and response types are nested the same way, for example `Plaid.transfer.TransferAuthorizationCreateRequest`.

To find a method, use your editor's autocomplete on the product, for example `client.paymentInitiation.`. The `reference.md` file at the root of the SDK repository lists every method grouped by product, with the same description as the API reference.

### Types

The SDK exports all request and response types under the `Plaid` namespace:

```typescript
import { Plaid } from "plaid";

const request: Plaid.AccountsGetRequest = { access_token: accessToken };
```

Enum members keep the same names, but are now const objects rather than TypeScript `enum`s. `Plaid.Products.Auth` works as before. If you used an enum member as a *type* rather than a value, use `typeof` instead:

```typescript
// previous SDK
function f(p: Products) {}

// new SDK
function f(p: Plaid.Products) {}            // the union of values
function g(p: typeof Plaid.Products.Auth) {} // one specific member
```

### Status codes and headers

Calls return the response body, not an HTTP response. To read the status code or headers, append `.withRawResponse()`:

```typescript
const { data, rawResponse } = await client.accounts
    .get({ access_token: accessToken })
    .withRawResponse();

console.log(rawResponse.headers.get("content-type"));
const accounts = data.accounts;
```

### Downloads

Endpoints that return a file, such as `/asset_report/pdf/get`, return a `BinaryResponse` that lets you choose how to consume the body:

```typescript
import * as fs from "node:fs";

const pdf = await client.assetReport.getPdf({ asset_report_token: assetReportToken });
const buf = await pdf.arrayBuffer();
fs.writeFileSync("asset_report.pdf", Buffer.from(buf));
```

Remove any `{ responseType: "arraybuffer" }` option from these calls; the new SDK does not use it. To send the file as Base64, use `Buffer.from(await pdf.arrayBuffer()).toString("base64")`.

`.stream()`, `.blob()`, and `.bytes()` are also available. You can only consume the body once; check `pdf.bodyUsed` if you need to know whether it has been read.

> [!NOTE]
> `.bytes()` is optional and is not present on every Fetch implementation. Prefer `.arrayBuffer()` unless you have confirmed your runtime supports `.bytes()`.

## Update pagination logic

In the new SDK, many paginated list endpoints return a page that is async iterable, so you no longer need to write your own pagination loop.

This includes `/transactions/get` and `/investments/transactions/get`. Their calls return a page rather than the response body, so code that read `response.transactions` should iterate the page or read `page.response.transactions`. A page has no `.withRawResponse()`; use `page.rawResponse` instead.

**Previous SDK**

```typescript
let cursor: string | undefined = undefined;
for (;;) {
    const resp = await plaidClient.watchlistScreeningIndividualList({
        watchlist_program_id: programId,
        cursor,
    });
    for (const s of resp.data.watchlist_screenings) {
        process(s);
    }
    if (!resp.data.next_cursor) break;
    cursor = resp.data.next_cursor;
}
```

**New SDK**

```typescript
const page = await client.watchlistScreeningIndividual.list({
    watchlist_program_id: programId,
});

for await (const screening of page) {
    process(screening);
}
```

To paginate manually, use `hasNextPage()` and `getNextPage()`, and read `page.response` for the full response body including fields outside the list:

```typescript
let page = await client.item.listActivity();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}
const full = page.response;
```

The following endpoints do not provide an iterator, so continue to use your existing pagination loop for them:

- `/transactions/sync` and `/processor/transactions/sync`, which return three arrays (`added`, `modified`, and `removed`) rather than a single list
- `/transfer/event/sync` and `/bank_transfer/event/sync`, which paginate by event ID (`after_id`)
- `/cashflow_report/get` and `/cashflow_report/transactions/get`
- `/beta/webhook_events/list`

To determine whether an endpoint provides an iterator, check its return type. Endpoints that return `Promise<core.Page<...>>` provide one.

The cursor field differs by endpoint — `/item/activity/list` returns `cursor`, while others return `next_cursor`. The iterator reads the correct field for each endpoint, so this only matters if you are writing the loop yourself.

### Sync transactions

To paginate `/transactions/sync`, keep your existing cursor loop. Only the call style has changed:

**Previous SDK**

```typescript
let cursor: string | undefined = undefined;
for (;;) {
    const tx = await plaidClient.transactionsSync({ access_token: accessToken, cursor });
    process(tx.data.added, tx.data.modified, tx.data.removed);
    if (!tx.data.has_more) break;
    cursor = tx.data.next_cursor;
}
```

**New SDK**

```typescript
let cursor: string | undefined = undefined;
for (;;) {
    const tx = await client.transactions.sync({ access_token: accessToken, cursor });
    process(tx.added, tx.modified, tx.removed);
    if (!tx.has_more) break;
    cursor = tx.next_cursor;
}
```

## Update error handling

The previous SDK throws an Axios error, from which you read `error.response.data`. The new SDK throws typed errors that you can match with `instanceof`. Each error's `body` property contains the parsed Plaid error, so you can read its fields directly. For example, `ITEM_LOGIN_REQUIRED` has a 400 status, so the new SDK throws a `BadRequestError`. To detect it and send the user through [update mode](https://plaid.com/docs/link/update-mode/):

**Previous SDK**

```typescript
try {
    await plaidClient.accountsGet({ access_token: accessToken });
} catch (error: any) {
    if (error.response?.data?.error_code === "ITEM_LOGIN_REQUIRED") {
        // send the user through update mode
    }
    throw error;
}
```

**New SDK**

```typescript
import { PlaidError, Plaid } from "plaid";

try {
    await client.accounts.get({ access_token: accessToken });
} catch (err) {
    if (err instanceof Plaid.BadRequestError) {
        if (err.body?.error_code === "ITEM_LOGIN_REQUIRED") {
            // send the user through update mode
        }
    } else if (err instanceof Plaid.UnauthorizedError) {
        // re-authenticate
    } else if (err instanceof Plaid.TooManyRequestsError) {
        // back off and retry
    } else if (err instanceof PlaidError) {
        console.log(err.statusCode, err.message, err.body);
    }
    throw err;
}
```

The new SDK provides the following error types, all of which extend `PlaidError`:

- `Plaid.BadRequestError` (400)
- `Plaid.UnauthorizedError` (401)
- `Plaid.TooManyRequestsError` (429)
- `Plaid.InternalServerError` (500)
Errors with any other status code, such as 403, 404 or 503, are thrown as `PlaidError` itself.

Each error includes `statusCode`, `body`, and `rawResponse`. If you set `timeoutInSeconds` on the client or a request, a request that exceeds it throws `PlaidTimeoutError`, which also extends `PlaidError`. Like the previous SDK, the new SDK sets no timeout by default.

To handle all Plaid errors the same way regardless of status code, match on `PlaidError` alone:

**Handle any Plaid error**

```typescript
if (err instanceof PlaidError) {
    const body = err.body as Plaid.PlaidError | undefined;
    console.log(err.statusCode, body?.error_type, body?.error_code);
}
```

> [!WARNING]
> The previous SDK's error object carries the full Axios config, including your `PLAID-SECRET` header, which is why its README warns against logging the whole error. The new SDK's errors expose only `statusCode`, `body`, and `rawResponse`, so logging the error no longer risks leaking credentials.

## Test your integration

After migrating each endpoint, run your project's tests. Some changes do not cause type errors, so confirm the following:

- Every client is created with an explicit environment. A client created without one sends requests to Production.
- Every import of the previous SDK uses `plaid/legacy`, not a file path such as `plaid/dist/api`.
- Any code that read `response.status` or `response.headers` now uses [`withRawResponse()`](#status-codes-and-headers).

## Remove the legacy import

After you have migrated every call, remove the `plaid/legacy` import and the previous SDK client.

## Getting help

For help with the Node SDK, open an issue in the [Plaid Node SDK repository](https://github.com/plaid/plaid-node/issues).
