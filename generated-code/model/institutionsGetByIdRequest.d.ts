import { InstitutionsGetByIdRequestOptions } from './institutionsGetByIdRequestOptions';
export declare class InstitutionsGetByIdRequest {
    'client_id': string;
    'secret': string;
    'institution_id': string;
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
