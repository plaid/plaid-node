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
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "accountNumber",
        "baseName": "account_number",
        "type": "string"
    },
    {
        "name": "disbursementDates",
        "baseName": "disbursement_dates",
        "type": "Array<string>"
    },
    {
        "name": "expectedPayoffDate",
        "baseName": "expected_payoff_date",
        "type": "string"
    },
    {
        "name": "guarantor",
        "baseName": "guarantor",
        "type": "string"
    },
    {
        "name": "interestRatePercentage",
        "baseName": "interest_rate_percentage",
        "type": "number"
    },
    {
        "name": "isOverdue",
        "baseName": "is_overdue",
        "type": "boolean"
    },
    {
        "name": "lastPaymentAmount",
        "baseName": "last_payment_amount",
        "type": "number"
    },
    {
        "name": "lastPaymentDate",
        "baseName": "last_payment_date",
        "type": "string"
    },
    {
        "name": "lastStatementBalance",
        "baseName": "last_statement_balance",
        "type": "number"
    },
    {
        "name": "lastStatementIssueDate",
        "baseName": "last_statement_issue_date",
        "type": "string"
    },
    {
        "name": "loanName",
        "baseName": "loan_name",
        "type": "string"
    },
    {
        "name": "loanStatus",
        "baseName": "loan_status",
        "type": "StudentLoanStatus"
    },
    {
        "name": "minimumPaymentAmount",
        "baseName": "minimum_payment_amount",
        "type": "number"
    },
    {
        "name": "nextPaymentDueDate",
        "baseName": "next_payment_due_date",
        "type": "string"
    },
    {
        "name": "originationDate",
        "baseName": "origination_date",
        "type": "string"
    },
    {
        "name": "originationPrincipalAmount",
        "baseName": "origination_principal_amount",
        "type": "number"
    },
    {
        "name": "outstandingInterestAmount",
        "baseName": "outstanding_interest_amount",
        "type": "number"
    },
    {
        "name": "paymentReferenceNumber",
        "baseName": "payment_reference_number",
        "type": "string"
    },
    {
        "name": "pslfStatus",
        "baseName": "pslf_status",
        "type": "PSLFStatus"
    },
    {
        "name": "repaymentPlan",
        "baseName": "repayment_plan",
        "type": "StudentRepaymentPlan"
    },
    {
        "name": "sequenceNumber",
        "baseName": "sequence_number",
        "type": "string"
    },
    {
        "name": "servicerAddress",
        "baseName": "servicer_address",
        "type": "ServicerAddressData"
    },
    {
        "name": "ytdInterestPaid",
        "baseName": "ytd_interest_paid",
        "type": "number"
    },
    {
        "name": "ytdPrincipalPaid",
        "baseName": "ytd_principal_paid",
        "type": "number"
    }
];
exports.StudentLoan = StudentLoan;
//# sourceMappingURL=studentLoan.js.map