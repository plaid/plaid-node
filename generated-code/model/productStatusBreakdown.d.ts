export declare class ProductStatusBreakdown {
    'success'?: number;
    'error_plaid'?: number;
    'error_institution'?: number;
    'refresh_interval'?: string | null;
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
