import { CountryCode } from './countryCode';
export declare class InstitutionsGetRequestOptions {
    'products'?: Array<string>;
    'countryCodes'?: Array<CountryCode>;
    'routingNumbers'?: Array<string>;
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
