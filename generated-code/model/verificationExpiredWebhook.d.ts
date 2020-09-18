export declare class VerificationExpiredWebhook {
    'webhook_type'?: string;
    'webhook_code'?: string;
    'item_id'?: string;
    'account_id'?: string;
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
