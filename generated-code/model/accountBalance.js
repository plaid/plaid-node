"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountBalance {
    static getAttributeTypeMap() {
        return AccountBalance.attributeTypeMap;
    }
}
AccountBalance.discriminator = undefined;
AccountBalance.attributeTypeMap = [
    {
        "name": "available",
        "baseName": "available",
        "type": "number"
    },
    {
        "name": "current",
        "baseName": "current",
        "type": "number"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "iso_currency_code",
        "baseName": "iso_currency_code",
        "type": "string"
    },
    {
        "name": "unofficial_currency_code",
        "baseName": "unofficial_currency_code",
        "type": "string"
    }
];
exports.AccountBalance = AccountBalance;
//# sourceMappingURL=accountBalance.js.map