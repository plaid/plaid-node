"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LiabilitiesObject {
    static getAttributeTypeMap() {
        return LiabilitiesObject.attributeTypeMap;
    }
}
LiabilitiesObject.discriminator = undefined;
LiabilitiesObject.attributeTypeMap = [
    {
        "name": "credit",
        "baseName": "credit",
        "type": "Array<CreditCardLiability>"
    },
    {
        "name": "student",
        "baseName": "student",
        "type": "Array<StudentLoan>"
    }
];
exports.LiabilitiesObject = LiabilitiesObject;
//# sourceMappingURL=liabilitiesObject.js.map