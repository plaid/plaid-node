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
    },
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "verificationStatus",
        "baseName": "verification_status",
        "type": "string"
    }
];
exports.SandboxItemSetVerificationStatusRequest = SandboxItemSetVerificationStatusRequest;
//# sourceMappingURL=sandboxItemSetVerificationStatusRequest.js.map