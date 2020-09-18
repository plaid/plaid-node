"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportRefreshRequest {
    static getAttributeTypeMap() {
        return AssetReportRefreshRequest.attributeTypeMap;
    }
}
AssetReportRefreshRequest.discriminator = undefined;
AssetReportRefreshRequest.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "asset_report_token",
        "baseName": "asset_report_token",
        "type": "string"
    },
    {
        "name": "days_requested",
        "baseName": "days_requested",
        "type": "number"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "AssetReportRefreshRequestOptions"
    }
];
exports.AssetReportRefreshRequest = AssetReportRefreshRequest;
//# sourceMappingURL=assetReportRefreshRequest.js.map