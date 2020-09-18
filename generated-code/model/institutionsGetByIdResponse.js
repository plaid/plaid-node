"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstitutionsGetByIdResponse {
    static getAttributeTypeMap() {
        return InstitutionsGetByIdResponse.attributeTypeMap;
    }
}
InstitutionsGetByIdResponse.discriminator = undefined;
InstitutionsGetByIdResponse.attributeTypeMap = [
    {
        "name": "institution",
        "baseName": "institution",
        "type": "Institution"
    },
    {
        "name": "request_id",
        "baseName": "request_id",
        "type": "string"
    }
];
exports.InstitutionsGetByIdResponse = InstitutionsGetByIdResponse;
//# sourceMappingURL=institutionsGetByIdResponse.js.map