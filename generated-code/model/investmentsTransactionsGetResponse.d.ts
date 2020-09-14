import { Account } from './account';
import { InvestmentTransaction } from './investmentTransaction';
import { Item } from './item';
import { Security } from './security';
export declare class InvestmentsTransactionsGetResponse {
    'item'?: Item;
    'accounts'?: Array<Account>;
    'securities'?: Array<Security>;
    'investmentTransactions'?: Array<InvestmentTransaction>;
    'totalInvestmentTransactions'?: number;
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
