import { StandaloneInvestmentTransactionSubtype } from './standaloneInvestmentTransactionSubtype';
export declare class InvestmentTransaction {
    'investment_transaction_id'?: string;
    'account_id'?: string;
    'security_id'?: string | null;
    'date'?: string;
    'name'?: string;
    'quantity'?: number;
    'amount'?: number;
    'price'?: number;
    'fees'?: number | null;
    'type'?: string;
    'subtype'?: StandaloneInvestmentTransactionSubtype;
    'iso_currency_code'?: string | null;
    'unofficial_currency_code'?: string | null;
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
