"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditCardLiability {
    static getAttributeTypeMap() {
        return CreditCardLiability.attributeTypeMap;
    }
}
CreditCardLiability.discriminator = undefined;
CreditCardLiability.attributeTypeMap = [
    {
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "aprs",
        "baseName": "aprs",
        "type": "Array<APR>"
    },
    {
        "name": "is_overdue",
        "baseName": "is_overdue",
        "type": "boolean"
    },
    {
        "name": "last_payment_amount",
        "baseName": "last_payment_amount",
        "type": "number"
    },
    {
        "name": "last_payment_date",
        "baseName": "last_payment_date",
        "type": "string"
    },
    {
        "name": "last_statement_balance",
        "baseName": "last_statement_balance",
        "type": "number"
    },
    {
        "name": "last_statement_issue_date",
        "baseName": "last_statement_issue_date",
        "type": "string"
    },
    {
        "name": "minimum_payment_amount",
        "baseName": "minimum_payment_amount",
        "type": "number"
    },
    {
        "name": "next_payment_due_date",
        "baseName": "next_payment_due_date",
        "type": "string"
    }
];
exports.CreditCardLiability = CreditCardLiability;
//# sourceMappingURL=creditCardLiability.js.map