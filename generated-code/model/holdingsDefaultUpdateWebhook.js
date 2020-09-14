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
        "name": "webhookType",
        "baseName": "webhook_type",
        "type": "string"
    },
    {
        "name": "webhookCode",
        "baseName": "webhook_code",
        "type": "string"
    },
    {
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    },
    {
        "name": "newHoldings",
        "baseName": "new_holdings",
        "type": "number"
    },
    {
        "name": "updatedHoldings",
        "baseName": "updated_holdings",
        "type": "number"
    }
];
exports.HoldingsDefaultUpdateWebhook = HoldingsDefaultUpdateWebhook;
//# sourceMappingURL=holdingsDefaultUpdateWebhook.js.map