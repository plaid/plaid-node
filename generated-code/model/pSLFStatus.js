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
        "name": "estimatedEligibilityDate",
        "baseName": "estimated_eligibility_date",
        "type": "string"
    },
    {
        "name": "paymentsMade",
        "baseName": "payments_made",
        "type": "string"
    },
    {
        "name": "paymentsRemaining",
        "baseName": "payments_remaining",
        "type": "string"
    }
];
exports.PSLFStatus = PSLFStatus;
//# sourceMappingURL=pSLFStatus.js.map