"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvestmentsHoldingsGetResponse {
    static getAttributeTypeMap() {
        return InvestmentsHoldingsGetResponse.attributeTypeMap;
    }
}
InvestmentsHoldingsGetResponse.discriminator = undefined;
InvestmentsHoldingsGetResponse.attributeTypeMap = [
    {
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<Account>"
    },
    {
        "name": "holdings",
        "baseName": "holdings",
        "type": "Array<Holding>"
    },
    {
        "name": "securities",
        "baseName": "securities",
        "type": "Array<Security>"
    },
    {
        "name": "item",
        "baseName": "item",
        "type": "Item"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.InvestmentsHoldingsGetResponse = InvestmentsHoldingsGetResponse;
//# sourceMappingURL=investmentsHoldingsGetResponse.js.map