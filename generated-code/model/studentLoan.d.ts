import { PSLFStatus } from './pSLFStatus';
import { ServicerAddressData } from './servicerAddressData';
import { StudentLoanStatus } from './studentLoanStatus';
import { StudentRepaymentPlan } from './studentRepaymentPlan';
export declare class StudentLoan {
    'account_id'?: string | null;
    'account_number'?: string | null;
    'disbursement_dates'?: Array<string> | null;
    'expected_payoff_date'?: string | null;
    'guarantor'?: string | null;
    'interest_rate_percentage'?: number;
    'is_overdue'?: boolean | null;
    'last_payment_amount'?: number | null;
    'last_payment_date'?: string | null;
    'last_statement_balance'?: number | null;
    'last_statement_issue_date'?: string | null;
    'loan_name'?: string | null;
    'loan_status'?: StudentLoanStatus;
    'minimum_payment_amount'?: number | null;
    'next_payment_due_date'?: string | null;
    'origination_date'?: string | null;
    'origination_principal_amount'?: number | null;
    'outstanding_interest_amount'?: number | null;
    'payment_reference_number'?: string | null;
    'pslf_status'?: PSLFStatus;
    'repayment_plan'?: StudentRepaymentPlan;
    'sequence_number'?: string | null;
    'servicer_address'?: ServicerAddressData;
    'ytd_interest_paid'?: number | null;
    'ytd_principal_paid'?: number | null;
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
