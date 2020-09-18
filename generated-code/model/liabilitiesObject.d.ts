import { CreditCardLiability } from './creditCardLiability';
import { StudentLoan } from './studentLoan';
export declare class LiabilitiesObject {
    'credit'?: Array<CreditCardLiability> | null;
    'student'?: Array<StudentLoan> | null;
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
