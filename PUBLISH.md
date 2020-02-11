# Publish guide

The `plaid-node` library is published via npm at [npmjs.com/plaid][1].

1. **Install dev-dependencies**

Make sure you have all of your dev dependencies installed before releasing a
new version of `plaid-node`:

```bash
make setup
```


2. **Update the CHANGELOG.md**

Before publishing a new version to NPM, create and merge a Pull Request to
update the [`CHANGELOG.md`][2], with the following format:

```
## X.Y.Z
- Add support for ABC product ([#123](https://github.com/plaid/plaid-node/pull/123))
  - `/api_route`
```

3. **Publish and release to NPM**

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

The `make release-%` command will do the following executions automatically:
- Run local tests
- Bump the `package.json` version
- Commit and tag the new version
- Push the commit to `plaid-node` GitHub repository





[1]: https://www.npmjs.com/package/plaid
[2]: https://github.com/plaid/plaid-node/blob/master/CHANGELOG.md
