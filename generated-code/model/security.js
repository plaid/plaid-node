"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Security {
    static getAttributeTypeMap() {
        return Security.attributeTypeMap;
    }
}
Security.discriminator = undefined;
Security.attributeTypeMap = [
    {
        "name": "security_id",
        "baseName": "security_id",
        "type": "string"
    },
    {
        "name": "isin",
        "baseName": "isin",
        "type": "string"
    },
    {
        "name": "cusip",
        "baseName": "cusip",
        "type": "string"
    },
    {
        "name": "sedol",
        "baseName": "sedol",
        "type": "string"
    },
    {
        "name": "institution_security_id",
        "baseName": "institution_security_id",
        "type": "string"
    },
    {
        "name": "institution_id",
        "baseName": "institution_id",
        "type": "string"
    },
    {
        "name": "proxy_security_id",
        "baseName": "proxy_security_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "ticker_symbol",
        "baseName": "ticker_symbol",
        "type": "string"
    },
    {
        "name": "is_cash_equivalent",
        "baseName": "is_cash_equivalent",
        "type": "boolean"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "close_price",
        "baseName": "close_price",
        "type": "number"
    },
    {
        "name": "close_price_as_of",
        "baseName": "close_price_as_of",
        "type": "string"
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
exports.Security = Security;
//# sourceMappingURL=security.js.map