import { PaymentAmount } from './paymentAmount';
export declare class PaymentInitiationPayment {
    'paymentId'?: string;
    'reference'?: string;
    'amount'?: PaymentAmount;
    'status'?: string;
    'lastStatusUpdate'?: string;
    'recipientId'?: string;
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
