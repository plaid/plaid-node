BIN = node_modules/.bin

ISTANBUL = node --harmony node_modules/.bin/istanbul
JSCS = $(BIN)/jscs --config .jscsrc
JSHINT = $(BIN)/jshint --config .jshintrc
XYZ = $(BIN)/xyz --message X.Y.Z --tag X.Y.Z --repo git@github.com:plaid/plaid-node.git

SRC = $(shell find . -name '*.js' -not -path './node_modules/*' -not -path './coverage/*')
TSC = $(BIN)/tsc
TSC_CONFIG = tsconfig.json

.PHONY: lint
lint:
	@$(JSHINT) -- $(SRC)
	@$(JSCS) -- $(SRC)


.PHONY: release-major release-minor release-patch
release-major release-minor release-patch:
	@$(XYZ) --increment $(@:release-%=%)


.PHONY: setup
setup:
	npm install


.PHONY: test
test: build-ts
	$(ISTANBUL) cover node_modules/.bin/_mocha -- --timeout 60000


# verify that tsc can build our definition file
.PHONY: build-ts
build-ts: index.d.ts
	@$(TSC) -p $(TSC_CONFIG)
