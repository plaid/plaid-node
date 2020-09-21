import { TransactionsGetRequestOptions } from './transactionsGetRequestOptions';
export declare class TransactionsGetRequest {
    'client_id': string;
    'options'?: TransactionsGetRequestOptions;
    'access_token': string;
    'secret': string;
    'start_date': string;
    'end_date': string;
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
