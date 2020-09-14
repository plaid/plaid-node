export declare class WebhookUpdateAcknowledgedWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'itemId'?: string;
    'newWebhookUrl'?: string;
    'error'?: Error | null;
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
