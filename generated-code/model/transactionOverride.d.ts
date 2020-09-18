export declare class TransactionOverride {
    'transaction_date': string;
    'posted_date': string;
    'amount': number;
    'description': string;
    'currency'?: string;
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
