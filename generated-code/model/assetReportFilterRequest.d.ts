export declare class AssetReportFilterRequest {
    'client_id': string;
    'secret': string;
    'asset_report_token': string;
    'account_ids_to_exclude': Array<string>;
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
