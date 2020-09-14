"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportRemoveResponse {
    static getAttributeTypeMap() {
        return AssetReportRemoveResponse.attributeTypeMap;
    }
}
AssetReportRemoveResponse.discriminator = undefined;
AssetReportRemoveResponse.attributeTypeMap = [
    {
        "name": "removed",
        "baseName": "removed",
        "type": "boolean"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AssetReportRemoveResponse = AssetReportRemoveResponse;
//# sourceMappingURL=assetReportRemoveResponse.js.map