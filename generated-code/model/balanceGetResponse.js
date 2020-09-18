"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BalanceGetResponse {
    static getAttributeTypeMap() {
        return BalanceGetResponse.attributeTypeMap;
    }
}
BalanceGetResponse.discriminator = undefined;
BalanceGetResponse.attributeTypeMap = [
    {
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<Account>"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    },
    {
        "name": "item",
        "baseName": "item",
        "type": "Item"
    }
];
exports.BalanceGetResponse = BalanceGetResponse;
//# sourceMappingURL=balanceGetResponse.js.map