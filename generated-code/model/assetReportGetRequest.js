"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportGetRequest {
    static getAttributeTypeMap() {
        return AssetReportGetRequest.attributeTypeMap;
    }
}
AssetReportGetRequest.discriminator = undefined;
AssetReportGetRequest.attributeTypeMap = [
    {
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "assetReportToken",
        "baseName": "asset_report_token",
        "type": "string"
    },
    {
        "name": "includeInsights",
        "baseName": "include_insights",
        "type": "boolean"
    }
];
exports.AssetReportGetRequest = AssetReportGetRequest;
//# sourceMappingURL=assetReportGetRequest.js.map