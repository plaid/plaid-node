import { PSLFStatus } from './pSLFStatus';
import { ServicerAddressData } from './servicerAddressData';
import { StudentLoanStatus } from './studentLoanStatus';
import { StudentRepaymentPlan } from './studentRepaymentPlan';
export declare class StudentLoan {
    'accountId'?: string | null;
    'accountNumber'?: string | null;
    'disbursementDates'?: Array<string> | null;
    'expectedPayoffDate'?: string | null;
    'guarantor'?: string | null;
    'interestRatePercentage'?: number;
    'isOverdue'?: boolean | null;
    'lastPaymentAmount'?: number | null;
    'lastPaymentDate'?: string | null;
    'lastStatementBalance'?: number | null;
    'lastStatementIssueDate'?: string | null;
    'loanName'?: string | null;
    'loanStatus'?: StudentLoanStatus;
    'minimumPaymentAmount'?: number | null;
    'nextPaymentDueDate'?: string | null;
    'originationDate'?: string | null;
    'originationPrincipalAmount'?: number | null;
    'outstandingInterestAmount'?: number | null;
    'paymentReferenceNumber'?: string | null;
    'pslfStatus'?: PSLFStatus;
    'repaymentPlan'?: StudentRepaymentPlan;
    'sequenceNumber'?: string | null;
    'servicerAddress'?: ServicerAddressData;
    'ytdInterestPaid'?: number | null;
    'ytdPrincipalPaid'?: number | null;
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
