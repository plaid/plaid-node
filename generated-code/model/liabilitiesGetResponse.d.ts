import { Account } from './account';
import { Item } from './item';
import { LiabilitiesObject } from './liabilitiesObject';
export declare class LiabilitiesGetResponse {
    'accounts'?: Array<Account>;
    'item'?: Item;
    'liabilities'?: LiabilitiesObject;
    'request_id'?: string;
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
