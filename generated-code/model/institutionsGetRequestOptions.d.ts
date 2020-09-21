import { CountryCode } from './countryCode';
export declare class InstitutionsGetRequestOptions {
    'products'?: Array<string>;
    'country_codes'?: Array<CountryCode>;
    'routing_numbers'?: Array<string>;
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
