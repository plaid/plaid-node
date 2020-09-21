export declare class AssetReportAuditCopyCreateRequest {
    'client_id': string;
    'secret': string;
    'asset_report_token': string;
    'auditor_id': string;
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
