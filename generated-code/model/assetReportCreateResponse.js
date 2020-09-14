"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportCreateResponse {
    static getAttributeTypeMap() {
        return AssetReportCreateResponse.attributeTypeMap;
    }
}
AssetReportCreateResponse.discriminator = undefined;
AssetReportCreateResponse.attributeTypeMap = [
    {
        "name": "assetReportToken",
        "baseName": "asset_report_token",
        "type": "string"
    },
    {
        "name": "assetReportId",
        "baseName": "asset_report_id",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AssetReportCreateResponse = AssetReportCreateResponse;
//# sourceMappingURL=assetReportCreateResponse.js.map