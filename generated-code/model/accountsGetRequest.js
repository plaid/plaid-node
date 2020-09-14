"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountsGetRequest {
    static getAttributeTypeMap() {
        return AccountsGetRequest.attributeTypeMap;
    }
}
AccountsGetRequest.discriminator = undefined;
AccountsGetRequest.attributeTypeMap = [
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
    }
];
exports.AccountsGetRequest = AccountsGetRequest;
//# sourceMappingURL=accountsGetRequest.js.map