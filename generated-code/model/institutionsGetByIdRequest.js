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
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "institutionId",
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