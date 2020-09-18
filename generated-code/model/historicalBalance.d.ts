export declare class HistoricalBalance {
    'date'?: string;
    'current'?: string;
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
