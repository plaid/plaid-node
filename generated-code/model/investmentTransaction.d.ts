import { StandaloneInvestmentTransactionSubtype } from './standaloneInvestmentTransactionSubtype';
export declare class InvestmentTransaction {
    'investmentTransactionId'?: string;
    'accountId'?: string;
    'securityId'?: string | null;
    'date'?: string;
    'name'?: string;
    'quantity'?: number;
    'amount'?: number;
    'price'?: number;
    'fees'?: number | null;
    'type'?: string;
    'subtype'?: StandaloneInvestmentTransactionSubtype;
    'isoCurrencyCode'?: string | null;
    'unofficialCurrencyCode'?: string | null;
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
