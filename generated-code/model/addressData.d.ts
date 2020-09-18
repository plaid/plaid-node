export declare class AddressData {
    'city'?: string;
    'region'?: string | null;
    'street'?: string;
    'postal_code'?: string | null;
    'country'?: string;
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
