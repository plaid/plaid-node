export declare class AccountBalance {
    'available'?: number | null;
    'current'?: number;
    'limit'?: number | null;
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
