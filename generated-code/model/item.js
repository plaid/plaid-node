"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    static getAttributeTypeMap() {
        return Item.attributeTypeMap;
    }
}
Item.discriminator = undefined;
Item.attributeTypeMap = [
    {
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "institution_id",
        "baseName": "institution_id",
        "type": "string"
    },
    {
        "name": "webhook",
        "baseName": "webhook",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    },
    {
        "name": "available_products",
        "baseName": "available_products",
        "type": "Array<string>"
    },
    {
        "name": "billed_products",
        "baseName": "billed_products",
        "type": "Array<string>"
    },
    {
        "name": "consent_expiration_time",
        "baseName": "consent_expiration_time",
        "type": "string"
    }
];
exports.Item = Item;
//# sourceMappingURL=item.js.map