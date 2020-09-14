export declare class InvestmentsTransactionsGetRequestOptions {
    'accountIds'?: Array<string>;
    'count'?: number;
    'offset'?: number;
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
