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
        "name": "securityId",
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
        "name": "institutionSecurityId",
        "baseName": "institution_security_id",
        "type": "string"
    },
    {
        "name": "institutionId",
        "baseName": "institution_id",
        "type": "string"
    },
    {
        "name": "proxySecurityId",
        "baseName": "proxy_security_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "tickerSymbol",
        "baseName": "ticker_symbol",
        "type": "string"
    },
    {
        "name": "isCashEquivalent",
        "baseName": "is_cash_equivalent",
        "type": "boolean"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "closePrice",
        "baseName": "close_price",
        "type": "number"
    },
    {
        "name": "closePriceAsOf",
        "baseName": "close_price_as_of",
        "type": "string"
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
exports.Security = Security;
//# sourceMappingURL=security.js.map