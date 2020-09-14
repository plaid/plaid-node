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
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "accountId",
        "baseName": "account_id",
        "type": "string"
    }
];
exports.ProcessorStripeBankAccountTokenCreateRequest = ProcessorStripeBankAccountTokenCreateRequest;
//# sourceMappingURL=processorStripeBankAccountTokenCreateRequest.js.map