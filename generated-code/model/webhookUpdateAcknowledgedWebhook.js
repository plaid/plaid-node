"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebhookUpdateAcknowledgedWebhook {
    static getAttributeTypeMap() {
        return WebhookUpdateAcknowledgedWebhook.attributeTypeMap;
    }
}
WebhookUpdateAcknowledgedWebhook.discriminator = undefined;
WebhookUpdateAcknowledgedWebhook.attributeTypeMap = [
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
        "name": "new_webhook_url",
        "baseName": "new_webhook_url",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    }
];
exports.WebhookUpdateAcknowledgedWebhook = WebhookUpdateAcknowledgedWebhook;
//# sourceMappingURL=webhookUpdateAcknowledgedWebhook.js.map