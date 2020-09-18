"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorApexProcessorTokenCreateRequest {
    static getAttributeTypeMap() {
        return ProcessorApexProcessorTokenCreateRequest.attributeTypeMap;
    }
}
ProcessorApexProcessorTokenCreateRequest.discriminator = undefined;
ProcessorApexProcessorTokenCreateRequest.attributeTypeMap = [
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
    }
];
exports.ProcessorApexProcessorTokenCreateRequest = ProcessorApexProcessorTokenCreateRequest;
//# sourceMappingURL=processorApexProcessorTokenCreateRequest.js.map