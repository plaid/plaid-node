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
        "name": "processor",
        "baseName": "processor",
        "type": "string"
    }
];
exports.ProcessorTokenCreateRequest = ProcessorTokenCreateRequest;
//# sourceMappingURL=processorTokenCreateRequest.js.map