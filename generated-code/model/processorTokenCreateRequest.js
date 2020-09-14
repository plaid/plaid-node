"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorTokenCreateRequest {
    static getAttributeTypeMap() {
        return ProcessorTokenCreateRequest.attributeTypeMap;
    }
}
ProcessorTokenCreateRequest.discriminator = undefined;
ProcessorTokenCreateRequest.attributeTypeMap = [
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
        "name": "processor",
        "baseName": "processor",
        "type": "string"
    }
];
exports.ProcessorTokenCreateRequest = ProcessorTokenCreateRequest;
//# sourceMappingURL=processorTokenCreateRequest.js.map