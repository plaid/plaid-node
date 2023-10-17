BIN = node_modules/.bin
CURRENT_DIR:=$(shell pwd)
ESLINT = $(BIN)/eslint --config .eslintrc.json
JSHINT = $(BIN)/jshint --config .jshintrc
NODE_PACKAGE_VERSION:=$(shell cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' |  sed 's/  version: //g')
TSC = $(BIN)/tsc
TSC_CONFIG = tsconfig.json
XYZ = $(BIN)/xyz --message X.Y.Z --tag X.Y.Z --repo git@github.com:plaid/plaid-node.git

.PHONY: release-major release-minor release-patch
release-major release-minor release-patch:
	@$(XYZ) --increment $(@:release-%=%)


.PHONY: setup
setup:
	npm install

.PHONY: test
test:
	node_modules/.bin/_mocha -- --exit --timeout 60000 -r ts-node/register test/**/*.spec.ts
