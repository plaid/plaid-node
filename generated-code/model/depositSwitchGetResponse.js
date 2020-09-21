"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DepositSwitchGetResponse {
    static getAttributeTypeMap() {
        return DepositSwitchGetResponse.attributeTypeMap;
    }
}
DepositSwitchGetResponse.discriminator = undefined;
DepositSwitchGetResponse.attributeTypeMap = [
    {
        "name": "deposit_switch_id",
        "baseName": "deposit_switch_id",
        "type": "string"
    },
    {
        "name": "target_account_id",
        "baseName": "target_account_id",
        "type": "string"
    },
    {
        "name": "target_item_id",
        "baseName": "target_item_id",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "account_has_multiple_allocations",
        "baseName": "account_has_multiple_allocations",
        "type": "boolean"
    },
    {
        "name": "is_allocated_remainder",
        "baseName": "is_allocated_remainder",
        "type": "boolean"
    },
    {
        "name": "percent_allocated",
        "baseName": "percent_allocated",
        "type": "boolean"
    },
    {
        "name": "amount_allocated",
        "baseName": "amount_allocated",
        "type": "boolean"
    },
    {
        "name": "date_created",
        "baseName": "date_created",
        "type": "string"
    },
    {
        "name": "date_completed",
        "baseName": "date_completed",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.DepositSwitchGetResponse = DepositSwitchGetResponse;
//# sourceMappingURL=depositSwitchGetResponse.js.map