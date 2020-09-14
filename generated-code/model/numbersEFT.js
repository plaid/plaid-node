"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumbersEFT {
    static getAttributeTypeMap() {
        return NumbersEFT.attributeTypeMap;
    }
}
NumbersEFT.discriminator = undefined;
NumbersEFT.attributeTypeMap = [
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
        "name": "institution",
        "baseName": "institution",
        "type": "string"
    },
    {
        "name": "branch",
        "baseName": "branch",
        "type": "string"
    }
];
exports.NumbersEFT = NumbersEFT;
//# sourceMappingURL=numbersEFT.js.map