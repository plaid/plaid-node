"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorAuthGetResponse {
    static getAttributeTypeMap() {
        return ProcessorAuthGetResponse.attributeTypeMap;
    }
}
ProcessorAuthGetResponse.discriminator = undefined;
ProcessorAuthGetResponse.attributeTypeMap = [
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    },
    {
        "name": "numbers",
        "baseName": "numbers",
        "type": "ProcessorAuthGetResponseNumbers"
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "Account"
    }
];
exports.ProcessorAuthGetResponse = ProcessorAuthGetResponse;
//# sourceMappingURL=processorAuthGetResponse.js.map