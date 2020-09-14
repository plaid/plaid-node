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
        "name": "webhookType",
        "baseName": "webhook_type",
        "type": "string"
    },
    {
        "name": "webhookCode",
        "baseName": "webhook_code",
        "type": "string"
    },
    {
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    },
    {
        "name": "newInvestmentsTransactions",
        "baseName": "new_investments_transactions",
        "type": "number"
    },
    {
        "name": "canceledInvestmentsTransactions",
        "baseName": "canceled_investments_transactions",
        "type": "number"
    }
];
exports.InvestmentsDefaultUpdateWebhook = InvestmentsDefaultUpdateWebhook;
//# sourceMappingURL=investmentsDefaultUpdateWebhook.js.map