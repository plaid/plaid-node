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
        "name": "stripe_bank_account_token",
        "baseName": "stripe_bank_account_token",
        "type": "string"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.ProcessorStripeBankAccountTokenCreateResponse = ProcessorStripeBankAccountTokenCreateResponse;
//# sourceMappingURL=processorStripeBankAccountTokenCreateResponse.js.map