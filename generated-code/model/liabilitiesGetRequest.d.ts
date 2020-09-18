import { LiabilitiesGetRequestOptions } from './liabilitiesGetRequestOptions';
export declare class LiabilitiesGetRequest {
    'client_id': string;
    'secret': string;
    'access_token': string;
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
