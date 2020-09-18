export declare class AutomaticallyVerifiedWebhook {
    'webhook_type'?: string;
    'webhook_code'?: string;
    'account_id'?: string;
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
