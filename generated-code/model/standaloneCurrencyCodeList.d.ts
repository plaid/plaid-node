export declare class StandaloneCurrencyCodeList {
    'isoCurrencyCode'?: string;
    'unofficialCurrencyCode'?: string;
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
