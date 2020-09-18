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
        "name": "include_insights",
        "baseName": "include_insights",
        "type": "boolean"
    }
];
exports.AssetReportGetRequest = AssetReportGetRequest;
//# sourceMappingURL=assetReportGetRequest.js.map