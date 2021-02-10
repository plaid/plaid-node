BIN = node_modules/.bin

ISTANBUL = node --harmony node_modules/.bin/istanbul
ESLINT = $(BIN)/eslint --config .eslintrc.json
JSHINT = $(BIN)/jshint --config .jshintrc
XYZ = $(BIN)/xyz --message X.Y.Z --tag X.Y.Z --repo git@github.com:plaid/plaid-node.git

TSC = $(BIN)/tsc
TSC_CONFIG = tsconfig.json

.PHONY: release-major release-minor release-patch
release-major release-minor release-patch:
	@$(XYZ) --increment $(@:release-%=%)


.PHONY: setup
setup:
	npm install

.PHONY: test
test:
	$(ISTANBUL) cover node_modules/.bin/_mocha -- --timeout 60000 -r ts-node/register test/**/*.spec.ts
