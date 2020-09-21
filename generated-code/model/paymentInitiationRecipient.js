"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationRecipient {
    static getAttributeTypeMap() {
        return PaymentInitiationRecipient.attributeTypeMap;
    }
}
PaymentInitiationRecipient.discriminator = undefined;
PaymentInitiationRecipient.attributeTypeMap = [
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
    }
];
exports.PaymentInitiationRecipient = PaymentInitiationRecipient;
//# sourceMappingURL=paymentInitiationRecipient.js.map