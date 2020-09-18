export declare class APR {
    'apr_percentage'?: number;
    'apr_type'?: string;
    'balance_subject_to_apr'?: number | null;
    'interest_charge_amount'?: number | null;
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
