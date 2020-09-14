"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LiabilityOverride {
    static getAttributeTypeMap() {
        return LiabilityOverride.attributeTypeMap;
    }
}
LiabilityOverride.discriminator = undefined;
LiabilityOverride.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "purchaseApr",
        "baseName": "purchase_apr",
        "type": "number"
    },
    {
        "name": "cashApr",
        "baseName": "cash_apr",
        "type": "number"
    },
    {
        "name": "balanceTransferApr",
        "baseName": "balance_transfer_apr",
        "type": "number"
    },
    {
        "name": "specialApr",
        "baseName": "special_apr",
        "type": "number"
    },
    {
        "name": "lastPaymentAmount",
        "baseName": "last_payment_amount",
        "type": "number"
    },
    {
        "name": "lastStatementBalance",
        "baseName": "last_statement_balance",
        "type": "number"
    },
    {
        "name": "minimumPaymentAmount",
        "baseName": "minimum_payment_amount",
        "type": "number"
    },
    {
        "name": "isOverdue",
        "baseName": "is_overdue",
        "type": "boolean"
    },
    {
        "name": "originationDate",
        "baseName": "origination_date",
        "type": "string"
    },
    {
        "name": "principal",
        "baseName": "principal",
        "type": "number"
    },
    {
        "name": "nominalApr",
        "baseName": "nominal_apr",
        "type": "number"
    },
    {
        "name": "interestCapitalizationGracePeriodMonths",
        "baseName": "interest_capitalization_grace_period_months",
        "type": "number"
    },
    {
        "name": "repaymentModel",
        "baseName": "repayment_model",
        "type": "StudentLoanRepaymentModel"
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
        "name": "isFederal",
        "baseName": "is_federal",
        "type": "boolean"
    },
    {
        "name": "loanName",
        "baseName": "loan_name",
        "type": "string"
    },
    {
        "name": "loanStatus",
        "baseName": "loan_status",
        "type": "string"
    },
    {
        "name": "paymentReferenceNumber",
        "baseName": "payment_reference_number",
        "type": "string"
    },
    {
        "name": "pslfStatus",
        "baseName": "pslf_status",
        "type": "string"
    },
    {
        "name": "repaymentPlanDescription",
        "baseName": "repayment_plan_description",
        "type": "string"
    },
    {
        "name": "repaymentPlanType",
        "baseName": "repayment_plan_type",
        "type": "string"
    },
    {
        "name": "sequenceNumber",
        "baseName": "sequence_number",
        "type": "string"
    },
    {
        "name": "servicerAddress",
        "baseName": "servicer_address",
        "type": "Address"
    }
];
exports.LiabilityOverride = LiabilityOverride;
//# sourceMappingURL=liabilityOverride.js.map