"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DepositSwitchTokenCreateRequest {
    static getAttributeTypeMap() {
        return DepositSwitchTokenCreateRequest.attributeTypeMap;
    }
}
DepositSwitchTokenCreateRequest.discriminator = undefined;
DepositSwitchTokenCreateRequest.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "deposit_switch_id",
        "baseName": "deposit_switch_id",
        "type": "string"
    }
];
exports.DepositSwitchTokenCreateRequest = DepositSwitchTokenCreateRequest;
//# sourceMappingURL=depositSwitchTokenCreateRequest.js.map