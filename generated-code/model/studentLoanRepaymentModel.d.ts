export declare class StudentLoanRepaymentModel {
    'type': string;
    'non_repayment_months': number;
    'repayment_months': number;
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
