# Reference
## AssetReport
<details><summary><code>client.assetReport.<a href="/src/api/resources/assetReport/client/Client.ts">create</a>({ ...params }) -> Plaid.AssetReportCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/asset_report/create` endpoint initiates the process of creating an Asset Report, which can then be retrieved by passing the `asset_report_token` return value to the `/asset_report/get` or `/asset_report/pdf/get` endpoints.

The Asset Report takes some time to be created and is not available immediately after calling `/asset_report/create`. The exact amount of time to create the report will vary depending on how many days of history are requested and will typically range from a few seconds to about one minute. When the Asset Report is ready to be retrieved using `/asset_report/get` or `/asset_report/pdf/get`, Plaid will fire a `PRODUCT_READY` webhook. For full details of the webhook schema, see [Asset Report webhooks](https://plaid.com/docs/api/products/assets/#webhooks).

The `/asset_report/create` endpoint creates an Asset Report at a moment in time. Asset Reports are immutable. To get an updated Asset Report, use the `/asset_report/refresh` endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assetReport.create({
    days_requested: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assetReport.<a href="/src/api/resources/assetReport/client/Client.ts">get</a>({ ...params }) -> Plaid.AssetReportGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/asset_report/get` endpoint retrieves the Asset Report in JSON format. Before calling `/asset_report/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

By default, an Asset Report includes transaction descriptions as returned by the bank, as opposed to parsed and categorized by Plaid. You can also receive cleaned and categorized transactions, as well as additional insights like merchant name or location information. We call this an Asset Report with Insights. An Asset Report with Insights provides transaction category, location, and merchant information in addition to the transaction strings provided in a standard Asset Report. To retrieve an Asset Report with Insights, call the `/asset_report/get` endpoint with `include_insights` set to `true`.

For latency-sensitive applications, you can optionally call `/asset_report/create` with `options.add_ons` set to `["fast_assets"]`. This will cause Plaid to create two versions of the Asset Report: one with only current and available balance and identity information, and then later on the complete Asset Report. You will receive separate webhooks for each version of the Asset Report.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assetReport.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assetReport.<a href="/src/api/resources/assetReport/client/Client.ts">getPdf</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/asset_report/pdf/get` endpoint retrieves the Asset Report in PDF format. Before calling `/asset_report/pdf/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

The response to `/asset_report/pdf/get` is the PDF binary data. The `request_id`  is returned in the `Plaid-Request-ID` header.

[View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assetReport.getPdf({
    asset_report_token: "asset_report_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportPdfGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assetReport.<a href="/src/api/resources/assetReport/client/Client.ts">refresh</a>({ ...params }) -> Plaid.AssetReportRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

An Asset Report is an immutable snapshot of a user's assets. In order to "refresh" an Asset Report you created previously, you can use the `/asset_report/refresh` endpoint to create a new Asset Report based on the old one, but with the most recent data available.

The new Asset Report will contain the same Items as the original Report, as well as the same filters applied by any call to `/asset_report/filter`. By default, the new Asset Report will also use the same parameters you submitted with your original `/asset_report/create` request, but the original `days_requested` value and the values of any parameters in the `options` object can be overridden with new values. To change these arguments, simply supply new values for them in your request to `/asset_report/refresh`. Submit an empty string ("") for any previously-populated fields you would like set as empty.

Note: Asset Report refresh is not supported in Canada.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assetReport.refresh({
    asset_report_token: "asset_report_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assetReport.<a href="/src/api/resources/assetReport/client/Client.ts">filter</a>({ ...params }) -> Plaid.AssetReportFilterResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

By default, an Asset Report will contain all of the accounts on a given Item. In some cases, you may not want the Asset Report to contain all accounts. For example, you might have the end user choose which accounts are relevant in Link using the Account Select view, which you can enable in the dashboard. Or, you might always exclude certain account types or subtypes, which you can identify by using the `/accounts/get` endpoint. To narrow an Asset Report to only a subset of accounts, use the `/asset_report/filter` endpoint.

To exclude certain Accounts from an Asset Report, first use the `/asset_report/create` endpoint to create the report, then send the `asset_report_token` along with a list of `account_ids` to exclude to the `/asset_report/filter` endpoint, to create a new Asset Report which contains only a subset of the original Asset Report's data.

Because Asset Reports are immutable, calling `/asset_report/filter` does not alter the original Asset Report in any way; rather, `/asset_report/filter` creates a new Asset Report with a new token and id. Asset Reports created via `/asset_report/filter` do not contain new Asset data, and are not billed.

Plaid will fire a [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook once generation of the filtered Asset Report has completed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assetReport.filter({
    asset_report_token: "asset_report_token",
    account_ids_to_exclude: ["account_ids_to_exclude"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportFilterRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assetReport.<a href="/src/api/resources/assetReport/client/Client.ts">remove</a>({ ...params }) -> Plaid.AssetReportRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/item/remove` endpoint allows you to invalidate an `access_token`, meaning you will not be able to create new Asset Reports with it. Removing an Item does not affect any Asset Reports or Audit Copies you have already created, which will remain accessible until you remove them specifically.

