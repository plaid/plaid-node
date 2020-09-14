import { InstitutionSearchRequestOptions } from './institutionSearchRequestOptions';
export declare class InstitutionSearchRequest {
    'clientId': string;
    'secret': string;
    'query': string;
    'products': Array<string>;
    'options'?: InstitutionSearchRequestOptions;
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
