"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransactionOverride {
    static getAttributeTypeMap() {
        return TransactionOverride.attributeTypeMap;
    }
}
TransactionOverride.discriminator = undefined;
TransactionOverride.attributeTypeMap = [
    {
        "name": "transactionDate",
        "baseName": "transaction_date",
        "type": "string"
    },
    {
        "name": "postedDate",
        "baseName": "posted_date",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    }
];
exports.TransactionOverride = TransactionOverride;
//# sourceMappingURL=transactionOverride.js.map