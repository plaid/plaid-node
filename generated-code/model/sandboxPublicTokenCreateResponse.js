"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SandboxPublicTokenCreateResponse {
    static getAttributeTypeMap() {
        return SandboxPublicTokenCreateResponse.attributeTypeMap;
    }
}
SandboxPublicTokenCreateResponse.discriminator = undefined;
SandboxPublicTokenCreateResponse.attributeTypeMap = [
    {
        "name": "publicToken",
        "baseName": "public_token",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.SandboxPublicTokenCreateResponse = SandboxPublicTokenCreateResponse;
//# sourceMappingURL=sandboxPublicTokenCreateResponse.js.map