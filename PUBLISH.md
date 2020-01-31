# Publish guide

The `plaid-node` library is published via npm at [npmjs.com/plaid][1].

1. **Install dev-dependencies**

Make sure you have all of your dev dependencies installed before releasing a
new version of `plaid-node`:

```bash
make setup
```

2. **Publish and release to NPM**

Creating a new release and publishing to npm is simple and bundled into a
single make command.

Use semantic versioning to determine whether a release should be one of the
follow version bumps:
- `patch`
- `minor`
- `major`

```bash
make release-(patch|minor|major)
```

Run the following git command to ensure the new version tag is pushed to the
`plaid-node` GitHub repository:

```bash
git push --follow-tags
```

The `make release-%` command will do the following executions automatically:
- Run local tests
- Bump the `package.json` version
- Commit and tag the new version
- Push the commit to `plaid-node` GitHub repository

[1]: https://www.npmjs.com/package/plaid
