"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Institution {
    static getAttributeTypeMap() {
        return Institution.attributeTypeMap;
    }
}
Institution.discriminator = undefined;
Institution.attributeTypeMap = [
    {
        "name": "institution_id",
        "baseName": "institution_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<string>"
    },
    {
        "name": "country_codes",
        "baseName": "country_codes",
        "type": "Array<string>"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "primary_color",
        "baseName": "primary_color",
        "type": "string"
    },
    {
        "name": "logo",
        "baseName": "logo",
        "type": "string"
    },
    {
        "name": "routing_numbers",
        "baseName": "routing_numbers",
        "type": "Array<string>"
    },
    {
        "name": "oauth",
        "baseName": "oauth",
        "type": "boolean"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "InstitutionStatus"
    }
];
exports.Institution = Institution;
//# sourceMappingURL=institution.js.map