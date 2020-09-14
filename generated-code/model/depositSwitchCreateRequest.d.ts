export declare class DepositSwitchCreateRequest {
    'clientId': string;
    'secret': string;
    'targetAccessToken': string;
    'targetAccountId': string;
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
