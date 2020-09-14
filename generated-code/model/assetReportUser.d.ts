export declare class AssetReportUser {
    'clientUserId'?: string;
    'firstName'?: string;
    'middleName'?: string;
    'lastName'?: string;
    'ssn'?: string;
    'phoneNumber'?: string;
    'email'?: string;
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
