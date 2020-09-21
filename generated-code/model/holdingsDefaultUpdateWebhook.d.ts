export declare class HoldingsDefaultUpdateWebhook {
    'webhook_type'?: string;
    'webhook_code'?: string;
    'item_id'?: string;
    'error'?: Error | null;
    'new_holdings'?: number;
    'updated_holdings'?: number;
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
