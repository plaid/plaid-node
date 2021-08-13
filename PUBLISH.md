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

When generating from an OAS version, indicate what version of the schema you're using.

3. **Create a new version**

Use semantic versioning to determine whether a release should be one of the
follow version bumps:
- `patch`
- `minor`
- `major`

4. **Publish the version to npm**

Run the tests using the docker image.
- `docker build -t plaid-node .`
- `docker run -e CLIENT_ID=$(CLIENT_ID) -e SECRET=$(SECRET) plaid-node`

If the tests pass, **update the semantic version in the package.json** and update the changelog as mentioned in step 2.

Tag the repository with the current version.
- `git tag {VERSION}`

**IMPORTANT**
Finally run
- `npm --registry=https://registry.npmjs.com publish`

5. **Updating github**
Be sure to push the right tag corresponding to the npm release version to github.

```bash
git push --follow-tags
```

Also, under [github releases page](https://github.com/plaid/plaid-node/releases), draft a new release corresponding to the tag of the latest version.


[1]: https://www.npmjs.com/package/plaid
[2]: https://github.com/plaid/plaid-node/blob/master/CHANGELOG.md
