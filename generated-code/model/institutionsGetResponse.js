"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstitutionsGetResponse {
    static getAttributeTypeMap() {
        return InstitutionsGetResponse.attributeTypeMap;
    }
}
InstitutionsGetResponse.discriminator = undefined;
InstitutionsGetResponse.attributeTypeMap = [
    {
        "name": "institutions",
        "baseName": "institutions",
        "type": "Array<Institution>"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.InstitutionsGetResponse = InstitutionsGetResponse;
//# sourceMappingURL=institutionsGetResponse.js.map