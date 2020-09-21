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