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
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "startDate",
        "baseName": "start_date",
        "type": "string"
    },
    {
        "name": "endDate",
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