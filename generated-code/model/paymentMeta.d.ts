export declare class PaymentMeta {
    'reference_number'?: string | null;
    'ppd_id'?: string | null;
    'payee'?: string | null;
    'by_order_of'?: string | null;
    'payer'?: string | null;
    'payment_method'?: string | null;
    'payment_processor'?: string | null;
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
