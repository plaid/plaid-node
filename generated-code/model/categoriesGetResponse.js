"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoriesGetResponse {
    static getAttributeTypeMap() {
        return CategoriesGetResponse.attributeTypeMap;
    }
}
CategoriesGetResponse.discriminator = undefined;
CategoriesGetResponse.attributeTypeMap = [
    {
        "name": "categories",
        "baseName": "categories",
        "type": "Array<Category>"
    }
];
exports.CategoriesGetResponse = CategoriesGetResponse;
//# sourceMappingURL=categoriesGetResponse.js.map