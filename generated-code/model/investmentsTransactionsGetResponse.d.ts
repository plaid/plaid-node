import { Account } from './account';
import { InvestmentTransaction } from './investmentTransaction';
import { Item } from './item';
import { Security } from './security';
export declare class InvestmentsTransactionsGetResponse {
    'item'?: Item;
    'accounts'?: Array<Account>;
    'securities'?: Array<Security>;
    'investment_transactions'?: Array<InvestmentTransaction>;
    'total_investment_transactions'?: number;
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
