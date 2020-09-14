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
        "name": "newWebhookUrl",
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