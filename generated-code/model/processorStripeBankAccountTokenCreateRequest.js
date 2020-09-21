"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorStripeBankAccountTokenCreateRequest {
    static getAttributeTypeMap() {
        return ProcessorStripeBankAccountTokenCreateRequest.attributeTypeMap;
    }
}
ProcessorStripeBankAccountTokenCreateRequest.discriminator = undefined;
ProcessorStripeBankAccountTokenCreateRequest.attributeTypeMap = [
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
exports.ProcessorStripeBankAccountTokenCreateRequest = ProcessorStripeBankAccountTokenCreateRequest;
//# sourceMappingURL=processorStripeBankAccountTokenCreateRequest.js.map