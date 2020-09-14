"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhoneNumber {
    static getAttributeTypeMap() {
        return PhoneNumber.attributeTypeMap;
    }
}
PhoneNumber.discriminator = undefined;
PhoneNumber.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "string"
    },
    {
        "name": "primary",
        "baseName": "primary",
        "type": "boolean"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.PhoneNumber = PhoneNumber;
//# sourceMappingURL=phoneNumber.js.map