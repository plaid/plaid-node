"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstitutionSearchRequestOptions {
    static getAttributeTypeMap() {
        return InstitutionSearchRequestOptions.attributeTypeMap;
    }
}
InstitutionSearchRequestOptions.discriminator = undefined;
InstitutionSearchRequestOptions.attributeTypeMap = [
    {
        "name": "country_codes",
        "baseName": "country_codes",
        "type": "Array<CountryCode>"
    },
    {
        "name": "oauth",
        "baseName": "oauth",
        "type": "boolean"
    },
    {
        "name": "include_optional_metadata",
        "baseName": "include_optional_metadata",
        "type": "boolean"
    }
];
exports.InstitutionSearchRequestOptions = InstitutionSearchRequestOptions;
//# sourceMappingURL=institutionSearchRequestOptions.js.map