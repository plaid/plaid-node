import { SandboxPublicTokenCreateRequestOptions } from './sandboxPublicTokenCreateRequestOptions';
export declare class SandboxPublicTokenCreateRequest {
    'client_id': string;
    'secret': string;
    'institution_id': string;
    'initial_products': Array<string>;
    'options'?: SandboxPublicTokenCreateRequestOptions;
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
