"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemErrorWebhook {
    static getAttributeTypeMap() {
        return ItemErrorWebhook.attributeTypeMap;
    }
}
ItemErrorWebhook.discriminator = undefined;
ItemErrorWebhook.attributeTypeMap = [
    {
        "name": "webhook_type",
        "baseName": "webhook_type",
        "type": "string"
    },
    {
        "name": "webhook_code",
        "baseName": "webhook_code",
        "type": "string"
    },
    {
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    }
];
exports.ItemErrorWebhook = ItemErrorWebhook;
//# sourceMappingURL=itemErrorWebhook.js.map