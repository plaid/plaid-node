import { NumbersACH } from './numbersACH';
import { NumbersBACS } from './numbersBACS';
import { NumbersEFT } from './numbersEFT';
import { NumbersInternational } from './numbersInternational';
export declare class ProcessorAuthGetResponseNumbers {
    'ach'?: Array<NumbersACH>;
    'eft'?: Array<NumbersEFT>;
    'international'?: Array<NumbersInternational>;
    'bacs'?: Array<NumbersBACS>;
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
