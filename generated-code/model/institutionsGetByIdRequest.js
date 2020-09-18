"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstitutionsGetByIdRequest {
    static getAttributeTypeMap() {
        return InstitutionsGetByIdRequest.attributeTypeMap;
    }
}
InstitutionsGetByIdRequest.discriminator = undefined;
InstitutionsGetByIdRequest.attributeTypeMap = [
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
        "name": "institution_id",
        "baseName": "institution_id",
        "type": "string"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "InstitutionsGetByIdRequestOptions"
    }
];
exports.InstitutionsGetByIdRequest = InstitutionsGetByIdRequest;
//# sourceMappingURL=institutionsGetByIdRequest.js.map