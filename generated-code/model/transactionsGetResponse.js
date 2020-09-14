"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransactionsGetResponse {
    static getAttributeTypeMap() {
        return TransactionsGetResponse.attributeTypeMap;
    }
}
TransactionsGetResponse.discriminator = undefined;
TransactionsGetResponse.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "Array<Account>"
    },
    {
        "name": "transactions",
        "baseName": "transactions",
        "type": "Array<Transaction>"
    },
    {
        "name": "totalTransactions",
        "baseName": "total_transactions",
        "type": "number"
    },
    {
        "name": "item",
        "baseName": "item",
        "type": "Item"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.TransactionsGetResponse = TransactionsGetResponse;
//# sourceMappingURL=transactionsGetResponse.js.map