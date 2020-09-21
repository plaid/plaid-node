"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvestmentTransaction {
    static getAttributeTypeMap() {
        return InvestmentTransaction.attributeTypeMap;
    }
}
InvestmentTransaction.discriminator = undefined;
InvestmentTransaction.attributeTypeMap = [
    {
        "name": "investment_transaction_id",
        "baseName": "investment_transaction_id",
        "type": "string"
    },
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
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "number"
    },
    {
        "name": "fees",
        "baseName": "fees",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "subtype",
        "baseName": "subtype",
        "type": "StandaloneInvestmentTransactionSubtype"
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
exports.InvestmentTransaction = InvestmentTransaction;
//# sourceMappingURL=investmentTransaction.js.map