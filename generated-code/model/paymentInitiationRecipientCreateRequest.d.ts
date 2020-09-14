import { PaymentInitiationAddress } from './paymentInitiationAddress';
import { PaymentInitiationRecipientCreateRequestBacs } from './paymentInitiationRecipientCreateRequestBacs';
export declare class PaymentInitiationRecipientCreateRequest {
    'clientId': string;
    'secret': string;
    'name': string;
    'iban'?: string;
    'bacs'?: PaymentInitiationRecipientCreateRequestBacs;
    'address'?: PaymentInitiationAddress;
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
