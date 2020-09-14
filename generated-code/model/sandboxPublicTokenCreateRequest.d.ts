import { SandboxPublicTokenCreateRequestOptions } from './sandboxPublicTokenCreateRequestOptions';
export declare class SandboxPublicTokenCreateRequest {
    'clientId': string;
    'secret': string;
    'institutionId': string;
    'initialProducts': Array<string>;
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
