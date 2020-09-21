export declare class Item {
    'item_id'?: string;
    'institution_id'?: string | null;
    'webhook'?: string | null;
    'error'?: Error | null;
    'available_products'?: Array<string>;
    'billed_products'?: Array<string>;
    'consent_expiration_time'?: string | null;
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
