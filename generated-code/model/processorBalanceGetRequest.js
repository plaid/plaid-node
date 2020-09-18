"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorBalanceGetRequest {
    static getAttributeTypeMap() {
        return ProcessorBalanceGetRequest.attributeTypeMap;
    }
}
ProcessorBalanceGetRequest.discriminator = undefined;
ProcessorBalanceGetRequest.attributeTypeMap = [
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
exports.ProcessorBalanceGetRequest = ProcessorBalanceGetRequest;
//# sourceMappingURL=processorBalanceGetRequest.js.map