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
        "name": "access_token",
        "baseName": "access_token",
        "type": "string"
    }
];
exports.SandboxItemResetLoginRequest = SandboxItemResetLoginRequest;
//# sourceMappingURL=sandboxItemResetLoginRequest.js.map