"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SandboxPublicTokenCreateRequest {
    static getAttributeTypeMap() {
        return SandboxPublicTokenCreateRequest.attributeTypeMap;
    }
}
SandboxPublicTokenCreateRequest.discriminator = undefined;
SandboxPublicTokenCreateRequest.attributeTypeMap = [
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
        "name": "institutionId",
        "baseName": "institution_id",
        "type": "string"
    },
    {
        "name": "initialProducts",
        "baseName": "initial_products",
        "type": "Array<string>"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "SandboxPublicTokenCreateRequestOptions"
    }
];
exports.SandboxPublicTokenCreateRequest = SandboxPublicTokenCreateRequest;
//# sourceMappingURL=sandboxPublicTokenCreateRequest.js.map