BIN = node_modules/.bin
CURRENT_DIR:=$(shell pwd)
ESLINT = $(BIN)/eslint --config .eslintrc.json
ISTANBUL = node --harmony node_modules/.bin/istanbul
JSHINT = $(BIN)/jshint --config .jshintrc
OPENAPI_FILE:=2020-09-14.yml
OPENAPI_GENERATOR:=docker run --rm -v $(CURRENT_DIR):/local openapitools/openapi-generator-cli:v5.0.1 generate
OPENAPI_VERSION:=1.5.3-beta
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
	$(ISTANBUL) cover node_modules/.bin/_mocha -- --timeout 60000 -r ts-node/register test/**/*.spec.ts

.PHONY: pull-openapi
pull-openapi:
	curl https://raw.githubusercontent.com/plaid/plaid-openapi/$(OPENAPI_VERSION)/$(OPENAPI_FILE) --output $(CURRENT_DIR)/$(OPENAPI_FILE)

.PHONY: build-openapi
build-openapi:
	$(OPENAPI_GENERATOR) -g typescript-axios  \
	-i local/$(OPENAPI_FILE) \
	-o local/dist \
	-p npmName=plaid,supportsES6=true,npmVersion='$(NODE_PACKAGE_VERSION)',modelPropertyNaming=original \
	-t local/templates/typescript-axios