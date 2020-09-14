export declare class Item {
    'itemId'?: string;
    'institutionId'?: string | null;
    'webhook'?: string | null;
    'error'?: Error | null;
    'availableProducts'?: Array<string>;
    'billedProducts'?: Array<string>;
    'consentExpirationTime'?: string | null;
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
