import { PaymentInitiationAddress } from './paymentInitiationAddress';
import { PaymentInitiationRecipientGetResponseBacs } from './paymentInitiationRecipientGetResponseBacs';
export declare class PaymentInitiationRecipientGetResponse {
    'recipient_id'?: string;
    'name'?: string;
    'address'?: PaymentInitiationAddress;
    'iban'?: string;
    'bacs'?: PaymentInitiationRecipientGetResponseBacs;
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
