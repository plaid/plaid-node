import { PaymentInitiationRecipient } from './paymentInitiationRecipient';
export declare class PaymentInitiationRecipientListRequest {
    'recipients'?: Array<PaymentInitiationRecipient>;
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
