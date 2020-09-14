export declare class AssetReportGetRequest {
    'clientId': string;
    'secret': string;
    'assetReportToken': string;
    'includeInsights'?: boolean;
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
