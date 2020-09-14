import { PaymentInitiationPayment } from './paymentInitiationPayment';
export declare class PaymentInitiationPaymentListResponse {
    'payments'?: Array<PaymentInitiationPayment>;
    'nextCursor'?: string;
    'requestId'?: string;
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
