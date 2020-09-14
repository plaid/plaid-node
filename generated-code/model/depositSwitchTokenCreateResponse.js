"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DepositSwitchTokenCreateResponse {
    static getAttributeTypeMap() {
        return DepositSwitchTokenCreateResponse.attributeTypeMap;
    }
}
DepositSwitchTokenCreateResponse.discriminator = undefined;
DepositSwitchTokenCreateResponse.attributeTypeMap = [
    {
        "name": "depositSwitchToken",
        "baseName": "deposit_switch_token",
        "type": "string"
    },
    {
        "name": "depositSwitchTokenExpirationTime",
        "baseName": "deposit_switch_token_expiration_time",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.DepositSwitchTokenCreateResponse = DepositSwitchTokenCreateResponse;
//# sourceMappingURL=depositSwitchTokenCreateResponse.js.map