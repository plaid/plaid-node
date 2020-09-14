"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportCreateRequestOptions {
    static getAttributeTypeMap() {
        return AssetReportCreateRequestOptions.attributeTypeMap;
    }
}
AssetReportCreateRequestOptions.discriminator = undefined;
AssetReportCreateRequestOptions.attributeTypeMap = [
    {
        "name": "clientReportId",
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
exports.AssetReportCreateRequestOptions = AssetReportCreateRequestOptions;
//# sourceMappingURL=assetReportCreateRequestOptions.js.map