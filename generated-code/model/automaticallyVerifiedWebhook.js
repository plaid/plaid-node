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
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    }
];
exports.AutomaticallyVerifiedWebhook = AutomaticallyVerifiedWebhook;
//# sourceMappingURL=automaticallyVerifiedWebhook.js.map