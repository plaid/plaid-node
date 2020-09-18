"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebhookVerificationKeyGetRequest {
    static getAttributeTypeMap() {
        return WebhookVerificationKeyGetRequest.attributeTypeMap;
    }
}
WebhookVerificationKeyGetRequest.discriminator = undefined;
WebhookVerificationKeyGetRequest.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "key_id",
        "baseName": "key_id",
        "type": "string"
    }
];
exports.WebhookVerificationKeyGetRequest = WebhookVerificationKeyGetRequest;
//# sourceMappingURL=webhookVerificationKeyGetRequest.js.map