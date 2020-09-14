export declare class Holding {
    'accountId'?: string;
    'securityId'?: string;
    'institutionPrice'?: number;
    'institutionPriceAsOf'?: string | null;
    'institutionValue'?: number;
    'costBasis'?: number | null;
    'quantity'?: number;
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
