"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationRecipientCreateRequest {
    static getAttributeTypeMap() {
        return PaymentInitiationRecipientCreateRequest.attributeTypeMap;
    }
}
PaymentInitiationRecipientCreateRequest.discriminator = undefined;
PaymentInitiationRecipientCreateRequest.attributeTypeMap = [
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
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "iban",
        "baseName": "iban",
        "type": "string"
    },
    {
        "name": "bacs",
        "baseName": "bacs",
        "type": "PaymentInitiationRecipientCreateRequestBacs"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "PaymentInitiationAddress"
    }
];
exports.PaymentInitiationRecipientCreateRequest = PaymentInitiationRecipientCreateRequest;
//# sourceMappingURL=paymentInitiationRecipientCreateRequest.js.map