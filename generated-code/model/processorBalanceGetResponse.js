"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorBalanceGetResponse {
    static getAttributeTypeMap() {
        return ProcessorBalanceGetResponse.attributeTypeMap;
    }
}
ProcessorBalanceGetResponse.discriminator = undefined;
ProcessorBalanceGetResponse.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "Account"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ProcessorBalanceGetResponse = ProcessorBalanceGetResponse;
//# sourceMappingURL=processorBalanceGetResponse.js.map