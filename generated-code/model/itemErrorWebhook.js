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
        "name": "webhookType",
        "baseName": "webhook_type",
        "type": "string"
    },
    {
        "name": "webhookCode",
        "baseName": "webhook_code",
        "type": "string"
    },
    {
        "name": "itemId",
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