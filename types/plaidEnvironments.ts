interface PlaidEnvironment {
  [env: string]: string;
}

export const PlaidEnvironments: PlaidEnvironment = {
  production: 'https://production.plaid.com',
  sandbox: 'https://sandbox.plaid.com',
  development: 'https://development.plaid.com',
};