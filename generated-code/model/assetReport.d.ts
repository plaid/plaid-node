import { AssetReportItem } from './assetReportItem';
import { AssetReportUser } from './assetReportUser';
export declare class AssetReport {
    'asset_report_id'?: string;
    'client_report_id'?: string;
    'date_generated'?: string;
    'days_requested'?: number;
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
