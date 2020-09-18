"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentLoanRepaymentModel {
    static getAttributeTypeMap() {
        return StudentLoanRepaymentModel.attributeTypeMap;
    }
}
StudentLoanRepaymentModel.discriminator = undefined;
StudentLoanRepaymentModel.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "non_repayment_months",
        "baseName": "non_repayment_months",
        "type": "number"
    },
    {
        "name": "repayment_months",
        "baseName": "repayment_months",
        "type": "number"
    }
];
exports.StudentLoanRepaymentModel = StudentLoanRepaymentModel;
//# sourceMappingURL=studentLoanRepaymentModel.js.map