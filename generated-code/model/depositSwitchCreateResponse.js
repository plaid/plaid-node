"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DepositSwitchCreateResponse {
    static getAttributeTypeMap() {
        return DepositSwitchCreateResponse.attributeTypeMap;
    }
}
DepositSwitchCreateResponse.discriminator = undefined;
DepositSwitchCreateResponse.attributeTypeMap = [
    {
        "name": "deposit_switch_id",
        "baseName": "deposit_switch_id",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.DepositSwitchCreateResponse = DepositSwitchCreateResponse;
//# sourceMappingURL=depositSwitchCreateResponse.js.map