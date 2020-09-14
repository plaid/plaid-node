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
        "name": "error",
        "baseName": "error",
        "type": "Error"
    },
    {
        "name": "newTransactions",
        "baseName": "new_transactions",
        "type": "number"
    },
    {
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    }
];
exports.DefaultUpdateWebhook = DefaultUpdateWebhook;
//# sourceMappingURL=defaultUpdateWebhook.js.map