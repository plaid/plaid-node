"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemProductReadyWebhook {
    static getAttributeTypeMap() {
        return ItemProductReadyWebhook.attributeTypeMap;
    }
}
ItemProductReadyWebhook.discriminator = undefined;
ItemProductReadyWebhook.attributeTypeMap = [
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
        "baseName": "&#x60;item_id&#x60;",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    }
];
exports.ItemProductReadyWebhook = ItemProductReadyWebhook;
//# sourceMappingURL=itemProductReadyWebhook.js.map