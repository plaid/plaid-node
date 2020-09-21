"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentLoanStatus {
    static getAttributeTypeMap() {
        return StudentLoanStatus.attributeTypeMap;
    }
}
StudentLoanStatus.discriminator = undefined;
StudentLoanStatus.attributeTypeMap = [
    {
        "name": "end_date",
        "baseName": "end_date",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.StudentLoanStatus = StudentLoanStatus;
//# sourceMappingURL=studentLoanStatus.js.map