"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemImportRequestUserAuth {
    static getAttributeTypeMap() {
        return ItemImportRequestUserAuth.attributeTypeMap;
    }
}
ItemImportRequestUserAuth.discriminator = undefined;
ItemImportRequestUserAuth.attributeTypeMap = [
    {
        "name": "user_id",
        "baseName": "user_id",
        "type": "string"
    },
    {
        "name": "auth_token",
        "baseName": "auth_token",
        "type": "string"
    }
];
exports.ItemImportRequestUserAuth = ItemImportRequestUserAuth;
//# sourceMappingURL=itemImportRequestUserAuth.js.map