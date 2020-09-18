"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HoldingsDefaultUpdateWebhook {
    static getAttributeTypeMap() {
        return HoldingsDefaultUpdateWebhook.attributeTypeMap;
    }
}
HoldingsDefaultUpdateWebhook.discriminator = undefined;
HoldingsDefaultUpdateWebhook.attributeTypeMap = [
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
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    },
    {
        "name": "new_holdings",
        "baseName": "new_holdings",
        "type": "number"
    },
    {
        "name": "updated_holdings",
        "baseName": "updated_holdings",
        "type": "number"
    }
];
exports.HoldingsDefaultUpdateWebhook = HoldingsDefaultUpdateWebhook;
//# sourceMappingURL=holdingsDefaultUpdateWebhook.js.map