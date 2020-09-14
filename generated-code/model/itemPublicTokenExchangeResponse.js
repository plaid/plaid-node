"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemPublicTokenExchangeResponse {
    static getAttributeTypeMap() {
        return ItemPublicTokenExchangeResponse.attributeTypeMap;
    }
}
ItemPublicTokenExchangeResponse.discriminator = undefined;
ItemPublicTokenExchangeResponse.attributeTypeMap = [
    {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ItemPublicTokenExchangeResponse = ItemPublicTokenExchangeResponse;
//# sourceMappingURL=itemPublicTokenExchangeResponse.js.map