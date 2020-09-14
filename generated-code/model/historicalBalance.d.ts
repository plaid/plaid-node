export declare class HistoricalBalance {
    'date'?: string;
    'current'?: string;
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
