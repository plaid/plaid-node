import { AssetReportRefreshRequestOptions } from './assetReportRefreshRequestOptions';
export declare class AssetReportRefreshRequest {
    'clientId': string;
    'secret': string;
    'assetReportToken': string;
    'daysRequested'?: number;
    'options'?: AssetReportRefreshRequestOptions;
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
