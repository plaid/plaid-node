"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Holding {
    static getAttributeTypeMap() {
        return Holding.attributeTypeMap;
    }
}
Holding.discriminator = undefined;
Holding.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "securityId",
        "baseName": "security_id",
        "type": "string"
    },
    {
        "name": "institutionPrice",
        "baseName": "institution_price",
        "type": "number"
    },
    {
        "name": "institutionPriceAsOf",
        "baseName": "institution_price_as_of",
        "type": "string"
    },
    {
        "name": "institutionValue",
        "baseName": "institution_value",
        "type": "number"
    },
    {
        "name": "costBasis",
        "baseName": "cost_basis",
        "type": "number"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "isoCurrencyCode",
        "baseName": "iso_currency_code",
        "type": "string"
    },
    {
        "name": "unofficialCurrencyCode",
        "baseName": "unofficial_currency_code",
        "type": "string"
    }
];
exports.Holding = Holding;
//# sourceMappingURL=holding.js.map