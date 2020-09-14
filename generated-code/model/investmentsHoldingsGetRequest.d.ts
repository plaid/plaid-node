import { InvestmentsHoldingsGetRequestOptions } from './investmentsHoldingsGetRequestOptions';
export declare class InvestmentsHoldingsGetRequest {
    'clientId': string;
    'secret': string;
    'accessToken': string;
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
