import { Address } from './address';
import { Email } from './email';
import { PhoneNumber } from './phoneNumber';
export declare class OwnerOverride {
    'names'?: Array<string>;
    'phoneNumbers'?: Array<PhoneNumber>;
    'emails'?: Array<Email>;
    'addresses'?: Array<Address>;
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
