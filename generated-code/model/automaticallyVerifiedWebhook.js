"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AutomaticallyVerifiedWebhook {
    static getAttributeTypeMap() {
        return AutomaticallyVerifiedWebhook.attributeTypeMap;
    }
}
AutomaticallyVerifiedWebhook.discriminator = undefined;
AutomaticallyVerifiedWebhook.attributeTypeMap = [
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
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    }
];
exports.AutomaticallyVerifiedWebhook = AutomaticallyVerifiedWebhook;
//# sourceMappingURL=automaticallyVerifiedWebhook.js.map