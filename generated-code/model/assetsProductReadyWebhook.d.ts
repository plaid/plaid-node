export declare class AssetsProductReadyWebhook {
    'webhook_type'?: string;
    'webhook_code'?: string;
    'asset_report_id'?: string;
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
