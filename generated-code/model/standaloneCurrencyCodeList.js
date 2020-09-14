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
exports.StandaloneCurrencyCodeList = StandaloneCurrencyCodeList;
//# sourceMappingURL=standaloneCurrencyCodeList.js.map