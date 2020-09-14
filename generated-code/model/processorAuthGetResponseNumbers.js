"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessorAuthGetResponseNumbers {
    static getAttributeTypeMap() {
        return ProcessorAuthGetResponseNumbers.attributeTypeMap;
    }
}
ProcessorAuthGetResponseNumbers.discriminator = undefined;
ProcessorAuthGetResponseNumbers.attributeTypeMap = [
    {
        "name": "ach",
        "baseName": "ach",
        "type": "Array<NumbersACH>"
    },
    {
        "name": "eft",
        "baseName": "eft",
        "type": "Array<NumbersEFT>"
    },
    {
        "name": "international",
        "baseName": "international",
        "type": "Array<NumbersInternational>"
    },
    {
        "name": "bacs",
        "baseName": "bacs",
        "type": "Array<NumbersBACS>"
    }
];
exports.ProcessorAuthGetResponseNumbers = ProcessorAuthGetResponseNumbers;
//# sourceMappingURL=processorAuthGetResponseNumbers.js.map