export declare class PSLFStatus {
    'estimated_eligibility_date'?: string | null;
    'payments_made'?: string | null;
    'payments_remaining'?: string | null;
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
