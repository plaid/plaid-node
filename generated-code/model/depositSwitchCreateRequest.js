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
        "name": "targetAccessToken",
        "baseName": "target_access_token",
        "type": "string"
    },
    {
        "name": "targetAccountId",
        "baseName": "target_account_id",
        "type": "string"
    }
];
exports.DepositSwitchCreateRequest = DepositSwitchCreateRequest;
//# sourceMappingURL=depositSwitchCreateRequest.js.map