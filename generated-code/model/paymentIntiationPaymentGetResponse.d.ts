import { PaymentAmount } from './paymentAmount';
export declare class PaymentIntiationPaymentGetResponse {
    'payment_id'?: string;
    'request_id'?: string;
    'amount'?: PaymentAmount;
    'status'?: string;
    'recipient_id'?: string;
    'reference'?: string;
    'last_status_update'?: string;
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
