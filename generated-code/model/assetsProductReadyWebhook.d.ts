export declare class AssetsProductReadyWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
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
