"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumbersBACS {
    static getAttributeTypeMap() {
        return NumbersBACS.attributeTypeMap;
    }
}
NumbersBACS.discriminator = undefined;
NumbersBACS.attributeTypeMap = [
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
        "name": "sortCode",
        "baseName": "sort_code",
        "type": "string"
    }
];
exports.NumbersBACS = NumbersBACS;
//# sourceMappingURL=numbersBACS.js.map