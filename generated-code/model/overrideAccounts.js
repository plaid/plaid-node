"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OverrideAccounts {
    static getAttributeTypeMap() {
        return OverrideAccounts.attributeTypeMap;
    }
}
OverrideAccounts.discriminator = undefined;
OverrideAccounts.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "AccountType"
    },
    {
        "name": "subtype",
        "baseName": "subtype",
        "type": "AccountSubtype"
    },
    {
        "name": "starting_balance",
        "baseName": "starting_balance",
        "type": "number"
    },
    {
        "name": "force_available_balance",
        "baseName": "force_available_balance",
        "type": "number"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "meta",
        "baseName": "meta",
        "type": "Meta"
    },
    {
        "name": "numbers",
        "baseName": "numbers",
        "type": "Numbers"
    },
    {
        "name": "transactions",
        "baseName": "transactions",
        "type": "Array<TransactionOverride>"
    },
    {
        "name": "identity",
        "baseName": "identity",
        "type": "OwnerOverride"
    },
    {
        "name": "liability",
        "baseName": "liability",
        "type": "LiabilityOverride"
    },
    {
        "name": "inflow_model",
        "baseName": "inflow_model",
        "type": "InflowModel"
    }
];
exports.OverrideAccounts = OverrideAccounts;
//# sourceMappingURL=overrideAccounts.js.map