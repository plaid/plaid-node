export declare class Location {
    'address'?: string | null;
    'city'?: string | null;
    'region'?: string | null;
    'postal_code'?: string;
    'country'?: string | null;
    'lat'?: number | null;
    '_long'?: number | null;
    'store_number'?: string | null;
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
