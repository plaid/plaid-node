export declare class MFA {
    'type': string;
    'questionRounds'?: number;
    'questionsPerRound'?: number;
    'selectionRounds'?: number;
    'selectionsPerQuestion'?: number;
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
