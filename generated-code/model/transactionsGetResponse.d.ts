import { Account } from './account';
import { Item } from './item';
import { Transaction } from './transaction';
export declare class TransactionsGetResponse {
    'account'?: Array<Account>;
    'transactions'?: Array<Transaction>;
    'total_transactions'?: number;
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
