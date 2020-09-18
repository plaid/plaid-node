export declare class PaymentInitiationPaymentListRequest {
    'client_id': string;
    'secret': string;
    'count'?: number;
    'cursor'?: string;
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
