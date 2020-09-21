import { InstitutionStatus } from './institutionStatus';
export declare class Institution {
    'institution_id'?: string;
    'name'?: string;
    'products'?: Array<string>;
    'country_codes'?: Array<string>;
    'url'?: string | null;
    'primary_color'?: string | null;
    'logo'?: string | null;
    'routing_numbers'?: Array<string> | null;
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
