"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstitutionsGetRequest {
    static getAttributeTypeMap() {
        return InstitutionsGetRequest.attributeTypeMap;
    }
}
InstitutionsGetRequest.discriminator = undefined;
InstitutionsGetRequest.attributeTypeMap = [
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
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "offset",
        "baseName": "offset",
        "type": "number"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "InstitutionsGetRequestOptions"
    }
];
exports.InstitutionsGetRequest = InstitutionsGetRequest;
//# sourceMappingURL=institutionsGetRequest.js.map