"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultUpdateWebhook {
    static getAttributeTypeMap() {
        return DefaultUpdateWebhook.attributeTypeMap;
    }
}
DefaultUpdateWebhook.discriminator = undefined;
DefaultUpdateWebhook.attributeTypeMap = [
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
        "name": "error",
        "baseName": "error",
        "type": "Error"
    },
    {
        "name": "new_transactions",
        "baseName": "new_transactions",
        "type": "number"
    },
    {
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    }
];
exports.DefaultUpdateWebhook = DefaultUpdateWebhook;
//# sourceMappingURL=defaultUpdateWebhook.js.map