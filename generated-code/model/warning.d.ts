import { Cause } from './cause';
export declare class Warning {
    'warningType'?: string;
    'warningCode'?: string;
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
