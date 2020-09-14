import { CountryCode } from './countryCode';
export declare class InstitutionSearchRequestOptions {
    'countryCodes'?: Array<CountryCode>;
    'oauth'?: boolean;
    'includeOptionalMetadata'?: boolean;
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
