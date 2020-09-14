export declare class ProcessorTokenCreateRequest {
    'clientId': string;
    'secret': string;
    'accessToken': string;
    'accountId': string;
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
