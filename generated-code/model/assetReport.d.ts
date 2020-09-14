import { AssetReportItem } from './assetReportItem';
import { AssetReportUser } from './assetReportUser';
export declare class AssetReport {
    'assetReportId'?: string;
    'clientReportId'?: string;
    'dateGenerated'?: string;
    'daysRequested'?: number;
    'user'?: AssetReportUser;
    'items'?: Array<AssetReportItem>;
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
