import { MFA } from './mFA';
import { OverrideAccounts } from './overrideAccounts';
export declare class UserCustomPassword {
    'version'?: string | null;
    'seed'?: string;
    'override_accounts'?: Array<OverrideAccounts>;
    'mfa'?: MFA;
    'recaptcha'?: string;
    'force_error'?: string;
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
