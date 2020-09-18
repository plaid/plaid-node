export declare class InitialUpdateWebhook {
    'webhook_type'?: string;
    'webhook_code'?: string;
    'error'?: string | null;
    'new_transactions'?: number;
    'item_id'?: string;
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
