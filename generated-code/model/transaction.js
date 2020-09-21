"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}
Transaction.discriminator = undefined;
Transaction.attributeTypeMap = [
    {
        "name": "transaction_type",
        "baseName": "transaction_type",
        "type": "string"
    },
    {
        "name": "transaction_id",
        "baseName": "transaction_id",
        "type": "string"
    },
    {
        "name": "account_owner",
        "baseName": "account_owner",
        "type": "string"
    },
    {
        "name": "pending_transaction_id",
        "baseName": "pending_transaction_id",
        "type": "string"
    },
    {
        "name": "pending",
        "baseName": "pending",
        "type": "boolean"
    },
    {
        "name": "payment_channel",
        "baseName": "payment_channel",
        "type": "string"
    },
    {
        "name": "payment_meta",
        "baseName": "payment_meta",
        "type": "PaymentMeta"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "merchant_name",
        "baseName": "merchant_name",
        "type": "string"
    },
    {
        "name": "location",
        "baseName": "location",
        "type": "Location"
    },
    {
        "name": "authorized_date",
        "baseName": "authorized_date",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "category_id",
        "baseName": "category_id",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "Array<string>"
    },
    {
        "name": "unofficial_currency_code",
        "baseName": "unofficial_currency_code",
        "type": "string"
    },
    {
        "name": "iso_currency_code",
        "baseName": "iso_currency_code",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "transaction_code",
        "baseName": "transaction_code",
        "type": "TransactionCode"
    }
];
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map