export declare class AutomaticallyVerifiedWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'accountId'?: string;
    'itemId'?: string;
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
