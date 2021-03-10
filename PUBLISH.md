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

3. **Create a new version**

Creating a new release and publishing to npm is simple and bundled into a
single make command. If you are publishing a beta, please skip to step 5.

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
- Publish to npm

4. **Manually publish to NPM**

If `make release-*` from above errors out with an authentication issue,
you may need to `npm login` or otherwise manually set up your `~/.npmrc` file to
make sure you have access to publish to npm.

Once you have done that, the following command will publish the latest version
(already bumped and pushed in step 3) to the NPM registry:

```bash
npm --registry=https://registry.npmjs.com publish
```

5. **Publish 9.0.0-beta.X to npm**

Pull down and build the openapi file.
- `make pull-openapi`
- `make build-openapi`

Run the tests using the docker image.
- `docker build -t plaid-node .`
- `docker run -e CLIENT_ID=$(CLIENT_ID) -e SECRET=$(SECRET) plaid-node`

If the tests pass, update the semantic version in the package.json and update the changelog as mentioned in step 2.

Tag the repository with the current version.
- `git tag 9.0.0-beta.11`

**IMPORTANT**
Finally run
- `npm --registry=https://registry.npmjs.com publish --tag beta`

6. **Updating github**
Be sure to push the right tag corresponding to the npm release version to github.

```bash
git push --follow-tags
```

Also, under [github releases page](https://github.com/plaid/plaid-node/releases), draft a new release corresponding to the tag of the latest version.


[1]: https://www.npmjs.com/package/plaid
[2]: https://github.com/plaid/plaid-node/blob/master/CHANGELOG.md
