import { Account } from './account';
import { Item } from './item';
export declare class BalanceGetResponse {
    'accounts'?: Array<Account>;
    'request_id'?: string;
    'item'?: Item;
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
