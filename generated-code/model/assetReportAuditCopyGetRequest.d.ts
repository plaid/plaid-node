export declare class AssetReportAuditCopyGetRequest {
    'client_id': string;
    'secret': string;
    'audit_copy_token': string;
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
