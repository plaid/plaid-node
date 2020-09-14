export declare class PSLFStatus {
    'estimatedEligibilityDate'?: string | null;
    'paymentsMade'?: string | null;
    'paymentsRemaining'?: string | null;
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
