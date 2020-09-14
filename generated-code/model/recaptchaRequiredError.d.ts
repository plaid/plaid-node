export declare class RecaptchaRequiredError {
    'errorType'?: string;
    'errorCode'?: string;
    'displayMessage'?: string;
    'httpCode'?: string;
    'linkUserExperience'?: string;
    'commonCauses'?: string;
    'troubleshootingSteps'?: string;
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
