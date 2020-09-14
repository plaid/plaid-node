import { Account } from './account';
import { Item } from './item';
import { Transaction } from './transaction';
export declare class TransactionsGetResponse {
    'account'?: Array<Account>;
    'transactions'?: Array<Transaction>;
    'totalTransactions'?: number;
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
