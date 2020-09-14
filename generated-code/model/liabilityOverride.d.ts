import { Address } from './address';
import { StudentLoanRepaymentModel } from './studentLoanRepaymentModel';
export declare class LiabilityOverride {
    'type': string;
    'purchaseApr'?: number;
    'cashApr'?: number;
    'balanceTransferApr'?: number;
    'specialApr'?: number;
    'lastPaymentAmount'?: number;
    'lastStatementBalance'?: number;
    'minimumPaymentAmount'?: number;
    'isOverdue'?: boolean;
    'originationDate'?: string;
    'principal'?: number;
    'nominalApr'?: number;
    'interestCapitalizationGracePeriodMonths'?: number;
    'repaymentModel'?: StudentLoanRepaymentModel;
    'expectedPayoffDate'?: string;
    'guarantor'?: string;
    'isFederal'?: boolean;
    'loanName'?: string;
    'loanStatus'?: string;
    'paymentReferenceNumber'?: string;
    'pslfStatus'?: string;
    'repaymentPlanDescription'?: string;
    'repaymentPlanType'?: string;
    'sequenceNumber'?: string;
    'servicerAddress'?: Address;
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
