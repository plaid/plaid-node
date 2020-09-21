"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorIdentityGetResponse {
    static getAttributeTypeMap() {
        return ProcessorIdentityGetResponse.attributeTypeMap;
    }
}
ProcessorIdentityGetResponse.discriminator = undefined;
ProcessorIdentityGetResponse.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "Account"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ProcessorIdentityGetResponse = ProcessorIdentityGetResponse;
//# sourceMappingURL=processorIdentityGetResponse.js.map