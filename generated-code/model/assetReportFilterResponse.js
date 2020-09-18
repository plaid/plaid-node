"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportFilterResponse {
    static getAttributeTypeMap() {
        return AssetReportFilterResponse.attributeTypeMap;
    }
}
AssetReportFilterResponse.discriminator = undefined;
AssetReportFilterResponse.attributeTypeMap = [
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
exports.AssetReportFilterResponse = AssetReportFilterResponse;
//# sourceMappingURL=assetReportFilterResponse.js.map