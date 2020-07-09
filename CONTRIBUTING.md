# Contributing

Instructions for contributing to [plaid-node][1]. A node.js client library for the [Plaid API][2].

## Setup

1. From the `plaid-node` directory, create the `.env` file, which will be used to configure the Plaid client.

  ```
  cp .env.example .env
  ```

2. Go to the [Plaid Dashboard](https://dashboard.plaid.com/) and copy and paste your `client_id` and sandbox `secret`
   into `.env` using a text editor of your choice.

3. Install the necessary dependencies.

  ```
  make setup
  ```

## Running Tests

```console
$ SECRET=$PLAID_SECRET \
CLIENT_ID=$PLAID_CLIENT_ID \
make test

# Running specific tests
$ GREP='constructor|item|assets' \
SECRET=$PLAID_SECRET \
CLIENT_ID=$PLAID_CLIENT_ID \
make test

```

Code coverage information is written to `/coverage`.

[1]: https://github.com/plaid/plaid-node
[2]: https://plaid.com
