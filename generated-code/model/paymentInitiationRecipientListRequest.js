"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationRecipientListRequest {
    static getAttributeTypeMap() {
        return PaymentInitiationRecipientListRequest.attributeTypeMap;
    }
}
PaymentInitiationRecipientListRequest.discriminator = undefined;
PaymentInitiationRecipientListRequest.attributeTypeMap = [
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "Array<PaymentInitiationRecipient>"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.PaymentInitiationRecipientListRequest = PaymentInitiationRecipientListRequest;
//# sourceMappingURL=paymentInitiationRecipientListRequest.js.map