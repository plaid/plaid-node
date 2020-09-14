export declare class Security {
    'securityId'?: string;
    'isin'?: string | null;
    'cusip'?: string | null;
    'sedol'?: string | null;
    'institutionSecurityId'?: string | null;
    'institutionId'?: string | null;
    'proxySecurityId'?: string | null;
    'name'?: string | null;
    'tickerSymbol'?: string | null;
    'isCashEquivalent'?: boolean;
    'type'?: string;
    'closePrice'?: number | null;
    'closePriceAsOf'?: string | null;
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
