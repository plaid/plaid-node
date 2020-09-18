export declare class Holding {
    'account_id'?: string;
    'security_id'?: string;
    'institution_price'?: number;
    'institution_price_as_of'?: string | null;
    'institution_value'?: number;
    'cost_basis'?: number | null;
    'quantity'?: number;
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
