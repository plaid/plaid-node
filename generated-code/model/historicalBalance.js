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
exports.HistoricalBalance = HistoricalBalance;
//# sourceMappingURL=historicalBalance.js.map