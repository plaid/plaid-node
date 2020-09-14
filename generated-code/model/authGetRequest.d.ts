import { AuthGetRequestOptions } from './authGetRequestOptions';
export declare class AuthGetRequest {
    'clientId': string;
    'secret': string;
    'accessToken': string;
    'options'?: AuthGetRequestOptions;
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
