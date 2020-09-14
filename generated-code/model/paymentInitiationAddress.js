"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationAddress {
    static getAttributeTypeMap() {
        return PaymentInitiationAddress.attributeTypeMap;
    }
}
PaymentInitiationAddress.discriminator = undefined;
PaymentInitiationAddress.attributeTypeMap = [
    {
        "name": "street",
        "baseName": "street",
        "type": "Array<string>"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "postalCode",
        "baseName": "postal_code",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    }
];
exports.PaymentInitiationAddress = PaymentInitiationAddress;
//# sourceMappingURL=paymentInitiationAddress.js.map