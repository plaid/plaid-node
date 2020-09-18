"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorApexProcessorTokenCreateResponse {
    static getAttributeTypeMap() {
        return ProcessorApexProcessorTokenCreateResponse.attributeTypeMap;
    }
}
ProcessorApexProcessorTokenCreateResponse.discriminator = undefined;
ProcessorApexProcessorTokenCreateResponse.attributeTypeMap = [
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
exports.ProcessorApexProcessorTokenCreateResponse = ProcessorApexProcessorTokenCreateResponse;
//# sourceMappingURL=processorApexProcessorTokenCreateResponse.js.map