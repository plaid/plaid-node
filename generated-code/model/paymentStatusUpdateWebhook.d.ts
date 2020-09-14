export declare class PaymentStatusUpdateWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'paymentId'?: string;
    'newPaymentStatus'?: string;
    'oldPaymentStatus'?: string;
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
