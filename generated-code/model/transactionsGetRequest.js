"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransactionsGetRequest {
    static getAttributeTypeMap() {
        return TransactionsGetRequest.attributeTypeMap;
    }
}
TransactionsGetRequest.discriminator = undefined;
TransactionsGetRequest.attributeTypeMap = [
    {
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "TransactionsGetRequestOptions"
    },
    {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
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
    }
];
exports.TransactionsGetRequest = TransactionsGetRequest;
//# sourceMappingURL=transactionsGetRequest.js.map