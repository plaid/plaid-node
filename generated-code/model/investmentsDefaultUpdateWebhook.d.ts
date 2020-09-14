export declare class InvestmentsDefaultUpdateWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'itemId'?: string;
    'error'?: Error | null;
    'newInvestmentsTransactions'?: number;
    'canceledInvestmentsTransactions'?: number;
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
