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
        "name": "income_amount",
        "baseName": "income_amount",
        "type": "number"
    },
    {
        "name": "payment_day_of_month",
        "baseName": "payment_day_of_month",
        "type": "number"
    },
    {
        "name": "transaction_name",
        "baseName": "transaction_name",
        "type": "string"
    },
    {
        "name": "statement_day_of_month",
        "baseName": "statement_day_of_month",
        "type": "string"
    }
];
exports.InflowModel = InflowModel;
//# sourceMappingURL=inflowModel.js.map