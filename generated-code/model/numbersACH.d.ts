export declare class NumbersACH {
    'account_id'?: string;
    'account'?: string;
    'routing'?: string;
    'wire_routing'?: string | null;
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
