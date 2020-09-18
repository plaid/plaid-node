export declare class Security {
    'security_id'?: string;
    'isin'?: string | null;
    'cusip'?: string | null;
    'sedol'?: string | null;
    'institution_security_id'?: string | null;
    'institution_id'?: string | null;
    'proxy_security_id'?: string | null;
    'name'?: string | null;
    'ticker_symbol'?: string | null;
    'is_cash_equivalent'?: boolean;
    'type'?: string;
    'close_price'?: number | null;
    'close_price_as_of'?: string | null;
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
