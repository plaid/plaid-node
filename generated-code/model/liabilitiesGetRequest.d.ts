import { LiabilitiesGetRequestOptions } from './liabilitiesGetRequestOptions';
export declare class LiabilitiesGetRequest {
    'clientId': string;
    'secret': string;
    'accessToken': string;
    'options'?: LiabilitiesGetRequestOptions;
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
