ISTANBUL = node --harmony node_modules/.bin/istanbul
JSCS = node_modules/.bin/jscs --config .jscsrc
JSHINT = node_modules/.bin/jshint --config .jshintrc
XYZ = node_modules/.bin/xyz --message X.Y.Z --tag X.Y.Z --repo git@github.com:plaid/plaid-node.git

SRC = $(shell find . -name '*.js' -not -path './node_modules/*' -not -path './coverage/*')


.PHONY: lint
lint:
	@$(JSHINT) -- $(SRC)
	@$(JSCS) -- $(SRC)


.PHONY: setup
setup:
	npm install


.PHONY: test
test:
	$(ISTANBUL) cover node_modules/.bin/_mocha -- --timeout 10000
