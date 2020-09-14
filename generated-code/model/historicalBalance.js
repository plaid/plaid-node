"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HistoricalBalance {
    static getAttributeTypeMap() {
        return HistoricalBalance.attributeTypeMap;
    }
}
HistoricalBalance.discriminator = undefined;
HistoricalBalance.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "current",
        "baseName": "current",
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
exports.HistoricalBalance = HistoricalBalance;
//# sourceMappingURL=historicalBalance.js.map