export declare class ProductStatusBreakdown {
    'success'?: number;
    'errorPlaid'?: number;
    'errorInstitution'?: number;
    'refreshInterval'?: string | null;
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
