export declare class StandaloneInvestmentTransactionType {
    'buy'?: string;
    'sell'?: string;
    'cancel'?: string;
    'cash'?: string;
    'fee'?: string;
    'transfer'?: string;
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
