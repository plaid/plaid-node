import { AccountBalance } from './accountBalance';
import { AccountSubtype } from './accountSubtype';
import { AccountType } from './accountType';
import { HistoricalBalance } from './historicalBalance';
import { Owner } from './owner';
import { Transaction } from './transaction';
export declare class Account {
    'account_id': string;
    'balances': AccountBalance;
    'mask'?: string | null;
    'name': string;
    'official_name'?: string | null;
    'type': AccountType;
    'subtype': AccountSubtype;
    'verification_status'?: string | null;
    'historical_balances'?: Array<HistoricalBalance> | null;
    'owners'?: Array<Owner> | null;
    'days_available'?: number | null;
    'transactions'?: Array<Transaction> | null;
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
