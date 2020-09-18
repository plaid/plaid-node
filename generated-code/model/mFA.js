"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MFA {
    static getAttributeTypeMap() {
        return MFA.attributeTypeMap;
    }
}
MFA.discriminator = undefined;
MFA.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "question_rounds",
        "baseName": "question_rounds",
        "type": "number"
    },
    {
        "name": "questions_per_round",
        "baseName": "questions_per_round",
        "type": "number"
    },
    {
        "name": "selection_rounds",
        "baseName": "selection_rounds",
        "type": "number"
    },
    {
        "name": "selections_per_question",
        "baseName": "selections_per_question",
        "type": "number"
    }
];
exports.MFA = MFA;
//# sourceMappingURL=mFA.js.map