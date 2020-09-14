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
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "depositSwitchId",
        "baseName": "deposit_switch_id",
        "type": "string"
    }
];
exports.DepositSwitchTokenCreateRequest = DepositSwitchTokenCreateRequest;
//# sourceMappingURL=depositSwitchTokenCreateRequest.js.map