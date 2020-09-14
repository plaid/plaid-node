"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportRefreshResponse {
    static getAttributeTypeMap() {
        return AssetReportRefreshResponse.attributeTypeMap;
    }
}
AssetReportRefreshResponse.discriminator = undefined;
AssetReportRefreshResponse.attributeTypeMap = [
    {
        "name": "assetReportId",
        "baseName": "asset_report_id",
        "type": "string"
    },
    {
        "name": "assetReportToken",
        "baseName": "asset_report_token",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AssetReportRefreshResponse = AssetReportRefreshResponse;
//# sourceMappingURL=assetReportRefreshResponse.js.map