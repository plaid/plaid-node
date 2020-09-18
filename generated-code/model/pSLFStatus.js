"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PSLFStatus {
    static getAttributeTypeMap() {
        return PSLFStatus.attributeTypeMap;
    }
}
PSLFStatus.discriminator = undefined;
PSLFStatus.attributeTypeMap = [
    {
        "name": "estimated_eligibility_date",
        "baseName": "estimated_eligibility_date",
        "type": "string"
    },
    {
        "name": "payments_made",
        "baseName": "payments_made",
        "type": "string"
    },
    {
        "name": "payments_remaining",
        "baseName": "payments_remaining",
        "type": "string"
    }
];
exports.PSLFStatus = PSLFStatus;
//# sourceMappingURL=pSLFStatus.js.map