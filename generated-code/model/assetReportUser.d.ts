export declare class AssetReportUser {
    'client_user_id'?: string;
    'first_name'?: string;
    'middle_name'?: string;
    'last_name'?: string;
    'ssn'?: string;
    'phone_number'?: string;
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
