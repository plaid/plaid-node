# Contributing

Instructions for contributing to [plaid-node][1]. A node.js client library for the [Plaid API][2]. In the next version, we will move to fully generating these from the Plaide `OpenAPI` definition and suggest you open issues there.

## Setup

1. Go to the [Plaid Dashboard](https://dashboard.plaid.com/) and copy and paste your `client_id` and sandbox `secret` into your client file.

2. Install the necessary dependencies.

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
