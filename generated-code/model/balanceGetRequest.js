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
        "name": "clientId",
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