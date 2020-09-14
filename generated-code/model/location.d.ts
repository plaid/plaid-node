export declare class Location {
    'address'?: string | null;
    'city'?: string | null;
    'region'?: string | null;
    'postalCode'?: string;
    'country'?: string | null;
    'lat'?: number | null;
    '_long'?: number | null;
    'storeNumber'?: string | null;
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
