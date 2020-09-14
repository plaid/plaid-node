export declare class NumbersACH {
    'accountId'?: string;
    'account'?: string;
    'routing'?: string;
    'wireRouting'?: string | null;
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
