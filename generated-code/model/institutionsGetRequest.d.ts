import { InstitutionsGetRequestOptions } from './institutionsGetRequestOptions';
export declare class InstitutionsGetRequest {
    'clientId': string;
    'secret': string;
    'count': number;
    'offset': number;
    'options'?: InstitutionsGetRequestOptions;
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
