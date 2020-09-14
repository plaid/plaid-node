import { AccountBalance } from './accountBalance';
import { AccountSubtype } from './accountSubtype';
import { AccountType } from './accountType';
import { HistoricalBalance } from './historicalBalance';
import { Owner } from './owner';
export declare class Account {
    'accountId': string;
    'balances': AccountBalance;
    'mask'?: string | null;
    'name': string;
    'officialName'?: string | null;
    'type': AccountType;
    'subtype': AccountSubtype;
    'verificationStatus'?: string | null;
    'historicalBalances'?: Array<HistoricalBalance> | null;
    'owners'?: Array<Owner> | null;
    'daysAvailable'?: number | null;
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
