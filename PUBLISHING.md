# Publishing

The module is published to the [npm public registry][1] under the package name [plaid][2].

The publishing process is handled by [xyz][3] and is exposed as a [Makefile][4] target.

To publish:

```console
$ git checkout master
$ git pull git@github.com:plaid/plaid-node.git master
$ make release-[major|minor|patch]
```

See the [semantic versioning][5] guidelines to determine what level of release to publish.

**Note:** You MUST be a [package owner][6] to publish the module.

[1]: https://www.npmjs.com
[2]: https://www.npmjs.com/package/plaid
[3]: https://github.com/davidchambers/xyz
[4]: https://github.com/plaid/plaid-node/blob/master/Makefile
[5]: http://semver.org
[6]: https://www.npmjs.com/package/plaid/access
