"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportRefreshRequestOptions {
    static getAttributeTypeMap() {
        return AssetReportRefreshRequestOptions.attributeTypeMap;
    }
}
AssetReportRefreshRequestOptions.discriminator = undefined;
AssetReportRefreshRequestOptions.attributeTypeMap = [
    {
        "name": "client_report_id",
        "baseName": "client_report_id",
        "type": "string"
    },
    {
        "name": "webhook",
        "baseName": "webhook",
        "type": "string"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "AssetReportUser"
    }
];
exports.AssetReportRefreshRequestOptions = AssetReportRefreshRequestOptions;
//# sourceMappingURL=assetReportRefreshRequestOptions.js.map