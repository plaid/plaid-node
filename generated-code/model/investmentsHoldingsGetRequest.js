"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvestmentsHoldingsGetRequest {
    static getAttributeTypeMap() {
        return InvestmentsHoldingsGetRequest.attributeTypeMap;
    }
}
InvestmentsHoldingsGetRequest.discriminator = undefined;
InvestmentsHoldingsGetRequest.attributeTypeMap = [
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
        "name": "options",
        "baseName": "options",
        "type": "InvestmentsHoldingsGetRequestOptions"
    }
];
exports.InvestmentsHoldingsGetRequest = InvestmentsHoldingsGetRequest;
//# sourceMappingURL=investmentsHoldingsGetRequest.js.map