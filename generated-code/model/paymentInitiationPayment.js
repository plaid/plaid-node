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
        "name": "paymentId",
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
        "name": "lastStatusUpdate",
        "baseName": "last_status_update",
        "type": "string"
    },
    {
        "name": "recipientId",
        "baseName": "recipient_id",
        "type": "string"
    }
];
exports.PaymentInitiationPayment = PaymentInitiationPayment;
//# sourceMappingURL=paymentInitiationPayment.js.map