"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemPublicTokenCreateRequest {
    static getAttributeTypeMap() {
        return ItemPublicTokenCreateRequest.attributeTypeMap;
    }
}
ItemPublicTokenCreateRequest.discriminator = undefined;
ItemPublicTokenCreateRequest.attributeTypeMap = [
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
exports.ItemPublicTokenCreateRequest = ItemPublicTokenCreateRequest;
//# sourceMappingURL=itemPublicTokenCreateRequest.js.map