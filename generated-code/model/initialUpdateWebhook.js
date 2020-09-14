"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InitialUpdateWebhook {
    static getAttributeTypeMap() {
        return InitialUpdateWebhook.attributeTypeMap;
    }
}
InitialUpdateWebhook.discriminator = undefined;
InitialUpdateWebhook.attributeTypeMap = [
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
        "type": "string"
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
exports.InitialUpdateWebhook = InitialUpdateWebhook;
//# sourceMappingURL=initialUpdateWebhook.js.map