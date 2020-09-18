"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemStatus {
    static getAttributeTypeMap() {
        return ItemStatus.attributeTypeMap;
    }
}
ItemStatus.discriminator = undefined;
ItemStatus.attributeTypeMap = [
    {
        "name": "investments",
        "baseName": "investments",
        "type": "ItemStatusInvestments"
    },
    {
        "name": "transactions",
        "baseName": "transactions",
        "type": "ItemStatusTransactions"
    },
    {
        "name": "last_webhook",
        "baseName": "last_webhook",
        "type": "ItemStatusLastWebhook"
    }
];
exports.ItemStatus = ItemStatus;
//# sourceMappingURL=itemStatus.js.map