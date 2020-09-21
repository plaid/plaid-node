export declare class PaymentInitiationAddress {
    'street': Array<string>;
    'city': string;
    'postal_code': string;
    'country': string;
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
