"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SandboxItemFireWebhookResponse {
    static getAttributeTypeMap() {
        return SandboxItemFireWebhookResponse.attributeTypeMap;
    }
}
SandboxItemFireWebhookResponse.discriminator = undefined;
SandboxItemFireWebhookResponse.attributeTypeMap = [
    {
        "name": "webhookFired",
        "baseName": "webhook_fired",
        "type": "boolean"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.SandboxItemFireWebhookResponse = SandboxItemFireWebhookResponse;
//# sourceMappingURL=sandboxItemFireWebhookResponse.js.map