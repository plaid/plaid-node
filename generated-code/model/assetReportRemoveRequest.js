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
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "assetReportToken",
        "baseName": "asset_report_token",
        "type": "string"
    }
];
exports.AssetReportRemoveRequest = AssetReportRemoveRequest;
//# sourceMappingURL=assetReportRemoveRequest.js.map