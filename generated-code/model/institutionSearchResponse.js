"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstitutionSearchResponse {
    static getAttributeTypeMap() {
        return InstitutionSearchResponse.attributeTypeMap;
    }
}
InstitutionSearchResponse.discriminator = undefined;
InstitutionSearchResponse.attributeTypeMap = [
    {
        "name": "institutions",
        "baseName": "institutions",
        "type": "Array<Institution>"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.InstitutionSearchResponse = InstitutionSearchResponse;
//# sourceMappingURL=institutionSearchResponse.js.map