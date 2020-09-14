import { TransactionsGetRequestOptions } from './transactionsGetRequestOptions';
export declare class TransactionsGetRequest {
    'clientId': string;
    'options'?: TransactionsGetRequestOptions;
    'accessToken': string;
    'secret': string;
    'startDate': string;
    'endDate': string;
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
