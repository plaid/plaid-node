import { BalanceGetRequestOptions } from './balanceGetRequestOptions';
export declare class BalanceGetRequest {
    'access_token': string;
    'secret': string;
    'client_id': string;
    'options'?: BalanceGetRequestOptions | null;
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
