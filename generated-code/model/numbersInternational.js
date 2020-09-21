"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumbersInternational {
    static getAttributeTypeMap() {
        return NumbersInternational.attributeTypeMap;
    }
}
NumbersInternational.discriminator = undefined;
NumbersInternational.attributeTypeMap = [
    {
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "iban",
        "baseName": "iban",
        "type": "string"
    },
    {
        "name": "bic",
        "baseName": "bic",
        "type": "string"
    }
];
exports.NumbersInternational = NumbersInternational;
//# sourceMappingURL=numbersInternational.js.map