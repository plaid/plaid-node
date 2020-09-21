export declare class AccountBalance {
    'available'?: number | null;
    'current'?: number;
    'limit'?: number | null;
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
