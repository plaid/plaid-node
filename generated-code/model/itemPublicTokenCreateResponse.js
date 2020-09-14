"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemPublicTokenCreateResponse {
    static getAttributeTypeMap() {
        return ItemPublicTokenCreateResponse.attributeTypeMap;
    }
}
ItemPublicTokenCreateResponse.discriminator = undefined;
ItemPublicTokenCreateResponse.attributeTypeMap = [
    {
        "name": "publicToken",
        "baseName": "public_token",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ItemPublicTokenCreateResponse = ItemPublicTokenCreateResponse;
//# sourceMappingURL=itemPublicTokenCreateResponse.js.map