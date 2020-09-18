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
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "TransactionsGetRequestOptions"
    },
    {
        "name": "access_token",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
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
    }
];
exports.TransactionsGetRequest = TransactionsGetRequest;
//# sourceMappingURL=transactionsGetRequest.js.map