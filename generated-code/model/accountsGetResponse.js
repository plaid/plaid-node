"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountsGetResponse {
    static getAttributeTypeMap() {
        return AccountsGetResponse.attributeTypeMap;
    }
}
AccountsGetResponse.discriminator = undefined;
AccountsGetResponse.attributeTypeMap = [
    {
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<Account>"
    },
    {
        "name": "item",
        "baseName": "item",
        "type": "Item"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.AccountsGetResponse = AccountsGetResponse;
//# sourceMappingURL=accountsGetResponse.js.map