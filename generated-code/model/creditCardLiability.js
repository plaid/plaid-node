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
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "aprs",
        "baseName": "aprs",
        "type": "Array<APR>"
    },
    {
        "name": "isOverdue",
        "baseName": "is_overdue",
        "type": "boolean"
    },
    {
        "name": "lastPaymentAmount",
        "baseName": "last_payment_amount",
        "type": "number"
    },
    {
        "name": "lastPaymentDate",
        "baseName": "last_payment_date",
        "type": "string"
    },
    {
        "name": "lastStatementBalance",
        "baseName": "last_statement_balance",
        "type": "number"
    },
    {
        "name": "lastStatementIssueDate",
        "baseName": "last_statement_issue_date",
        "type": "string"
    },
    {
        "name": "minimumPaymentAmount",
        "baseName": "minimum_payment_amount",
        "type": "number"
    },
    {
        "name": "nextPaymentDueDate",
        "baseName": "next_payment_due_date",
        "type": "string"
    }
];
exports.CreditCardLiability = CreditCardLiability;
//# sourceMappingURL=creditCardLiability.js.map