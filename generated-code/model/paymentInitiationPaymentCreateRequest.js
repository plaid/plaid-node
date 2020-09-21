"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationPaymentCreateRequest {
    static getAttributeTypeMap() {
        return PaymentInitiationPaymentCreateRequest.attributeTypeMap;
    }
}
PaymentInitiationPaymentCreateRequest.discriminator = undefined;
PaymentInitiationPaymentCreateRequest.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "recipient_id",
        "baseName": "recipient_id",
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
        "type": "Amount"
    },
    {
        "name": "schedule",
        "baseName": "schedule",
        "type": "PaymentInitiationPaymentCreateRequestSchedule"
    }
];
exports.PaymentInitiationPaymentCreateRequest = PaymentInitiationPaymentCreateRequest;
//# sourceMappingURL=paymentInitiationPaymentCreateRequest.js.map