"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemImportResponse {
    static getAttributeTypeMap() {
        return ItemImportResponse.attributeTypeMap;
    }
}
ItemImportResponse.discriminator = undefined;
ItemImportResponse.attributeTypeMap = [
    {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ItemImportResponse = ItemImportResponse;
//# sourceMappingURL=itemImportResponse.js.map