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
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "security_id",
        "baseName": "security_id",
        "type": "string"
    },
    {
        "name": "institution_price",
        "baseName": "institution_price",
        "type": "number"
    },
    {
        "name": "institution_price_as_of",
        "baseName": "institution_price_as_of",
        "type": "string"
    },
    {
        "name": "institution_value",
        "baseName": "institution_value",
        "type": "number"
    },
    {
        "name": "cost_basis",
        "baseName": "cost_basis",
        "type": "number"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
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
exports.Holding = Holding;
//# sourceMappingURL=holding.js.map