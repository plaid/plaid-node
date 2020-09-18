export declare class ItemWebhookUpdateResponse {
    'client_id'?: string;
    'secret'?: string;
    'access_token'?: string;
    'webhook'?: string;
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
