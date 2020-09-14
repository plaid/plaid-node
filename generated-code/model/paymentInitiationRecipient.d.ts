import { PaymentInitiationAddress } from './paymentInitiationAddress';
export declare class PaymentInitiationRecipient {
    'recipientId'?: string;
    'name'?: string;
    'address'?: PaymentInitiationAddress;
    'iban'?: string;
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
