"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StandaloneCurrencyCodeList {
    static getAttributeTypeMap() {
        return StandaloneCurrencyCodeList.attributeTypeMap;
    }
}
StandaloneCurrencyCodeList.discriminator = undefined;
StandaloneCurrencyCodeList.attributeTypeMap = [
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
exports.StandaloneCurrencyCodeList = StandaloneCurrencyCodeList;
//# sourceMappingURL=standaloneCurrencyCodeList.js.map