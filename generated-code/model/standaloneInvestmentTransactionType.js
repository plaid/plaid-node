"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StandaloneInvestmentTransactionType {
    static getAttributeTypeMap() {
        return StandaloneInvestmentTransactionType.attributeTypeMap;
    }
}
StandaloneInvestmentTransactionType.discriminator = undefined;
StandaloneInvestmentTransactionType.attributeTypeMap = [
    {
        "name": "buy",
        "baseName": "buy",
        "type": "string"
    },
    {
        "name": "sell",
        "baseName": "sell",
        "type": "string"
    },
    {
        "name": "cancel",
        "baseName": "cancel",
        "type": "string"
    },
    {
        "name": "cash",
        "baseName": "cash",
        "type": "string"
    },
    {
        "name": "fee",
        "baseName": "fee",
        "type": "string"
    },
    {
        "name": "transfer",
        "baseName": "transfer",
        "type": "string"
    }
];
exports.StandaloneInvestmentTransactionType = StandaloneInvestmentTransactionType;
//# sourceMappingURL=standaloneInvestmentTransactionType.js.map