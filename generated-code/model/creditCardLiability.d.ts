import { APR } from './aPR';
export declare class CreditCardLiability {
    'accountId'?: string | null;
    'aprs'?: Array<APR>;
    'isOverdue'?: boolean | null;
    'lastPaymentAmount'?: number;
    'lastPaymentDate'?: string;
    'lastStatementBalance'?: number;
    'lastStatementIssueDate'?: string;
    'minimumPaymentAmount'?: number;
    'nextPaymentDueDate'?: string;
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
