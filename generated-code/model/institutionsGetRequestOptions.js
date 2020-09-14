"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstitutionsGetRequestOptions {
    static getAttributeTypeMap() {
        return InstitutionsGetRequestOptions.attributeTypeMap;
    }
}
InstitutionsGetRequestOptions.discriminator = undefined;
InstitutionsGetRequestOptions.attributeTypeMap = [
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<string>"
    },
    {
        "name": "countryCodes",
        "baseName": "country_codes",
        "type": "Array<CountryCode>"
    },
    {
        "name": "routingNumbers",
        "baseName": "routing_numbers",
        "type": "Array<string>"
    },
    {
        "name": "oauth",
        "baseName": "oauth",
        "type": "boolean"
    },
    {
        "name": "includeOptionalMetadata",
        "baseName": "include_optional_metadata",
        "type": "boolean"
    }
];
exports.InstitutionsGetRequestOptions = InstitutionsGetRequestOptions;
//# sourceMappingURL=institutionsGetRequestOptions.js.map