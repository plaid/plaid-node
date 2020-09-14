"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportPDFGetRequest {
    static getAttributeTypeMap() {
        return AssetReportPDFGetRequest.attributeTypeMap;
    }
}
AssetReportPDFGetRequest.discriminator = undefined;
AssetReportPDFGetRequest.attributeTypeMap = [
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
exports.AssetReportPDFGetRequest = AssetReportPDFGetRequest;
//# sourceMappingURL=assetReportPDFGetRequest.js.map