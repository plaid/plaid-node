"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvestmentsTransactionsGetRequest {
    static getAttributeTypeMap() {
        return InvestmentsTransactionsGetRequest.attributeTypeMap;
    }
}
InvestmentsTransactionsGetRequest.discriminator = undefined;
InvestmentsTransactionsGetRequest.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "access_token",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "start_date",
        "baseName": "start_date",
        "type": "string"
    },
    {
        "name": "end_date",
        "baseName": "end_date",
        "type": "string"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "InvestmentsTransactionsGetRequestOptions"
    }
];
exports.InvestmentsTransactionsGetRequest = InvestmentsTransactionsGetRequest;
//# sourceMappingURL=investmentsTransactionsGetRequest.js.map