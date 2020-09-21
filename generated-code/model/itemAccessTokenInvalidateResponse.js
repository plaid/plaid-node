"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemAccessTokenInvalidateResponse {
    static getAttributeTypeMap() {
        return ItemAccessTokenInvalidateResponse.attributeTypeMap;
    }
}
ItemAccessTokenInvalidateResponse.discriminator = undefined;
ItemAccessTokenInvalidateResponse.attributeTypeMap = [
    {
        "name": "new_access_token",
        "baseName": "new_access_token",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ItemAccessTokenInvalidateResponse = ItemAccessTokenInvalidateResponse;
//# sourceMappingURL=itemAccessTokenInvalidateResponse.js.map