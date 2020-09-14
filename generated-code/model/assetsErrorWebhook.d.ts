export declare class AssetsErrorWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'error'?: Error | null;
    'assetReportId'?: string;
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
