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
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "keyId",
        "baseName": "key_id",
        "type": "string"
    }
];
exports.WebhookVerificationKeyGetRequest = WebhookVerificationKeyGetRequest;
//# sourceMappingURL=webhookVerificationKeyGetRequest.js.map