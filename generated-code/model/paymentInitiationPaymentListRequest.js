"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationPaymentListRequest {
    static getAttributeTypeMap() {
        return PaymentInitiationPaymentListRequest.attributeTypeMap;
    }
}
PaymentInitiationPaymentListRequest.discriminator = undefined;
PaymentInitiationPaymentListRequest.attributeTypeMap = [
    {
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "PaymentInitiationPaymentListRequestOptions"
    }
];
exports.PaymentInitiationPaymentListRequest = PaymentInitiationPaymentListRequest;
//# sourceMappingURL=paymentInitiationPaymentListRequest.js.map