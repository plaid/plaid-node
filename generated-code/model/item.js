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
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "institutionId",
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
        "name": "availableProducts",
        "baseName": "available_products",
        "type": "Array<string>"
    },
    {
        "name": "billedProducts",
        "baseName": "billed_products",
        "type": "Array<string>"
    },
    {
        "name": "consentExpirationTime",
        "baseName": "consent_expiration_time",
        "type": "string"
    }
];
exports.Item = Item;
//# sourceMappingURL=item.js.map