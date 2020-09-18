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
        "name": "access_token",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ItemPublicTokenExchangeResponse = ItemPublicTokenExchangeResponse;
//# sourceMappingURL=itemPublicTokenExchangeResponse.js.map