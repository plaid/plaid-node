import { InvestmentsTransactionsGetRequestOptions } from './investmentsTransactionsGetRequestOptions';
export declare class InvestmentsTransactionsGetRequest {
    'clientId': string;
    'secret': string;
    'accessToken': string;
    'startDate': string;
    'endDate': string;
    'options'?: InvestmentsTransactionsGetRequestOptions;
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
