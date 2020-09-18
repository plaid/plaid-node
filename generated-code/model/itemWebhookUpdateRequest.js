"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemWebhookUpdateRequest {
    static getAttributeTypeMap() {
        return ItemWebhookUpdateRequest.attributeTypeMap;
    }
}
ItemWebhookUpdateRequest.discriminator = undefined;
ItemWebhookUpdateRequest.attributeTypeMap = [
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
        "name": "webhook",
        "baseName": "webhook",
        "type": "string"
    }
];
exports.ItemWebhookUpdateRequest = ItemWebhookUpdateRequest;
//# sourceMappingURL=itemWebhookUpdateRequest.js.map