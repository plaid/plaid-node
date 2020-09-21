"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvestmentsDefaultUpdateWebhook {
    static getAttributeTypeMap() {
        return InvestmentsDefaultUpdateWebhook.attributeTypeMap;
    }
}
InvestmentsDefaultUpdateWebhook.discriminator = undefined;
InvestmentsDefaultUpdateWebhook.attributeTypeMap = [
    {
        "name": "webhook_type",
        "baseName": "webhook_type",
        "type": "string"
    },
    {
        "name": "webhook_code",
        "baseName": "webhook_code",
        "type": "string"
    },
    {
        "name": "item_id",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    },
    {
        "name": "new_investments_transactions",
        "baseName": "new_investments_transactions",
        "type": "number"
    },
    {
        "name": "canceled_investments_transactions",
        "baseName": "canceled_investments_transactions",
        "type": "number"
    }
];
exports.InvestmentsDefaultUpdateWebhook = InvestmentsDefaultUpdateWebhook;
//# sourceMappingURL=investmentsDefaultUpdateWebhook.js.map