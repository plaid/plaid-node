"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SandboxItemSetVerificationStatusRequest {
    static getAttributeTypeMap() {
        return SandboxItemSetVerificationStatusRequest.attributeTypeMap;
    }
}
SandboxItemSetVerificationStatusRequest.discriminator = undefined;
SandboxItemSetVerificationStatusRequest.attributeTypeMap = [
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
    },
    {
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "verification_status",
        "baseName": "verification_status",
        "type": "string"
    }
];
exports.SandboxItemSetVerificationStatusRequest = SandboxItemSetVerificationStatusRequest;
//# sourceMappingURL=sandboxItemSetVerificationStatusRequest.js.map