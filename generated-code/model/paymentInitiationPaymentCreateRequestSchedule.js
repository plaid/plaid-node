"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentInitiationPaymentCreateRequestSchedule {
    static getAttributeTypeMap() {
        return PaymentInitiationPaymentCreateRequestSchedule.attributeTypeMap;
    }
}
PaymentInitiationPaymentCreateRequestSchedule.discriminator = undefined;
PaymentInitiationPaymentCreateRequestSchedule.attributeTypeMap = [
    {
        "name": "interval",
        "baseName": "interval",
        "type": "string"
    },
    {
        "name": "interval_execution_day",
        "baseName": "interval_execution_day",
        "type": "number"
    },
    {
        "name": "start_date",
        "baseName": "start_date",
        "type": "string"
    }
];
exports.PaymentInitiationPaymentCreateRequestSchedule = PaymentInitiationPaymentCreateRequestSchedule;
//# sourceMappingURL=paymentInitiationPaymentCreateRequestSchedule.js.map