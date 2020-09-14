"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationRecipientGetResponse {
    static getAttributeTypeMap() {
        return PaymentInitiationRecipientGetResponse.attributeTypeMap;
    }
}
PaymentInitiationRecipientGetResponse.discriminator = undefined;
PaymentInitiationRecipientGetResponse.attributeTypeMap = [
    {
        "name": "recipientId",
        "baseName": "recipient_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "PaymentInitiationAddress"
    },
    {
        "name": "iban",
        "baseName": "iban",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.PaymentInitiationRecipientGetResponse = PaymentInitiationRecipientGetResponse;
//# sourceMappingURL=paymentInitiationRecipientGetResponse.js.map