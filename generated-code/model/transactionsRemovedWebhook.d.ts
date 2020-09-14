export declare class TransactionsRemovedWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'error'?: Error | null;
    'removedTransactions'?: Array<string>;
    'itemId'?: string;
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
