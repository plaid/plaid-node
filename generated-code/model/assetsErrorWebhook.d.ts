export declare class AssetsErrorWebhook {
    'webhook_type'?: string;
    'webhook_code'?: string;
    'error'?: Error | null;
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
