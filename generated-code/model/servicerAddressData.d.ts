export declare class ServicerAddressData {
    'city': string | null;
    'region'?: string | null;
    'street': string;
    'postalCode'?: string | null;
    'country': string | null;
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
