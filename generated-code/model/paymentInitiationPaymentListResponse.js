"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationPaymentListResponse {
    static getAttributeTypeMap() {
        return PaymentInitiationPaymentListResponse.attributeTypeMap;
    }
}
PaymentInitiationPaymentListResponse.discriminator = undefined;
PaymentInitiationPaymentListResponse.attributeTypeMap = [
    {
        "name": "payments",
        "baseName": "payments",
        "type": "Array<PaymentInitiationPayment>"
    },
    {
        "name": "nextCursor",
        "baseName": "next_cursor",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.PaymentInitiationPaymentListResponse = PaymentInitiationPaymentListResponse;
//# sourceMappingURL=paymentInitiationPaymentListResponse.js.map