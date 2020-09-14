"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SandboxItemResetLoginRequest {
    static getAttributeTypeMap() {
        return SandboxItemResetLoginRequest.attributeTypeMap;
    }
}
SandboxItemResetLoginRequest.discriminator = undefined;
SandboxItemResetLoginRequest.attributeTypeMap = [
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
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    }
];
exports.SandboxItemResetLoginRequest = SandboxItemResetLoginRequest;
//# sourceMappingURL=sandboxItemResetLoginRequest.js.map