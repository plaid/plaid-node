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
    }
];
exports.AccountsGetRequest = AccountsGetRequest;
//# sourceMappingURL=accountsGetRequest.js.map