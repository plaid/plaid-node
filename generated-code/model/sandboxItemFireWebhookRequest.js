"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SandboxItemFireWebhookRequest {
    static getAttributeTypeMap() {
        return SandboxItemFireWebhookRequest.attributeTypeMap;
    }
}
SandboxItemFireWebhookRequest.discriminator = undefined;
SandboxItemFireWebhookRequest.attributeTypeMap = [
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
        "name": "access_token",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "webhook_code",
        "baseName": "webhook_code",
        "type": "SandboxItemFireWebhookRequest.WebhookCodeEnum"
    }
];
exports.SandboxItemFireWebhookRequest = SandboxItemFireWebhookRequest;
(function (SandboxItemFireWebhookRequest) {
    let WebhookCodeEnum;
    (function (WebhookCodeEnum) {
        WebhookCodeEnum[WebhookCodeEnum["DEFAULTUPDATE"] = 'DEFAULT_UPDATE'] = "DEFAULTUPDATE";
    })(WebhookCodeEnum = SandboxItemFireWebhookRequest.WebhookCodeEnum || (SandboxItemFireWebhookRequest.WebhookCodeEnum = {}));
})(SandboxItemFireWebhookRequest = exports.SandboxItemFireWebhookRequest || (exports.SandboxItemFireWebhookRequest = {}));
//# sourceMappingURL=sandboxItemFireWebhookRequest.js.map