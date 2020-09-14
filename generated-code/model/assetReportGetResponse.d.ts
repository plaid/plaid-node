import { AssetReport } from './assetReport';
import { Warning } from './warning';
export declare class AssetReportGetResponse {
    'report'?: AssetReport;
    'warnings'?: Array<Warning>;
    'requestId'?: string;
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
