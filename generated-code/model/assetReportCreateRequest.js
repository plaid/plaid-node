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
        "name": "accessTokens",
        "baseName": "access_tokens",
        "type": "Array<string>"
    },
    {
        "name": "daysRequested",
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