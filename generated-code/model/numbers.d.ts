export declare class Numbers {
    'account'?: string;
    'ach_routing'?: string;
    'ach_wire_routing'?: string;
    'eft_institution'?: string;
    'eft_branch'?: string;
    'international_bic'?: string;
    'international_iban'?: string;
    'bacs_sort_code'?: string;
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
