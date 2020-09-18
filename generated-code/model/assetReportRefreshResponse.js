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
        "name": "asset_report_id",
        "baseName": "asset_report_id",
        "type": "string"
    },
    {
        "name": "asset_report_token",
        "baseName": "asset_report_token",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AssetReportRefreshResponse = AssetReportRefreshResponse;
//# sourceMappingURL=assetReportRefreshResponse.js.map