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
        "name": "intervalExecutionDay",
        "baseName": "interval_execution_day",
        "type": "number"
    },
    {
        "name": "startDate",
        "baseName": "start_date",
        "type": "string"
    }
];
exports.PaymentInitiationPaymentCreateRequestSchedule = PaymentInitiationPaymentCreateRequestSchedule;
//# sourceMappingURL=paymentInitiationPaymentCreateRequestSchedule.js.map