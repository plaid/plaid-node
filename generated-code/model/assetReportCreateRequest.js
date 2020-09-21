"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetReportCreateRequest {
    static getAttributeTypeMap() {
        return AssetReportCreateRequest.attributeTypeMap;
    }
}
AssetReportCreateRequest.discriminator = undefined;
AssetReportCreateRequest.attributeTypeMap = [
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
        "name": "access_tokens",
        "baseName": "access_tokens",
        "type": "Array<string>"
    },
    {
        "name": "days_requested",
        "baseName": "days_requested",
        "type": "number"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "AssetReportCreateRequestOptions"
    }
];
exports.AssetReportCreateRequest = AssetReportCreateRequest;
//# sourceMappingURL=assetReportCreateRequest.js.map