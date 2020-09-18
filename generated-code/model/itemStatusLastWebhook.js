"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemStatusLastWebhook {
    static getAttributeTypeMap() {
        return ItemStatusLastWebhook.attributeTypeMap;
    }
}
ItemStatusLastWebhook.discriminator = undefined;
ItemStatusLastWebhook.attributeTypeMap = [
    {
        "name": "sent_at",
        "baseName": "sent_at",
        "type": "string"
    },
    {
        "name": "code_sent",
        "baseName": "code_sent",
        "type": "string"
    }
];
exports.ItemStatusLastWebhook = ItemStatusLastWebhook;
//# sourceMappingURL=itemStatusLastWebhook.js.map