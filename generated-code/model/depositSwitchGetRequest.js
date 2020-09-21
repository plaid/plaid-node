"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DepositSwitchGetRequest {
    static getAttributeTypeMap() {
        return DepositSwitchGetRequest.attributeTypeMap;
    }
}
DepositSwitchGetRequest.discriminator = undefined;
DepositSwitchGetRequest.attributeTypeMap = [
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
exports.DepositSwitchGetRequest = DepositSwitchGetRequest;
//# sourceMappingURL=depositSwitchGetRequest.js.map