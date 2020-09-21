"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentAmount {
    static getAttributeTypeMap() {
        return PaymentAmount.attributeTypeMap;
    }
}
PaymentAmount.discriminator = undefined;
PaymentAmount.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "number"
    }
];
exports.PaymentAmount = PaymentAmount;
//# sourceMappingURL=paymentAmount.js.map