export declare class RecaptchaRequiredError {
    'error_type'?: string;
    'error_code'?: string;
    'display_message'?: string;
    'http_code'?: string;
    'link_user_experience'?: string;
    'common_causes'?: string;
    'troubleshooting_steps'?: string;
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
