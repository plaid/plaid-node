export declare class AssetReportFilterRequest {
    'clientId': string;
    'secret': string;
    'assetReportToken': string;
    'accountIdsToExclude': Array<string>;
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
