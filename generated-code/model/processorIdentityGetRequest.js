"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorIdentityGetRequest {
    static getAttributeTypeMap() {
        return ProcessorIdentityGetRequest.attributeTypeMap;
    }
}
ProcessorIdentityGetRequest.discriminator = undefined;
ProcessorIdentityGetRequest.attributeTypeMap = [
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
        "name": "processor_token",
        "baseName": "processor_token",
        "type": "string"
    }
];
exports.ProcessorIdentityGetRequest = ProcessorIdentityGetRequest;
//# sourceMappingURL=processorIdentityGetRequest.js.map