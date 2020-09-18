import { AssetReportRefreshRequestOptions } from './assetReportRefreshRequestOptions';
export declare class AssetReportRefreshRequest {
    'client_id': string;
    'secret': string;
    'asset_report_token': string;
    'days_requested'?: number;
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
