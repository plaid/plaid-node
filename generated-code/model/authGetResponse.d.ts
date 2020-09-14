import { Account } from './account';
import { AuthGetResponseNumbers } from './authGetResponseNumbers';
import { Item } from './item';
export declare class AuthGetResponse {
    'accounts'?: Array<Account>;
    'numbers'?: AuthGetResponseNumbers;
    'item'?: Item;
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
