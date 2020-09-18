import { Account } from './account';
import { Item } from './item';
export declare class IdentityGetResponse {
    'accounts'?: Array<Account>;
    'item'?: Item;
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
