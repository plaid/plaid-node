import { BalanceGetRequestOptions } from './balanceGetRequestOptions';
export declare class BalanceGetRequest {
    'accessToken': string;
    'secret': string;
    'clientId': string;
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
