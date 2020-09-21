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
        "name": "asset_report_token",
        "baseName": "asset_report_token",
        "type": "string"
    },
    {
        "name": "asset_report_id",
        "baseName": "asset_report_id",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AssetReportCreateResponse = AssetReportCreateResponse;
//# sourceMappingURL=assetReportCreateResponse.js.map