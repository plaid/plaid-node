"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransactionsGetRequestOptions {
    static getAttributeTypeMap() {
        return TransactionsGetRequestOptions.attributeTypeMap;
    }
}
TransactionsGetRequestOptions.discriminator = undefined;
TransactionsGetRequestOptions.attributeTypeMap = [
    {
        "name": "account_ids",
        "baseName": "account_ids",
        "type": "Array<string>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "offset",
        "baseName": "offset",
        "type": "number"
    }
];
exports.TransactionsGetRequestOptions = TransactionsGetRequestOptions;
//# sourceMappingURL=transactionsGetRequestOptions.js.map