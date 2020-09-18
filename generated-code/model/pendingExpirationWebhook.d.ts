export declare class PendingExpirationWebhook {
    'webhook_type'?: string;
    'webhook_code'?: string;
    'item_id'?: string;
    'consent_expiration_time'?: string;
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
