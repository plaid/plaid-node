export declare class Numbers {
    'account'?: string;
    'achRouting'?: string;
    'achWireRouting'?: string;
    'eftInstitution'?: string;
    'eftBranch'?: string;
    'internationalBic'?: string;
    'internationalIban'?: string;
    'bacsSortCode'?: string;
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
