export declare class VerificationExpiredWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'itemId'?: string;
    'accountId'?: string;
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
