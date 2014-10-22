JSCS = node_modules/.bin/jscs
JSHINT = node_modules/.bin/jshint
MOCHA = node_modules/.bin/mocha --reporter spec --timeout 5000
NPM = npm
XYZ = node_modules/.bin/xyz --message X.Y.Z --tag X.Y.Z --repo git@github.com:plaid/plaid-node.git

SRC = $(shell find . -name '*.js' -not -path './node_modules/*')


.PHONY: lint
lint:
	@$(JSHINT) -- $(SRC)
	@$(JSCS) -- $(SRC)


.PHONY: release-major release-minor release-patch
release-major release-minor release-patch:
	@$(XYZ) --increment $(@:release-%=%)


.PHONY: setup
setup:
	$(NPM) install


.PHONY: test
test:
	$(MOCHA)
