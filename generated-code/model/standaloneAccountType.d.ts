export declare class StandaloneAccountType {
    'depository'?: string;
    'credit'?: string;
    'loan'?: string;
    'investment'?: string;
    'other'?: string;
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
