import { ItemStatusInvestments } from './itemStatusInvestments';
import { ItemStatusLastWebhook } from './itemStatusLastWebhook';
import { ItemStatusTransactions } from './itemStatusTransactions';
export declare class ItemStatus {
    'investments'?: ItemStatusInvestments | null;
    'transactions'?: ItemStatusTransactions | null;
    'lastWebhook'?: ItemStatusLastWebhook | null;
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
