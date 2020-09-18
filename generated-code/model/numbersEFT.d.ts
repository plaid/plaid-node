export declare class NumbersEFT {
    'account_id'?: string;
    'account'?: string;
    'institution'?: string;
    'branch'?: string;
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
