"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
    static getAttributeTypeMap() {
        return Category.attributeTypeMap;
    }
}
Category.discriminator = undefined;
Category.attributeTypeMap = [
    {
        "name": "categoryId",
        "baseName": "category_id",
        "type": "string"
    },
    {
        "name": "group",
        "baseName": "group",
        "type": "string"
    },
    {
        "name": "hierarchy",
        "baseName": "hierarchy",
        "type": "Array<string>"
    }
];
exports.Category = Category;
//# sourceMappingURL=category.js.map