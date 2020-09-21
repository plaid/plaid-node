import { Location } from './location';
import { PaymentMeta } from './paymentMeta';
import { TransactionCode } from './transactionCode';
export declare class Transaction {
    'transaction_type'?: string;
    'transaction_id'?: string;
    'account_owner'?: string | null;
    'pending_transaction_id'?: string | null;
    'pending'?: boolean;
    'payment_channel'?: string;
    'payment_meta'?: PaymentMeta;
    'name'?: string;
    'merchant_name'?: string | null;
    'location'?: Location;
    'authorized_date'?: string | null;
    'date'?: string;
    'category_id'?: string;
    'category'?: Array<string> | null;
    'unofficial_currency_code'?: string | null;
    'iso_currency_code'?: string | null;
    'amount'?: number;
    'account_id'?: string;
    'transaction_code'?: TransactionCode | null;
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
