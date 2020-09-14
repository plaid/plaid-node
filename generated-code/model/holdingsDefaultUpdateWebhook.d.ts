export declare class HoldingsDefaultUpdateWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'itemId'?: string;
    'error'?: Error | null;
    'newHoldings'?: number;
    'updatedHoldings'?: number;
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
