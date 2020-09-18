"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstitutionSearchRequest {
    static getAttributeTypeMap() {
        return InstitutionSearchRequest.attributeTypeMap;
    }
}
InstitutionSearchRequest.discriminator = undefined;
InstitutionSearchRequest.attributeTypeMap = [
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
        "name": "query",
        "baseName": "query",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<string>"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "InstitutionSearchRequestOptions"
    }
];
exports.InstitutionSearchRequest = InstitutionSearchRequest;
//# sourceMappingURL=institutionSearchRequest.js.map