"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationPayment {
    static getAttributeTypeMap() {
        return PaymentInitiationPayment.attributeTypeMap;
    }
}
PaymentInitiationPayment.discriminator = undefined;
PaymentInitiationPayment.attributeTypeMap = [
    {
        "name": "payment_id",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "PaymentAmount"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "last_status_update",
        "baseName": "last_status_update",
        "type": "string"
    },
    {
        "name": "recipient_id",
        "baseName": "recipient_id",
        "type": "string"
    }
];
exports.PaymentInitiationPayment = PaymentInitiationPayment;
//# sourceMappingURL=paymentInitiationPayment.js.map