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
        "name": "access_token",
        "baseName": "access_token",
        "type": "string"
    }
];
exports.ItemAccessTokenInvalidateRequest = ItemAccessTokenInvalidateRequest;
//# sourceMappingURL=itemAccessTokenInvalidateRequest.js.map