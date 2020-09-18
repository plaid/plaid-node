import { PaymentInitiationPayment } from './paymentInitiationPayment';
export declare class PaymentInitiationPaymentListResponse {
    'payments'?: Array<PaymentInitiationPayment>;
    'next_cursor'?: string;
    'request_id'?: string;
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
