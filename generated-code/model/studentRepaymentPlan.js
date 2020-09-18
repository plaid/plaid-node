"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentRepaymentPlan {
    static getAttributeTypeMap() {
        return StudentRepaymentPlan.attributeTypeMap;
    }
}
StudentRepaymentPlan.discriminator = undefined;
StudentRepaymentPlan.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.StudentRepaymentPlan = StudentRepaymentPlan;
//# sourceMappingURL=studentRepaymentPlan.js.map