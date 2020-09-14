"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemWebhookUpdateResponse {
    static getAttributeTypeMap() {
        return ItemWebhookUpdateResponse.attributeTypeMap;
    }
}
ItemWebhookUpdateResponse.discriminator = undefined;
ItemWebhookUpdateResponse.attributeTypeMap = [
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
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "webhook",
        "baseName": "webhook",
        "type": "string"
    }
];
exports.ItemWebhookUpdateResponse = ItemWebhookUpdateResponse;
//# sourceMappingURL=itemWebhookUpdateResponse.js.map