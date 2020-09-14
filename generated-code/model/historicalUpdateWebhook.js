"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HistoricalUpdateWebhook {
    static getAttributeTypeMap() {
        return HistoricalUpdateWebhook.attributeTypeMap;
    }
}
HistoricalUpdateWebhook.discriminator = undefined;
HistoricalUpdateWebhook.attributeTypeMap = [
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
        "name": "error",
        "baseName": "error",
        "type": "Error"
    },
    {
        "name": "newTransactions",
        "baseName": "new_transactions",
        "type": "number"
    },
    {
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    }
];
exports.HistoricalUpdateWebhook = HistoricalUpdateWebhook;
//# sourceMappingURL=historicalUpdateWebhook.js.map