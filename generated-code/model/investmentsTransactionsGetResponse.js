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
        "name": "investmentTransactions",
        "baseName": "investment_transactions",
        "type": "Array<InvestmentTransaction>"
    },
    {
        "name": "totalInvestmentTransactions",
        "baseName": "total_investment_transactions",
        "type": "number"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.InvestmentsTransactionsGetResponse = InvestmentsTransactionsGetResponse;
//# sourceMappingURL=investmentsTransactionsGetResponse.js.map