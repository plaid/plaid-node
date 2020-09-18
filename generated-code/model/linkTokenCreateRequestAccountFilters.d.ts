import { LinkTokenCreateRequestAccountFiltersCredit } from './linkTokenCreateRequestAccountFiltersCredit';
import { LinkTokenCreateRequestAccountFiltersDepository } from './linkTokenCreateRequestAccountFiltersDepository';
import { LinkTokenCreateRequestAccountFiltersInvestment } from './linkTokenCreateRequestAccountFiltersInvestment';
import { LinkTokenCreateRequestAccountFiltersLoan } from './linkTokenCreateRequestAccountFiltersLoan';
export declare class LinkTokenCreateRequestAccountFilters {
    'depository'?: LinkTokenCreateRequestAccountFiltersDepository;
    'credit'?: LinkTokenCreateRequestAccountFiltersCredit;
    'loan'?: LinkTokenCreateRequestAccountFiltersLoan;
    'investment'?: LinkTokenCreateRequestAccountFiltersInvestment;
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
