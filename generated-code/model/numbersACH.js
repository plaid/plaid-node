"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumbersACH {
    static getAttributeTypeMap() {
        return NumbersACH.attributeTypeMap;
    }
}
NumbersACH.discriminator = undefined;
NumbersACH.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "string"
    },
    {
        "name": "routing",
        "baseName": "routing",
        "type": "string"
    },
    {
        "name": "wireRouting",
        "baseName": "wire_routing",
        "type": "string"
    }
];
exports.NumbersACH = NumbersACH;
//# sourceMappingURL=numbersACH.js.map