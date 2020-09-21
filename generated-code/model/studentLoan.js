"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentLoan {
    static getAttributeTypeMap() {
        return StudentLoan.attributeTypeMap;
    }
}
StudentLoan.discriminator = undefined;
StudentLoan.attributeTypeMap = [
    {
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "account_number",
        "baseName": "account_number",
        "type": "string"
    },
    {
        "name": "disbursement_dates",
        "baseName": "disbursement_dates",
        "type": "Array<string>"
    },
    {
        "name": "expected_payoff_date",
        "baseName": "expected_payoff_date",
        "type": "string"
    },
    {
        "name": "guarantor",
        "baseName": "guarantor",
        "type": "string"
    },
    {
        "name": "interest_rate_percentage",
        "baseName": "interest_rate_percentage",
        "type": "number"
    },
    {
        "name": "is_overdue",
        "baseName": "is_overdue",
        "type": "boolean"
    },
    {
        "name": "last_payment_amount",
        "baseName": "last_payment_amount",
        "type": "number"
    },
    {
        "name": "last_payment_date",
        "baseName": "last_payment_date",
        "type": "string"
    },
    {
        "name": "last_statement_balance",
        "baseName": "last_statement_balance",
        "type": "number"
    },
    {
        "name": "last_statement_issue_date",
        "baseName": "last_statement_issue_date",
        "type": "string"
    },
    {
        "name": "loan_name",
        "baseName": "loan_name",
        "type": "string"
    },
    {
        "name": "loan_status",
        "baseName": "loan_status",
        "type": "StudentLoanStatus"
    },
    {
        "name": "minimum_payment_amount",
        "baseName": "minimum_payment_amount",
        "type": "number"
    },
    {
        "name": "next_payment_due_date",
        "baseName": "next_payment_due_date",
        "type": "string"
    },
    {
        "name": "origination_date",
        "baseName": "origination_date",
        "type": "string"
    },
    {
        "name": "origination_principal_amount",
        "baseName": "origination_principal_amount",
        "type": "number"
    },
    {
        "name": "outstanding_interest_amount",
        "baseName": "outstanding_interest_amount",
        "type": "number"
    },
    {
        "name": "payment_reference_number",
        "baseName": "payment_reference_number",
        "type": "string"
    },
    {
        "name": "pslf_status",
        "baseName": "pslf_status",
        "type": "PSLFStatus"
    },
    {
        "name": "repayment_plan",
        "baseName": "repayment_plan",
        "type": "StudentRepaymentPlan"
    },
    {
        "name": "sequence_number",
        "baseName": "sequence_number",
        "type": "string"
    },
    {
        "name": "servicer_address",
        "baseName": "servicer_address",
        "type": "ServicerAddressData"
    },
    {
        "name": "ytd_interest_paid",
        "baseName": "ytd_interest_paid",
        "type": "number"
    },
    {
        "name": "ytd_principal_paid",
        "baseName": "ytd_principal_paid",
        "type": "number"
    }
];
exports.StudentLoan = StudentLoan;
//# sourceMappingURL=studentLoan.js.map