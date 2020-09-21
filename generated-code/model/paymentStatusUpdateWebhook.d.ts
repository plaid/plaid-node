export declare class PaymentStatusUpdateWebhook {
    'webhook_type'?: string;
    'webhook_code'?: string;
    'payment_id'?: string;
    'new_payment_status'?: string;
    'old_payment_status'?: string;
    'timestamp'?: string;
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
