"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemAccessTokenInvalidateRequest {
    static getAttributeTypeMap() {
        return ItemAccessTokenInvalidateRequest.attributeTypeMap;
    }
}
ItemAccessTokenInvalidateRequest.discriminator = undefined;
ItemAccessTokenInvalidateRequest.attributeTypeMap = [
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
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    }
];
exports.ItemAccessTokenInvalidateRequest = ItemAccessTokenInvalidateRequest;
//# sourceMappingURL=itemAccessTokenInvalidateRequest.js.map