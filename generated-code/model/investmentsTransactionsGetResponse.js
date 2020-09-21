"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvestmentsTransactionsGetResponse {
    static getAttributeTypeMap() {
        return InvestmentsTransactionsGetResponse.attributeTypeMap;
    }
}
InvestmentsTransactionsGetResponse.discriminator = undefined;
InvestmentsTransactionsGetResponse.attributeTypeMap = [
    {
        "name": "item",
        "baseName": "item",
        "type": "Item"
    },
    {
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<Account>"
    },
    {
        "name": "securities",
        "baseName": "securities",
        "type": "Array<Security>"
    },
    {
        "name": "investment_transactions",
        "baseName": "investment_transactions",
        "type": "Array<InvestmentTransaction>"
    },
    {
        "name": "total_investment_transactions",
        "baseName": "total_investment_transactions",
        "type": "number"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.InvestmentsTransactionsGetResponse = InvestmentsTransactionsGetResponse;
//# sourceMappingURL=investmentsTransactionsGetResponse.js.map