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
        "name": "processor_token",
        "baseName": "processor_token",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ProcessorTokenCreateResponse = ProcessorTokenCreateResponse;
//# sourceMappingURL=processorTokenCreateResponse.js.map