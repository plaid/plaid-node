"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SandboxItemResetLoginResponse {
    static getAttributeTypeMap() {
        return SandboxItemResetLoginResponse.attributeTypeMap;
    }
}
SandboxItemResetLoginResponse.discriminator = undefined;
SandboxItemResetLoginResponse.attributeTypeMap = [
    {
        "name": "resetLogin",
        "baseName": "reset_login",
        "type": "boolean"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.SandboxItemResetLoginResponse = SandboxItemResetLoginResponse;
//# sourceMappingURL=sandboxItemResetLoginResponse.js.map