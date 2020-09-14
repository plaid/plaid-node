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
        "name": "questionRounds",
        "baseName": "question_rounds",
        "type": "number"
    },
    {
        "name": "questionsPerRound",
        "baseName": "questions_per_round",
        "type": "number"
    },
    {
        "name": "selectionRounds",
        "baseName": "selection_rounds",
        "type": "number"
    },
    {
        "name": "selectionsPerQuestion",
        "baseName": "selections_per_question",
        "type": "number"
    }
];
exports.MFA = MFA;
//# sourceMappingURL=mFA.js.map