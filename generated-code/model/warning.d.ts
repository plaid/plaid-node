import { Cause } from './cause';
export declare class Warning {
    'warning_type'?: string;
    'warning_code'?: string;
    'cause'?: Cause;
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
