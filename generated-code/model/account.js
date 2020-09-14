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
        "name": "accountId",
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
        "name": "officialName",
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
        "name": "verificationStatus",
        "baseName": "verification_status",
        "type": "string"
    },
    {
        "name": "historicalBalances",
        "baseName": "historical_balances",
        "type": "Array<HistoricalBalance>"
    },
    {
        "name": "owners",
        "baseName": "owners",
        "type": "Array<Owner>"
    },
    {
        "name": "daysAvailable",
        "baseName": "days_available",
        "type": "number"
    }
];
exports.Account = Account;
//# sourceMappingURL=account.js.map