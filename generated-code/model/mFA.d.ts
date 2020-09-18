export declare class MFA {
    'type': string;
    'question_rounds'?: number;
    'questions_per_round'?: number;
    'selection_rounds'?: number;
    'selections_per_question'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
