import { AssetReportCreateRequestOptions } from './assetReportCreateRequestOptions';
export declare class AssetReportCreateRequest {
    'clientId': string;
    'secret': string;
    'accessTokens': Array<string>;
    'daysRequested': number;
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
