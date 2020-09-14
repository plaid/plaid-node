export declare class PendingExpirationWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'itemId'?: string;
    'consentExpirationTime'?: string;
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
