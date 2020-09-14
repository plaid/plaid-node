import { AssetReportUser } from './assetReportUser';
export declare class AssetReportRefreshRequestOptions {
    'clientReportId'?: string;
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
