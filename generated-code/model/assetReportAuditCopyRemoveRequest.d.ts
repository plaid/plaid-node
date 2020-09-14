export declare class AssetReportAuditCopyRemoveRequest {
    'clientId': string;
    'secret': string;
    'auditCopyToken': string;
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
