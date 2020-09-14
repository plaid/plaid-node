import { Account } from './account';
export declare class AssetReportItem {
    'itemId'?: string;
    'institutionName'?: string;
    'institutionId'?: string;
    'dateLastUpdated'?: string;
    'accounts'?: Array<Account>;
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
