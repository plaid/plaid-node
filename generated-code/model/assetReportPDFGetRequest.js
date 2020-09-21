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
    }
];
exports.AssetReportPDFGetRequest = AssetReportPDFGetRequest;
//# sourceMappingURL=assetReportPDFGetRequest.js.map