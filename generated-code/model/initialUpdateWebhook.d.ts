export declare class InitialUpdateWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'error'?: string | null;
    'newTransactions'?: number;
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
