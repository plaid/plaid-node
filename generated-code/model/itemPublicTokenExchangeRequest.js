"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemPublicTokenExchangeRequest {
    static getAttributeTypeMap() {
        return ItemPublicTokenExchangeRequest.attributeTypeMap;
    }
}
ItemPublicTokenExchangeRequest.discriminator = undefined;
ItemPublicTokenExchangeRequest.attributeTypeMap = [
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
        "name": "publicToken",
        "baseName": "public_token",
        "type": "string"
    }
];
exports.ItemPublicTokenExchangeRequest = ItemPublicTokenExchangeRequest;
//# sourceMappingURL=itemPublicTokenExchangeRequest.js.map