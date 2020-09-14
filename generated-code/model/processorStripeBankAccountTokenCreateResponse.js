"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorStripeBankAccountTokenCreateResponse {
    static getAttributeTypeMap() {
        return ProcessorStripeBankAccountTokenCreateResponse.attributeTypeMap;
    }
}
ProcessorStripeBankAccountTokenCreateResponse.discriminator = undefined;
ProcessorStripeBankAccountTokenCreateResponse.attributeTypeMap = [
    {
        "name": "stripeBankAccountToken",
        "baseName": "stripe_bank_account_token",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ProcessorStripeBankAccountTokenCreateResponse = ProcessorStripeBankAccountTokenCreateResponse;
//# sourceMappingURL=processorStripeBankAccountTokenCreateResponse.js.map