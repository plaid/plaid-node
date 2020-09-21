import { PaymentInitiationRecipient } from './paymentInitiationRecipient';
export declare class PaymentInitiationRecipientListResponse {
    'recipients'?: Array<PaymentInitiationRecipient>;
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
