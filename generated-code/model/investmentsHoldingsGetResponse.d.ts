import { Account } from './account';
import { Holding } from './holding';
import { Item } from './item';
import { Security } from './security';
export declare class InvestmentsHoldingsGetResponse {
    'accounts'?: Array<Account>;
    'holdings'?: Array<Holding>;
    'securities'?: Array<Security>;
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
