export declare class AssetReportGetRequest {
    'client_id': string;
    'secret': string;
    'asset_report_token': string;
    'include_insights'?: boolean;
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
