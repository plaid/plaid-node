export declare class ItemErrorWebhook {
    'webhook_type'?: string;
    'webhook_code'?: string;
    'item_id'?: string;
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
