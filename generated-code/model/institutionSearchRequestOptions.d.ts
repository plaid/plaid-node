import { CountryCode } from './countryCode';
export declare class InstitutionSearchRequestOptions {
    'country_codes'?: Array<CountryCode>;
    'oauth'?: boolean;
    'include_optional_metadata'?: boolean;
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
