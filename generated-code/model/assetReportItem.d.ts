import { Account } from './account';
export declare class AssetReportItem {
    'item_id'?: string;
    'institution_name'?: string;
    'institution_id'?: string;
    'date_last_updated'?: string;
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
