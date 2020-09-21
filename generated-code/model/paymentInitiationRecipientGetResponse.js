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
        "name": "recipient_id",
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
        "name": "bacs",
        "baseName": "bacs",
        "type": "PaymentInitiationRecipientGetResponseBacs"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.PaymentInitiationRecipientGetResponse = PaymentInitiationRecipientGetResponse;
//# sourceMappingURL=paymentInitiationRecipientGetResponse.js.map