"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransactionsRefreshRequest {
    static getAttributeTypeMap() {
        return TransactionsRefreshRequest.attributeTypeMap;
    }
}
TransactionsRefreshRequest.discriminator = undefined;
TransactionsRefreshRequest.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
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
    }
];
exports.TransactionsRefreshRequest = TransactionsRefreshRequest;
//# sourceMappingURL=transactionsRefreshRequest.js.map