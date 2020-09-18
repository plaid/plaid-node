"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebhookVerificationKeyGetResponse {
    static getAttributeTypeMap() {
        return WebhookVerificationKeyGetResponse.attributeTypeMap;
    }
}
WebhookVerificationKeyGetResponse.discriminator = undefined;
WebhookVerificationKeyGetResponse.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "object"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.WebhookVerificationKeyGetResponse = WebhookVerificationKeyGetResponse;
//# sourceMappingURL=webhookVerificationKeyGetResponse.js.map