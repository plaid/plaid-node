import { InvestmentsHoldingsGetRequestOptions } from './investmentsHoldingsGetRequestOptions';
export declare class InvestmentsHoldingsGetRequest {
    'client_id': string;
    'secret': string;
    'access_token': string;
    'options'?: InvestmentsHoldingsGetRequestOptions;
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
