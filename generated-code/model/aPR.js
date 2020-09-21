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
        "name": "apr_percentage",
        "baseName": "apr_percentage",
        "type": "number"
    },
    {
        "name": "apr_type",
        "baseName": "apr_type",
        "type": "string"
    },
    {
        "name": "balance_subject_to_apr",
        "baseName": "balance_subject_to_apr",
        "type": "number"
    },
    {
        "name": "interest_charge_amount",
        "baseName": "interest_charge_amount",
        "type": "number"
    }
];
exports.APR = APR;
//# sourceMappingURL=aPR.js.map