The `/asset_report/remove` endpoint allows you to remove access to an Asset Report. Removing an Asset Report invalidates its `asset_report_token`, meaning you will no longer be able to use it to access Report data or create new Audit Copies. Removing an Asset Report does not affect the underlying Items, but does invalidate any `audit_copy_tokens` associated with the Asset Report.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assetReport.remove({
    asset_report_token: "asset_report_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assetReport.<a href="/src/api/resources/assetReport/client/Client.ts">createAuditCopy</a>({ ...params }) -> Plaid.AssetReportAuditCopyCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Plaid can provide an Audit Copy of any Asset Report directly to a participating third party on your behalf. For example, Plaid can supply an Audit Copy directly to the GSEs on your behalf if you participate in Fannie Mae's Day 1 Certainty™ program or utilize Freddie Mac's Loan Product Advisor® (LPA®) Asset and Income Modeler (AIM). An Audit Copy contains the same underlying data as the Asset Report.

To grant access to an Audit Copy, use the `/asset_report/audit_copy/create` endpoint to create an `audit_copy_token` and then pass that token to the third party who needs access. Each third party has its own `auditor_id`, for example `fannie_mae`. You'll need to create a separate Audit Copy for each third party to whom you want to grant access to the Report.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assetReport.createAuditCopy({
    asset_report_token: "asset_report_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportAuditCopyCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assetReport.<a href="/src/api/resources/assetReport/client/Client.ts">getAuditCopy</a>({ ...params }) -> Plaid.AssetReportGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/asset_report/audit_copy/get` allows auditors to get a copy of an Asset Report that was previously shared via the `/asset_report/audit_copy/create` endpoint.  The caller of `/asset_report/audit_copy/create` must provide the `audit_copy_token` to the auditor.  This token can then be used to call `/asset_report/audit_copy/get`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assetReport.getAuditCopy({
    audit_copy_token: "audit_copy_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportAuditCopyGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assetReport.<a href="/src/api/resources/assetReport/client/Client.ts">getAuditCopyPdf</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/asset_report/audit_copy/pdf/get` endpoint retrieves an Asset Report Audit Copy in PDF format. The caller must provide the `audit_copy_token` that was shared via the `/asset_report/audit_copy/create` endpoint.

The response to `/asset_report/audit_copy/pdf/get` is the PDF binary data. The `request_id` is returned in the `Plaid-Request-ID` header.

[View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assetReport.getAuditCopyPdf({
    audit_copy_token: "audit_copy_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportAuditCopyPdfGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assetReport.<a href="/src/api/resources/assetReport/client/Client.ts">removeAuditCopy</a>({ ...params }) -> Plaid.AssetReportAuditCopyRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/asset_report/audit_copy/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Asset Report, the Asset Report itself and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assetReport.removeAuditCopy({
    audit_copy_token: "audit_copy_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportAuditCopyRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssetReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## MonitoringInsights
<details><summary><code>client.monitoringInsights.<a href="/src/api/resources/monitoringInsights/client/Client.ts">subscribe</a>({ ...params }) -> Plaid.CraMonitoringInsightsSubscribeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to subscribe to insights for a user's linked CRA Item, which are updated between one and four times per day (best-effort). Only one Item per user may be subscribed. This endpoint is part of the legacy Cash Flow Updates product and is available only to integrations already using it; other integrations should use `/cra/servicing/subscription/create` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.monitoringInsights.subscribe({
    webhook: "webhook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraMonitoringInsightsSubscribeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MonitoringInsightsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.monitoringInsights.<a href="/src/api/resources/monitoringInsights/client/Client.ts">unsubscribe</a>({ ...params }) -> Plaid.CraMonitoringInsightsUnsubscribeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to remove a subscription created by `/cra/monitoring_insights/subscribe`. This endpoint is part of the legacy Cash Flow Updates product and is available only to integrations already using it; other integrations should use `/cra/servicing/subscription/delete` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.monitoringInsights.unsubscribe({
    subscription_id: "subscription_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraMonitoringInsightsUnsubscribeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MonitoringInsightsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.monitoringInsights.<a href="/src/api/resources/monitoringInsights/client/Client.ts">get</a>({ ...params }) -> Plaid.CraMonitoringInsightsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to retrieve a Cash Flow Updates report by passing in the `user_id` referred to in the webhook you received. This endpoint is part of the legacy Cash Flow Updates product and is available only to integrations already using it. CRA Servicing has no direct equivalent; other integrations should handle the `CRA_REPORT_UPDATED` webhook and pass its `report_id` to the relevant product `/get` endpoint, such as `/cra/check_report/base_report/get`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.monitoringInsights.get({
    consumer_report_permissible_purpose: "ACCOUNT_REVIEW_CREDIT"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraMonitoringInsightsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MonitoringInsightsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Credit
<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">updateAuditCopyToken</a>({ ...params }) -> Plaid.CreditAuditCopyTokenUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/credit/audit_copy_token/update` endpoint updates an existing Audit Copy Token by adding the report tokens in the `report_tokens` field to the `audit_copy_token`. If the Audit Copy Token already contains a report of a certain type, it will be replaced with the token provided in the `report_tokens` field.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.updateAuditCopyToken({
    audit_copy_token: "audit_copy_token",
    report_tokens: ["report_tokens"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditAuditCopyTokenUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getSessions</a>({ ...params }) -> Plaid.CreditSessionsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can be used for your end users after they complete the Link flow. This endpoint returns a list of Link sessions that your user completed, where each session includes the results from the Link flow.

These results include details about the Item that was created and some product related metadata (showing, for example, whether the user finished the bank income verification step).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getSessions();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditSessionsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">createAuditCopyToken</a>({ ...params }) -> Plaid.CreditAuditCopyTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Plaid can create an Audit Copy token of an Asset Report and/or Income Report to share with a participating Government-Sponsored Enterprise (GSE) if you participate in Fannie Mae's Day 1 Certainty™ program or utilize Freddie Mac's Loan Product Advisor® (LPA®) Asset and Income Modeler (AIM). An Audit Copy token contains the same underlying data as the Asset Report and/or Income Report (result of `/credit/payroll_income/get`).

Use the `/credit/audit_copy_token/create` endpoint to create an `audit_copy_token` and then pass that token to the GSE who needs access.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.createAuditCopyToken({
    report_tokens: ["report_tokens"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditAuditCopyTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">removeAuditCopyToken</a>({ ...params }) -> Plaid.CreditAuditCopyTokenRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/credit/audit_copy_token/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Report data and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.removeAuditCopyToken({
    audit_copy_token: "audit_copy_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditAuditCopyTokenRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getAssetReportFreddieMac</a>({ ...params }) -> Plaid.AssetReportFreddieGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/credit/asset_report/freddie_mac/get` endpoint retrieves the Asset Report in Freddie Mac's JSON format.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getAssetReportFreddieMac({
    audit_copy_token: "audit_copy_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AssetReportFreddieGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getFreddieMacReports</a>({ ...params }) -> Plaid.CreditFreddieMacReportsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/credit/freddie_mac/reports/get` endpoint retrieves the Verification of Assets and Verification of Employment reports.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getFreddieMacReports({
    audit_copy_token: "audit_copy_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditFreddieMacReportsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getBankEmployment</a>({ ...params }) -> Plaid.CreditBankEmploymentGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/beta/credit/v1/bank_employment/get` returns the employment report(s) derived from bank transaction data for a specified user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getBankEmployment({
    user_token: "user_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditBankEmploymentGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getBankIncome</a>({ ...params }) -> Plaid.CreditBankIncomeGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/bank_income/get` returns the bank income report(s) for a specified user. A single report corresponds to all institutions linked in a single Link session. To include multiple institutions in a single report, use [Multi-Item Link](https://plaid.com/docs/link/multi-item-link). To return older reports, use the `options.count` field.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getBankIncome();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditBankIncomeGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getBankIncomePdf</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/bank_income/pdf/get` returns the most recent bank income report for a specified user in PDF format.  A single report corresponds to all institutions linked in a single Link session. To include multiple institutions in a single report, use [Multi-Item Link](https://plaid.com/docs/link/multi-item-link).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getBankIncomePdf();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditBankIncomePdfGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">refreshBankIncome</a>({ ...params }) -> Plaid.CreditBankIncomeRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/bank_income/refresh` is deprecated. The backend implementation was removed (returns an `Unimplemented` error at runtime), and the endpoint is no longer part of the documented API surface. To refresh Bank Income data for an existing user, send the user through Link's update mode so they can confirm their income sources. For a fully backend refresh, migrate to CRA Income Insights and call `/cra/check_report/create`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.refreshBankIncome({
    user_token: "user_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditBankIncomeRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">updateBankIncomeWebhook</a>({ ...params }) -> Plaid.CreditBankIncomeWebhookUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/bank_income/webhook/update` is deprecated and no longer available; requests return an `INVALID_REQUEST` error with code `NOT_FOUND`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.updateBankIncomeWebhook({
    user_token: "user_token",
    enable_webhooks: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditBankIncomeWebhookUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">updatePayrollIncomeParsingConfig</a>({ ...params }) -> Plaid.CreditPayrollIncomeParsingConfigUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/payroll_income/parsing_config/update` updates the parsing configuration for a document income verification.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.updatePayrollIncomeParsingConfig({
    parsing_config: ["ocr"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditPayrollIncomeParsingConfigUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getBankStatementsUploads</a>({ ...params }) -> Plaid.CreditBankStatementsUploadsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/bank_statements/uploads/get` returns parsed data from bank statements uploaded by users as part of the Document Income flow. If your account is not enabled for Document Parsing, contact your account manager to request access.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getBankStatementsUploads();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditBankStatementsUploadsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getPayrollIncome</a>({ ...params }) -> Plaid.CreditPayrollIncomeGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint gets payroll income information for a specific user, either as a result of the user connecting to their payroll provider or uploading a pay related document.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getPayrollIncome();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditPayrollIncomeGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getPayrollIncomeRiskSignals</a>({ ...params }) -> Plaid.CreditPayrollIncomeRiskSignalsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/payroll_income/risk_signals/get` can be used as part of the Document Income flow to assess a user-uploaded document for signs of potential fraud or tampering. It returns a risk score for each uploaded document that indicates the likelihood of the document being fraudulent, in addition to details on the individual risk signals contributing to the score.

To trigger risk signal generation for an Item, call `/link/token/create` with `parsing_config` set to include `risk_signals`, or call `/credit/payroll_income/parsing_config/update`. Once risk signal generation has been triggered, `/credit/payroll_income/risk_signals/get` can be called at any time after the `INCOME_VERIFICATION_RISK_SIGNALS` webhook has been fired.

`/credit/payroll_income/risk_signals/get` is offered as an add-on to Document Income and is billed separately. To request access to this endpoint, submit a product access request or contact your Plaid account manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getPayrollIncomeRiskSignals();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditPayrollIncomeRiskSignalsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">precheckPayrollIncome</a>({ ...params }) -> Plaid.CreditPayrollIncomePrecheckResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/payroll_income/precheck` is an optional endpoint that can be called before initializing a Link session for income verification. It evaluates whether a given user is supportable by digital income verification. If the user is eligible for digital verification, that information will be associated with the user token, and in this way will generate a Link UI optimized for the end user and their specific employer. If the user cannot be confirmed as eligible, the user can still use the income verification flow, but they may be required to manually upload a paystub to verify their income.

While all request fields are optional, providing `employer` data will increase the chance of receiving a useful result.

When testing in Sandbox, you can control the results by providing special test values in the `access_tokens` field. `access_good` and `access_bad` will result in `HIGH` and `LOW` confidence values, respectively. Any other valid Sandbox access token will result in `UNKNOWN` confidence; other strings return an `INVALID_ACCESS_TOKEN` error.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.precheckPayrollIncome();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditPayrollIncomePrecheckRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getEmployment</a>({ ...params }) -> Plaid.CreditEmploymentGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/employment/get` returns a list of items with employment information from a user's payroll provider that was verified by an end user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getEmployment();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditEmploymentGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">refreshPayrollIncome</a>({ ...params }) -> Plaid.CreditPayrollIncomeRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/payroll_income/refresh` refreshes a given digital payroll income verification.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.refreshPayrollIncome();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditPayrollIncomeRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">createRelay</a>({ ...params }) -> Plaid.CreditRelayCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Plaid can share an Asset Report directly with a participating third party on your behalf. The shared Asset Report is the exact same Asset Report originally created in `/asset_report/create`.

To grant a third party access to an Asset Report, use the `/credit/relay/create` endpoint to create a `relay_token` and then pass that token to your third party. Each third party has its own `secondary_client_id`; for example, `ce5bd328dcd34123456`. You'll need to create a separate `relay_token` for each third party that needs access to the report on your behalf.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.createRelay({
    report_tokens: ["report_tokens"],
    secondary_client_id: "secondary_client_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditRelayCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getRelay</a>({ ...params }) -> Plaid.AssetReportGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/relay/get` allows third parties to receive a report that was shared with them, using a `relay_token` that was created by the report owner.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getRelay({
    relay_token: "relay_token",
    report_type: "asset"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditRelayGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">getRelayPdf</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/credit/relay/pdf/get` allows third parties to receive a PDF report that was shared with them, using a `relay_token` that was created by the report owner.

The `/credit/relay/pdf/get` endpoint retrieves the Asset Report in PDF format. Before calling `/credit/relay/pdf/get`, you must first create the Asset Report using `/credit/relay/create` and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

The response to `/credit/relay/pdf/get` is the PDF binary data. The `request_id` is returned in the `Plaid-Request-ID` header.

[View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.getRelayPdf({
    relay_token: "relay_token",
    report_type: "asset"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditRelayPdfGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">refreshRelay</a>({ ...params }) -> Plaid.CreditRelayRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/credit/relay/refresh` endpoint allows third parties to refresh a report that was relayed to them, using a `relay_token` that was created by the report owner. A new report will be created with the original report parameters, but with the most recent data available based on the `days_requested` value of the original report.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.refreshRelay({
    relay_token: "relay_token",
    report_type: "asset"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditRelayRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.credit.<a href="/src/api/resources/credit/client/Client.ts">removeRelay</a>({ ...params }) -> Plaid.CreditRelayRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/credit/relay/remove` endpoint allows you to invalidate a `relay_token`. The third party holding the token will no longer be able to access or refresh the reports which the `relay_token` gives access to. The original report, associated Items, and other relay tokens that provide access to the same report are not affected and will remain accessible after removing the given `relay_token`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.removeRelay({
    relay_token: "relay_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CreditRelayRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CheckReport
<details><summary><code>client.checkReport.<a href="/src/api/resources/checkReport/client/Client.ts">getIncomeInsights</a>({ ...params }) -> Plaid.CraCheckReportIncomeInsightsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to retrieve the Income Insights report for your user. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.

NOTE: The following schema was updated in April 2026 to reflect the response when the provided version is "II2". Please see [this document](https://docs.google.com/document/d/1kQkQ7FOgFaC4n-sUGUk74hoXZNY_L_nJeCuMe7Keip4/edit?tab=t.0#heading=h.rudamzinus2i) for guidance on migrating to II2 if you are currently using the II1 version, and [this section](https://docs.google.com/document/d/1kQkQ7FOgFaC4n-sUGUk74hoXZNY_L_nJeCuMe7Keip4/edit?tab=t.0#bookmark=id.tdcc2wpk0h60) for an example II1 response along with its [documentation](https://docs.google.com/document/d/1kQkQ7FOgFaC4n-sUGUk74hoXZNY_L_nJeCuMe7Keip4/edit?tab=t.36c85n2ircqk#heading=h.79dwr5c1iszl).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkReport.getIncomeInsights();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraCheckReportIncomeInsightsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkReport.<a href="/src/api/resources/checkReport/client/Client.ts">getBaseReport</a>({ ...params }) -> Plaid.CraCheckReportBaseReportGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to retrieve the Base Report for your user, allowing you to receive comprehensive bank account and cash flow data. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the base report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkReport.getBaseReport();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraCheckReportBaseReportGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkReport.<a href="/src/api/resources/checkReport/client/Client.ts">getPdf</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/check_report/pdf/get` retrieves the most recent Consumer Report in PDF format. The most recent Base Report for the user is always included. Use the `add_ons` field to also include the most recent Income Insights, Partner Insights or LendScore report in the PDF.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkReport.getPdf();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraCheckReportPdfGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkReport.<a href="/src/api/resources/checkReport/client/Client.ts">create</a>({ ...params }) -> Plaid.CraCheckReportCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use `/cra/check_report/create` to refresh data in an existing report. A Consumer Report will last for 24 hours before expiring; you should call any `/get` endpoints on the report before it expires. If a report expires, you can call `/cra/check_report/create` again to re-generate it and refresh the data in the report. The report is generated from all Items associated with the user, excluding [duplicate Items](https://plaid.com/docs/check/add-to-app/#duplicate-items) and Items that cannot supply data.

Each call to `/cra/check_report/create` creates a new, independent report. `/get` endpoints will retrieve the most recently created report for the requested user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkReport.create({
    webhook: "webhook",
    days_requested: 1,
    consumer_report_permissible_purpose: "ACCOUNT_REVIEW_CREDIT"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraCheckReportCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkReport.<a href="/src/api/resources/checkReport/client/Client.ts">getPartnerInsights</a>({ ...params }) -> Plaid.CraCheckReportPartnerInsightsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to retrieve the Partner Insights report for your user. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkReport.getPartnerInsights();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraCheckReportPartnerInsightsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkReport.<a href="/src/api/resources/checkReport/client/Client.ts">getCashflowInsights</a>({ ...params }) -> Plaid.CraCheckReportCashflowInsightsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to retrieve the Cashflow Insights report for your user. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkReport.getCashflowInsights();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraCheckReportCashflowInsightsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkReport.<a href="/src/api/resources/checkReport/client/Client.ts">getLendScore</a>({ ...params }) -> Plaid.CraCheckReportLendScoreGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to retrieve the LendScore report for your user. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkReport.getLendScore();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraCheckReportLendScoreGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkReport.<a href="/src/api/resources/checkReport/client/Client.ts">getNetworkInsights</a>({ ...params }) -> Plaid.CraCheckReportNetworkInsightsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to retrieve the Network Insights report for your user. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkReport.getNetworkInsights();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraCheckReportNetworkInsightsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkReport.<a href="/src/api/resources/checkReport/client/Client.ts">getVerification</a>({ ...params }) -> Plaid.CraCheckReportVerificationGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to retrieve home lending reports for a user. To obtain a VoA or Employment Refresh report, you need to make sure that `cra_base_report` is included in the `products` parameter when calling `/link/token/create` or `/cra/check_report/create`.

You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`.

If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkReport.getVerification({
    reports_requested: ["VOA"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraCheckReportVerificationGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkReport.<a href="/src/api/resources/checkReport/client/Client.ts">getVerificationPdf</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/cra/check_report/verification/pdf/get` endpoint retrieves the most recent Consumer Report in PDF format, specifically formatted for Home Lending verification use cases. Before calling this endpoint, ensure that you've created a VOA report through Link or the `/cra/check_report/create` endpoint, and have received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook.

The response to `/cra/check_report/verification/pdf/get` is the PDF binary data. The `request_id`  is returned in the `Plaid-Request-ID` header.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkReport.getVerificationPdf();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraCheckReportVerificationPdfGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Loans
<details><summary><code>client.loans.<a href="/src/api/resources/loans/client/Client.ts">registerApplications</a>({ ...params }) -> Plaid.CraLoansApplicationsRegisterResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/loans/applications/register` registers loan applications and decisions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loans.registerApplications({
    applications: [{
            user_token: "user_token",
            application_id: "application_id",
            type: "PERSONAL",
            decision: "APPROVED"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraLoansApplicationsRegisterRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LoansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.loans.<a href="/src/api/resources/loans/client/Client.ts">register</a>({ ...params }) -> Plaid.CraLoansRegisterResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/loans/register` registers a list of loans to their applicants.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loans.register({
    loans: [{
            user_token: "user_token",
            loan_id: "loan_id",
            type: "PERSONAL",
            payment_schedule: "DAILY",
            opened_date: "2023-01-15",
            opened_with_status: {
                status: "APPROVED",
                date: "2023-01-15"
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraLoansRegisterRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LoansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.loans.<a href="/src/api/resources/loans/client/Client.ts">update</a>({ ...params }) -> Plaid.CraLoansUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/loans/update` updates loan information such as the status and payment history.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loans.update({
    loans: [{}]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraLoansUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LoansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.loans.<a href="/src/api/resources/loans/client/Client.ts">unregister</a>({ ...params }) -> Plaid.CraLoanUnregisterResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/loans/unregister` indicates the loans have reached a final status and no further updates are expected.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.loans.unregister({
    loans: [{
            loan_id: "loan_id",
            closed_with_status: {
                status: "APPROVED",
                date: "2023-01-15"
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraLoansUnregisterRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LoansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CraReport
<details><summary><code>client.craReport.<a href="/src/api/resources/craReport/client/Client.ts">create</a>({ ...params }) -> Plaid.CraReportCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/report/create` generates a Consumer Report for a user. With `scope` set to `PLAID_NETWORK`, the report is generated from the Plaid Network view of the user's profile. With `CLIENT_USER`, the report is generated from only the Items the user linked to your client.

Each requested product is generated asynchronously. Use the returned `report_id` to retrieve the report once its products are ready.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.craReport.create({
    user_id: "user_id",
    products: [{
            product: "cra_base_report",
            version: "version"
        }],
    scope: "PLAID_NETWORK",
    decision_stage: "PREQUALIFICATION",
    consumer_report_permissible_purpose: "ACCOUNT_REVIEW_CREDIT"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraReportCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CraReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.craReport.<a href="/src/api/resources/craReport/client/Client.ts">get</a>({ ...params }) -> Plaid.CraReportGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/report/get` retrieves a Consumer Report for a user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.craReport.get({
    user_id: "user_id",
    products: [{
            product: "cra_qualify",
            version: "version"
        }],
    decision_stage: "PREQUALIFICATION",
    consumer_report_permissible_purpose: "ACCOUNT_REVIEW_CREDIT"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CraReportGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CraReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ConsumerReport
<details><summary><code>client.consumerReport.<a href="/src/api/resources/consumerReport/client/Client.ts">getPdf</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all existing CRB Bank Income and Base reports for the consumer in PDF format.

Response is PDF binary data. The `request_id` is returned in the `Plaid-Request-ID` header.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consumerReport.getPdf({
    user_token: "user_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ConsumerReportPdfGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConsumerReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## OAuth
<details><summary><code>client.oAuth.<a href="/src/api/resources/oAuth/client/Client.ts">token</a>({ ...params }) -> Plaid.OAuthTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/oauth/token` issues an access token and refresh token depending on the `grant_type` provided. This endpoint supports `Content-Type: application/x-www-form-urlencoded` as well as JSON. The fields for the form are equivalent to the fields for JSON and conform to the OAuth 2.0 specification.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.oAuth.token({
    grant_type: "refresh_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.OAuthTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OAuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.oAuth.<a href="/src/api/resources/oAuth/client/Client.ts">introspect</a>({ ...params }) -> Plaid.OAuthIntrospectResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/oauth/introspect` returns metadata about an access token or refresh token.

Note: This endpoint supports `Content-Type: application/x-www-form-urlencoded` as well as JSON. The fields for the form are equivalent to the fields for JSON and conform to the OAuth 2.0 specification.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.oAuth.introspect({
    token: "token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.OAuthIntrospectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OAuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.oAuth.<a href="/src/api/resources/oAuth/client/Client.ts">revoke</a>({ ...params }) -> Plaid.OAuthRevokeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/oauth/revoke` revokes an access or refresh token, preventing any further use. If a refresh token is revoked, all access and refresh tokens derived from it are also revoked, including exchanged tokens.

Note: This endpoint supports `Content-Type: application/x-www-form-urlencoded` as well as JSON. The fields for the form are equivalent to the fields for JSON and conform to the OAuth 2.0 specification.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.oAuth.revoke({
    token: "token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.OAuthRevokeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OAuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Statements
<details><summary><code>client.statements.<a href="/src/api/resources/statements/client/Client.ts">list</a>({ ...params }) -> Plaid.StatementsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/statements/list` endpoint retrieves a list of all statements associated with an Item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.statements.list({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.StatementsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.statements.<a href="/src/api/resources/statements/client/Client.ts">download</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/statements/download` endpoint retrieves a single statement PDF in binary format.  The response will contain a `Plaid-Content-Hash` header containing a SHA 256 checksum of the statement. This can be used to verify that the file being sent by Plaid is the same file that was downloaded to your system.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.statements.download({
    access_token: "access_token",
    statement_id: "statement_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.StatementsDownloadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.statements.<a href="/src/api/resources/statements/client/Client.ts">refresh</a>({ ...params }) -> Plaid.StatementsRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/statements/refresh` initiates an on-demand extraction to fetch the statements for the provided dates.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.statements.refresh({
    access_token: "access_token",
    start_date: "2023-01-15",
    end_date: "2023-01-15"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.StatementsRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Consent
<details><summary><code>client.consent.<a href="/src/api/resources/consent/client/Client.ts">getEvents</a>({ ...params }) -> Plaid.ConsentEventsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List a historical log of Item consent events. Consent logs are only available for events occurring on or after November 7, 2024. Extremely recent events (occurring within the past 12 hours) may not be available via this endpoint. Up to three years of consent logs will be available via the endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consent.getEvents({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ConsentEventsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConsentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Item
<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">listActivity</a>({ ...params }) -> core.Page&lt;Plaid.Activity, Plaid.ItemActivityListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List a historical log of user consent events
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.item.listActivity();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.item.listActivity();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemActivityListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">listApplications</a>({ ...params }) -> Plaid.ItemApplicationListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List a user's connected applications
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.listApplications();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemApplicationListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">unlinkApplication</a>({ ...params }) -> Plaid.ItemApplicationUnlinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlink a user's connected application. On an unlink request, Plaid will immediately revoke the Application's access to the User's data.  The User will have to redo the OAuth authentication process in order to restore functionality.

This endpoint only removes ongoing data access permissions, therefore the User will need to reach out to the Application itself in order to disable and delete their account and delete any data that the Application already received (if the Application does not do so by default).

This endpoint should be called in real time as the User is unlinking an Application, and should not be batched in order to ensure that the change is reflected as soon as possible.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.unlinkApplication({
    access_token: "access_token",
    application_id: "application_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemApplicationUnlinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">updateApplicationScopes</a>({ ...params }) -> Plaid.ItemApplicationScopesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enable consumers to update product access on selected accounts for an application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.updateApplicationScopes({
    access_token: "access_token",
    application_id: "application_id",
    scopes: {},
    context: "ENROLLMENT"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemApplicationScopesUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">get</a>({ ...params }) -> Plaid.ItemGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns information about the status of an Item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.get({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">remove</a>({ ...params }) -> Plaid.ItemRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/item/remove` endpoint allows you to remove an Item. Once removed, the `access_token`, as well as any processor tokens or bank account tokens associated with the Item, is no longer valid and cannot be used to access any data that was associated with the Item.

Calling `/item/remove` is a recommended best practice when offboarding users or if a user chooses to disconnect an account linked via Plaid. For subscription products, such as Transactions, Liabilities, and Investments, calling `/item/remove` is required to end subscription billing for the Item, unless the end user revoked permission (e.g. via [https://my.plaid.com/](https://my.plaid.com/)). For more details, see [Subscription fee model](https://plaid.com/docs/account/billing/#subscription-fee).

On a Trial plan, calling `/item/remove` does not impact the number of remaining Trial Items (bank connections) you have available.

Removing an Item does not affect any Asset Reports or Audit Copies you have already created, which will remain accessible until you remove access to them specifically using the `/asset_report/remove` endpoint.

Also note that for certain OAuth-based institutions, an Item removed via `/item/remove` may still show as an active connection in the institution's OAuth permission manager.

API versions 2019-05-29 and earlier return a `removed` boolean as part of the response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.remove({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">terminateProducts</a>({ ...params }) -> Plaid.ItemProductsTerminateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/item/products/terminate` endpoint allows you to terminate an Item. Once terminated, the `access_token` associated with the Item is no longer valid, billing for the Item's products is ended, and relevant webhooks are fired.

`/item/products/terminate` is the recommended way to offboard users or disconnect accounts linked via Plaid.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.terminateProducts({
    access_token: "access_token",
    reason_code: "FRAUD_FIRST_PARTY"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemProductsTerminateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">updateWebhook</a>({ ...params }) -> Plaid.ItemWebhookUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The POST `/item/webhook/update` allows you to update the webhook URL associated with an Item. This request triggers a [`WEBHOOK_UPDATE_ACKNOWLEDGED`](https://plaid.com/docs/api/items/#webhook_update_acknowledged) webhook to the newly specified webhook URL.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.updateWebhook({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemWebhookUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">invalidateAccessToken</a>({ ...params }) -> Plaid.ItemAccessTokenInvalidateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

By default, the `access_token` associated with an Item does not expire and should be stored in a persistent, secure manner.

You can use the `/item/access_token/invalidate` endpoint to rotate the `access_token` associated with an Item. The endpoint returns a new `access_token` and immediately invalidates the previous `access_token`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.invalidateAccessToken({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemAccessTokenInvalidateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">exchangePublicToken</a>({ ...params }) -> Plaid.ItemPublicTokenExchangeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange a Link `public_token` for an API `access_token`. Link hands off the `public_token` client-side via the `onSuccess` callback once a user has successfully created an Item. The `public_token` is ephemeral and expires after 30 minutes. An `access_token` does not expire, but can be revoked by calling `/item/remove`.

The response also includes an `item_id` that should be stored with the `access_token`. The `item_id` is used to identify an Item in a webhook. The `item_id` can also be retrieved by making an `/item/get` request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.exchangePublicToken({
    public_token: "public_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemPublicTokenExchangeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">createPublicToken</a>({ ...params }) -> Plaid.ItemPublicTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Note: As of July 2020, the `/item/public_token/create` endpoint is deprecated. Instead, use `/link/token/create` with an `access_token` to create a Link token for use with [update mode](https://plaid.com/docs/link/update-mode).

If you need your user to take action to restore or resolve an error associated with an Item, generate a public token with the `/item/public_token/create` endpoint and then initialize Link with that `public_token`.

A `public_token` is one-time use and expires after 30 minutes. You use a `public_token` to initialize Link in [update mode](https://plaid.com/docs/link/update-mode) for a particular Item. You can generate a `public_token` for an Item even if you did not use Link to create the Item originally.

The `/item/public_token/create` endpoint is **not** used to create your initial `public_token`. If you have not already received an `access_token` for a specific Item, use Link to obtain your `public_token` instead. See the [Quickstart](https://plaid.com/docs/quickstart) for more information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.createPublicToken({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemPublicTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.item.<a href="/src/api/resources/item/client/Client.ts">import</a>({ ...params }) -> Plaid.ItemImportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/item/import` creates an Item for one of your customers and returns an `access_token`, which the other Permissions Manager endpoints take in place of a customer identifier. You supply your own identifier for the customer as `user_auth.user_id`.

The endpoint is idempotent and the `access_token` it returns is long-lived: repeated calls for the same `user_auth.user_id` return the same token.

Upon creating an Item via `/item/import`, Plaid will automatically begin an extraction of that Item through the data provider API endpoints you have already integrated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.item.import({
    user_auth: {
        user_id: "user_id"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ItemImportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Application
<details><summary><code>client.application.<a href="/src/api/resources/application/client/Client.ts">get</a>({ ...params }) -> Plaid.ApplicationGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Allows financial institutions to retrieve information about Plaid clients for the purpose of building control-tower experiences
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.application.get({
    application_id: "application_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ApplicationGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Profile
<details><summary><code>client.profile.<a href="/src/api/resources/profile/client/Client.ts">getNetworkStatus</a>({ ...params }) -> Plaid.ProfileNetworkStatusGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/profile/network_status/get` endpoint can be used to check whether Plaid has a matching profile for the user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profile.getNetworkStatus({
    user: {
        phone_number: "phone_number"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProfileNetworkStatusGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProfileClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Network
<details><summary><code>client.network.<a href="/src/api/resources/network/client/Client.ts">getStatus</a>({ ...params }) -> Plaid.NetworkStatusGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/network/status/get` endpoint can be used to check whether Plaid has a matching profile for the user.
This is useful for determining if a user is eligible for a streamlined experience, such as Layer. To access this endpoint, contact your Plaid account manager.

Note: it is strongly recommended to check for Layer eligibility in the frontend. `/network/status/get` should only be used for checking Layer eligibility if a frontend check is not possible for your use case.
For instructions on performing a frontend eligibility check, see the [Layer documentation](https://plaid.com/docs/layer/#integration-overview).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.network.getStatus({
    user: {
        phone_number: "phone_number"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.NetworkStatusGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NetworkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Auth
<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">get</a>({ ...params }) -> Plaid.AuthGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/auth/get` endpoint returns the bank account and bank identification numbers (such as routing numbers, for US accounts) associated with an Item's checking, savings, and cash management accounts, along with high-level account data and balances when available.

Versioning note: In API version 2017-03-08, the schema of the `numbers` object returned by this endpoint is substantially different. For details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2018-05-22).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.get({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AuthGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">verify</a>({ ...params }) -> Plaid.AuthVerifyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/auth/verify` endpoint verifies bank account and routing numbers and (optionally) account owner names against Plaid's database via [Database Auth](https://plaid.com/docs/auth/coverage/database-auth/). It can be used to verify account numbers that were not collected via the Plaid Link flow.

This endpoint is currently in Early Availability; contact sales or your Plaid account manager to request access.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.verify({
    numbers: {
        ach: {
            account: "account",
            routing: "routing"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AuthVerifyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transactions
<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">get</a>({ ...params }) -> core.Page&lt;Plaid.Transaction, Plaid.TransactionsGetResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Note: All new implementations are encouraged to use `/transactions/sync` rather than `/transactions/get`. `/transactions/sync` provides the same functionality as `/transactions/get` and improves developer ease-of-use for handling transactions updates.
The `/transactions/get` endpoint allows developers to receive user-authorized transaction data for credit, depository, and loan-type accounts (coverage may be limited). For transaction history from investment accounts, use the [Investments endpoint](https://plaid.com/docs/api/products/investments/) instead. Transaction data is standardized across financial institutions, and in many cases transactions are linked to a clean name, entity type, location, and category. Similarly, account data is standardized and returned with a clean name, number, balance, and other meta information where available.
Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.  Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/transactions/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
Due to the potentially large number of transactions associated with an Item, results are paginated. Manipulate the `count` and `offset` parameters in conjunction with the `total_transactions` response body field to fetch all available transactions.
Data returned by `/transactions/get` will be the data available for the Item as of the most recent successful check for new transactions. Plaid typically checks for new data multiple times a day, but these checks may occur less frequently, such as once a day, depending on the institution. To find out when the Item was last updated, use the [Item Debugger](https://plaid.com/docs/account/activity/#troubleshooting-with-item-debugger) or call `/item/get`; the `item.status.transactions.last_successful_update` field will show the timestamp of the most recent successful update. To force Plaid to check for new transactions, you can use the `/transactions/refresh` endpoint.


Note that data may not be immediately available to `/transactions/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `transactions`, or upon the first call to `/transactions/get`, if it wasn't. To be alerted when transaction data is ready to be fetched, listen for the [`INITIAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#initial_update) and [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhooks. If no transaction history is ready when `/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transactions.get({
    access_token: "access_token",
    start_date: "2023-01-15",
    end_date: "2023-01-15"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transactions.get({
    access_token: "access_token",
    start_date: "2023-01-15",
    end_date: "2023-01-15"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransactionsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">refresh</a>({ ...params }) -> Plaid.TransactionsRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/transactions/refresh` is an optional endpoint that initiates an on-demand extraction to fetch the newest transactions for an Item. The on-demand extraction takes place in addition to the periodic extractions that automatically occur one or more times per day for any Transactions-enabled Item. The Item must already have Transactions added as a product in order to call `/transactions/refresh`.

If changes to transactions are discovered after calling `/transactions/refresh`, Plaid will fire a webhook: for `/transactions/sync` users, [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) will be fired if there are any transactions updated, added, or removed. For users of both `/transactions/sync` and `/transactions/get`, [`TRANSACTIONS_REMOVED`](https://plaid.com/docs/api/products/transactions/#transactions_removed) will be fired if any removed transactions are detected, and [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/transactions/#default_update) will be fired if any new transactions are detected. New transactions can be fetched by calling `/transactions/get` or `/transactions/sync`.

Note that the `/transactions/refresh` endpoint is not supported for Capital One (`ins_128026`) non-depository accounts and will result in a `PRODUCTS_NOT_SUPPORTED` error if called on an Item that contains only non-depository accounts from that institution.

As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

`/transactions/refresh` is offered as an optional add-on to Transactions and has a separate [fee model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.refresh({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransactionsRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">getRecurring</a>({ ...params }) -> Plaid.TransactionsRecurringGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transactions/recurring/get` endpoint allows developers to receive a summary of the recurring outflow and inflow streams (expenses and deposits) from a user's checking, savings or credit card accounts. Additionally, Plaid provides key insights about each recurring stream including the category, merchant, last amount, and more. Developers can use these insights to build tools and experiences that help their users better manage cash flow, monitor subscriptions, reduce spend, and stay on track with bill payments.

This endpoint is offered as an add-on to Transactions. To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

This endpoint can only be called on an Item that has already been initialized with Transactions (either during Link, by specifying it in `/link/token/create`; or after Link, by calling `/transactions/get` or `/transactions/sync`).

When using Recurring Transactions, for best results, make sure to use the [`days_requested`](https://plaid.com/docs/api/link/#link-token-create-request-transactions-days-requested) parameter to request at least 180 days of history when initializing Items with Transactions. Once all historical transactions have been fetched, call `/transactions/recurring/get` to receive the Recurring Transactions streams and subscribe to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook. To know when historical transactions have been fetched, if you are using `/transactions/sync` listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#SyncUpdatesAvailableWebhook-historical-update-complete) webhook and check that the `historical_update_complete` field in the payload is `true`. If using `/transactions/get`, listen for the [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhook.

After the initial call, you can call the `/transactions/recurring/get` endpoint at any point in the future to retrieve the latest summary of recurring streams. Listen to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook to be notified when new updates are available.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.getRecurring({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransactionsRecurringGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">sync</a>({ ...params }) -> Plaid.TransactionsSyncResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transactions/sync` endpoint retrieves transactions associated with an Item and can fetch updates using a cursor to track which updates have already been seen.

For important instructions on integrating with `/transactions/sync`, see the [Transactions integration overview](https://plaid.com/docs/transactions/#integration-overview). If you are migrating from an existing integration using `/transactions/get`, see the [Transactions Sync migration guide](https://plaid.com/docs/transactions/sync-migration/).

This endpoint supports `credit`, `depository`, and `loan`-type accounts. For `investments` accounts, use `/investments/transactions/get` instead.

When retrieving paginated updates, track both the `next_cursor` from the latest response and the original cursor from the first call in which `has_more` was `true`; if a call to `/transactions/sync` fails when retrieving a paginated update (e.g. due to the [`TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION`](https://plaid.com/docs/errors/transactions/#transactions_sync_mutation_during_pagination) error), the entire pagination request loop must be restarted beginning with the cursor for the first page of the update, rather than retrying only the single request that failed.

If transactions data is not yet available for the Item, which can happen if the Item was not initialized with transactions during the `/link/token/create` call or if `/transactions/sync` was called within a few seconds of Item creation, `/transactions/sync` will return empty transactions arrays.

Plaid typically checks for new transactions data between one and four times per day, depending on the institution. To find out when transactions were last updated for an Item, use the [Item Debugger](https://plaid.com/docs/account/activity/#troubleshooting-with-item-debugger) or call `/item/get`; the `item.status.transactions.last_successful_update` field will show the timestamp of the most recent successful update. To force Plaid to check for new transactions, use the `/transactions/refresh` endpoint.

To be alerted when new transactions are available, listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) webhook.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.sync({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransactionsSyncRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">enrich</a>({ ...params }) -> Plaid.TransactionsEnrichResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transactions/enrich` endpoint enriches raw transaction data generated by your own banking products or retrieved from other non-Plaid sources.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.enrich({
    account_type: "account_type",
    transactions: [{
            id: "id",
            description: "description",
            amount: 1.1,
            direction: "INFLOW",
            iso_currency_code: "iso_currency_code"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransactionsEnrichRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">createRule</a>({ ...params }) -> Plaid.TransactionsRulesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/beta/transactions/rules/v1/create` endpoint creates transaction categorization rules.

Rules will be applied on the Item's transactions returned in `/transactions/get` response.

The product is currently in beta. To request access, contact transactions-feedback@plaid.com.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.createRule({
    client_user_id: "your-client-user-id",
    pfc_primary_category: "FOOD_AND_DRINK",
    pfc_detailed_category: "FOOD_AND_DRINK_FAST_FOOD",
    rule_details: {
        field: "MERCHANT_NAME",
        type: "SUBSTRING_MATCH",
        query: "Burger Shack"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransactionsRulesCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">listRules</a>({ ...params }) -> Plaid.TransactionsRulesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/beta/transactions/rules/v1/list` returns a list of transaction rules created for the end user specified by `client_user_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.listRules({
    client_user_id: "your-client-user-id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransactionsRulesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">removeRule</a>({ ...params }) -> Plaid.TransactionsRulesRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/beta/transactions/rules/v1/remove` endpoint is used to remove a transaction rule.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.removeRule({
    client_user_id: "your-client-user-id",
    rule_id: "eVBnVMp7zdTJLkRNr33Rs6zr7KNJqBF"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransactionsRulesRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">getUserInsights</a>({ ...params }) -> Plaid.TransactionsUserInsightsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/beta/transactions/user_insights/v1/get` gets user insights for clients who have enriched data with `/transactions/enrich`.

The product is currently in beta.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.getUserInsights({
    client_user_id: "client_user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransactionsUserInsightsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sandbox
<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">createTransactions</a>({ ...params }) -> Plaid.SandboxTransactionsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transactions/create` endpoint to create new transactions for an existing Item. This endpoint can be used to add up to 10 transactions to any Item at a time.

This endpoint can be used with any Item created in the Sandbox environment. Added transactions persist across subsequent calls to `/transactions/get` and `/transactions/sync`.

Each transaction is added to the account named by its `account_id`. When `account_id` is omitted, the transaction is added to the Item's checking account, or, for a custom Sandbox user, to the first depository account listed in its `override_accounts`, or its first account if it has no depository account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.createTransactions({
    access_token: "access_token",
    transactions: [{
            date_transacted: "2023-01-15",
            date_posted: "2023-01-15",
            amount: 1.1,
            description: "description"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransactionsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">createProcessorToken</a>({ ...params }) -> Plaid.SandboxProcessorTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/processor_token/create` endpoint to create a valid `processor_token` for an arbitrary institution ID and test credentials. The created `processor_token` corresponds to a new Sandbox Item. You can then use this `processor_token` with the `/processor/` API endpoints in Sandbox. You can also use `/sandbox/processor_token/create` with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.createProcessorToken({
    institution_id: "institution_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxProcessorTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">createPublicToken</a>({ ...params }) -> Plaid.SandboxPublicTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/public_token/create` endpoint to create a valid `public_token`  for an arbitrary institution ID, initial products, and test credentials. The created `public_token` maps to a new Sandbox Item. You can then call `/item/public_token/exchange` to exchange the `public_token` for an `access_token` and perform all API actions. `/sandbox/public_token/create` can also be used with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data, or with Plaid's [pre-populated Sandbox test accounts](https://plaid.com/docs/sandbox/test-credentials/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.createPublicToken({
    institution_id: "institution_id",
    initial_products: ["assets"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxPublicTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">fireItemWebhook</a>({ ...params }) -> Plaid.SandboxItemFireWebhookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/sandbox/item/fire_webhook` endpoint is used to test that code correctly handles webhooks. This endpoint can trigger the following webhooks:

`DEFAULT_UPDATE`: Webhook to be fired for a given Sandbox Item simulating a default update event for the respective product as specified with the `webhook_type` in the request body. Valid Sandbox `DEFAULT_UPDATE` webhook types include: `AUTH`, `IDENTITY`, `TRANSACTIONS`, `INVESTMENTS_TRANSACTIONS`, `LIABILITIES`, `HOLDINGS`. If the Item does not support the product, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`NEW_ACCOUNTS_AVAILABLE`: Fired to indicate that a new account is available on the Item and you can launch update mode to request access to it.

`SMS_MICRODEPOSITS_VERIFICATION`: Fired when a given Same-Day Micro-deposit Item is verified via SMS verification.

`LOGIN_REPAIRED`: Fired when an Item recovers from the `ITEM_LOGIN_REQUIRED` without the user going through update mode in your app.

`PENDING_DISCONNECT`: Fired when an Item will stop working in the near future (e.g. due to a planned bank migration) and must be sent through update mode to continue working.

`RECURRING_TRANSACTIONS_UPDATE`: Recurring Transactions webhook to be fired for a given Sandbox Item. If your client is not enabled for Recurring Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`SYNC_UPDATES_AVAILABLE`: Transactions webhook to be fired for a given Sandbox Item.  If your client is not enabled for Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`PRODUCT_READY`: Assets webhook to be fired when a given asset report has been successfully generated. If the Item does not support Assets, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`ERROR`: Assets webhook to be fired when asset report generation has failed. If the Item does not support Assets, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`USER_PERMISSION_REVOKED`: Indicates an end user has revoked the permission that they previously granted to access an Item. May not always fire upon revocation, as some institutions' consent portals do not trigger this webhook. Upon receiving this webhook, it is recommended to delete any stored data from Plaid associated with the account or Item.

`USER_ACCOUNT_REVOKED`: Fired when an end user has revoked access to their account on the Data Provider's portal. This webhook is currently sent only for Chase, PNC, and Truist Items, but may be sent in the future for other financial institutions. Upon receiving this webhook, it is recommended to delete any stored data from Plaid associated with the account or Item.

Note that this endpoint is provided for developer ease-of-use and is not required for testing webhooks; webhooks will also fire in Sandbox under the same conditions that they would in Production (except for webhooks of type `TRANSFER`).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.fireItemWebhook({
    access_token: "access_token",
    webhook_code: "DEFAULT_UPDATE"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxItemFireWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">fireUserWebhook</a>({ ...params }) -> Plaid.SandboxUserFireWebhookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/sandbox/user/fire_webhook` functions the same as `/sandbox/item/fire_webhook`, but fires webhooks associated with a user rather than an Item. This endpoint can trigger the following webhooks:

`USER_CHECK_REPORT_READY`: Fired when a Check Report is ready to be retrieved.

`USER_CHECK_REPORT_FAILED`: Fired when a Check Report has failed to generate.

`CHECK_REPORT_READY` / `CHECK_REPORT_FAILED`: The equivalents of the above for integrations that predate the [New User APIs](https://plaid.com/docs/api/users/user-apis).

Note that this endpoint is provided for developer ease-of-use and is not required for testing webhooks; webhooks will also fire in Sandbox under the same conditions that they would in Production.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.fireUserWebhook({
    webhook_type: "CHECK_REPORT",
    webhook_code: "USER_CHECK_REPORT_READY",
    webhook: "webhook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxUserFireWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">resetItemLogin</a>({ ...params }) -> Plaid.SandboxItemResetLoginResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/sandbox/item/reset_login` forces an Item into an `ITEM_LOGIN_REQUIRED` state in order to simulate an Item whose login is no longer valid. This makes it easy to test Link's [update mode](https://plaid.com/docs/link/update-mode) flow in the Sandbox environment.  After calling `/sandbox/item/reset_login`, you can then use Plaid Link update mode to restore the Item to a good state. An `ITEM_LOGIN_REQUIRED` webhook will also be fired after a call to this endpoint, if one is associated with the Item.
In the Sandbox, Items will transition to an `ITEM_LOGIN_REQUIRED` error state automatically after 30 days, even if this endpoint is not called.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.resetItemLogin({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxItemResetLoginRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">seedItemApplication</a>({ ...params }) -> Plaid.SandboxItemApplicationSeedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/sandbox/item/application/seed` creates a test connected application on an existing Permissions Manager Item's login. The seeded application will appear in subsequent calls to `/item/application/list`.

The `access_token` must belong to a Permissions Manager Item created via `/item/import` in Sandbox. The `application_id` identifies the application to seed as a connected app. To disconnect a seeded application, use `/item/application/unlink`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.seedItemApplication({
    access_token: "access_token",
    application_id: "application_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxItemApplicationSeedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">seedFdxConsent</a>({ ...params }) -> Plaid.SandboxFdxConsentSeedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/sandbox/fdx/consent/seed` creates a test FDX consent grant (and a backing Item) for a data provider's customer in Sandbox, so the FDX Consent API endpoints can be exercised end-to-end without a live data provider connection.

`customer_id` is the data provider's identifier for the end user and `application_id` identifies the data recipient application the consent is granted to; both are required. Optionally provide `consent_id` (a UUIDv4) to control the seeded grant's identifier; one is generated when omitted. The seeded grant is returned by `/fdx/consents` and `/fdx/consents/{consentId}`, and can be revoked via `/fdx/consents/{consentId}/revocation`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.seedFdxConsent({
    customer_id: "customer_id",
    application_id: "application_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxFdxConsentSeedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">setItemVerificationStatus</a>({ ...params }) -> Plaid.SandboxItemSetVerificationStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/sandbox/item/set_verification_status` endpoint can be used to change the verification status of an Item in the Sandbox in order to simulate the Automated Micro-deposit flow.

For more information on testing Automated Micro-deposits in Sandbox, see [Auth full coverage testing](https://plaid.com/docs/auth/coverage/testing#).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.setItemVerificationStatus({
    access_token: "access_token",
    account_id: "account_id",
    verification_status: "automatically_verified"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxItemSetVerificationStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">resetUserLogin</a>({ ...params }) -> Plaid.SandboxUserResetLoginResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/sandbox/user/reset_login` functions the same as `/sandbox/item/reset_login`, but will modify Items related to a User. This endpoint forces each Item into an `ITEM_LOGIN_REQUIRED` state in order to simulate an Item whose login is no longer valid. This makes it easy to test Link's [update mode](https://plaid.com/docs/link/update-mode) flow in the Sandbox environment.  After calling `/sandbox/user/reset_login`, you can then use Plaid Link update mode to restore Items associated with the User to a good state. An `ITEM_LOGIN_REQUIRED` webhook will also be fired after a call to this endpoint, if one is associated with the Item.
In the Sandbox, Items will transition to an `ITEM_LOGIN_REQUIRED` error state automatically after 30 days, even if this endpoint is not called.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.resetUserLogin();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxUserResetLoginRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">simulateBankTransfer</a>({ ...params }) -> Plaid.SandboxBankTransferSimulateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/bank_transfer/simulate` endpoint to simulate a bank transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/bank_transfer/event/sync` or `/bank_transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.simulateBankTransfer({
    bank_transfer_id: "bank_transfer_id",
    event_type: "event_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxBankTransferSimulateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">simulateTransferSweep</a>({ ...params }) -> Plaid.SandboxTransferSweepSimulateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/sweep/simulate` endpoint to create a sweep and associated events in the Sandbox environment. Upon calling this endpoint, all transfers with a sweep status of `swept` will become `swept_settled`, all `posted` or `pending` transfers with a sweep status of `unswept` will become `swept`, and all `returned` transfers with a sweep status of `swept` will become `return_swept`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.simulateTransferSweep();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferSweepSimulateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">simulateTransfer</a>({ ...params }) -> Plaid.SandboxTransferSimulateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/simulate` endpoint to simulate a transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/transfer/event/sync` or `/transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.simulateTransfer({
    transfer_id: "transfer_id",
    event_type: "event_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferSimulateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">simulateTransferRefund</a>({ ...params }) -> Plaid.SandboxTransferRefundSimulateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/refund/simulate` endpoint to simulate a refund event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/transfer/event/sync` or `/transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.simulateTransferRefund({
    refund_id: "refund_id",
    event_type: "event_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferRefundSimulateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">simulateTransferLedgerAvailable</a>({ ...params }) -> Plaid.SandboxTransferLedgerSimulateAvailableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/ledger/simulate_available` endpoint to simulate converting pending balance to available balance for all originators in the Sandbox environment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.simulateTransferLedgerAvailable();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferLedgerSimulateAvailableRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">simulateTransferLedgerDeposit</a>({ ...params }) -> Plaid.SandboxTransferLedgerDepositSimulateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/ledger/deposit/simulate` endpoint to simulate a ledger deposit event in the Sandbox environment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.simulateTransferLedgerDeposit({
    sweep_id: "sweep_id",
    event_type: "sweep.posted"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferLedgerDepositSimulateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">simulateTransferLedgerWithdraw</a>({ ...params }) -> Plaid.SandboxTransferLedgerWithdrawSimulateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/ledger/withdraw/simulate` endpoint to simulate a ledger withdraw event in the Sandbox environment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.simulateTransferLedgerWithdraw({
    sweep_id: "sweep_id",
    event_type: "sweep.posted"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferLedgerWithdrawSimulateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">fireTransferWebhook</a>({ ...params }) -> Plaid.SandboxTransferFireWebhookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/fire_webhook` endpoint to manually trigger a `TRANSFER_EVENTS_UPDATE` webhook in the Sandbox environment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.fireTransferWebhook({
    webhook: "webhook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferFireWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">createTransferTestClock</a>({ ...params }) -> Plaid.SandboxTransferTestClockCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/test_clock/create` endpoint to create a `test_clock` in the Sandbox environment.

A test clock object represents an independent timeline and has a `virtual_time` field indicating the current timestamp of the timeline. Test clocks are used for testing recurring transfers in Sandbox.

A test clock can be associated with up to 5 recurring transfers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.createTransferTestClock();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferTestClockCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">advanceTransferTestClock</a>({ ...params }) -> Plaid.SandboxTransferTestClockAdvanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/test_clock/advance` endpoint to advance a `test_clock` in the Sandbox environment.

A test clock object represents an independent timeline and has a `virtual_time` field indicating the current timestamp of the timeline. A test clock can be advanced by incrementing `virtual_time`, but may never go back to a lower `virtual_time`.

If a test clock is advanced, we will simulate the changes that ought to occur during the time that elapsed.

For example, a client creates a weekly recurring transfer with a test clock set at t. When the client advances the test clock by setting `virtual_time` = t + 15 days, 2 new originations should be created, along with the webhook events.

The advancement of the test clock from its current `virtual_time` should be limited such that there are no more than 20 originations resulting from the advance operation on each `recurring_transfer` associated with the `test_clock`.

For example, if the recurring transfer associated with this test clock originates once every 4 weeks, you can advance the `virtual_time` up to 80 weeks on each API call.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.advanceTransferTestClock({
    test_clock_id: "test_clock_id",
    new_virtual_time: "2024-01-15T09:30:00Z"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferTestClockAdvanceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">getTransferTestClock</a>({ ...params }) -> Plaid.SandboxTransferTestClockGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/test_clock/get` endpoint to get a `test_clock` in the Sandbox environment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.getTransferTestClock({
    test_clock_id: "test_clock_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferTestClockGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">listTransferTestClocks</a>({ ...params }) -> core.Page&lt;Plaid.TransferTestClock, Plaid.SandboxTransferTestClockListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/transfer/test_clock/list` endpoint to see a list of all your test clocks in the Sandbox environment, by descending `virtual_time`. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired test clocks.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.sandbox.listTransferTestClocks();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.sandbox.listTransferTestClocks();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxTransferTestClockListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">resetPaymentProfileLogin</a>({ ...params }) -> Plaid.SandboxPaymentProfileResetLoginResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/sandbox/payment_profile/reset_login` forces a Payment Profile into a state where the login is no longer valid. This makes it easy to test update mode for Payment Profile in the Sandbox environment.

 After calling `/sandbox/payment_profile/reset_login`, calls to the `/transfer/authorization/create` with the Payment Profile will result in a `decision_rationale` `PAYMENT_PROFILE_LOGIN_REQUIRED`. You can then use update mode for Payment Profile to restore it into a good state.

 In order to invoke this endpoint, you must first [create a Payment Profile](https://plaid.com/docs/transfer/add-to-app/#create-a-payment-profile-optional) and [go through the Link flow](https://plaid.com/docs/transfer/add-to-app/#create-a-link-token).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.resetPaymentProfileLogin({
    payment_profile_token: "payment_profile_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxPaymentProfileResetLoginRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">simulatePayment</a>({ ...params }) -> Plaid.SandboxPaymentSimulateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/payment/simulate` endpoint to simulate various payment events in the Sandbox environment. This endpoint will trigger the corresponding payment status webhook.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.simulatePayment({
    payment_id: "payment_id",
    webhook: "webhook",
    status: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxPaymentSimulateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">fireBankTransferWebhook</a>({ ...params }) -> Plaid.SandboxBankTransferFireWebhookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/bank_transfer/fire_webhook` endpoint to manually trigger a Bank Transfers webhook in the Sandbox environment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.fireBankTransferWebhook({
    webhook: "webhook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxBankTransferFireWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">fireIncomeWebhook</a>({ ...params }) -> Plaid.SandboxIncomeFireWebhookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/income/fire_webhook` endpoint to manually trigger a Payroll or Document Income webhook in the Sandbox environment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.fireIncomeWebhook({
    item_id: "item_id",
    webhook: "webhook",
    webhook_code: "INCOME_VERIFICATION"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxIncomeFireWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">fireBankIncomeWebhook</a>({ ...params }) -> Plaid.SandboxBankIncomeFireWebhookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/bank_income/fire_webhook` endpoint to manually trigger a Bank Income webhook in the Sandbox environment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.fireBankIncomeWebhook({
    webhook_code: "BANK_INCOME_REFRESH_UPDATE",
    webhook_fields: {
        user_id: "user_id"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxBankIncomeFireWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">updateCraCashflowUpdates</a>({ ...params }) -> Plaid.SandboxCraCashflowUpdatesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/cra/cashflow_updates/update` endpoint to manually trigger an update for the legacy Cash Flow Updates product in the Sandbox environment. To simulate a report generation for a CRA Servicing subscription, use `/sandbox/cra/servicing/simulate`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.updateCraCashflowUpdates();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxCraCashflowUpdatesUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">simulateCraServicing</a>({ ...params }) -> Plaid.SandboxCraServicingSimulateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/sandbox/cra/servicing/simulate` endpoint to synchronously seed a CRA Servicing report in the Sandbox environment and return a `report_id` that can be fetched via `/cra/check_report/base_report/get` or `/cra/check_report/income_insights/get`. This endpoint also fires a `CRA_REPORT_UPDATED` webhook, mirroring the notification a live subscription would emit.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.simulateCraServicing({
    subscription_id: "subscription_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxCraServicingSimulateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandbox.<a href="/src/api/resources/sandbox/client/Client.ts">selectOauthAccounts</a>({ ...params }) -> Plaid.SandboxOauthSelectAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Save the selected accounts when connecting to the Platypus OAuth institution
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandbox.selectOauthAccounts({
    oauth_state_id: "oauth_state_id",
    accounts: ["accounts"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SandboxOauthSelectAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CashflowReport
<details><summary><code>client.cashflowReport.<a href="/src/api/resources/cashflowReport/client/Client.ts">refresh</a>({ ...params }) -> Plaid.CashflowReportRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cashflow_report/refresh` is an endpoint that initiates an on-demand extraction to fetch the newest transactions for an Item (given an `item_id`). The Item must already have Cashflow Report added as a product in order to call `/cashflow_report/refresh`.

After calling `/cashflow_report/refresh`, Plaid will fire a webhook `CASHFLOW_REPORT_READY` alerting clients that new transactions data can then be ingested via `/cashflow_report/get` or the webhook will contain an error code informing there was an error in refreshing transactions data.

Note that the `/cashflow_report/refresh` endpoint is not supported for Capital One (`ins_128026`) non-depository accounts and will result in a `PRODUCTS_NOT_SUPPORTED` error if called on an Item that contains only non-depository accounts from that institution.

As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but up to 30 seconds or more). If you encounter errors, you may find it necessary to adjust your timeout period for requests.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashflowReport.refresh({
    access_token: "access_token",
    days_requested: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CashflowReportRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashflowReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cashflowReport.<a href="/src/api/resources/cashflowReport/client/Client.ts">get</a>({ ...params }) -> Plaid.CashflowReportGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/cashflow_report/get` endpoint retrieves transactions data associated with an Item. Transactions data is standardized across financial institutions.
Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift. Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/cashflow_report/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
Due to the potentially large number of transactions associated with an Item, results are paginated. Manipulate the `count` and `cursor` parameters in conjunction with the `has_more` response body field to fetch all available transactions.
Note that data isn't likely to be immediately available to `/cashflow_report/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `cashflow_report`, or if it wasn't, upon the first call to `/cashflow_report/refresh`. To be alerted when transaction data is ready to be fetched, listen for the `CASHFLOW_REPORT_READY` webhook.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashflowReport.get({
    access_token: "access_token",
    days_requested: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CashflowReportGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashflowReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cashflowReport.<a href="/src/api/resources/cashflowReport/client/Client.ts">getTransactions</a>({ ...params }) -> Plaid.CashflowReportTransactionsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/cashflow_report/transactions/get` endpoint retrieves transactions data associated with an Item. Transactions data is standardized across financial institutions.
Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift. Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/cashflow_report/transactions/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
Due to the potentially large number of transactions associated with an Item, results are paginated. Manipulate the `count` and `cursor` parameters in conjunction with the `has_more` response body field to fetch all available transactions.
Note that data isn't likely to be immediately available to `/cashflow_report/transactions/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `cashflow_report`, or if it wasn't, upon the first call to `/cashflow_report/refresh`. To be alerted when transaction data is ready to be fetched, listen for the `CASHFLOW_REPORT_READY` webhook.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashflowReport.getTransactions({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CashflowReportTransactionsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashflowReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cashflowReport.<a href="/src/api/resources/cashflowReport/client/Client.ts">getInsights</a>({ ...params }) -> Plaid.CashflowReportInsightsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/cashflow_report/insights/get` endpoint retrieves insights data associated with an Item. Insights are only calculated on credit and depository accounts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashflowReport.getInsights({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CashflowReportInsightsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashflowReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## User
<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">refreshTransactions</a>({ ...params }) -> Plaid.UserTransactionsRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/user/transactions/refresh` is an optional endpoint that initiates an on-demand extraction to fetch the newest transactions for a User using the Transactions bundle.
This bundle refreshes only the Transactions product data.
This endpoint is for clients who use the Transactions Insights bundle and want to proactively update all linked Items under a user.
The refresh may succeed or fail on a per-Item basis. Use the `results` array in the response to understand the outcome for each Item.

This endpoint is distinct from `/transactions/refresh`, which triggers a refresh for a single Item. Use `/user/transactions/refresh` to target all Items for a user instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.refreshTransactions({
    user_id: "usr_8c3ZbDBYjaqUXZ"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserTransactionsRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">refreshFinancialData</a>({ ...params }) -> Plaid.UserFinancialDataRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/user/financial_data/refresh` is an optional endpoint that initiates an on-demand extraction to fetch the newest transactions for a User using the Financial Insights bundle.
This bundle refreshes the Transactions and Investments product data.
This endpoint is for clients who use the Financial Insights bundle and want to proactively update all linked Items under a user.
The refresh may succeed or fail on a per-Item basis. Use the `results` array in the response to understand the outcome for each Item.

This endpoint is distinct from `/transactions/refresh`, which triggers a refresh for a single Item. Use `/user/financial_data/refresh` to target all Items for a user instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.refreshFinancialData({
    user_id: "usr_8c3ZbDBYjaqUXZ"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserFinancialDataRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">create</a>({ ...params }) -> Plaid.UserCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

For Plaid products and flows that use the user object, `/user/create` provides you a single token to access all data associated with the user. You must call this endpoint before calling `/link/token/create` if you are using any of the following: Plaid Check, Income Verification, Multi-Item Link, or Plaid Protect (Identity). If you are using Plaid Protect Link session scoring, you do not need to call `/user/create` first; Plaid will resolve or create the user when `user.client_user_id` is provided in `/link/token/create`.
For customers who began using this endpoint on or after December 10, 2025, this endpoint takes a `client_user_id` and an `identity` object and will return a `user_id`. For customers who began using it before that date, the endpoint takes a `client_user_id` and a `consumer_report_user_identity` object and will return a `user_token` and `user_id`. For more details, see [New User APIs](https://plaid.com/docs/api/users/user-apis).
In order to create a Plaid Check Consumer Report for a user, or to use Payment Initiation, Variable Recurring Payments, or Virtual Accounts, the `identity` (new) or `consumer_report_user_identity` (legacy) object must be present. If it is not provided during the `/user/create` call, it can be added later by calling `/user/update`.


When using Payment Initiation, Variable Recurring Payments, or Virtual Accounts, the `identity` object must contain a `name` and either an email address or a phone number.


In order to generate a Plaid Check Consumer Report, the following `identity` fields, at minimum, are required and must be non-empty: `name`, `date_of_birth`, `emails`, `phone_numbers`, and `addresses` (with at least one email, phone number, and address designated as `primary`). Plaid Check Consumer Reports can only be created for US-based users; the user's address country must be `US`. If creating a report for sharing with a GSE such as Fannie or Freddie, the user's full SSN must be provided via the `id_numbers` field. Providing at least a partial SSN is also strongly recommended for all use cases, since it improves the accuracy of matching user records during compliance processes such as file disclosure, dispute, or security freeze requests.


When using Plaid Protect, it is highly recommended that you provide an `identity` object to better identify and block fraud across your Link sessions.


Plaid will normalize identity fields before storing them and utilize the same identity across different user-based products.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.create({
    client_user_id: "client_user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">get</a>({ ...params }) -> Plaid.UserGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get user details using a `user_id`. This endpoint only supports users that were created on the new user API flow, without a `user_token`. For more details, see [New User APIs](https://plaid.com/docs/api/users/user-apis).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.get({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">removeIdentity</a>({ ...params }) -> Plaid.UserIdentityRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows customers to explicitly purge identity/PII data provided to Plaid for a given user. This is not exposed to customers by default, as it is meant for special scenarios or requests, but Plaid is obligated to enable customers to delete PII provided to us.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.removeIdentity({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserIdentityRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">update</a>({ ...params }) -> Plaid.UserUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint updates user information for an existing `user_id` or `user_token`. If an existing `user_id` or `user_token` is missing fields required for a given use case (e.g. creating a Consumer Report) use `/user/update` to add values for those fields.

Identity updates use merge semantics: provided fields overwrite existing ones; omitted fields remain unchanged.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.update();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">remove</a>({ ...params }) -> Plaid.UserRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/user/remove` deletes a `user_id` or `user_token` and associated information, including any Items associated with the user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.remove();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">terminateProducts</a>({ ...params }) -> Plaid.UserProductsTerminateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Terminates Financial Management, Plaid Protect, and Servicing products associated with a `user_id`. Use this endpoint when offboarding a user or ending their subscriptions. Item access tokens are not required.

For Financial Management products, including Transactions, Liabilities, and Investments, this endpoint removes each associated Item that contains one of these products. Removal makes the Item inaccessible, initiates deletion of its product data, and terminates its per-Item subscription billing. The entire Item is removed, including access to any other products on that Item. To connect the accounts again, the user must complete Link to create a new Item.

If the user has at least one associated Item and every associated Item contains a Financial Management product, this endpoint also removes the associated Plaid user. The removed `user_id` can no longer be used to access the user.

For Plaid Protect, this endpoint terminates Protect products. For Servicing, it cancels the subscription and preserves CRA Items and historical data for future report requests.

To learn how terminating products affects billing, see [Billing](https://plaid.com/docs/account/billing/#subscription-fee).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.terminateProducts({
    user_id: "usr_8c3ZbDBYjaqUXZ",
    reason_code: "CONSUMER_ACCOUNT_CLOSED",
    reason_note: "User closed account with client."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserProductsTerminateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getTransferLimits</a>({ ...params }) -> Plaid.UserTransferLimitsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the user's current Guaranteed ACH per-transaction limit and configured daily, weekly, and monthly ceilings. Amounts are returned as decimal strings in dollars with two decimal places and an ISO currency code. Access to this endpoint must be enabled for your client.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getTransferLimits({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserTransferLimitsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getItems</a>({ ...params }) -> Plaid.UserItemsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns Items associated with a `user_id`, along with their corresponding statuses. Plaid associates an Item with a User when it has been successfully connected within a Link session initialized with that `user_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getItems();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserItemsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">associateItems</a>({ ...params }) -> Plaid.UserItemsAssociateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Associates Items with a `user_id`. If an Item is already associated with a different `user_id`, calling this endpoint will disassociate it from that User and reassociate it with the target User instead. A single request can associate up to 100 Items.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.associateItems({
    user_id: "user_id",
    item_ids: ["item_ids"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserItemsAssociateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">removeItems</a>({ ...params }) -> Plaid.UserItemsRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes specific Items associated with a user. It is equivalent to calling `/item/remove` on each Item individually, but supports use cases (such as Plaid Check) where access tokens are not available. All specified Items must belong to the user or the entire operation fails. Similar to `/item/remove`, this deletes Item product data and terminates billing on the Item's products. Once removed, Items cannot be reconnected without going through Link again.
This endpoint is not intended to remove all data for a user, as it will only remove Items and no other data for the user. If the user has any user-based recurring subscription products (Financial Management, Plaid Protect, or CRA Servicing) and is deleting their account with your product, also call `/user/products/terminate` to end those subscriptions; per-Item billing is already terminated by this endpoint. For a user initiated data deletion request, see the [Consumer Service Center](https://plaid.com/check/consumer-service-center/) to revoke access to data.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.removeItems({
    item_ids: ["item_ids"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserItemsRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">createThirdPartyToken</a>({ ...params }) -> Plaid.UserThirdPartyTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is used to create a third-party user token. This token can be shared with and used by a specified third-party client to access data associated with the user through supported endpoints.

Ensure you store the `third_party_user_token` along with the `user_token` and `third_party_client_id`, as it is not possible to retrieve a previously created `third_party_user_token`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.createThirdPartyToken({
    third_party_client_id: "third_party_client_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserThirdPartyTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">removeThirdPartyToken</a>({ ...params }) -> Plaid.UserThirdPartyTokenRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is used to delete a third-party user token. Once removed, the token can no longer be used to access data associated with the user.

Any subsequent calls to retrieve information using the same third-party user token will result in an error stating the third-party user token does not exist.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.removeThirdPartyToken({
    third_party_user_token: "third_party_user_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.UserThirdPartyTokenRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Institutions
<details><summary><code>client.institutions.<a href="/src/api/resources/institutions/client/Client.ts">get</a>({ ...params }) -> core.Page&lt;Plaid.Institution, Plaid.InstitutionsGetResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a JSON response containing details on all financial institutions currently supported by Plaid. Because Plaid supports thousands of institutions, results are paginated.

If there is no overlap between an institution's enabled products and a client's enabled products, then the institution will be filtered out from the response. As a result, the number of institutions returned may not match the count specified in the call.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.institutions.get({
    count: 1,
    offset: 1,
    country_codes: ["US"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.institutions.get({
    count: 1,
    offset: 1,
    country_codes: ["US"]
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.InstitutionsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InstitutionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.institutions.<a href="/src/api/resources/institutions/client/Client.ts">search</a>({ ...params }) -> Plaid.InstitutionsSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a JSON response containing details for institutions that match the query parameters, up to a maximum of ten institutions per query. Institutions that Plaid does not support for new connections are not included in search results, but can still be retrieved by ID with `/institutions/get_by_id`.

Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter instead of the `client_id` and `secret` parameters to authenticate to this endpoint. The `public_key` parameter has since been deprecated; all customers are encouraged to use `client_id` and `secret` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.institutions.search({
    query: "query",
    country_codes: ["US"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.InstitutionsSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InstitutionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.institutions.<a href="/src/api/resources/institutions/client/Client.ts">getById</a>({ ...params }) -> Plaid.InstitutionsGetByIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a JSON response containing details on a specified financial institution.

Institutions that Plaid does not support for new connections are still returned by this endpoint, so that an `institution_id` stored on an existing Item can still be looked up. These institutions are not returned by `/institutions/get` or `/institutions/search`, and attempting to create a new Item for one of them returns an `INSTITUTION_NO_LONGER_SUPPORTED` error. Use `connection_availability` to tell the two cases apart.

Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter instead of the `client_id` and `secret` to authenticate to this endpoint. The `public_key` has been deprecated; all customers are encouraged to use `client_id` and `secret` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.institutions.getById({
    institution_id: "institution_id",
    country_codes: ["US"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.InstitutionsGetByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InstitutionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounts
<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">get</a>({ ...params }) -> Plaid.AccountsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/accounts/get` endpoint can be used to retrieve a list of accounts associated with any linked Item. Plaid will only return active bank accounts -- that is, accounts that are not closed and are capable of carrying a balance.
To return new accounts that were created after the user linked their Item, you can listen for the [`NEW_ACCOUNTS_AVAILABLE`](https://plaid.com/docs/api/items/#new_accounts_available) webhook and then use Link's [update mode](https://plaid.com/docs/link/update-mode/) to request that the user share this new account with you.

`/accounts/get` is free to use and retrieves cached information, rather than extracting fresh information from the institution. The balance returned will reflect the balance at the time of the last successful Item update. If the Item is enabled for a regularly updating product, such as Transactions, Investments, or Liabilities, the balance will typically update about once a day, as long as the Item is healthy. If the Item is enabled only for products that do not frequently update, such as Auth or Identity, balance data may be much older.

For real-time balance information, use the paid endpoints `/accounts/balance/get` or `/signal/evaluate` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.get({
    access_token: "string",
    options: {
        account_ids: ["string"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AccountsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getBalance</a>({ ...params }) -> Plaid.AccountsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/accounts/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints, such as `/accounts/get`, return a balance object,  `/accounts/balance/get` forces the available and current balance fields to be refreshed rather than cached. This endpoint can be used for existing Items that were added via any of Plaid's other products. This endpoint can be used as long as Link has been initialized with any other product; `balance` itself is not a product that can be used to initialize Link. As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

Note: If you are getting real-time balance for the purpose of assessing the return risk of a proposed ACH transaction, it is recommended to use `/signal/evaluate` instead of `/accounts/balance/get`. `/signal/evaluate` returns the same real-time balance information and also provides access to Signal Rules, which provides no-code transaction business logic configuration, backtesting and recommendations for tuning your transaction acceptance logic, and the ability to easily switch between Balance and Signal Transaction Scores as needed for ultra-low-latency, ML-powered risk assessments. For more details, see the [Balance documentation](https://plaid.com/docs/balance/#balance-integration-options).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getBalance({
    access_token: "string",
    options: {
        account_ids: ["string"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.AccountsBalanceGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Categories
<details><summary><code>client.categories.<a href="/src/api/resources/categories/client/Client.ts">get</a>({ ...params }) -> Plaid.CategoriesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a request to the `/categories/get` endpoint to get detailed information on legacy categories returned by Plaid. This endpoint does not require authentication.

All implementations are recommended to [use the newer `personal_finance_category` taxonomy](https://plaid.com/docs/transactions/pfc-migration/) instead of the legacy `category` taxonomy supported by this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.categories.get({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.CategoriesGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CategoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Identity
<details><summary><code>client.identity.<a href="/src/api/resources/identity/client/Client.ts">get</a>({ ...params }) -> Plaid.IdentityGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses. Only name data is guaranteed to be returned; other fields will be empty arrays if not provided by the institution.

Note: In API versions 2018-05-22 and earlier, the `owners` object is not returned, and instead identity information is returned in the top level `identity` object. For more details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2019-05-29).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.get({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IdentityGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identity.<a href="/src/api/resources/identity/client/Client.ts">getDocumentUploads</a>({ ...params }) -> Plaid.IdentityDocumentsUploadsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use `/identity/documents/uploads/get` to retrieve identity details when using [Identity Document Upload](https://plaid.com/docs/identity/identity-document-upload/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.getDocumentUploads({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IdentityDocumentsUploadsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identity.<a href="/src/api/resources/identity/client/Client.ts">match</a>({ ...params }) -> Plaid.IdentityMatchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/identity/match` endpoint generates a match score, which indicates how well the provided identity data matches the identity information on file with the account holder's financial institution.

Fields within the `balances` object will always be null when retrieved by `/identity/match`. Instead, use the free `/accounts/get` endpoint to request balance cached data, or `/accounts/balance/get` or `/signal/evaluate` for real-time data.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.match({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IdentityMatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identity.<a href="/src/api/resources/identity/client/Client.ts">listMatches</a>({ ...params }) -> core.Page&lt;Plaid.IdentityMatchListAttempt, Plaid.IdentityMatchListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a chronological history of Link-originated Identity Match attempts for a client, ordered by creation time with the oldest attempt first.

This endpoint requires separate enablement in addition to access to Identity Match. To request endpoint access, contact your account manager or [submit a product access support ticket](https://dashboard.plaid.com/support/new/product-and-development/product-troubleshooting/request-product-access).

Results are retained for up to one year. Attempts marked as deleted are omitted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.identity.listMatches({
    start_time: "2024-01-15T09:30:00Z",
    end_time: "2024-01-15T09:30:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.identity.listMatches({
    start_time: "2024-01-15T09:30:00Z",
    end_time: "2024-01-15T09:30:00Z"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IdentityMatchListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identity.<a href="/src/api/resources/identity/client/Client.ts">refresh</a>({ ...params }) -> Plaid.IdentityRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/identity/refresh` is an optional endpoint for users of the Identity product. It initiates an on-demand extraction to fetch the most up to date Identity information from the Financial Institution. This on-demand extraction takes place in addition to the periodic extractions that automatically occur for any Identity-enabled Item. If changes to Identity are discovered after calling `/identity/refresh`, Plaid will fire a webhook [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/identity/#default_update).

As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

`/identity/refresh` is offered as an add-on to Identity and has a separate [fee model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.refresh({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IdentityRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## DashboardUser
<details><summary><code>client.dashboardUser.<a href="/src/api/resources/dashboardUser/client/Client.ts">get</a>({ ...params }) -> Plaid.DashboardUserGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/dashboard_user/get` endpoint provides details (such as email address) about a specific Dashboard user based on the `dashboard_user_id` field, which is returned in the `audit_trail` object of certain Monitor and Beacon endpoints. This can be used to identify the specific reviewer who performed a Dashboard action.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dashboardUser.get({
    dashboard_user_id: "54350110fedcbaf01234ffee"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.DashboardUserGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DashboardUserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dashboardUser.<a href="/src/api/resources/dashboardUser/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.DashboardUser, Plaid.DashboardUserListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/dashboard_user/list` endpoint provides details (such as email address) about all Dashboard users associated with your account. This can be used to audit or track the list of reviewers for Monitor, Beacon, and Identity Verification products.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.dashboardUser.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.dashboardUser.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.DashboardUserListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DashboardUserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## WatchlistScreeningEntity
<details><summary><code>client.watchlistScreeningEntity.<a href="/src/api/resources/watchlistScreeningEntity/client/Client.ts">create</a>({ ...params }) -> Plaid.WatchlistScreeningEntityCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new entity watchlist screening to check your customer against watchlists defined in the associated entity watchlist program. If your associated program has ongoing screening enabled, this is the profile information that will be used to monitor your customer over time.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.watchlistScreeningEntity.create({
    search_terms: {
        entity_watchlist_program_id: "entprg_2eRPsDnL66rZ7H",
        legal_name: "Al-Qaida"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningEntityCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningEntityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningEntity.<a href="/src/api/resources/watchlistScreeningEntity/client/Client.ts">get</a>({ ...params }) -> Plaid.WatchlistScreeningEntityGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an entity watchlist screening.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.watchlistScreeningEntity.get({
    entity_watchlist_screening_id: "entscr_52xR9LKo77r1Np"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningEntityGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningEntityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningEntity.<a href="/src/api/resources/watchlistScreeningEntity/client/Client.ts">listHistory</a>({ ...params }) -> core.Page&lt;Plaid.EntityWatchlistScreening, Plaid.WatchlistScreeningEntityHistoryListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all changes to the entity watchlist screening in reverse-chronological order. If the watchlist screening has not been edited, no history will be returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.watchlistScreeningEntity.listHistory({
    entity_watchlist_screening_id: "entscr_52xR9LKo77r1Np"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.watchlistScreeningEntity.listHistory({
    entity_watchlist_screening_id: "entscr_52xR9LKo77r1Np"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningEntityHistoryListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningEntityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningEntity.<a href="/src/api/resources/watchlistScreeningEntity/client/Client.ts">listHits</a>({ ...params }) -> core.Page&lt;Plaid.EntityWatchlistScreeningHit, Plaid.WatchlistScreeningEntityHitListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all hits for the entity watchlist screening.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.watchlistScreeningEntity.listHits({
    entity_watchlist_screening_id: "entscr_52xR9LKo77r1Np"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.watchlistScreeningEntity.listHits({
    entity_watchlist_screening_id: "entscr_52xR9LKo77r1Np"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningEntityHitListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningEntityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningEntity.<a href="/src/api/resources/watchlistScreeningEntity/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.EntityWatchlistScreening, Plaid.WatchlistScreeningEntityListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all entity screenings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.watchlistScreeningEntity.list({
    entity_watchlist_program_id: "entprg_2eRPsDnL66rZ7H"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.watchlistScreeningEntity.list({
    entity_watchlist_program_id: "entprg_2eRPsDnL66rZ7H"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningEntityListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningEntityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningEntity.<a href="/src/api/resources/watchlistScreeningEntity/client/Client.ts">getProgram</a>({ ...params }) -> Plaid.WatchlistScreeningEntityProgramGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an entity watchlist screening program
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.watchlistScreeningEntity.getProgram({
    entity_watchlist_program_id: "entprg_2eRPsDnL66rZ7H"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningEntityProgramGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningEntityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningEntity.<a href="/src/api/resources/watchlistScreeningEntity/client/Client.ts">listPrograms</a>({ ...params }) -> core.Page&lt;Plaid.EntityWatchlistProgram, Plaid.WatchlistScreeningEntityProgramListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all entity watchlist screening programs
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.watchlistScreeningEntity.listPrograms();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.watchlistScreeningEntity.listPrograms();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningEntityProgramListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningEntityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningEntity.<a href="/src/api/resources/watchlistScreeningEntity/client/Client.ts">createReview</a>({ ...params }) -> Plaid.WatchlistScreeningEntityReviewCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a review for an entity watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.watchlistScreeningEntity.createReview({
    confirmed_hits: ["enthit_52xR9LKo77r1Np"],
    dismissed_hits: ["enthit_52xR9LKo77r1Np"],
    entity_watchlist_screening_id: "entscr_52xR9LKo77r1Np"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningEntityReviewCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningEntityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningEntity.<a href="/src/api/resources/watchlistScreeningEntity/client/Client.ts">listReviews</a>({ ...params }) -> core.Page&lt;Plaid.EntityWatchlistScreeningReview, Plaid.WatchlistScreeningEntityReviewListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all reviews for a particular entity watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.watchlistScreeningEntity.listReviews({
    entity_watchlist_screening_id: "entscr_52xR9LKo77r1Np"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.watchlistScreeningEntity.listReviews({
    entity_watchlist_screening_id: "entscr_52xR9LKo77r1Np"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningEntityReviewListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningEntityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningEntity.<a href="/src/api/resources/watchlistScreeningEntity/client/Client.ts">update</a>({ ...params }) -> Plaid.WatchlistScreeningEntityUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an entity watchlist screening.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.watchlistScreeningEntity.update({
    entity_watchlist_screening_id: "entscr_52xR9LKo77r1Np"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningEntityUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningEntityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## WatchlistScreeningIndividual
<details><summary><code>client.watchlistScreeningIndividual.<a href="/src/api/resources/watchlistScreeningIndividual/client/Client.ts">create</a>({ ...params }) -> Plaid.WatchlistScreeningIndividualCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new Watchlist Screening to check your customer against watchlists defined in the associated Watchlist Program. If your associated program has ongoing screening enabled, this is the profile information that will be used to monitor your customer over time.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.watchlistScreeningIndividual.create({
    search_terms: {
        watchlist_program_id: "prg_2eRPsDnL66rZ7H",
        legal_name: "Aleksey Potemkin"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningIndividualCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningIndividualClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningIndividual.<a href="/src/api/resources/watchlistScreeningIndividual/client/Client.ts">get</a>({ ...params }) -> Plaid.WatchlistScreeningIndividualGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a previously created individual watchlist screening
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.watchlistScreeningIndividual.get({
    watchlist_screening_id: "scr_52xR9LKo77r1Np"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningIndividualGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningIndividualClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningIndividual.<a href="/src/api/resources/watchlistScreeningIndividual/client/Client.ts">listHistory</a>({ ...params }) -> core.Page&lt;Plaid.WatchlistScreeningIndividual, Plaid.WatchlistScreeningIndividualHistoryListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all changes to the individual watchlist screening in reverse-chronological order. If the watchlist screening has not been edited, no history will be returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.watchlistScreeningIndividual.listHistory({
    watchlist_screening_id: "scr_52xR9LKo77r1Np"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.watchlistScreeningIndividual.listHistory({
    watchlist_screening_id: "scr_52xR9LKo77r1Np"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningIndividualHistoryListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningIndividualClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningIndividual.<a href="/src/api/resources/watchlistScreeningIndividual/client/Client.ts">listHits</a>({ ...params }) -> core.Page&lt;Plaid.WatchlistScreeningHit, Plaid.WatchlistScreeningIndividualHitListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all hits found by Plaid for a particular individual watchlist screening.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.watchlistScreeningIndividual.listHits({
    watchlist_screening_id: "scr_52xR9LKo77r1Np"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.watchlistScreeningIndividual.listHits({
    watchlist_screening_id: "scr_52xR9LKo77r1Np"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningIndividualHitListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningIndividualClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningIndividual.<a href="/src/api/resources/watchlistScreeningIndividual/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.WatchlistScreeningIndividual, Plaid.WatchlistScreeningIndividualListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List previously created watchlist screenings for individuals
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.watchlistScreeningIndividual.list({
    watchlist_program_id: "prg_2eRPsDnL66rZ7H"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.watchlistScreeningIndividual.list({
    watchlist_program_id: "prg_2eRPsDnL66rZ7H"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningIndividualListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningIndividualClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningIndividual.<a href="/src/api/resources/watchlistScreeningIndividual/client/Client.ts">getProgram</a>({ ...params }) -> Plaid.WatchlistScreeningIndividualProgramGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an individual watchlist screening program
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.watchlistScreeningIndividual.getProgram({
    watchlist_program_id: "prg_2eRPsDnL66rZ7H"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningIndividualProgramGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningIndividualClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningIndividual.<a href="/src/api/resources/watchlistScreeningIndividual/client/Client.ts">listPrograms</a>({ ...params }) -> core.Page&lt;Plaid.IndividualWatchlistProgram, Plaid.WatchlistScreeningIndividualProgramListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all individual watchlist screening programs
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.watchlistScreeningIndividual.listPrograms();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.watchlistScreeningIndividual.listPrograms();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningIndividualProgramListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningIndividualClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningIndividual.<a href="/src/api/resources/watchlistScreeningIndividual/client/Client.ts">createReview</a>({ ...params }) -> Plaid.WatchlistScreeningIndividualReviewCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a review for the individual watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.watchlistScreeningIndividual.createReview({
    confirmed_hits: ["scrhit_52xR9LKo77r1Np"],
    dismissed_hits: ["scrhit_52xR9LKo77r1Np"],
    watchlist_screening_id: "scr_52xR9LKo77r1Np"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningIndividualReviewCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningIndividualClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningIndividual.<a href="/src/api/resources/watchlistScreeningIndividual/client/Client.ts">listReviews</a>({ ...params }) -> core.Page&lt;Plaid.WatchlistScreeningReview, Plaid.WatchlistScreeningIndividualReviewListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all reviews for the individual watchlist screening.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.watchlistScreeningIndividual.listReviews({
    watchlist_screening_id: "scr_52xR9LKo77r1Np"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.watchlistScreeningIndividual.listReviews({
    watchlist_screening_id: "scr_52xR9LKo77r1Np"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningIndividualReviewListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningIndividualClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.watchlistScreeningIndividual.<a href="/src/api/resources/watchlistScreeningIndividual/client/Client.ts">update</a>({ ...params }) -> Plaid.WatchlistScreeningIndividualUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific individual watchlist screening. This endpoint can be used to add additional customer information, correct outdated information, add a reference id, assign the individual to a reviewer, and update which program it is associated with. Please note that you may not update `search_terms` and `status` at the same time since editing `search_terms` may trigger an automatic `status` change.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.watchlistScreeningIndividual.update({
    watchlist_screening_id: "scr_52xR9LKo77r1Np"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WatchlistScreeningIndividualUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WatchlistScreeningIndividualClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BeaconAccountRisk
<details><summary><code>client.beaconAccountRisk.<a href="/src/api/resources/beaconAccountRisk/client/Client.ts">evaluate</a>({ ...params }) -> Plaid.BeaconAccountRiskEvaluateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use `/beacon/account_risk/v1/evaluate` to get risk insights for a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beaconAccountRisk.evaluate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconAccountRiskEvaluateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconAccountRiskClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BeaconUser
<details><summary><code>client.beaconUser.<a href="/src/api/resources/beaconUser/client/Client.ts">create</a>({ ...params }) -> Plaid.BeaconUserCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create and scan a Beacon User against your Beacon Program, according to your program's settings.

When you submit a new user to `/beacon/user/create`, several checks are performed immediately:

  - The user's PII (provided within the `user` object) is searched against all other users within the Beacon Program you specified. If a match is found that violates your program's "Duplicate Information Filtering" settings, the user will be returned with a status of `pending_review`.

  - The user's PII is also searched against all fraud reports created by your organization across all of your Beacon Programs. If the user's data matches a fraud report that your team created, the user will be returned with a status of `rejected`.

  - Finally, the user's PII is searched against all fraud reports shared with the Beacon Network by other companies. If a matching fraud report is found, the user will be returned with a `pending_review` status if your program has enabled automatic flagging based on network fraud.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beaconUser.create({
    program_id: "becprg_11111111111111",
    client_user_id: "your-db-id-3b24110",
    user: {
        name: {
            given_name: "Leslie",
            family_name: "Knope"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconUserCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconUserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beaconUser.<a href="/src/api/resources/beaconUser/client/Client.ts">get</a>({ ...params }) -> Plaid.BeaconUserGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a Beacon User.

The Beacon User is returned with all of their associated information and a `status` based on the Beacon Network duplicate record and fraud checks.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beaconUser.get({
    beacon_user_id: "becusr_42cF1MNo42r9Xj"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconUserGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconUserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beaconUser.<a href="/src/api/resources/beaconUser/client/Client.ts">review</a>({ ...params }) -> Plaid.BeaconUserGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the status of a Beacon User.

When updating a Beacon User's status via this endpoint, Plaid validates that the status change is consistent with the related state for this Beacon User. Specifically, we will check:

1. Whether there are any associated Beacon Reports connected to the Beacon User, and
2. Whether there are any confirmed Beacon Report Syndications connected to the Beacon User.

When updating a Beacon User's status to `rejected`, we enforce that either a Beacon Report has been created for the Beacon User or a Beacon Report Syndication has been confirmed.
When updating a Beacon User's status to `cleared`, we enforce that there are no active Beacon Reports or confirmed Beacon Report Syndications associated with the user. If you previously created a Beacon Report for this user, you must delete it before updating the Beacon User's status to `cleared`.
There are no restrictions on updating a Beacon User's status to `pending_review`.

If these conditions are not met, the request will be rejected with an error explaining the issue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beaconUser.review({
    beacon_user_id: "becusr_42cF1MNo42r9Xj",
    status: "rejected"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconUserReviewRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconUserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beaconUser.<a href="/src/api/resources/beaconUser/client/Client.ts">update</a>({ ...params }) -> Plaid.BeaconUserUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the identity data for a Beacon User in your Beacon Program or add new accounts to the Beacon User.

Similar to `/beacon/user/create`, several checks are performed immediately when you submit an identity data change to `/beacon/user/update`:

  - The user's updated PII is searched against all other users within the Beacon Program you specified. If a match is found that violates your program's "Duplicate Information Filtering" settings, the user will be returned with a status of `pending_review`.

  - The user's updated PII is also searched against all fraud reports created by your organization across all of your Beacon Programs. If the user's data matches a fraud report that your team created, the user will be returned with a status of `rejected`.

  - Finally, the user's PII is searched against all fraud reports shared with the Beacon Network by other companies. If a matching fraud report is found, the user will be returned with a `pending_review` status if your program has enabled automatic flagging based on network fraud.

Plaid maintains a version history for each Beacon User, so the Beacon User's identity data before and after the update is retained as separate versions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beaconUser.update({
    beacon_user_id: "becusr_42cF1MNo42r9Xj"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconUserUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconUserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beaconUser.<a href="/src/api/resources/beaconUser/client/Client.ts">listHistory</a>({ ...params }) -> core.Page&lt;Plaid.BeaconUser, Plaid.BeaconUserHistoryListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all changes to the Beacon User in reverse-chronological order.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.beaconUser.listHistory({
    beacon_user_id: "becusr_42cF1MNo42r9Xj"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.beaconUser.listHistory({
    beacon_user_id: "becusr_42cF1MNo42r9Xj"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconUserHistoryListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconUserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beaconUser.<a href="/src/api/resources/beaconUser/client/Client.ts">getAccountInsights</a>({ ...params }) -> Plaid.BeaconUserAccountInsightsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Account Insights for all Accounts linked to this Beacon User. The insights for each account are computed based on the information that was last retrieved from the financial institution.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beaconUser.getAccountInsights({
    beacon_user_id: "becusr_42cF1MNo42r9Xj",
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconUserAccountInsightsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconUserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BeaconReport
<details><summary><code>client.beaconReport.<a href="/src/api/resources/beaconReport/client/Client.ts">create</a>({ ...params }) -> Plaid.BeaconReportCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a fraud report for a given Beacon User.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beaconReport.create({
    beacon_user_id: "becusr_42cF1MNo42r9Xj",
    type: "first_party",
    fraud_date: "1990-05-29"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconReportCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beaconReport.<a href="/src/api/resources/beaconReport/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.BeaconReport, Plaid.BeaconReportListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/beacon/report/list` endpoint to view all Beacon Reports you created for a specific Beacon User. The reports returned by this endpoint are exclusively reports you created for a specific user. A Beacon User can only have one active report at a time, but a new report can be created if a previous report has been deleted. The results from this endpoint are paginated; the `next_cursor` field will be populated if there is another page of results that can be retrieved. To fetch the next page, pass the `next_cursor` value as the `cursor` parameter in the next request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.beaconReport.list({
    beacon_user_id: "becusr_42cF1MNo42r9Xj"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.beaconReport.list({
    beacon_user_id: "becusr_42cF1MNo42r9Xj"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconReportListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beaconReport.<a href="/src/api/resources/beaconReport/client/Client.ts">get</a>({ ...params }) -> Plaid.BeaconReportGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a Beacon Report for a given Beacon Report ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beaconReport.get({
    beacon_report_id: "becrpt_11111111111111"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconReportGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BeaconDuplicate
<details><summary><code>client.beaconDuplicate.<a href="/src/api/resources/beaconDuplicate/client/Client.ts">get</a>({ ...params }) -> Plaid.BeaconDuplicateGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a Beacon Duplicate for a given Beacon Duplicate id.

A Beacon Duplicate represents a pair of similar Beacon Users within your organization.

Two Beacon User revisions are returned for each Duplicate record in either the `beacon_user1` or `beacon_user2` response fields.

The `analysis` field in the response indicates which fields matched between `beacon_user1` and `beacon_user2`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beaconDuplicate.get({
    beacon_duplicate_id: "becdup_11111111111111"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BeaconDuplicateGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BeaconDuplicateClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Protect
<details><summary><code>client.protect.<a href="/src/api/resources/protect/client/Client.ts">getUserInsights</a>({ ...params }) -> Plaid.ProtectUserInsightsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to get basic information about a user as it relates to their fraud profile with Protect.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.protect.getUserInsights();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProtectUserInsightsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProtectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.protect.<a href="/src/api/resources/protect/client/Client.ts">createReport</a>({ ...params }) -> Plaid.ProtectReportCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to create a Protect report to document fraud incidents, investigation outcomes, or other risk events. This endpoint allows you to report various types of incidents including account takeovers, identity fraud, unauthorized transactions, and other security events. The reported data helps improve fraud detection models and provides valuable feedback to enhance the overall security of the Plaid network.

Reports can be created for confirmed incidents that have been fully investigated, or for suspected incidents that require further review. You can associate reports with specific users, sessions, or transactions to provide comprehensive context about the incident. Each report must include `user_id`, `client_user_id`, or an `incident_event` with at least one supported identifier: `link_session_id`, `idv_session_id`, `protect_event_id`, `signal_client_transaction_id`, or `access_token`. Context fields such as `internal_reference`, `time`, `amount`, and `bank_account` do not satisfy this identifier requirement.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.protect.createReport({
    report_confidence: "CONFIRMED",
    report_type: "USER_ACCOUNT_TAKEOVER",
    report_source: "INTERNAL_REVIEW"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProtectReportCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProtectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.protect.<a href="/src/api/resources/protect/client/Client.ts">createCashAdvanceDecision</a>({ ...params }) -> Plaid.ProtectCashAdvanceDecisionCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to record a cash-advance decision as feedback. A decision is a determination of whether to approve a user's requested advance and on what terms.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.protect.createCashAdvanceDecision({
    user: {},
    decision_time: "2024-01-15T09:30:00Z",
    decision: "APPROVED"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProtectCashAdvanceDecisionCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProtectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.protect.<a href="/src/api/resources/protect/client/Client.ts">createCashAdvanceRepayment</a>({ ...params }) -> Plaid.ProtectCashAdvanceRepaymentCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to record a cash-advance repayment as feedback. A repayment is a record paying back all or some of a previously-taken cash-advance.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.protect.createCashAdvanceRepayment({
    user: {},
    client_advance_id: "client_advance_id",
    status: "REPAID",
    repayment: {
        amount_due: {
            value: 1.1
        },
        due_date: "2023-01-15"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProtectCashAdvanceRepaymentCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProtectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.protect.<a href="/src/api/resources/protect/client/Client.ts">uploadCashAdvanceFeedback</a>({ ...params }) -> Plaid.ProtectCashAdvanceFeedbackUploadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a CSV file of cash advance decision or repayment feedback. Each row is equivalent to one call to `/protect/cash_advance/decision/create` or `/protect/cash_advance/repayment/create`. Send the request as `multipart/form-data` with `client_id` and `secret` in the `PLAID-CLIENT-ID` and `PLAID-SECRET` headers. The file is accepted for asynchronous processing; the response contains a `request_id` and an `upload_id` that identifies the upload.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.protect.uploadCashAdvanceFeedback({
    feedback_type: "DECISION",
    file: "file"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProtectCashAdvanceFeedbackUploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProtectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.protect.<a href="/src/api/resources/protect/client/Client.ts">compute</a>({ ...params }) -> Plaid.ProtectComputeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Compute a Protect Trust Index score for a user. The model selected determines what is scored and what additional fields the response contains. For example, `ti-link-session-3-<client>` scores a completed Link session for fraud risk; `cash-advance-ongoing-<client>-1.0` scores repayment risk for a cash advance, additionally populating per-amount-bucket subscores. Cash-advance models require that the user have a Plaid Item with Transactions enabled, or an Assets Report, before scoring.

The endpoint returns HTTP 400 with `error_type` = `INVALID_REQUEST` and `error_code` = `FAILED_PRECONDITION` when a required precondition is not met: for link-session models, when the Link session has not completed; for cash-advance models, when the user has not successfully linked any Item. For device-session models, the endpoint may return retryable `error_code` = `SESSION_NOT_READY` until the Protect SDK has delivered device data for the session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.protect.compute({
    model: "model",
    user: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProtectComputeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProtectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.protect.<a href="/src/api/resources/protect/client/Client.ts">sendEvent</a>({ ...params }) -> Plaid.ProtectEventSendResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a new event to enrich user data and optionally get a Trust Index score for the event.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.protect.sendEvent({
    event: null
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProtectEventSendRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProtectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.protect.<a href="/src/api/resources/protect/client/Client.ts">getEvent</a>({ ...params }) -> Plaid.ProtectEventGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a user event including Trust Index score and fraud attributes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.protect.getEvent({
    event_id: "event_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProtectEventGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProtectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BusinessVerification
<details><summary><code>client.businessVerification.<a href="/src/api/resources/businessVerification/client/Client.ts">get</a>({ ...params }) -> Plaid.BusinessVerificationGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the current state of a specific business verification.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.businessVerification.get({
    business_verification_id: "busver_52xR9LKo77r1Np"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BusinessVerificationGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BusinessVerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.businessVerification.<a href="/src/api/resources/businessVerification/client/Client.ts">create</a>({ ...params }) -> Plaid.BusinessVerificationCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new business verification to check a business's identity and risk profile.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.businessVerification.create({
    client_user_id: "your-db-id-3b24110",
    business: {
        name: "Acme Corporation",
        address: {
            street: "123 Main St.",
            city: "Pawnee",
            country: "US"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BusinessVerificationCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BusinessVerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Processor
<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getAuth</a>({ ...params }) -> Plaid.ProcessorAuthGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/processor/auth/get` endpoint returns the bank account and bank identification number (such as the routing number, for US accounts), for a checking, savings, or cash management account that''s associated with a given `processor_token`. The endpoint also returns high-level account data and balances when available.

Versioning note: API versions 2019-05-29 and earlier use a different schema for the `numbers` object returned by this endpoint. For details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2020-09-14).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.getAuth({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorAuthGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getAccount</a>({ ...params }) -> Plaid.ProcessorAccountGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint returns the account associated with a given processor token.

This endpoint retrieves cached information, rather than extracting fresh information from the institution. As a result, the account balance returned may not be up-to-date; for real-time balance information, use `/processor/balance/get` instead. Note that some information is nullable.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.getAccount({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorAccountGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getInvestmentHoldings</a>({ ...params }) -> Plaid.ProcessorInvestmentsHoldingsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint returns the stock position data of the account associated with a given processor token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.getInvestmentHoldings({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorInvestmentsHoldingsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getInvestmentAuth</a>({ ...params }) -> Plaid.ProcessorInvestmentsAuthGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/processor/investments/auth/get` endpoint allows you to retrieve information about the account
authorized by a processor token, including account numbers, account owners, holdings, and data provenance information.

To receive Investments Auth webhooks for a processor token, set its webhook URL via the [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate) endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.getInvestmentAuth({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorInvestmentsAuthGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getInvestmentTransactions</a>({ ...params }) -> core.Page&lt;Plaid.InvestmentTransaction, Plaid.ProcessorInvestmentsTransactionsGetResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/processor/investments/transactions/get` endpoint allows developers to retrieve up to 24 months of user-authorized transaction data for the investment account associated with the processor token.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.

Due to the potentially large number of investment transactions associated with the account, results are paginated. Manipulate the count and offset parameters in conjunction with the `total_investment_transactions` response body field to fetch all available investment transactions.

Note that Investments does not have a webhook to indicate when initial transaction data has loaded (unless you use the `async_update` option). Instead, if transactions data is not ready when `/processor/investments/transactions/get` is first called, Plaid will wait for the data. For this reason, calling `/processor/investments/transactions/get` immediately after Link may take up to one to two minutes to return.

Data returned by the asynchronous investments extraction flow (when `async_update` is set to true) may not be immediately available to `/processor/investments/transactions/get`. To be alerted when the data is ready to be fetched, listen for the `HISTORICAL_UPDATE` webhook. If no investments history is ready when `/processor/investments/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.

To receive Investments Transactions webhooks for a processor token, set its webhook URL via the [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate) endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.processor.getInvestmentTransactions({
    processor_token: "processor_token",
    start_date: "2023-01-15",
    end_date: "2023-01-15"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.processor.getInvestmentTransactions({
    processor_token: "processor_token",
    start_date: "2023-01-15",
    end_date: "2023-01-15"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorInvestmentsTransactionsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getTransactions</a>({ ...params }) -> core.Page&lt;Plaid.Transaction, Plaid.ProcessorTransactionsGetResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/processor/transactions/get` endpoint allows developers to receive user-authorized transaction data for credit, depository, and loan-type accounts (coverage may be limited). Transaction data is standardized across financial institutions, and in many cases transactions are linked to a clean name, entity type, location, and category. Similarly, account data is standardized and returned with a clean name, number, balance, and other meta information where available.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.  Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/processor/transactions/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).

Due to the potentially large number of transactions associated with a processor token, results are paginated. Manipulate the `count` and `offset` parameters in conjunction with the `total_transactions` response body field to fetch all available transactions.

Data returned by `/processor/transactions/get` will be the data available for the processor token as of the most recent successful check for new transactions. Plaid typically checks for new data multiple times a day, but these checks may occur less frequently, such as once a day, depending on the institution. To force Plaid to check for new transactions, you can use the `/processor/transactions/refresh` endpoint.

Note that data may not be immediately available to `/processor/transactions/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `transactions`, or upon the first call to `/processor/transactions/get`, if it wasn't. If no transaction history is ready when `/processor/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.

To receive Transactions webhooks for a processor token, set its webhook URL via the [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate) endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.processor.getTransactions({
    processor_token: "processor_token",
    start_date: "2023-01-15",
    end_date: "2023-01-15"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.processor.getTransactions({
    processor_token: "processor_token",
    start_date: "2023-01-15",
    end_date: "2023-01-15"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorTransactionsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">syncTransactions</a>({ ...params }) -> Plaid.ProcessorTransactionsSyncResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


The `/processor/transactions/sync` endpoint retrieves transactions associated with an Item and can fetch updates using a cursor to track which updates have already been seen.

For important instructions on integrating with `/processor/transactions/sync`, see the [Transactions integration overview](https://plaid.com/docs/transactions/#integration-overview). If you are migrating from an existing integration using `/processor/transactions/get`, see the [Transactions Sync migration guide](https://plaid.com/docs/transactions/sync-migration/).

This endpoint supports `credit`, `depository`, and `loan`-type accounts. For `investments` accounts, use `/processor/investments/transactions/get` instead.

When retrieving paginated updates, track both the `next_cursor` from the latest response and the original cursor from the first call in which `has_more` was `true`; if a call to `/processor/transactions/sync` fails when retrieving a paginated update (e.g. due to the [`TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION`](https://plaid.com/docs/errors/transactions/#transactions_sync_mutation_during_pagination) error), the entire pagination request loop must be restarted beginning with the cursor for the first page of the update, rather than retrying only the single request that failed.

If transactions data is not yet available for the Item, which can happen if the Item was not initialized with transactions during the `/link/token/create` call or if `/processor/transactions/sync` was called within a few seconds of Item creation, `/processor/transactions/sync` will return empty transactions arrays.

Plaid typically checks for new transactions data between one and four times per day, depending on the institution. To find out when transactions were last updated for an Item, use the [Item Debugger](https://plaid.com/docs/account/activity/#troubleshooting-with-item-debugger) or call `/item/get`; the `item.status.transactions.last_successful_update` field will show the timestamp of the most recent successful update. To force Plaid to check for new transactions, use the `/processor/transactions/refresh` endpoint.

To be alerted when new transactions are available, listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) webhook.

To receive Transactions webhooks for a processor token, set its webhook URL via the [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate) endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.syncTransactions({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorTransactionsSyncRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">refreshTransactions</a>({ ...params }) -> Plaid.ProcessorTransactionsRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/processor/transactions/refresh` is an optional endpoint for users of the Transactions product. It initiates an on-demand extraction to fetch the newest transactions for a processor token. This on-demand extraction takes place in addition to the periodic extractions that automatically occur one or more times per day for any Transactions-enabled processor token. If changes to transactions are discovered after calling `/processor/transactions/refresh`, Plaid will fire a webhook: for `/processor/transactions/sync` users, [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) will be fired if there are any transactions updated, added, or removed. For users of both `/processor/transactions/sync` and `/processor/transactions/get`, [`TRANSACTIONS_REMOVED`](https://plaid.com/docs/api/products/transactions/#transactions_removed) will be fired if any removed transactions are detected, and [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/transactions/#default_update) will be fired if any new transactions are detected. New transactions can be fetched by calling `/processor/transactions/get` or `/processor/transactions/sync`. Note that the `/processor/transactions/refresh` endpoint is not supported for Capital One (`ins_128026`) non-depository accounts and will result in a `PRODUCTS_NOT_SUPPORTED` error if called on an Item that contains only non-depository accounts from that institution.

As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

`/processor/transactions/refresh` is offered as an add-on to Transactions and has a separate [fee model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.refreshTransactions({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorTransactionsRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getRecurringTransactions</a>({ ...params }) -> Plaid.ProcessorTransactionsRecurringGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/processor/transactions/recurring/get` endpoint allows developers to receive a summary of the recurring outflow and inflow streams (expenses and deposits) from a user's checking, savings or credit card accounts. Additionally, Plaid provides key insights about each recurring stream including the category, merchant, last amount, and more. Developers can use these insights to build tools and experiences that help their users better manage cash flow, monitor subscriptions, reduce spend, and stay on track with bill payments.

This endpoint is offered as an add-on to Transactions. To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

This endpoint can only be called on a processor token that has already been initialized with Transactions (either during Link, by specifying it in `/link/token/create`; or after Link, by calling `/processor/transactions/get` or `/processor/transactions/sync`). Once all historical transactions have been fetched, call `/processor/transactions/recurring/get` to receive the Recurring Transactions streams and subscribe to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook. To know when historical transactions have been fetched, if you are using `/processor/transactions/sync` listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#SyncUpdatesAvailableWebhook-historical-update-complete) webhook and check that the `historical_update_complete` field in the payload is `true`. If using `/processor/transactions/get`, listen for the [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhook.

After the initial call, you can call the `/processor/transactions/recurring/get` endpoint at any point in the future to retrieve the latest summary of recurring streams. Listen to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook to be notified when new updates are available.

To receive Transactions webhooks for a processor token, set its webhook URL via the [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate) endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.getRecurringTransactions({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorTransactionsRecurringGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">createBankTransfer</a>({ ...params }) -> Plaid.ProcessorBankTransferCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/processor/bank_transfer/create` endpoint to initiate a new bank transfer as a processor
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.createBankTransfer({
    idempotency_key: "idempotency_key",
    processor_token: "processor_token",
    type: "debit",
    network: "ach",
    amount: "amount",
    iso_currency_code: "iso_currency_code",
    description: "description",
    user: {
        legal_name: "legal_name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorBankTransferCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getLiabilities</a>({ ...params }) -> Plaid.ProcessorLiabilitiesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/processor/liabilities/get` endpoint returns various details about a loan or credit account. Liabilities data is available primarily for US financial institutions, with some limited coverage of Canadian institutions. Currently supported account types are account type `credit` with account subtype `credit card` or `paypal`, and account type `loan` with account subtype `student` or `mortgage`.

The types of information returned by Liabilities can include balances and due dates, loan terms, and account details such as original loan amount and guarantor. Data is refreshed approximately once per day; the latest data can be retrieved by calling `/processor/liabilities/get`.

Note: This request may take some time to complete if `liabilities` was not specified as an initial product when creating the processor token. This is because Plaid must communicate directly with the institution to retrieve the additional data.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.getLiabilities({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorLiabilitiesGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getIdentity</a>({ ...params }) -> Plaid.ProcessorIdentityGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/processor/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.getIdentity({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorIdentityGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">matchIdentity</a>({ ...params }) -> Plaid.ProcessorIdentityMatchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/processor/identity/match` endpoint generates a match score, which indicates how well the provided identity data matches the identity information on file with the account holder's financial institution.

Fields within the `balances` object will always be null when retrieved by `/processor/identity/match`. Instead, use the `/processor/balance/get` endpoint to retrieve balance data.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.matchIdentity({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorIdentityMatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getBalance</a>({ ...params }) -> Plaid.ProcessorBalanceGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/processor/balance/get` endpoint returns the real-time balance for the account associated with the processor token. While other endpoints may return a balance object, only `/processor/balance/get` forces the available and current balance fields to be refreshed rather than cached. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.getBalance({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorBalanceGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">createToken</a>({ ...params }) -> Plaid.ProcessorTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to create a token suitable for sending to one of Plaid's partners to enable integrations. To create a Stripe bank account token (`btok_...`), use `/processor/stripe/bank_account_token/create`. If using multiple processors, multiple different processor tokens can be created for a single access token. Once created, a processor token for a given Item can be modified by calling `/processor/token/permissions/set`. To revoke the processor's access, the entire Item must be deleted by calling `/item/remove`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.createToken({
    access_token: "access_token",
    account_id: "account_id",
    processor: "dwolla"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">setTokenPermissions</a>({ ...params }) -> Plaid.ProcessorTokenPermissionsSetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to control a processor's access to products on the given processor token. By default, a processor will have access to all available products on the corresponding item. To restrict access to a particular set of products, call this endpoint with the desired products. To restore access to all available products, call this endpoint with an empty list. This endpoint can be called multiple times as your needs and your processor's needs change.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.setTokenPermissions({
    processor_token: "processor_token",
    products: ["assets"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorTokenPermissionsSetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">getTokenPermissions</a>({ ...params }) -> Plaid.ProcessorTokenPermissionsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to get a processor token's product permissions. The `products` field will be an empty list if the processor can access all available products.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.getTokenPermissions({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorTokenPermissionsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">updateTokenWebhook</a>({ ...params }) -> Plaid.ProcessorTokenWebhookUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you, the processor, to update the webhook URL associated with a processor token. This request triggers a `WEBHOOK_UPDATE_ACKNOWLEDGED` webhook to the newly specified webhook URL.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.updateTokenWebhook({
    processor_token: "processor_token",
    webhook: null
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorTokenWebhookUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">createStripeBankAccountToken</a>({ ...params }) -> Plaid.ProcessorStripeBankAccountTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Used to create a token suitable for sending to Stripe to enable Plaid-Stripe integrations. For a detailed guide on integrating Stripe, see [Add Stripe to your app](https://plaid.com/docs/auth/partnerships/stripe/).

Note that the Stripe bank account token is a one-time use token. To store bank account information for later use, you can use a Stripe customer object and create an associated bank account from the token, or you can use a Stripe Custom account and create an associated external bank account from the token. This bank account information should work indefinitely, unless the user's bank account information changes or they revoke Plaid's permissions to access their account. Stripe bank account information cannot be modified once the bank account token has been created. If you ever need to change the bank account details used by Stripe for a specific customer, have the user go through Link again and create a new bank account token from the new `access_token`.

To revoke a bank account token, the entire underlying access token must be revoked using `/item/remove`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.createStripeBankAccountToken({
    access_token: "access_token",
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorStripeBankAccountTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.<a href="/src/api/resources/processor/client/Client.ts">createApexProcessorToken</a>({ ...params }) -> Plaid.ProcessorTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to create a token suitable for sending to Apex to enable Plaid-Apex integrations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.createApexProcessorToken({
    access_token: "access_token",
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.ProcessorApexProcessorTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProcessorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## WebhookEvents
<details><summary><code>client.webhookEvents.<a href="/src/api/resources/webhookEvents/client/Client.ts">list</a>({ ...params }) -> Plaid.BetaWebhookEventsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/beta/webhook_events/list` returns the webhooks Plaid sent to your account in the last 7 days, including webhooks that weren't delivered. Use it to recover webhooks your endpoint missed. Events are returned oldest first.

`TRANSACTIONS` webhooks are not included. To recover Transactions updates, use [`/transactions/sync`](https://plaid.com/docs/api/products/transactions/#transactionssync).

To page through events, omit `cursor` on your first request, then pass the previous response's `next_cursor` on each later request. Store `next_cursor` even when `has_more` is `false`, so your next poll returns only newer events.

Filters are optional. An event matches a filter if it matches any of the filter's values, and must match every filter you provide.

Events older than 7 days are not retained. If your cursor or `start_time` is older than that, the request fails with `WEBHOOK_EVENTS_CURSOR_EXPIRED` or `WEBHOOK_EVENTS_START_TIME_OUT_OF_RANGE`.

This endpoint is in beta and may change in backwards-incompatible ways. Send feedback to building@plaid.com.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookEvents.list({
    count: 100
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaWebhookEventsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Webhook
<details><summary><code>client.webhook.<a href="/src/api/resources/webhook/client/Client.ts">getVerificationKey</a>({ ...params }) -> Plaid.WebhookVerificationKeyGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Plaid signs all outgoing webhooks and provides JSON Web Tokens (JWTs) so that you can verify the authenticity of any incoming webhooks to your application. A message signature is included in the `Plaid-Verification` header.

The `/webhook_verification_key/get` endpoint provides a JSON Web Key (JWK) that can be used to verify a JWT.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhook.getVerificationKey({
    key_id: "key_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WebhookVerificationKeyGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Liabilities
<details><summary><code>client.liabilities.<a href="/src/api/resources/liabilities/client/Client.ts">get</a>({ ...params }) -> Plaid.LiabilitiesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/liabilities/get` endpoint returns various details about an Item with loan or credit accounts. Liabilities data is available primarily for US financial institutions, with some limited coverage of Canadian institutions. Supported account types are account type `credit` with account subtype `credit card` or `paypal`; and account type `loan` with account subtype `auto`, `commercial`, `commercial line of credit`, `consumer`, `home equity`, `home equity loan`, `line of credit`, `loan`, `mortgage`, or `student`. To limit accounts listed in Link to types and subtypes supported by Liabilities, you can use the `account_filters` parameter when [creating a Link token](https://plaid.com/docs/api/link/#linktokencreate).

To receive the expanded loan subtype values, use plaid-go 10.1.0 or later, plaid-java 44.0.0 or later, plaid-python 8.3.0 or later, or plaid-ruby 14.4.0 or later. Earlier client library versions may receive `loan` instead of `home equity loan` and `line of credit` instead of `commercial line of credit`.

The types of information returned by Liabilities can include balances and due dates, loan terms, and account details such as original loan amount and guarantor. Data is refreshed approximately once per day; the latest data can be retrieved by calling `/liabilities/get`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.liabilities.get({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.LiabilitiesGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LiabilitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PaymentInitiation
<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">createRecipient</a>({ ...params }) -> Plaid.PaymentInitiationRecipientCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a payment recipient for payment initiation.  The recipient must be in Europe, within a country that is a member of the Single Euro Payments Area (SEPA) or a non-Eurozone country [supported](https://support.plaid.com/hc/en-us/articles/27895826947735-What-Plaid-products-are-supported-in-each-country-and-region) by Plaid. For a standing order (recurring) payment, the recipient must be in the UK.

It is recommended to use `bacs` in the UK and `iban` in EU.

The endpoint is idempotent: if a developer has already made a request with the same payment details, Plaid will return the same `recipient_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentInitiation.createRecipient({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationRecipientCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">reversePayment</a>({ ...params }) -> Plaid.PaymentInitiationPaymentReverseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reverse a settled payment from a Plaid virtual account.

The original payment must be in a settled state to be refunded.
To refund partially, specify the amount as part of the request.
If the amount is not specified, the refund amount will be equal to all
of the remaining payment amount that has not been refunded yet.

The refund will go back to the source account that initiated the payment.
The original payment must have been initiated to a Plaid virtual account
so that this account can be used to initiate the refund.

Providing counterparty information such as date of birth and address increases
the likelihood of refund being successful without human intervention.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentInitiation.reversePayment({
    payment_id: "payment_id",
    idempotency_key: "idempotency_key",
    reference: "reference"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationPaymentReverseRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">getRecipient</a>({ ...params }) -> Plaid.PaymentInitiationRecipientGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details about a payment recipient you have previously created.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentInitiation.getRecipient({
    recipient_id: "recipient_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationRecipientGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">listRecipients</a>({ ...params }) -> core.Page&lt;Plaid.PaymentInitiationRecipient, Plaid.PaymentInitiationRecipientListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/payment_initiation/recipient/list` endpoint lists the payment recipients that you have previously created.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.paymentInitiation.listRecipients();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.paymentInitiation.listRecipients();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationRecipientListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">createPayment</a>({ ...params }) -> Plaid.PaymentInitiationPaymentCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

After creating a payment recipient, you can use the `/payment_initiation/payment/create` endpoint to create a payment to that recipient.  Payments can be one-time or standing order (recurring) and can be denominated in EUR, GBP, or another chosen [currency](https://plaid.com/docs/api/products/payment-initiation/#payment_initiation-payment-create-request-amount-currency).  If making domestic GBP-denominated payments, your recipient must have been created with Bacs numbers. In general, EUR-denominated payments will be sent via SEPA Credit Transfer, GBP-denominated payments will be sent via the Faster Payments network and for non-Eurozone markets typically via the local payment scheme, but the payment network used will be determined by the institution. Payments sent via Faster Payments will typically arrive immediately, while payments sent via SEPA Credit Transfer or other local payment schemes will typically arrive in one business day.

Standing orders (recurring payments) must be denominated in GBP and can only be sent to recipients in the UK. Once created, standing order payments cannot be modified or canceled via the API. An end user can cancel or modify a standing order directly on their banking application or website, or by contacting the bank. Standing orders will follow the payment rules of the underlying rails (Faster Payments in UK). Payments can be sent Monday to Friday, excluding bank holidays. If the pre-arranged date falls on a weekend or bank holiday, the payment is made on the next working day. It is not possible to guarantee the exact time the payment will reach the recipient's account, although at least 90% of standing order payments are sent by 6am.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentInitiation.createPayment({
    recipient_id: "recipient_id",
    reference: "reference",
    amount: {
        currency: "GBP",
        value: 1.1
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationPaymentCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">createPaymentToken</a>({ ...params }) -> Plaid.PaymentInitiationPaymentTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/payment_initiation/payment/token/create` endpoint has been deprecated. New Plaid customers will be unable to use this endpoint, and existing customers are encouraged to migrate to the newer, `link_token`-based flow. The recommended flow is to provide the `payment_id` to `/link/token/create`, which returns a `link_token` used to initialize Link.

The `/payment_initiation/payment/token/create` endpoint is used to create a `payment_token`, which can then be used in Link initialization to enter a payment initiation flow. You can only use a `payment_token` once. If this attempt fails, the end user aborts the flow, or the token expires, you will need to create a new payment token. Creating a new payment token does not require end user input.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentInitiation.createPaymentToken({
    payment_id: "payment_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationPaymentTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">createConsent</a>({ ...params }) -> Plaid.PaymentInitiationConsentCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/payment_initiation/consent/create` endpoint is used to create a payment consent, which can be used to initiate payments on behalf of the user. Payment consents are created with `UNAUTHORISED` status by default and must be authorised by the user before payments can be initiated.

Consents can be limited in time and scope, and have constraints that describe limitations for payments.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentInitiation.createConsent({
    recipient_id: "recipient_id",
    reference: "reference",
    constraints: {
        max_payment_amount: {
            currency: "GBP",
            value: 1.1
        },
        periodic_amounts: [{
                amount: {
                    currency: "GBP",
                    value: 1.1
                },
                interval: "DAY",
                alignment: "CALENDAR"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationConsentCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">getConsent</a>({ ...params }) -> Plaid.PaymentInitiationConsentGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/payment_initiation/consent/get` endpoint can be used to check the status of a payment consent, as well as to receive basic information such as recipient and constraints.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentInitiation.getConsent({
    consent_id: "consent_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationConsentGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">revokeConsent</a>({ ...params }) -> Plaid.PaymentInitiationConsentRevokeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/payment_initiation/consent/revoke` endpoint can be used to revoke the payment consent. Once the consent is revoked, it is not possible to initiate payments using it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentInitiation.revokeConsent({
    consent_id: "consent_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationConsentRevokeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">executeConsentPayment</a>({ ...params }) -> Plaid.PaymentInitiationConsentPaymentExecuteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/payment_initiation/consent/payment/execute` endpoint can be used to execute payments using payment consent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentInitiation.executeConsentPayment({
    consent_id: "consent_id",
    amount: {
        currency: "GBP",
        value: 1.1
    },
    idempotency_key: "idempotency_key"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationConsentPaymentExecuteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">getPayment</a>({ ...params }) -> Plaid.PaymentInitiationPaymentGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/payment_initiation/payment/get` endpoint can be used to check the status of a payment, as well as to receive basic information such as recipient and payment amount. In the case of standing orders, the `/payment_initiation/payment/get` endpoint will provide information about the status of the overall standing order itself; the API cannot be used to retrieve payment status for individual payments within a standing order.

Polling for status updates in Production is highly discouraged. Repeatedly calling `/payment_initiation/payment/get` to check a payment's status is unreliable and may trigger API rate limits. Only the `PAYMENT_STATUS_UPDATE` webhook should be used to receive real-time status updates in Production.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentInitiation.getPayment({
    payment_id: "payment_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationPaymentGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentInitiation.<a href="/src/api/resources/paymentInitiation/client/Client.ts">listPayments</a>({ ...params }) -> core.Page&lt;Plaid.PaymentInitiationPayment, Plaid.PaymentInitiationPaymentListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/payment_initiation/payment/list` endpoint can be used to retrieve all created payments. By default, the 10 most recent payments are returned. You can request more payments and paginate through the results using the optional `count` and `cursor` parameters.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.paymentInitiation.listPayments();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.paymentInitiation.listPayments();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentInitiationPaymentListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentInitiationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Investments
<details><summary><code>client.investments.<a href="/src/api/resources/investments/client/Client.ts">getHoldings</a>({ ...params }) -> Plaid.InvestmentsHoldingsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/investments/holdings/get` endpoint allows developers to receive user-authorized stock position data for `investment`-type accounts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.investments.getHoldings({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.InvestmentsHoldingsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvestmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.investments.<a href="/src/api/resources/investments/client/Client.ts">getTransactions</a>({ ...params }) -> core.Page&lt;Plaid.InvestmentTransaction, Plaid.InvestmentsTransactionsGetResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/investments/transactions/get` endpoint allows developers to retrieve up to 24 months of user-authorized transaction data for investment accounts.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.

Due to the potentially large number of investment transactions associated with an Item, results are paginated. Manipulate the count and offset parameters in conjunction with the `total_investment_transactions` response body field to fetch all available investment transactions.

Note that Investments does not have a webhook to indicate when initial transaction data has loaded (unless you use the `async_update` option). Instead, if transactions data is not ready when `/investments/transactions/get` is first called, Plaid will wait for the data. For this reason, calling `/investments/transactions/get` immediately after Link may take up to one to two minutes to return.

Data returned by the asynchronous investments extraction flow (when `async_update` is set to true) may not be immediately available to `/investments/transactions/get`. To be alerted when the data is ready to be fetched, listen for the `HISTORICAL_UPDATE` webhook. If no investments history is ready when `/investments/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.investments.getTransactions({
    access_token: "access_token",
    start_date: "2023-01-15",
    end_date: "2023-01-15"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.investments.getTransactions({
    access_token: "access_token",
    start_date: "2023-01-15",
    end_date: "2023-01-15"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.InvestmentsTransactionsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvestmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.investments.<a href="/src/api/resources/investments/client/Client.ts">refresh</a>({ ...params }) -> Plaid.InvestmentsRefreshResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/investments/refresh` is an optional endpoint for users of the Investments product. It initiates an on-demand extraction to fetch the newest investment holdings and transactions for an Item. This on-demand extraction takes place in addition to the periodic extractions that automatically occur one or more times per day for any Investments-enabled Item. If changes to investments are discovered after calling `/investments/refresh`, Plaid will fire webhooks: [`HOLDINGS: DEFAULT_UPDATE`](https://plaid.com/docs/api/products/investments/#holdings-default_update) if any new holdings are detected, and [`INVESTMENTS_TRANSACTIONS: DEFAULT_UPDATE`](https://plaid.com/docs/api/products/investments/#investments_transactions-default_update) if any new investment transactions are detected. This webhook will typically not fire in the Sandbox environment, due to the lack of dynamic investment transactions and holdings data. To test this webhook in Sandbox, call `/sandbox/item/fire_webhook`. Updated holdings and investment transactions can be fetched by calling `/investments/holdings/get` and `/investments/transactions/get`. Note that the `/investments/refresh` endpoint is not supported by all institutions. If called on an Item from an institution that does not support this functionality, it will return a `PRODUCTS_NOT_SUPPORTED` error.

As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

`/investments/refresh` is offered as an add-on to Investments and has a separate [fee model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.investments.refresh({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.InvestmentsRefreshRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvestmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.investments.<a href="/src/api/resources/investments/client/Client.ts">getAuth</a>({ ...params }) -> Plaid.InvestmentsAuthGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/investments/auth/get` endpoint allows developers to receive user-authorized data to facilitate the transfer of holdings
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.investments.getAuth({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.InvestmentsAuthGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvestmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Link
<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">createToken</a>({ ...params }) -> Plaid.LinkTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/link/token/create` endpoint creates a `link_token`, which is required as a parameter when initializing Link. Once Link has been initialized, it returns a `public_token`. For most Plaid products, the `public_token` is saved and exchanged for an `access_token` via `/item/public_token/exchange` as part of the main Link flow. For more details, see the [Link flow overview](https://plaid.com/docs/link/#link-flow-overview).

A `link_token` generated by `/link/token/create` is also used to initialize other Link flows, such as the [update mode](https://plaid.com/docs/link/update-mode) flow for tokens with expired credentials, or the Identity Verification flow.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.createToken({
    client_name: "client_name",
    language: "language",
    country_codes: ["US"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.LinkTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">getToken</a>({ ...params }) -> Plaid.LinkTokenGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/link/token/get` endpoint gets information about a Link session, including all callbacks fired during the session along with their metadata, including the public token. This endpoint is used with Link flows that don't provide a public token via frontend callbacks, such as the [Hosted Link flow](https://plaid.com/docs/link/hosted-link/) and the [Multi-Item Link flow](https://plaid.com/docs/link/multi-item-link/). It also can be useful for debugging purposes.

By default, this endpoint will only return complete event data for Hosted Link sessions. To use `/link/token/get` to retrieve event data for non-Hosted-Link sessions, contact your account manager to request that your account be enabled for Link events. If you do not have an account manager, you can submit this request via a support ticket. Enablement for Link events will also cause you to receive additional webhooks related to Link events, such as the `SESSION_FINISHED` and `EVENTS` webhook.

When called with a delegated OAuth access token, this endpoint returns a reduced view of the session for the delegate. Only `link_token`, `created_at`, `expiration`, and each session's `link_session_id`, `started_at`, `finished_at`, and `results.item_add_results[].public_token` are populated; `public_token` holds the delegate's own `delegated-public-` token, never the customer's public token. All other fields are withheld and carry no information about the session: arrays such as `metadata.initial_products` and `item_add_results[].accounts` are empty, fields such as `metadata.webhook` and `item_add_results[].institution` are `null`, and `user_id`, `events`, `on_success`, `on_exit`, and `exit` are omitted. A delegated public token can be retrieved for 30 minutes after it is created. Item adds whose delegated public token is no longer available are omitted from `item_add_results`, and if none remain the request fails with `INVALID_LINK_TOKEN`; start a new Link session to continue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.getToken({
    link_token: "link_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.LinkTokenGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.link.<a href="/src/api/resources/link/client/Client.ts">exchangeOauthCorrelationId</a>({ ...params }) -> Plaid.LinkOAuthCorrelationIdExchangeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange an OAuth `link_correlation_id` for the corresponding `link_token`. The `link_correlation_id` is only available for `payment_initiation` products and is provided to the client via the OAuth `redirect_uri` as a query parameter.
The `link_correlation_id` is ephemeral and expires in a brief period, after which it can no longer be exchanged for the `link_token`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.link.exchangeOauthCorrelationId({
    link_correlation_id: "link_correlation_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.LinkOAuthCorrelationIdExchangeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Session
<details><summary><code>client.session.<a href="/src/api/resources/session/client/Client.ts">createToken</a>({ ...params }) -> Plaid.SessionTokenCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/session/token/create` is used to create a Link token for Layer. The returned Link token is used as a parameter when initializing the Link SDK. For more details, see the [Link flow overview](https://plaid.com/docs/link/#link-flow-overview).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.session.createToken({
    template_id: "template_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SessionTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SessionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer
<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transfer/get` endpoint fetches information about the transfer corresponding to the given `transfer_id` or `authorization_id`. One of `transfer_id` or `authorization_id` must be populated but not both.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransferGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">create</a>({ ...params }) -> Plaid.TransferCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/create` endpoint to initiate a new transfer. This endpoint is retryable and idempotent; if a transfer with the provided `authorization_id` has already been created, it will return the transfer details without creating a new transfer. A transfer may still be created if a 500 error is returned; to detect this scenario, use [Transfer events](https://plaid.com/docs/transfer/reconciling-transfers/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.create({
    access_token: "access_token",
    account_id: "account_id",
    authorization_id: "authorization_id",
    description: "description"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransferCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.Transfer, Plaid.TransferListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/list` endpoint to see a list of all your transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired transfers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transfer.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transfer.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransferListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">cancel</a>({ ...params }) -> Plaid.TransferCancelResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/cancel` endpoint to cancel a transfer.  A transfer is eligible for cancellation if the `cancellable` property returned by `/transfer/get` is `true`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.cancel({
    transfer_id: "transfer_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransferCancelRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">migrateAccount</a>({ ...params }) -> Plaid.TransferMigrateAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

As an alternative to adding Items via Link, you can also use the `/transfer/migrate_account` endpoint to migrate previously-verified account and routing numbers to Plaid Items. This endpoint is also required when adding an Item for use with wire transfers; if you intend to create wire transfers on this account, you must provide `wire_routing_number`. Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid account manager or [support](https://dashboard.plaid.com/support).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.migrateAccount({
    account_number: "account_number",
    routing_number: "routing_number",
    account_type: "account_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransferMigrateAccountRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">recoverReturn</a>({ ...params }) -> Plaid.TransferReturnRecoverResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/return/recover` endpoint to notify Plaid that you have recovered some or all of the loss on a returned guaranteed transfer.

Recovery can be reported in full or in parts; the sum of recovered amounts across calls cannot exceed the guaranteed amount of the original transfer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.recoverReturn({
    transfer_id: "transfer_id",
    amount: "amount",
    idempotency_key: "idempotency_key"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.TransferReturnRecoverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BankTransfer
<details><summary><code>client.bankTransfer.<a href="/src/api/resources/bankTransfer/client/Client.ts">get</a>({ ...params }) -> Plaid.BankTransferGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/bank_transfer/get` fetches information about the bank transfer corresponding to the given `bank_transfer_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankTransfer.get({
    bank_transfer_id: "bank_transfer_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BankTransferGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankTransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bankTransfer.<a href="/src/api/resources/bankTransfer/client/Client.ts">create</a>({ ...params }) -> Plaid.BankTransferCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/bank_transfer/create` endpoint to initiate a new bank transfer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankTransfer.create({
    idempotency_key: "idempotency_key",
    access_token: "access_token",
    account_id: "account_id",
    type: "debit",
    network: "ach",
    amount: "amount",
    iso_currency_code: "iso_currency_code",
    description: "description",
    user: {
        legal_name: "legal_name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BankTransferCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankTransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bankTransfer.<a href="/src/api/resources/bankTransfer/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.BankTransfer, Plaid.BankTransferListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/bank_transfer/list` endpoint to see a list of all your bank transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired bank transfers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.bankTransfer.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.bankTransfer.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BankTransferListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankTransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bankTransfer.<a href="/src/api/resources/bankTransfer/client/Client.ts">cancel</a>({ ...params }) -> Plaid.BankTransferCancelResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/bank_transfer/cancel` endpoint to cancel a bank transfer.  A transfer is eligible for cancelation if the `cancellable` property returned by `/bank_transfer/get` is `true`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankTransfer.cancel({
    bank_transfer_id: "bank_transfer_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BankTransferCancelRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankTransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bankTransfer.<a href="/src/api/resources/bankTransfer/client/Client.ts">migrateAccount</a>({ ...params }) -> Plaid.BankTransferMigrateAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

As an alternative to adding Items via Link, you can also use the `/bank_transfer/migrate_account` endpoint to migrate known account and routing numbers to Plaid Items.  Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Bank Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/bank_transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid account manager.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankTransfer.migrateAccount({
    account_number: "account_number",
    routing_number: "routing_number",
    account_type: "account_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BankTransferMigrateAccountRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankTransferClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Employers
<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">search</a>({ ...params }) -> Plaid.EmployersSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/employers/search` allows you the ability to search Plaid's database of known employers, for use with Deposit Switch. You can use this endpoint to look up a user's employer in order to confirm that they are supported. Users with non-supported employers can then be routed out of the Deposit Switch flow.

The data in the employer database is currently limited. As the Deposit Switch and Income products progress through their respective beta periods, more employers are being regularly added. Because the employer database is frequently updated, we recommend that you do not cache or store data from this endpoint for more than a day.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.search({
    query: "query",
    products: ["products"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.EmployersSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## IncomeVerification
<details><summary><code>client.incomeVerification.<a href="/src/api/resources/incomeVerification/client/Client.ts">create</a>({ ...params }) -> Plaid.IncomeVerificationCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/income/verification/create` begins the income verification process by returning an `income_verification_id`. You can then provide the `income_verification_id` to `/link/token/create` under the `income_verification` parameter in order to create a Link instance that will prompt the user to go through the income verification flow. Plaid will fire an `INCOME` webhook once the user completes the Payroll Income flow, or when the uploaded documents in the Document Income flow have finished processing. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.incomeVerification.create({
    webhook: "webhook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IncomeVerificationCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IncomeVerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.incomeVerification.<a href="/src/api/resources/incomeVerification/client/Client.ts">getPaystubs</a>({ ...params }) -> Plaid.IncomeVerificationPaystubsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/income/verification/paystubs/get` returns the information collected from the paystubs that were used to verify an end user's income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.incomeVerification.getPaystubs();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IncomeVerificationPaystubsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IncomeVerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.incomeVerification.<a href="/src/api/resources/incomeVerification/client/Client.ts">downloadDocuments</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/income/verification/documents/download` provides the ability to download the source documents associated with the verification.

If Document Income was used, the documents will be those the user provided in Link. For Payroll Income, the most recent files available for download from the payroll provider will be available from this endpoint.

The response to `/income/verification/documents/download` is a ZIP file in binary data. If a `document_id` is passed, a single document will be contained in this file.
If not, the response will contain all documents associated with the verification.

The `request_id` is returned in the `Plaid-Request-ID` header.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.incomeVerification.downloadDocuments();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IncomeVerificationDocumentsDownloadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IncomeVerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.incomeVerification.<a href="/src/api/resources/incomeVerification/client/Client.ts">getTaxforms</a>({ ...params }) -> Plaid.IncomeVerificationTaxformsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/income/verification/taxforms/get` returns the information collected from forms that were used to verify an end user''s income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.incomeVerification.getTaxforms();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IncomeVerificationTaxformsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IncomeVerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.incomeVerification.<a href="/src/api/resources/incomeVerification/client/Client.ts">precheck</a>({ ...params }) -> Plaid.IncomeVerificationPrecheckResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/income/verification/precheck` is an optional endpoint that can be called before initializing a Link session for income verification. It evaluates whether a given user is supportable by digital income verification and returns a `precheck_id` that can be provided to `/link/token/create`. If the user is eligible for digital verification, providing the `precheck_id` in this way will generate a Link UI optimized for the end user and their specific employer. If the user cannot be confirmed as eligible, the `precheck_id` can still be provided to `/link/token/create` and the user can still use the income verification flow, but they may be required to manually upload a paystub to verify their income.

While all request fields are optional, providing either `employer` or `transactions_access_tokens` data will increase the chance of receiving a useful result.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/precheck` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.incomeVerification.precheck();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IncomeVerificationPrecheckRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IncomeVerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## EmploymentVerification
<details><summary><code>client.employmentVerification.<a href="/src/api/resources/employmentVerification/client/Client.ts">get</a>({ ...params }) -> Plaid.EmploymentVerificationGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/employment/verification/get` returns a list of employments through a user payroll that was verified by an end user.

This endpoint has been deprecated; new integrations should use `/credit/employment/get` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employmentVerification.get({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.EmploymentVerificationGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmploymentVerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Signal
<details><summary><code>client.signal.<a href="/src/api/resources/signal/client/Client.ts">evaluate</a>({ ...params }) -> Plaid.SignalEvaluateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use `/signal/evaluate` to evaluate a planned ACH transaction to get a return risk assessment and additional risk signals.

Before using `/signal/evaluate`, you must first [create a ruleset](https://plaid.com/docs/signal/signal-rules/) in the Dashboard under [**Signal->Rules**](https://dashboard.plaid.com/signal/risk-profiles).

`/signal/evaluate` can be used with either Signal Transaction Scores or the Balance product. Which product is used will be determined by the `ruleset_key` that you provide. For more details, see [Signal Rules](https://plaid.com/docs/signal/signal-rules/).

Note: This request may have higher latency when using a Balance-only ruleset. This is because Plaid must communicate directly with the institution to request data. Balance-only rulesets may have latency of up to 30 seconds or more; if you encounter errors, you may find it necessary to adjust your timeout period when making requests.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.signal.evaluate({
    access_token: "access_token",
    account_id: "account_id",
    client_transaction_id: "client_transaction_id",
    amount: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SignalEvaluateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SignalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.signal.<a href="/src/api/resources/signal/client/Client.ts">schedule</a>({ ...params }) -> Plaid.SignalScheduleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use `/signal/schedule` to schedule a planned ACH transaction.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.signal.schedule({
    access_token: "access_token",
    account_id: "account_id",
    client_transaction_id: "client_transaction_id",
    amount: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SignalScheduleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SignalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.signal.<a href="/src/api/resources/signal/client/Client.ts">reportDecision</a>({ ...params }) -> Plaid.SignalDecisionReportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

After you call `/signal/evaluate`, Plaid will normally infer the outcome from your Signal Rules. However, if you are not using Signal Rules, if the Signal Rules outcome was `REVIEW`, or if you take a different action than the one determined by the Signal Rules, you will need to call `/signal/decision/report`. This helps improve Signal Transaction Score accuracy for your account and is necessary for proper functioning of the rule performance and rule tuning capabilities in the Dashboard. If your effective decision changes after calling `/signal/decision/report` (for example, you indicated that you accepted a transaction, but later on, your payment processor rejected it, so it was never initiated), call `/signal/decision/report` again for the transaction to correct Plaid's records.

If you are using Plaid Transfer as your payment processor, you also do not need to call `/signal/decision/report`, as Plaid can infer outcomes from your Transfer activity.

If using a Balance-only ruleset, this endpoint will not impact scores (Balance does not use scores), but is necessary to view accurate transaction outcomes and tune rule logic in the Dashboard.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.signal.reportDecision({
    client_transaction_id: "client_transaction_id",
    initiated: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SignalDecisionReportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SignalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.signal.<a href="/src/api/resources/signal/client/Client.ts">reportReturn</a>({ ...params }) -> Plaid.SignalReturnReportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call the `/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trends into your scores and tune rule logic. If using a Balance-only ruleset, this endpoint will not impact scores (as Balance does not use scores), but is necessary to view accurate transaction outcomes and tune rule logic in the Dashboard.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.signal.reportReturn({
    client_transaction_id: "client_transaction_id",
    return_code: "return_code"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SignalReturnReportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SignalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.signal.<a href="/src/api/resources/signal/client/Client.ts">prepare</a>({ ...params }) -> Plaid.SignalPrepareResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

When an Item is not initialized with `signal`, call `/signal/prepare` to opt-in that Item to the data collection process used to develop a Signal Transaction Score. This should be done on Items where `signal` was added in the `additional_consented_products` array but not in the `products`, `optional_products`, or `required_if_supported_products` array. If `/signal/prepare` is skipped on an Item that is not initialized with `signal`, the initial call to `/signal/evaluate` on that Item will be less accurate, because Plaid will have access to less data for computing the Signal Transaction Score.

If your integration is purely Balance-only, this endpoint will have no effect, as Balance-only rulesets do not calculate a Signal Transaction Score.

If run on an Item that is already initialized with `signal`, this endpoint will return a 200 response and will not modify the Item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.signal.prepare({
    access_token: "access_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.SignalPrepareRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SignalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Wallet
<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">create</a>({ ...params }) -> Plaid.WalletCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an e-wallet. The response is the newly created e-wallet object.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.create({
    iso_currency_code: "GBP"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WalletCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">get</a>({ ...params }) -> Plaid.WalletGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch an e-wallet. The response includes the current balance.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.get({
    wallet_id: "wallet_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WalletGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.Wallet, Plaid.WalletListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint lists all e-wallets in descending order of creation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.wallet.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.wallet.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WalletListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">executeTransaction</a>({ ...params }) -> Plaid.WalletTransactionExecuteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Execute a transaction using the specified e-wallet.
Specify the e-wallet to debit from, the counterparty to credit to, the idempotency key to prevent duplicate transactions, the amount and reference for the transaction.
Transactions will settle in seconds to several days, depending on the underlying payment rail.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.executeTransaction({
    idempotency_key: "idempotency_key",
    wallet_id: "wallet_id",
    counterparty: {
        name: "name",
        numbers: {}
    },
    amount: {
        iso_currency_code: "GBP",
        value: 1.1
    },
    reference: "reference"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WalletTransactionExecuteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">getTransaction</a>({ ...params }) -> Plaid.WalletTransactionGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a specific e-wallet transaction
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.getTransaction({
    transaction_id: "transaction_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WalletTransactionGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">listTransactions</a>({ ...params }) -> core.Page&lt;Plaid.WalletTransaction, Plaid.WalletTransactionListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint lists the latest transactions of the specified e-wallet. Transactions are returned in descending order by the `created_at` time.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.wallet.listTransactions({
    wallet_id: "wallet_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.wallet.listTransactions({
    wallet_id: "wallet_id"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.WalletTransactionListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## EwaReport
<details><summary><code>client.ewaReport.<a href="/src/api/resources/ewaReport/client/Client.ts">get</a>({ ...params }) -> Plaid.BetaEwaReportV1GetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/beta/ewa_report/v1/get` endpoint provides an Earned Wage Access (EWA) score that quantifies the delinquency risk associated with a given item. The score is derived from a combination of cashflow patterns and network-based behavioral features.

The response returns a list of EWA scores, where each score corresponds to a potential advance amount range. These scores estimate the likelihood of repayment for advances within that range.

Score range: 1-99

Interpretation: Higher scores indicate a greater likelihood of repayment.

This endpoint enables clients to assess repayment risk and make data-driven decisions when determining eligibility or limits for earned wage advances.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ewaReport.get({
    access_token: "access-sandbox-71e02f71-0960-4a27-abd2-5631e04f2175"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaEwaReportV1GetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EwaReportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CashAdvance
<details><summary><code>client.cashAdvance.<a href="/src/api/resources/cashAdvance/client/Client.ts">getIncomeInsights</a>({ ...params }) -> Plaid.BetaCashAdvanceIncomeInsightsV1GetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/beta/cash_advance/income_insights/v1/get` endpoint returns a user's top income streams across all of the user's active Items, ranked by historical net monthly income and capped at three, along with the next payment date and amount of the highest-ranked stream.

Only USD income streams are returned. If some, but not all, of the user's Items could not be evaluated, the response is based on the remaining Items.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashAdvance.getIncomeInsights({
    user_id: "usr_9nSp2KuZ2x4JDw"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaCashAdvanceIncomeInsightsV1GetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashAdvanceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Issues
<details><summary><code>client.issues.<a href="/src/api/resources/issues/client/Client.ts">getV1</a>({ ...params }) -> Plaid.BetaIssuesV1GetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the latest public details for a specific institution issue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issues.getV1({
    issue_id: "issue_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaIssuesV1GetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.issues.<a href="/src/api/resources/issues/client/Client.ts">listV1</a>({ ...params }) -> Plaid.BetaIssuesV1ListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve high-severity issues for an institution.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issues.listV1({
    institution_id: "institution_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaIssuesV1ListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.issues.<a href="/src/api/resources/issues/client/Client.ts">matchV1</a>({ ...params }) -> Plaid.BetaIssuesV1MatchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Match a Plaid identifier to institution issues that affect it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issues.matchV1({
    identifier_type: "ITEM_ID",
    identifier: "identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaIssuesV1MatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.issues.<a href="/src/api/resources/issues/client/Client.ts">subscribeV1</a>({ ...params }) -> Plaid.BetaIssuesV1SubscribeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Subscribe a webhook URL to resolution notifications for an institution issue. A client has a single subscription per issue, so subscribing again for the same issue overwrites the previously registered webhook URL.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issues.subscribeV1({
    issue_id: "issue_id",
    webhook: "webhook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaIssuesV1SubscribeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.issues.<a href="/src/api/resources/issues/client/Client.ts">unsubscribeV1</a>({ ...params }) -> Plaid.BetaIssuesV1UnsubscribeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove the client's subscription to resolution notifications for an institution issue. This removes the client's single subscription for that issue, identified by the issue alone.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issues.unsubscribeV1({
    issue_id: "issue_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaIssuesV1UnsubscribeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.issues.<a href="/src/api/resources/issues/client/Client.ts">search</a>({ ...params }) -> Plaid.IssuesSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for an issue associated with one of the following identifiers:  `item_id`, `link_session_id` or Link session `request_id`. This endpoint returns a list containing at most one issue. If no issues are associated with the provided identifier, `issues` is omitted. At least one of the identifiers must be provided to perform the search.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issues.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IssuesSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.issues.<a href="/src/api/resources/issues/client/Client.ts">get</a>({ ...params }) -> Plaid.IssuesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve detailed information about a specific `Issue`. This endpoint returns a single `Issue` object.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issues.get({
    issue_id: "issue_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IssuesGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.issues.<a href="/src/api/resources/issues/client/Client.ts">subscribe</a>({ ...params }) -> Plaid.IssuesSubscribeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Allows a user to subscribe to updates on a specific `Issue` using a POST method. Subscribers will receive webhook notifications when the issue status changes, particularly when resolved.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.issues.subscribe({
    issue_id: "issue_id",
    webhook: "webhook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.IssuesSubscribeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PaymentProfile
<details><summary><code>client.paymentProfile.<a href="/src/api/resources/paymentProfile/client/Client.ts">create</a>({ ...params }) -> Plaid.PaymentProfileCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use `/payment_profile/create` endpoint to create a new payment profile.
To initiate the account linking experience, call `/link/token/create` and provide the `payment_profile_token` in the `transfer.payment_profile_token` field.
You can then use the `payment_profile_token` when creating transfers using `/transfer/authorization/create` and `/transfer/create`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentProfile.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentProfileCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentProfileClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentProfile.<a href="/src/api/resources/paymentProfile/client/Client.ts">get</a>({ ...params }) -> Plaid.PaymentProfileGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use `/payment_profile/get` endpoint to get the status of a given Payment Profile.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentProfile.get({
    payment_profile_token: "payment_profile_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentProfileGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentProfileClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentProfile.<a href="/src/api/resources/paymentProfile/client/Client.ts">remove</a>({ ...params }) -> Plaid.PaymentProfileRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/payment_profile/remove` endpoint to remove a given Payment Profile. Once it's removed, it can no longer be used to create transfers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentProfile.remove({
    payment_profile_token: "payment_profile_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PaymentProfileRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentProfileClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Partner
<details><summary><code>client.partner.<a href="/src/api/resources/partner/client/Client.ts">createCustomer</a>({ ...params }) -> Plaid.PartnerCustomerCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/partner/customer/create` endpoint is used by reseller partners to create end customers. To create end customers, it should be called in the Production environment only, even when creating Sandbox API keys. If called in the Sandbox environment, it will return a sample response, but no customer will be created and the API keys will not be valid.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partner.createCustomer({
    company_name: "Plaid",
    is_diligence_attested: true,
    products: ["auth", "identity"],
    create_link_customization: true,
    legal_entity_name: "Plaid",
    website: "plaid.com",
    application_name: "Plaid",
    technical_contact: {
        given_name: "Alice",
        family_name: "Smith",
        email: "alice.smith@example.com"
    },
    billing_contact: {
        given_name: "Bob",
        family_name: "Jones",
        email: "bob.jones@example.com"
    },
    customer_support_info: {
        email: "support@example.com",
        phone_number: "1234567890",
        contact_url: "example.com/contact",
        link_update_url: "example.com/update"
    },
    address: {
        city: "New York",
        street: "123 Main St",
        region: "NY",
        postal_code: "12345",
        country_code: "US"
    },
    is_bank_addendum_completed: true,
    redirect_uris: ["http://localhost/oauth.html", "https://www.example.com/oauth.html"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PartnerCustomerCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partner.<a href="/src/api/resources/partner/client/Client.ts">getCustomer</a>({ ...params }) -> Plaid.PartnerCustomerGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/partner/customer/get` endpoint is used by reseller partners to retrieve data about a single end customer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partner.getCustomer({
    end_customer_client_id: "7f57eb3d2a9j6480121fx361"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PartnerCustomerGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partner.<a href="/src/api/resources/partner/client/Client.ts">enableCustomer</a>({ ...params }) -> Plaid.PartnerCustomerEnableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/partner/customer/enable` endpoint is used by reseller partners to enable an end customer in the full Production environment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partner.enableCustomer({
    end_customer_client_id: "7f57eb3d2a9j6480121fx361"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PartnerCustomerEnableRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partner.<a href="/src/api/resources/partner/client/Client.ts">removeCustomer</a>({ ...params }) -> Plaid.PartnerCustomerRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/partner/customer/remove` endpoint is used by reseller partners to remove an end customer. Removing an end customer will remove it from view in the Plaid Dashboard and deactivate its API keys. This endpoint can only be used to remove an end customer that has not yet been enabled in full Production.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partner.removeCustomer({
    end_customer_client_id: "7f57eb3d2a9j6480121fx361"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PartnerCustomerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partner.<a href="/src/api/resources/partner/client/Client.ts">getCustomerOauthInstitutions</a>({ ...params }) -> Plaid.PartnerCustomerOAuthInstitutionsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/partner/customer/oauth_institutions/get` endpoint is used by reseller partners to retrieve OAuth-institution registration information about a single end customer. To learn how to set up a webhook to listen to status update events, visit the [reseller documentation](https://plaid.com/docs/account/resellers/#enabling-end-customers).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partner.getCustomerOauthInstitutions({
    end_customer_client_id: "7f57eb3d2a9j6480121fx361"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.PartnerCustomerOAuthInstitutionsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partner.<a href="/src/api/resources/partner/client/Client.ts">createCustomerV1</a>({ ...params }) -> Plaid.BetaPartnerCustomerV1CreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/beta/partner/customer/v1/create` endpoint creates a new end customer record. You can provide as much information as you have available. If any required information is missing for the products you intend to use, it will be listed in the `requirements_due` field of the response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partner.createCustomerV1({
    company_name: "Plaid",
    products: ["auth", "identity"],
    create_link_customization: true,
    legal_entity_name: "Plaid",
    website: "plaid.com",
    application_name: "Plaid",
    technical_contact: {
        given_name: "Alice",
        family_name: "Smith",
        email: "alice.smith@example.com"
    },
    billing_contact: {
        given_name: "Bob",
        family_name: "Jones",
        email: "bob.jones@example.com"
    },
    customer_support_info: {
        email: "support@example.com",
        phone_number: "1234567890",
        contact_url: "example.com/contact",
        link_update_url: "example.com/update"
    },
    address: {
        city: "New York",
        street: "123 Main St",
        region: "NY",
        postal_code: "12345",
        country_code: "US"
    },
    redirect_uris: ["http://localhost/oauth.html", "https://www.example.com/oauth.html"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaPartnerCustomerV1CreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partner.<a href="/src/api/resources/partner/client/Client.ts">getCustomerV1</a>({ ...params }) -> Plaid.BetaPartnerCustomerV1GetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/beta/partner/customer/v1/get` endpoint is used by reseller partners to retrieve data about a single end customer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partner.getCustomerV1({
    end_customer_client_id: "634758733ebb4f00134b85ea"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaPartnerCustomerV1GetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partner.<a href="/src/api/resources/partner/client/Client.ts">updateCustomerV1</a>({ ...params }) -> Plaid.BetaPartnerCustomerV1UpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/beta/partner/customer/v1/update` endpoint updates an existing end customer record.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partner.updateCustomerV1({
    end_customer_client_id: "634758733ebb4f00134b85ea",
    bank_addendum_acceptance: {
        customer_accepted: true,
        customer_ip_address: "127.0.0.1",
        customer_agreement_timestamp: "2025-01-01T01:00:00Z"
    },
    questionnaires: {
        cra: {
            purposes: {
                WRITTEN_INSTRUCTION: {
                    use_cases: ["CREDIT_UNDERWRITING", "TENANT_SCREENING"]
                }
            },
            is_third_party_involved: true,
            is_technical_service_provider_involved: true
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaPartnerCustomerV1UpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partner.<a href="/src/api/resources/partner/client/Client.ts">enableCustomerV1</a>({ ...params }) -> Plaid.BetaPartnerCustomerV1EnableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/beta/partner/customer/v1/enable` endpoint is used by reseller partners to enable an end customer in the full Production environment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partner.enableCustomerV1({
    end_customer_client_id: "634758733ebb4f00134b85ea",
    products: ["auth"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.BetaPartnerCustomerV1EnableRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Fdx
<details><summary><code>client.fdx.<a href="/src/api/resources/fdx/client/Client.ts">notifications</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A generic webhook receiver endpoint for FDX Event Notifications
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fdx.notifications({
    notificationId: "notificationId",
    type: "ACCOUNT_TAKEOVER",
    sentOn: "2021-07-15T14:46:41Z",
    category: "SECURITY",
    notificationPayload: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.FdxNotification` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FdxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fdx.<a href="/src/api/resources/fdx/client/Client.ts">getRecipients</a>() -> Plaid.GetRecipientsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for every recipient (application) your customers have connected to via Plaid's App Directory.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fdx.getRecipients();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FdxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fdx.<a href="/src/api/resources/fdx/client/Client.ts">getConsents</a>({ ...params }) -> Plaid.GetConsentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns zero or more consent grants associated with the given data provider customer, optionally filtered by status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fdx.getConsents({
    customerId: "customerId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.GetConsentsFdxRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FdxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fdx.<a href="/src/api/resources/fdx/client/Client.ts">getConsentRevocation</a>({ ...params }) -> Plaid.FdxConsentRevocations</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the revocation history of a consent grant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fdx.getConsentRevocation({
    consentId: "consentId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.GetConsentRevocationFdxRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FdxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fdx.<a href="/src/api/resources/fdx/client/Client.ts">revokeConsent</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revokes a consent grant, ending the data recipient's ongoing access to the customer's data.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fdx.revokeConsent({
    consentId: "consentId",
    initiator: "DATA_ACCESS_PLATFORM",
    reason: "BUSINESS_RULE"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.FdxConsentRevocation` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FdxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fdx.<a href="/src/api/resources/fdx/client/Client.ts">getConsent</a>({ ...params }) -> Plaid.FdxConsentGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a consent grant by its identifier.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fdx.getConsent({
    consentId: "consentId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.GetConsentFdxRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FdxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fdx.<a href="/src/api/resources/fdx/client/Client.ts">getRecipient</a>({ ...params }) -> Plaid.GetRecipientResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for a single recipient (application), identified by `recipientId`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fdx.getRecipient({
    recipientId: "recipientId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.GetRecipientFdxRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FdxClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BankTransfer Event
<details><summary><code>client.bankTransfer.event.<a href="/src/api/resources/bankTransfer/resources/event/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.BankTransferEvent, Plaid.BankTransferEventListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/bank_transfer/event/list` endpoint to get a list of Plaid-initiated ACH or bank transfer events based on specified filter criteria. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://plaid.com/docs/auth/coverage/microdeposit-events/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.bankTransfer.event.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.bankTransfer.event.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.bankTransfer.BankTransferEventListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bankTransfer.event.<a href="/src/api/resources/bankTransfer/resources/event/client/Client.ts">sync</a>({ ...params }) -> Plaid.BankTransferEventSyncResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/bank_transfer/event/sync` allows you to request up to the next 25 Plaid-initiated bank transfer events that happened after a specific `event_id`. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://plaid.com/docs/auth/coverage/microdeposit-events/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankTransfer.event.sync({
    after_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.bankTransfer.BankTransferEventSyncRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BankTransfer Sweep
<details><summary><code>client.bankTransfer.sweep.<a href="/src/api/resources/bankTransfer/resources/sweep/client/Client.ts">get</a>({ ...params }) -> Plaid.BankTransferSweepGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/bank_transfer/sweep/get` endpoint fetches information about the sweep corresponding to the given `sweep_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankTransfer.sweep.get({
    sweep_id: "sweep_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.bankTransfer.BankTransferSweepGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SweepClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bankTransfer.sweep.<a href="/src/api/resources/bankTransfer/resources/sweep/client/Client.ts">list</a>({ ...params }) -> Plaid.BankTransferSweepListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/bank_transfer/sweep/list` endpoint fetches information about the sweeps matching the given filters.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankTransfer.sweep.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.bankTransfer.BankTransferSweepListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SweepClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BankTransfer Balance
<details><summary><code>client.bankTransfer.balance.<a href="/src/api/resources/bankTransfer/resources/balance/client/Client.ts">get</a>({ ...params }) -> Plaid.BankTransferBalanceGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/bank_transfer/balance/get` endpoint to see the available balance in your bank transfer account. Debit transfers increase this balance once their status is posted. Credit transfers decrease this balance when they are created.

The transactable balance shows the amount in your account that you are able to use for transfers, and is essentially your available balance minus your minimum balance.

Note that this endpoint can only be used with FBO accounts, when using Bank Transfers in the Full Service configuration. It cannot be used on your own account when using Bank Transfers in the BTS Platform configuration.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankTransfer.balance.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.bankTransfer.BankTransferBalanceGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BalanceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BeaconReport Syndication
<details><summary><code>client.beaconReport.syndication.<a href="/src/api/resources/beaconReport/resources/syndication/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.BeaconReportSyndication, Plaid.BeaconReportSyndicationListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/beacon/report_syndication/list` endpoint to view all Beacon Reports that have been syndicated to a specific Beacon User. This endpoint returns Beacon Report Syndications which are references to Beacon Reports created either by you, or another Beacon customer, that matched the specified Beacon User. A Beacon User can have multiple active Beacon Report Syndications at once. The results from this endpoint are paginated; the `next_cursor` field will be populated if there is another page of results that can be retrieved. To fetch the next page, pass the `next_cursor` value as the `cursor` parameter in the next request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.beaconReport.syndication.list({
    beacon_user_id: "becusr_42cF1MNo42r9Xj"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.beaconReport.syndication.list({
    beacon_user_id: "becusr_42cF1MNo42r9Xj"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.beaconReport.BeaconReportSyndicationListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyndicationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.beaconReport.syndication.<a href="/src/api/resources/beaconReport/resources/syndication/client/Client.ts">get</a>({ ...params }) -> Plaid.BeaconReportSyndicationGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a Beacon Report Syndication for a given Beacon Report Syndication id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.beaconReport.syndication.get({
    beacon_report_syndication_id: "becrsn_11111111111111"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.beaconReport.BeaconReportSyndicationGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyndicationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Credit Profile
<details><summary><code>client.credit.profile.<a href="/src/api/resources/credit/resources/profile/client/Client.ts">getReport</a>({ ...params }) -> Plaid.CraCreditProfileReportGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/credit_profile/report/get` retrieves a credit profile report for a user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credit.profile.getReport({
    user_id: "user_id",
    consumer_report_permissible_purpose: "ACCOUNT_REVIEW_CREDIT",
    client_report_id: "client_report_id",
    report_type: "QUALIFY",
    inquiry_type: "SOFT_INQUIRY",
    version: "v1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.credit.CraCreditProfileReportGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProfileClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Identity Verification
<details><summary><code>client.identity.verification.<a href="/src/api/resources/identity/resources/verification/client/Client.ts">create</a>({ ...params }) -> Plaid.IdentityVerificationCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new Identity Verification for the user specified by the `client_user_id` and/or `user_id` field. At least one of these two fields must be provided. The requirements and behavior of the verification are determined by the `template_id` provided. If `user_id` is provided, there must be an associated user; otherwise, an error will be returned.


If you don't know whether an active Identity Verification exists for a given `client_user_id` and/or `user_id`, you can specify `"is_idempotent": true` in the request body. With idempotency enabled, a new Identity Verification will only be created if one does not already exist for the associated `client_user_id` and/or `user_id`, and `template_id`. If an Identity Verification is found, it will be returned unmodified with a `200 OK` HTTP status code.


If `user_id` is not provided, you can also use this endpoint to supply information you already have collected about the user; if any of these fields are specified, the screens prompting the user to enter them will be skipped during the Link flow. If `user_id` is provided, user information can not be included in the request body. Please use the `/user/update` endpoint to update user data instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verification.create({
    is_shareable: true,
    template_id: "idvtmp_4FrXJvfQU3zGUR",
    gave_consent: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.identity.IdentityVerificationCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identity.verification.<a href="/src/api/resources/identity/resources/verification/client/Client.ts">get</a>({ ...params }) -> Plaid.IdentityVerificationGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a previously created Identity Verification.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verification.get({
    identity_verification_id: "idv_52xR9LKo77r1Np"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.identity.IdentityVerificationGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identity.verification.<a href="/src/api/resources/identity/resources/verification/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.IdentityVerification, Plaid.IdentityVerificationListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter and list Identity Verifications created by your account
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.identity.verification.list({
    template_id: "idvtmp_4FrXJvfQU3zGUR"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.identity.verification.list({
    template_id: "idvtmp_4FrXJvfQU3zGUR"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.identity.IdentityVerificationListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identity.verification.<a href="/src/api/resources/identity/resources/verification/client/Client.ts">retry</a>({ ...params }) -> Plaid.IdentityVerificationRetryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Allow a customer to retry their Identity Verification
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verification.retry({
    client_user_id: "your-db-id-3b24110",
    template_id: "idvtmp_4FrXJvfQU3zGUR",
    strategy: "reset"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.identity.IdentityVerificationRetryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identity.verification.<a href="/src/api/resources/identity/resources/verification/client/Client.ts">createAutofill</a>({ ...params }) -> Plaid.IdentityVerificationAutofillCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Try to autofill an Identity Verification based on the provided phone number, date of birth and country of residence.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.verification.createAutofill({
    identity_verification_id: "flwses_42cF1MNo42r9Xj"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.identity.IdentityVerificationAutofillCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Partner Insights
<details><summary><code>client.partner.insights.<a href="/src/api/resources/partner/resources/insights/client/Client.ts">get</a>({ ...params }) -> Plaid.CraPartnerInsightsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/partner_insights/get` returns cash flow insights for a specified user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partner.insights.get({
    user_token: "user_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.partner.CraPartnerInsightsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InsightsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Processor Signal
<details><summary><code>client.processor.signal.<a href="/src/api/resources/processor/resources/signal/client/Client.ts">evaluate</a>({ ...params }) -> Plaid.ProcessorSignalEvaluateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use `/processor/signal/evaluate` to evaluate a planned ACH transaction to get a return risk assessment and additional risk signals.

`/processor/signal/evaluate` uses Rulesets that are configured on the end customer's Dashboard and can be used with either the Signal Transaction Scores product or the Balance product. Which product is used will be determined by the `ruleset_key` that you provide. Note that only customer-configured rulesets work with this endpoint; as a processor partner, you cannot create or configure your own rulesets. For more details, see [Signal Rules](https://plaid.com/docs/signal/signal-rules/).

Note: This request may have higher latency if Signal Transaction Scores is being added to an existing Item for the first time, or when using a Balance-only ruleset. This is because Plaid must communicate directly with the institution to request data.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.signal.evaluate({
    processor_token: "processor_token",
    client_transaction_id: "client_transaction_id",
    amount: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.processor.ProcessorSignalEvaluateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SignalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.signal.<a href="/src/api/resources/processor/resources/signal/client/Client.ts">reportDecision</a>({ ...params }) -> Plaid.ProcessorSignalDecisionReportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

After you call `/processor/signal/evaluate`, Plaid will normally infer the outcome from your Signal Rules. However, if you are not using Signal Rules, if the Signal Rules outcome was `REVIEW`, or if you take a different action than the one determined by the Signal Rules, you will need to call `/processor/signal/decision/report`. This helps improve Signal Transaction Score accuracy for your account and is necessary for proper functioning of the rule performance and rule tuning capabilities in the Dashboard. If your effective decision changes after calling `/processor/signal/decision/report` (for example, you indicated that you accepted a transaction, but later on, your payment processor rejected it, so it was never initiated), call `/processor/signal/decision/report` again for the transaction to correct Plaid's records.

If you are using Plaid Transfer as your payment processor, you also do not need to call `/processor/signal/decision/report`, as Plaid can infer outcomes from your Transfer activity.

If using a Balance-only ruleset, this endpoint will not impact scores (Balance does not use scores), but is necessary to view accurate transaction outcomes and tune rule logic in the Dashboard.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.signal.reportDecision({
    processor_token: "processor_token",
    client_transaction_id: "client_transaction_id",
    initiated: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.processor.ProcessorSignalDecisionReportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SignalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.signal.<a href="/src/api/resources/processor/resources/signal/client/Client.ts">reportReturn</a>({ ...params }) -> Plaid.ProcessorSignalReturnReportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call the `/processor/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/processor/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trend in your portfolio.

If you are using the [Plaid Transfer product](https://plaid.com/docs/transfer) to create transfers, it is not necessary to use this endpoint, as Plaid already knows whether the transfer was returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.signal.reportReturn({
    processor_token: "processor_token",
    client_transaction_id: "client_transaction_id",
    return_code: "return_code"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.processor.ProcessorSignalReturnReportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SignalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.processor.signal.<a href="/src/api/resources/processor/resources/signal/client/Client.ts">prepare</a>({ ...params }) -> Plaid.ProcessorSignalPrepareResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

When a processor token is not initialized with `signal`, call `/processor/signal/prepare` to opt-in that processor token to the data collection process, which will improve the accuracy of the Signal Transaction Score.

If this endpoint is called with a processor token that is already initialized with `signal`, it will return a 200 response and will not modify the processor token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.processor.signal.prepare({
    processor_token: "processor_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.processor.ProcessorSignalPrepareRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SignalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Servicing Subscription
<details><summary><code>client.servicing.subscription.<a href="/src/api/resources/servicing/resources/subscription/client/Client.ts">create</a>({ ...params }) -> Plaid.CraServicingSubscriptionCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/servicing/subscription/create` subscribes a user to CRA report-update webhooks for a given scope.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.servicing.subscription.create({
    user_id: "user_id",
    scope: "PLAID_NETWORK",
    products: [{
            product: "cra_qualify",
            version: "version"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.servicing.CraServicingSubscriptionCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.servicing.subscription.<a href="/src/api/resources/servicing/resources/subscription/client/Client.ts">delete</a>({ ...params }) -> Plaid.CraServicingSubscriptionDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/servicing/subscription/delete` removes the CRA servicing subscription identified by `subscription_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.servicing.subscription.delete({
    subscription_id: "subscription_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.servicing.CraServicingSubscriptionDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.servicing.subscription.<a href="/src/api/resources/servicing/resources/subscription/client/Client.ts">get</a>({ ...params }) -> Plaid.CraServicingSubscriptionGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/servicing/subscription/get` returns the CRA servicing subscription identified by `subscription_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.servicing.subscription.get({
    subscription_id: "subscription_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.servicing.CraServicingSubscriptionGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.servicing.subscription.<a href="/src/api/resources/servicing/resources/subscription/client/Client.ts">list</a>({ ...params }) -> Plaid.CraServicingSubscriptionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/servicing/subscription/list` returns all CRA servicing subscriptions for a user, across scopes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.servicing.subscription.list({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.servicing.CraServicingSubscriptionListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.servicing.subscription.<a href="/src/api/resources/servicing/resources/subscription/client/Client.ts">update</a>({ ...params }) -> Plaid.CraServicingSubscriptionUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/cra/servicing/subscription/update` modifies an existing CRA servicing subscription. Fields left blank are unchanged; provided fields overwrite the current value. Use `reset_fields` to clear fields.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.servicing.subscription.update({
    subscription_id: "subscription_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.servicing.CraServicingSubscriptionUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Recurring
<details><summary><code>client.transfer.recurring.<a href="/src/api/resources/transfer/resources/recurring/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferRecurringGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transfer/recurring/get` fetches information about the recurring transfer corresponding to the given `recurring_transfer_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.recurring.get({
    recurring_transfer_id: "recurring_transfer_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferRecurringGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecurringClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.recurring.<a href="/src/api/resources/transfer/resources/recurring/client/Client.ts">create</a>({ ...params }) -> Plaid.TransferRecurringCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/recurring/create` endpoint to initiate a new recurring transfer. This capability is not currently supported for Transfer UI or Transfer for Platforms (beta) customers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.recurring.create({
    access_token: "access_token",
    idempotency_key: "idempotency_key",
    account_id: "account_id",
    type: "debit",
    network: "ach",
    amount: "amount",
    description: "description",
    schedule: {
        interval_unit: "week",
        interval_count: 1,
        interval_execution_day: 1,
        start_date: "2023-01-15"
    },
    user: {
        legal_name: "legal_name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferRecurringCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecurringClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.recurring.<a href="/src/api/resources/transfer/resources/recurring/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.RecurringTransfer, Plaid.TransferRecurringListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/recurring/list` endpoint to see a list of all your recurring transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired recurring transfers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transfer.recurring.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transfer.recurring.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferRecurringListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecurringClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.recurring.<a href="/src/api/resources/transfer/resources/recurring/client/Client.ts">cancel</a>({ ...params }) -> Plaid.TransferRecurringCancelResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/recurring/cancel` endpoint to cancel a recurring transfer.  A scheduled transfer that hasn't been submitted to the bank will be cancelled.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.recurring.cancel({
    recurring_transfer_id: "recurring_transfer_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferRecurringCancelRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecurringClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Authorization
<details><summary><code>client.transfer.authorization.<a href="/src/api/resources/transfer/resources/authorization/client/Client.ts">create</a>({ ...params }) -> Plaid.TransferAuthorizationCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/authorization/create` endpoint to authorize a transfer. This endpoint must be called prior to calling `/transfer/create`. The transfer authorization will expire if not used after one hour. (You can contact your account manager to change the default authorization lifetime.)

There are four possible outcomes to calling this endpoint:

  - If the `authorization.decision` in the response is `declined`, the proposed transfer has failed the risk check and you cannot proceed with the transfer.

  - If the `authorization.decision` is `user_action_required`, additional user input is needed, usually to fix a broken bank connection, before Plaid can properly assess the risk. You need to launch Link in update mode to complete the required user action. When calling `/link/token/create` to get a new Link token, instead of providing `access_token` in the request, you should set [`transfer.authorization_id`](https://plaid.com/docs/api/link/#link-token-create-request-transfer-authorization-id) as the `authorization.id`. After the Link flow is completed, you may re-attempt the authorization.

  - If the `authorization.decision` is `approved`, and the `authorization.decision_rationale.code` is `null`, the transfer has passed the risk check and you can proceed to call `/transfer/create`.

  - If the `authorization.decision` is `approved` and the `authorization.decision_rationale.code` is non-`null`, the risk check could not be run: you may proceed with the transfer, but should perform your own risk evaluation. For more details, see the response schema.

In Plaid's Sandbox environment the decisions will be returned as follows:

  - To approve a transfer with `null` rationale code, make an authorization request with an `amount` less than the available balance in the account.

  - To approve a transfer with the rationale code `MANUALLY_VERIFIED_ITEM`, create an Item in Link through the [Same-Day Micro-deposits flow](https://plaid.com/docs/auth/coverage/testing/#testing-same-day-micro-deposits).

  - To get an authorization decision of `user_action_required`, [reset the login for an Item](https://plaid.com/docs/sandbox/#item_login_required).

  - To decline a transfer with the rationale code `NSF`, the available balance on the account must be less than the authorization `amount`. See [Create Sandbox test data](https://plaid.com/docs/sandbox/user-custom/) for details on how to customize data in Sandbox.

  - To decline a transfer with the rationale code `RISK`, the available balance on the account must be exactly $0. See [Create Sandbox test data](https://plaid.com/docs/sandbox/user-custom/) for details on how to customize data in Sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.authorization.create({
    access_token: "access_token",
    account_id: "account_id",
    type: "debit",
    network: "ach",
    amount: "amount",
    user: {
        legal_name: "legal_name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferAuthorizationCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthorizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.authorization.<a href="/src/api/resources/transfer/resources/authorization/client/Client.ts">cancel</a>({ ...params }) -> Plaid.TransferAuthorizationCancelResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/authorization/cancel` endpoint to cancel a transfer authorization. A transfer authorization is eligible for cancellation if it has not yet been used to create a transfer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.authorization.cancel({
    authorization_id: "authorization_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferAuthorizationCancelRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthorizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Balance
<details><summary><code>client.transfer.balance.<a href="/src/api/resources/transfer/resources/balance/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferBalanceGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

(Deprecated) Use the `/transfer/ledger/get` endpoint to view a balance held with Plaid.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.balance.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferBalanceGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BalanceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Capabilities
<details><summary><code>client.transfer.capabilities.<a href="/src/api/resources/transfer/resources/capabilities/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferCapabilitiesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/capabilities/get` endpoint to determine the RTP eligibility information of an account to be used with Transfer. This endpoint works on all Transfer-capable Items, including those created by `/transfer/migrate_account`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.capabilities.get({
    access_token: "access_token",
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferCapabilitiesGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CapabilitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Configuration
<details><summary><code>client.transfer.configuration.<a href="/src/api/resources/transfer/resources/configuration/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferConfigurationGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/configuration/get` endpoint to view your transfer product configurations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.configuration.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferConfigurationGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConfigurationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Ledger
<details><summary><code>client.transfer.ledger.<a href="/src/api/resources/transfer/resources/ledger/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferLedgerGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/ledger/get` endpoint to view a balance on the ledger held with Plaid.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.ledger.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferLedgerGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LedgerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.ledger.<a href="/src/api/resources/transfer/resources/ledger/client/Client.ts">distribute</a>({ ...params }) -> Plaid.TransferLedgerDistributeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/ledger/distribute` endpoint to move available balance between ledgers, if you have multiple. If you're a platform, you can move funds between one of your ledgers and one of your customer's ledgers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.ledger.distribute({
    from_ledger_id: "from_ledger_id",
    to_ledger_id: "to_ledger_id",
    amount: "amount",
    idempotency_key: "idempotency_key"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferLedgerDistributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LedgerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.ledger.<a href="/src/api/resources/transfer/resources/ledger/client/Client.ts">deposit</a>({ ...params }) -> Plaid.TransferLedgerDepositResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/ledger/deposit` endpoint to deposit funds into Plaid Ledger.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.ledger.deposit({
    amount: "amount",
    idempotency_key: "idempotency_key",
    network: "ach"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferLedgerDepositRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LedgerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.ledger.<a href="/src/api/resources/transfer/resources/ledger/client/Client.ts">withdraw</a>({ ...params }) -> Plaid.TransferLedgerWithdrawResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/ledger/withdraw` endpoint to withdraw funds from a Plaid Ledger balance.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.ledger.withdraw({
    amount: "amount",
    idempotency_key: "idempotency_key",
    network: "ach"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferLedgerWithdrawRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LedgerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.ledger.<a href="/src/api/resources/transfer/resources/ledger/client/Client.ts">listEvents</a>({ ...params }) -> core.Page&lt;Plaid.TransferLedgerEvent, Plaid.TransferLedgerEventListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/ledger/event/list` endpoint to get a list of ledger events for a specific ledger based on specified filter criteria.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transfer.ledger.listEvents();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transfer.ledger.listEvents();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferLedgerEventListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LedgerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Originator
<details><summary><code>client.transfer.originator.<a href="/src/api/resources/transfer/resources/originator/client/Client.ts">updateFundingAccount</a>({ ...params }) -> Plaid.TransferOriginatorFundingAccountUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/originator/funding_account/update` endpoint to update the funding account associated with the originator.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.originator.updateFundingAccount({
    originator_client_id: "originator_client_id",
    funding_account: {
        access_token: "access_token",
        account_id: "account_id"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferOriginatorFundingAccountUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OriginatorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.originator.<a href="/src/api/resources/transfer/resources/originator/client/Client.ts">createFundingAccount</a>({ ...params }) -> Plaid.TransferOriginatorFundingAccountCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/originator/funding_account/create` endpoint to create a new funding account for the originator.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.originator.createFundingAccount({
    originator_client_id: "originator_client_id",
    funding_account: {
        access_token: "access_token",
        account_id: "account_id"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferOriginatorFundingAccountCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OriginatorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.originator.<a href="/src/api/resources/transfer/resources/originator/client/Client.ts">create</a>({ ...params }) -> Plaid.TransferOriginatorCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/originator/create` endpoint to create a new originator and return an `originator_client_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.originator.create({
    company_name: "company_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferOriginatorCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OriginatorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.originator.<a href="/src/api/resources/transfer/resources/originator/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferOriginatorGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transfer/originator/get` endpoint gets status updates for an originator's onboarding process. This information is also available via the Transfer page on the Plaid dashboard.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.originator.get({
    originator_client_id: "originator_client_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferOriginatorGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OriginatorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.originator.<a href="/src/api/resources/transfer/resources/originator/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.Originator, Plaid.TransferOriginatorListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transfer/originator/list` endpoint gets status updates for all of your originators' onboarding. This information is also available via the Plaid dashboard.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transfer.originator.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transfer.originator.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferOriginatorListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OriginatorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Metrics
<details><summary><code>client.transfer.metrics.<a href="/src/api/resources/transfer/resources/metrics/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferMetricsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/metrics/get` endpoint to view your transfer product usage metrics.

In the Sandbox environment, this endpoint returns static placeholder values rather than metrics computed from your Sandbox transfer activity.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.metrics.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferMetricsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MetricsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Event
<details><summary><code>client.transfer.event.<a href="/src/api/resources/transfer/resources/event/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.TransferEvent, Plaid.TransferEventListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/event/list` endpoint to get a list of transfer events based on specified filter criteria.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transfer.event.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transfer.event.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferEventListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.event.<a href="/src/api/resources/transfer/resources/event/client/Client.ts">sync</a>({ ...params }) -> Plaid.TransferEventSyncResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`/transfer/event/sync` allows you to request up to the next 500 transfer events that happened after a specific `event_id`. Use the `/transfer/event/sync` endpoint to guarantee you have seen all transfer events.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.event.sync({
    after_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferEventSyncRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Sweep
<details><summary><code>client.transfer.sweep.<a href="/src/api/resources/transfer/resources/sweep/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferSweepGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transfer/sweep/get` endpoint fetches a sweep corresponding to the given `sweep_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.sweep.get({
    sweep_id: "sweep_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferSweepGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SweepClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.sweep.<a href="/src/api/resources/transfer/resources/sweep/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.TransferSweep, Plaid.TransferSweepListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transfer/sweep/list` endpoint fetches sweeps matching the given filters.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transfer.sweep.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transfer.sweep.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferSweepListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SweepClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Intent
<details><summary><code>client.transfer.intent.<a href="/src/api/resources/transfer/resources/intent/client/Client.ts">create</a>({ ...params }) -> Plaid.TransferIntentCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/intent/create` endpoint to generate a transfer intent object and invoke the Transfer UI.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.intent.create({
    mode: "PAYMENT",
    amount: "amount",
    description: "description",
    user: {
        legal_name: "legal_name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferIntentCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.intent.<a href="/src/api/resources/transfer/resources/intent/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferIntentGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/intent/get` endpoint to retrieve more information about a transfer intent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.intent.get({
    transfer_intent_id: "transfer_intent_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferIntentGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Repayment
<details><summary><code>client.transfer.repayment.<a href="/src/api/resources/transfer/resources/repayment/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Plaid.TransferRepayment, Plaid.TransferRepaymentListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transfer/repayment/list` endpoint fetches repayments matching the given filters. Repayments are returned in reverse-chronological order (most recent first) starting at the given `start_date`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transfer.repayment.list({
    start_date: "2022-01-10T12:34:56Z",
    count: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transfer.repayment.list({
    start_date: "2022-01-10T12:34:56Z",
    count: 1
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferRepaymentListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RepaymentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.repayment.<a href="/src/api/resources/transfer/resources/repayment/client/Client.ts">listReturns</a>({ ...params }) -> core.Page&lt;Plaid.TransferRepaymentReturn, Plaid.TransferRepaymentReturnListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transfer/repayment/return/list` endpoint retrieves the set of returns that were batched together into the specified repayment. The sum of amounts of returns retrieved by this request equals the amount of the repayment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transfer.repayment.listReturns({
    repayment_id: "d4bfce70-2470-4298-ae87-5e9b3e18bfaf",
    count: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transfer.repayment.listReturns({
    repayment_id: "d4bfce70-2470-4298-ae87-5e9b3e18bfaf",
    count: 1
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferRepaymentReturnListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RepaymentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Platform
<details><summary><code>client.transfer.platform.<a href="/src/api/resources/transfer/resources/platform/client/Client.ts">submitRequirement</a>({ ...params }) -> Plaid.TransferPlatformRequirementSubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/platform/requirement/submit` endpoint to submit additional onboarding information that is needed by Plaid to approve or decline the originator. See [Requirement type schema documentation](https://docs.google.com/document/d/1NEQkTD0sVK50iAQi6xHigrexDUxZ4QxXqSEfV_FFTiU/) for a list of requirement types and possible values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.platform.submitRequirement({
    originator_client_id: "originator_client_id",
    requirement_submissions: [{
            requirement_type: "requirement_type",
            value: "value"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferPlatformRequirementSubmitRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlatformClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.platform.<a href="/src/api/resources/transfer/resources/platform/client/Client.ts">createOriginator</a>({ ...params }) -> Plaid.TransferPlatformOriginatorCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/platform/originator/create` endpoint to submit information about the originator you are onboarding, including the originator's agreement to the required legal terms.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.platform.createOriginator({
    originator_client_id: "originator_client_id",
    tos_acceptance_metadata: {
        agreement_accepted: true,
        originator_ip_address: "originator_ip_address",
        agreement_accepted_at: "2024-01-15T09:30:00Z"
    },
    originator_reviewed_at: "2024-01-15T09:30:00Z"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferPlatformOriginatorCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlatformClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.platform.<a href="/src/api/resources/transfer/resources/platform/client/Client.ts">createPerson</a>({ ...params }) -> Plaid.TransferPlatformPersonCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/platform/person/create` endpoint to create a person associated with an originator (e.g. beneficial owner or control person) and optionally submit personal identification information for them.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.platform.createPerson({
    originator_client_id: "originator_client_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferPlatformPersonCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlatformClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Questionnaire
<details><summary><code>client.transfer.questionnaire.<a href="/src/api/resources/transfer/resources/questionnaire/client/Client.ts">create</a>({ ...params }) -> Plaid.TransferQuestionnaireCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transfer/questionnaire/create` endpoint generates a Plaid-hosted onboarding UI URL. Redirect the originator to this URL to provide their due diligence information and agree to Plaid's terms for ACH money movement.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.questionnaire.create({
    originator_client_id: "originator_client_id",
    redirect_uri: "redirect_uri"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferQuestionnaireCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionnaireClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Diligence
<details><summary><code>client.transfer.diligence.<a href="/src/api/resources/transfer/resources/diligence/client/Client.ts">submit</a>({ ...params }) -> Plaid.TransferDiligenceSubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/diligence/submit` endpoint to submit transfer diligence on behalf of the originator (i.e., the end customer).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.diligence.submit({
    originator_client_id: "originator_client_id",
    originator_diligence: {
        dba: "dba",
        tax_id: "tax_id",
        address: {
            city: "city",
            street: "street",
            region: "region",
            postal_code: "postal_code",
            country_code: "country_code"
        },
        website: "website",
        naics_code: "naics_code",
        funding_account: {
            access_token: "access_token",
            account_id: "account_id"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferDiligenceSubmitRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiligenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.diligence.<a href="/src/api/resources/transfer/resources/diligence/client/Client.ts">uploadDocument</a>({ ...params }) -> Plaid.TransferDiligenceDocumentUploadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Third-party sender customers can use the `/transfer/diligence/document/upload` endpoint to upload a document on behalf of their end customer (i.e. originator) to Plaid. You'll need to send a request of type `multipart/form-data`.
You must provide the `client_id` in the `PLAID-CLIENT-ID` header and `secret` in the `PLAID-SECRET` header.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.diligence.uploadDocument({
    file: fs.createReadStream("/path/to/your/file"),
    originator_client_id: "originator_client_id",
    purpose: "DUE_DILIGENCE"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferDiligenceDocumentUploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiligenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfer Refund
<details><summary><code>client.transfer.refund.<a href="/src/api/resources/transfer/resources/refund/client/Client.ts">create</a>({ ...params }) -> Plaid.TransferRefundCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/refund/create` endpoint to create a refund for a transfer. A transfer can be refunded if the transfer was initiated in the past 180 days.

Refunds come out of the available balance of the ledger used for the original debit transfer. If there are not enough funds in the available balance to cover the refund amount, the refund will be rejected. Plaid does not impose a hold time before a refund can be created; you do not need to wait for the original transfer to settle.

A refund can still be issued even if the Item's `access_token` is no longer valid (e.g. if the user revoked OAuth consent or the Item was deleted via `/item/remove`), as long as the account and routing number pair used to make the original transaction is still valid. A refund cannot be issued if the Item has an [invalidated TAN](https://plaid.com/docs/auth/#tokenized-account-numbers), which can occur at Chase or PNC.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.refund.create({
    transfer_id: "transfer_id",
    amount: "amount",
    idempotency_key: "idempotency_key"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferRefundCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RefundClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.refund.<a href="/src/api/resources/transfer/resources/refund/client/Client.ts">get</a>({ ...params }) -> Plaid.TransferRefundGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The `/transfer/refund/get` endpoint fetches information about the refund corresponding to the given `refund_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.refund.get({
    refund_id: "refund_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferRefundGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RefundClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfer.refund.<a href="/src/api/resources/transfer/resources/refund/client/Client.ts">cancel</a>({ ...params }) -> Plaid.TransferRefundCancelResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the `/transfer/refund/cancel` endpoint to cancel a refund.  A refund is eligible for cancellation if it has not yet been submitted to the payment network.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.refund.cancel({
    refund_id: "refund_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.transfer.TransferRefundCancelRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RefundClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## User Account
<details><summary><code>client.user.account.<a href="/src/api/resources/user/resources/account/client/Client.ts">getSession</a>({ ...params }) -> Plaid.UserAccountSessionGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint returns user permissioned account data, including identity and Item access tokens, for use with [Plaid Layer](https://plaid.com/docs/layer). Note that end users are permitted to edit the prefilled identity data in the Link flow before sharing it with you; you should treat any identity data returned by this endpoint as user-submitted, unverified data. For a verification layer, you can add [Identity Verification](https://plaid.com/docs/identity-verification/) to your flow, or check the submitted identity data against bank account data from linked accounts using [Identity Match](https://plaid.com/docs/identity/#identity-match).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.account.getSession({
    public_token: "public_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.user.UserAccountSessionGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.account.<a href="/src/api/resources/user/resources/account/client/Client.ts">sendSessionEvent</a>({ ...params }) -> Plaid.UserAccountSessionEventSendResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows sending client-specific events related to Layer sessions for analytics and tracking purposes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.account.sendSessionEvent({
    link_session_id: "link_session_id",
    event: {
        name: "name",
        timestamp: "2024-01-15T09:30:00Z"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Plaid.user.UserAccountSessionEventSendRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

