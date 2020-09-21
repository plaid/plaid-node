"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SandboxPublicTokenCreateRequestOptions {
    static getAttributeTypeMap() {
        return SandboxPublicTokenCreateRequestOptions.attributeTypeMap;
    }
}
SandboxPublicTokenCreateRequestOptions.discriminator = undefined;
SandboxPublicTokenCreateRequestOptions.attributeTypeMap = [
    {
        "name": "webhook",
        "baseName": "webhook",
        "type": "string"
    },
    {
        "name": "override_username",
        "baseName": "override_username",
        "type": "string"
    },
    {
        "name": "override_password",
        "baseName": "override_password",
        "type": "string"
    }
];
exports.SandboxPublicTokenCreateRequestOptions = SandboxPublicTokenCreateRequestOptions;
//# sourceMappingURL=sandboxPublicTokenCreateRequestOptions.js.map