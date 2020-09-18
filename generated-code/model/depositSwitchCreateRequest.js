"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DepositSwitchCreateRequest {
    static getAttributeTypeMap() {
        return DepositSwitchCreateRequest.attributeTypeMap;
    }
}
DepositSwitchCreateRequest.discriminator = undefined;
DepositSwitchCreateRequest.attributeTypeMap = [
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
        "name": "target_access_token",
        "baseName": "target_access_token",
        "type": "string"
    },
    {
        "name": "target_account_id",
        "baseName": "target_account_id",
        "type": "string"
    }
];
exports.DepositSwitchCreateRequest = DepositSwitchCreateRequest;
//# sourceMappingURL=depositSwitchCreateRequest.js.map