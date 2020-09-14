export declare class PaymentMeta {
    'referenceNumber'?: string | null;
    'ppdId'?: string | null;
    'payee'?: string | null;
    'byOrderOf'?: string | null;
    'payer'?: string | null;
    'paymentMethod'?: string | null;
    'paymentProcessor'?: string | null;
    'reason'?: string | null;
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
