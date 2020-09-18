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
        "type": "Error"
    },
    {
        "name": "removed_transactions",
        "baseName": "removed_transactions",
        "type": "Array<string>"
    },
    {
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    }
];
exports.TransactionsRemovedWebhook = TransactionsRemovedWebhook;
//# sourceMappingURL=transactionsRemovedWebhook.js.map