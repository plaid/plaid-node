"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportRemoveRequest {
    static getAttributeTypeMap() {
        return AssetReportRemoveRequest.attributeTypeMap;
    }
}
AssetReportRemoveRequest.discriminator = undefined;
AssetReportRemoveRequest.attributeTypeMap = [
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
exports.AssetReportRemoveRequest = AssetReportRemoveRequest;
//# sourceMappingURL=assetReportRemoveRequest.js.map