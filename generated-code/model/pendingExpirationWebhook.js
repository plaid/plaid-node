"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PendingExpirationWebhook {
    static getAttributeTypeMap() {
        return PendingExpirationWebhook.attributeTypeMap;
    }
}
PendingExpirationWebhook.discriminator = undefined;
PendingExpirationWebhook.attributeTypeMap = [
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
        "name": "consent_expiration_time",
        "baseName": "consent_expiration_time",
        "type": "string"
    }
];
exports.PendingExpirationWebhook = PendingExpirationWebhook;
//# sourceMappingURL=pendingExpirationWebhook.js.map