"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationPaymentCreateResponse {
    static getAttributeTypeMap() {
        return PaymentInitiationPaymentCreateResponse.attributeTypeMap;
    }
}
PaymentInitiationPaymentCreateResponse.discriminator = undefined;
PaymentInitiationPaymentCreateResponse.attributeTypeMap = [
    {
        "name": "paymentId",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.PaymentInitiationPaymentCreateResponse = PaymentInitiationPaymentCreateResponse;
//# sourceMappingURL=paymentInitiationPaymentCreateResponse.js.map