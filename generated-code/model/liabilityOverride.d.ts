import { Address } from './address';
import { StudentLoanRepaymentModel } from './studentLoanRepaymentModel';
export declare class LiabilityOverride {
    'type': string;
    'purchase_apr'?: number;
    'cash_apr'?: number;
    'balance_transfer_apr'?: number;
    'special_apr'?: number;
    'last_payment_amount'?: number;
    'last_statement_balance'?: number;
    'minimum_payment_amount'?: number;
    'is_overdue'?: boolean;
    'origination_date'?: string;
    'principal'?: number;
    'nominal_apr'?: number;
    'interest_capitalization_grace_period_months'?: number;
    'repayment_model'?: StudentLoanRepaymentModel;
    'expected_payoff_date'?: string;
    'guarantor'?: string;
    'is_federal'?: boolean;
    'loan_name'?: string;
    'loan_status'?: string;
    'payment_reference_number'?: string;
    'pslf_status'?: string;
    'repayment_plan_description'?: string;
    'repayment_plan_type'?: string;
    'sequence_number'?: string;
    'servicer_address'?: Address;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
