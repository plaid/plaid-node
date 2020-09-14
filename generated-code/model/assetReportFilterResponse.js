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
exports.AssetReportFilterResponse = AssetReportFilterResponse;
//# sourceMappingURL=assetReportFilterResponse.js.map