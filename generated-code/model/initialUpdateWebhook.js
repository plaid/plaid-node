"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InitialUpdateWebhook {
    static getAttributeTypeMap() {
        return InitialUpdateWebhook.attributeTypeMap;
    }
}
InitialUpdateWebhook.discriminator = undefined;
InitialUpdateWebhook.attributeTypeMap = [
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
        "name": "error",
        "baseName": "error",
        "type": "string"
    },
    {
        "name": "new_transactions",
        "baseName": "new_transactions",
        "type": "number"
    },
    {
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    }
];
exports.InitialUpdateWebhook = InitialUpdateWebhook;
//# sourceMappingURL=initialUpdateWebhook.js.map