import { AssetReportUser } from './assetReportUser';
export declare class AssetReportRefreshRequestOptions {
    'client_report_id'?: string;
    'webhook'?: string;
    'user'?: AssetReportUser;
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
