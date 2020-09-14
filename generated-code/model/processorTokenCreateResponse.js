"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorTokenCreateResponse {
    static getAttributeTypeMap() {
        return ProcessorTokenCreateResponse.attributeTypeMap;
    }
}
ProcessorTokenCreateResponse.discriminator = undefined;
ProcessorTokenCreateResponse.attributeTypeMap = [
    {
        "name": "processorToken",
        "baseName": "processor_token",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ProcessorTokenCreateResponse = ProcessorTokenCreateResponse;
//# sourceMappingURL=processorTokenCreateResponse.js.map