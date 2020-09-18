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
        "name": "purchase_apr",
        "baseName": "purchase_apr",
        "type": "number"
    },
    {
        "name": "cash_apr",
        "baseName": "cash_apr",
        "type": "number"
    },
    {
        "name": "balance_transfer_apr",
        "baseName": "balance_transfer_apr",
        "type": "number"
    },
    {
        "name": "special_apr",
        "baseName": "special_apr",
        "type": "number"
    },
    {
        "name": "last_payment_amount",
        "baseName": "last_payment_amount",
        "type": "number"
    },
    {
        "name": "last_statement_balance",
        "baseName": "last_statement_balance",
        "type": "number"
    },
    {
        "name": "minimum_payment_amount",
        "baseName": "minimum_payment_amount",
        "type": "number"
    },
    {
        "name": "is_overdue",
        "baseName": "is_overdue",
        "type": "boolean"
    },
    {
        "name": "origination_date",
        "baseName": "origination_date",
        "type": "string"
    },
    {
        "name": "principal",
        "baseName": "principal",
        "type": "number"
    },
    {
        "name": "nominal_apr",
        "baseName": "nominal_apr",
        "type": "number"
    },
    {
        "name": "interest_capitalization_grace_period_months",
        "baseName": "interest_capitalization_grace_period_months",
        "type": "number"
    },
    {
        "name": "repayment_model",
        "baseName": "repayment_model",
        "type": "StudentLoanRepaymentModel"
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
        "name": "is_federal",
        "baseName": "is_federal",
        "type": "boolean"
    },
    {
        "name": "loan_name",
        "baseName": "loan_name",
        "type": "string"
    },
    {
        "name": "loan_status",
        "baseName": "loan_status",
        "type": "string"
    },
    {
        "name": "payment_reference_number",
        "baseName": "payment_reference_number",
        "type": "string"
    },
    {
        "name": "pslf_status",
        "baseName": "pslf_status",
        "type": "string"
    },
    {
        "name": "repayment_plan_description",
        "baseName": "repayment_plan_description",
        "type": "string"
    },
    {
        "name": "repayment_plan_type",
        "baseName": "repayment_plan_type",
        "type": "string"
    },
    {
        "name": "sequence_number",
        "baseName": "sequence_number",
        "type": "string"
    },
    {
        "name": "servicer_address",
        "baseName": "servicer_address",
        "type": "Address"
    }
];
exports.LiabilityOverride = LiabilityOverride;
//# sourceMappingURL=liabilityOverride.js.map