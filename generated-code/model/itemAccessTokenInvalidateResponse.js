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
        "name": "newAccessToken",
        "baseName": "new_access_token",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ItemAccessTokenInvalidateResponse = ItemAccessTokenInvalidateResponse;
//# sourceMappingURL=itemAccessTokenInvalidateResponse.js.map