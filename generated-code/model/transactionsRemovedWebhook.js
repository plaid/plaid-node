"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransactionsRemovedWebhook {
    static getAttributeTypeMap() {
        return TransactionsRemovedWebhook.attributeTypeMap;
    }
}
TransactionsRemovedWebhook.discriminator = undefined;
TransactionsRemovedWebhook.attributeTypeMap = [
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
        "name": "removedTransactions",
        "baseName": "removed_transactions",
        "type": "Array<string>"
    },
    {
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    }
];
exports.TransactionsRemovedWebhook = TransactionsRemovedWebhook;
//# sourceMappingURL=transactionsRemovedWebhook.js.map