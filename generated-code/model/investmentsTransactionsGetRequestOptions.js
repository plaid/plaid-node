"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvestmentsTransactionsGetRequestOptions {
    static getAttributeTypeMap() {
        return InvestmentsTransactionsGetRequestOptions.attributeTypeMap;
    }
}
InvestmentsTransactionsGetRequestOptions.discriminator = undefined;
InvestmentsTransactionsGetRequestOptions.attributeTypeMap = [
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
exports.InvestmentsTransactionsGetRequestOptions = InvestmentsTransactionsGetRequestOptions;
//# sourceMappingURL=investmentsTransactionsGetRequestOptions.js.map