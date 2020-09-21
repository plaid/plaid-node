import { AssetReportCreateRequestOptions } from './assetReportCreateRequestOptions';
export declare class AssetReportCreateRequest {
    'client_id': string;
    'secret': string;
    'access_tokens': Array<string>;
    'days_requested': number;
    'options'?: AssetReportCreateRequestOptions;
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
