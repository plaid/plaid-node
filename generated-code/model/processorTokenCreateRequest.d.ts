export declare class ProcessorTokenCreateRequest {
    'client_id': string;
    'secret': string;
    'access_token': string;
    'account_id': string;
    'processor': string;
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
