import { InstitutionsGetByIdRequestOptions } from './institutionsGetByIdRequestOptions';
export declare class InstitutionsGetByIdRequest {
    'clientId': string;
    'secret': string;
    'institutionId': string;
    'options'?: InstitutionsGetByIdRequestOptions;
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
