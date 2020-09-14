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
        "name": "consentExpirationTime",
        "baseName": "consent_expiration_time",
        "type": "string"
    }
];
exports.PendingExpirationWebhook = PendingExpirationWebhook;
//# sourceMappingURL=pendingExpirationWebhook.js.map