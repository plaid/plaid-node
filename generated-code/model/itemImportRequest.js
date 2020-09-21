"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemImportRequest {
    static getAttributeTypeMap() {
        return ItemImportRequest.attributeTypeMap;
    }
}
ItemImportRequest.discriminator = undefined;
ItemImportRequest.attributeTypeMap = [
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
        "name": "products",
        "baseName": "products",
        "type": "Array<string>"
    },
    {
        "name": "user_auth",
        "baseName": "user_auth",
        "type": "ItemImportRequestUserAuth"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "ItemImportRequestOptions"
    }
];
exports.ItemImportRequest = ItemImportRequest;
//# sourceMappingURL=itemImportRequest.js.map