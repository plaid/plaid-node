"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APR {
    static getAttributeTypeMap() {
        return APR.attributeTypeMap;
    }
}
APR.discriminator = undefined;
APR.attributeTypeMap = [
    {
        "name": "aprPercentage",
        "baseName": "apr_percentage",
        "type": "number"
    },
    {
        "name": "aprType",
        "baseName": "apr_type",
        "type": "string"
    },
    {
        "name": "balanceSubjectToApr",
        "baseName": "balance_subject_to_apr",
        "type": "number"
    },
    {
        "name": "interestChargeAmount",
        "baseName": "interest_charge_amount",
        "type": "number"
    }
];
exports.APR = APR;
//# sourceMappingURL=aPR.js.map