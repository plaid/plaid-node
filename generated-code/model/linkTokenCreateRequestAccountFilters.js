"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkTokenCreateRequestAccountFilters {
    static getAttributeTypeMap() {
        return LinkTokenCreateRequestAccountFilters.attributeTypeMap;
    }
}
LinkTokenCreateRequestAccountFilters.discriminator = undefined;
LinkTokenCreateRequestAccountFilters.attributeTypeMap = [
    {
        "name": "depository",
        "baseName": "depository",
        "type": "LinkTokenCreateRequestAccountFiltersDepository"
    },
    {
        "name": "credit",
        "baseName": "credit",
        "type": "LinkTokenCreateRequestAccountFiltersCredit"
    },
    {
        "name": "loan",
        "baseName": "loan",
        "type": "LinkTokenCreateRequestAccountFiltersLoan"
    },
    {
        "name": "investment",
        "baseName": "investment",
        "type": "LinkTokenCreateRequestAccountFiltersInvestment"
    }
];
exports.LinkTokenCreateRequestAccountFilters = LinkTokenCreateRequestAccountFilters;
//# sourceMappingURL=linkTokenCreateRequestAccountFilters.js.map