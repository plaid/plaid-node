import { APR } from './aPR';
export declare class CreditCardLiability {
    'account_id'?: string | null;
    'aprs'?: Array<APR>;
    'is_overdue'?: boolean | null;
    'last_payment_amount'?: number;
    'last_payment_date'?: string;
    'last_statement_balance'?: number;
    'last_statement_issue_date'?: string;
    'minimum_payment_amount'?: number;
    'next_payment_due_date'?: string;
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
