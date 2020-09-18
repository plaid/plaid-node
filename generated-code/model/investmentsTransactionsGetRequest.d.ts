import { InvestmentsTransactionsGetRequestOptions } from './investmentsTransactionsGetRequestOptions';
export declare class InvestmentsTransactionsGetRequest {
    'client_id': string;
    'secret': string;
    'access_token': string;
    'start_date': string;
    'end_date': string;
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
