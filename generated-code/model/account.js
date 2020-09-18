"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    static getAttributeTypeMap() {
        return Account.attributeTypeMap;
    }
}
Account.discriminator = undefined;
Account.attributeTypeMap = [
    {
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "balances",
        "baseName": "balances",
        "type": "AccountBalance"
    },
    {
        "name": "mask",
        "baseName": "mask",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "official_name",
        "baseName": "official_name",
        "type": "string"
    },
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
        "name": "verification_status",
        "baseName": "verification_status",
        "type": "string"
    },
    {
        "name": "historical_balances",
        "baseName": "historical_balances",
        "type": "Array<HistoricalBalance>"
    },
    {
        "name": "owners",
        "baseName": "owners",
        "type": "Array<Owner>"
    },
    {
        "name": "days_available",
        "baseName": "days_available",
        "type": "number"
    },
    {
        "name": "transactions",
        "baseName": "transactions",
        "type": "Array<Transaction>"
    }
];
exports.Account = Account;
//# sourceMappingURL=account.js.map