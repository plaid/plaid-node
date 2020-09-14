"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorAuthGetRequest {
    static getAttributeTypeMap() {
        return ProcessorAuthGetRequest.attributeTypeMap;
    }
}
ProcessorAuthGetRequest.discriminator = undefined;
ProcessorAuthGetRequest.attributeTypeMap = [
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
        "name": "processorToken",
        "baseName": "processor_token",
        "type": "string"
    }
];
exports.ProcessorAuthGetRequest = ProcessorAuthGetRequest;
//# sourceMappingURL=processorAuthGetRequest.js.map