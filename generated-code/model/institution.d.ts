import { InstitutionStatus } from './institutionStatus';
export declare class Institution {
    'institutionId'?: string;
    'name'?: string;
    'products'?: Array<string>;
    'countryCodes'?: Array<string>;
    'url'?: string | null;
    'primaryColor'?: string | null;
    'logo'?: string | null;
    'routingNumbers'?: Array<string> | null;
    'oauth'?: boolean;
    'status'?: InstitutionStatus;
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
