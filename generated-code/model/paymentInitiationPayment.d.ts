import { PaymentAmount } from './paymentAmount';
export declare class PaymentInitiationPayment {
    'payment_id'?: string;
    'reference'?: string;
    'amount'?: PaymentAmount;
    'status'?: string;
    'last_status_update'?: string;
    'recipient_id'?: string;
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
