export declare class InvestmentsDefaultUpdateWebhook {
    'webhook_type'?: string;
    'webhook_code'?: string;
    'item_id'?: string;
    'error'?: Error | null;
    'new_investments_transactions'?: number;
    'canceled_investments_transactions'?: number;
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
