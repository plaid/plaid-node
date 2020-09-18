"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BalanceGetRequest {
    static getAttributeTypeMap() {
        return BalanceGetRequest.attributeTypeMap;
    }
}
BalanceGetRequest.discriminator = undefined;
BalanceGetRequest.attributeTypeMap = [
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
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "BalanceGetRequestOptions"
    }
];
exports.BalanceGetRequest = BalanceGetRequest;
//# sourceMappingURL=balanceGetRequest.js.map