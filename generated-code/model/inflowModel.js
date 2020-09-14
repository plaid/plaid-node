"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InflowModel {
    static getAttributeTypeMap() {
        return InflowModel.attributeTypeMap;
    }
}
InflowModel.discriminator = undefined;
InflowModel.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "incomeAmount",
        "baseName": "income_amount",
        "type": "number"
    },
    {
        "name": "paymentDayOfMonth",
        "baseName": "payment_day_of_month",
        "type": "number"
    },
    {
        "name": "transactionName",
        "baseName": "transaction_name",
        "type": "string"
    },
    {
        "name": "statementDayOfMonth",
        "baseName": "statement_day_of_month",
        "type": "string"
    }
];
exports.InflowModel = InflowModel;
//# sourceMappingURL=inflowModel.js.map