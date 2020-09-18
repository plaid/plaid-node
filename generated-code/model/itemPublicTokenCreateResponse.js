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
        "name": "public_token",
        "baseName": "public_token",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ItemPublicTokenCreateResponse = ItemPublicTokenCreateResponse;
//# sourceMappingURL=itemPublicTokenCreateResponse.js.map