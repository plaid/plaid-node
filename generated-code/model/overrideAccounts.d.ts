import { AccountSubtype } from './accountSubtype';
import { AccountType } from './accountType';
import { InflowModel } from './inflowModel';
import { LiabilityOverride } from './liabilityOverride';
import { Meta } from './meta';
import { Numbers } from './numbers';
import { OwnerOverride } from './ownerOverride';
import { TransactionOverride } from './transactionOverride';
export declare class OverrideAccounts {
    'type': AccountType;
    'subtype': AccountSubtype;
    'starting_balance'?: number;
    'force_available_balance'?: number;
    'currency'?: string;
    'meta'?: Meta;
    'numbers'?: Numbers;
    'transactions'?: Array<TransactionOverride>;
    'identity'?: OwnerOverride;
    'liability'?: LiabilityOverride;
    'inflow_model'?: InflowModel;
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
