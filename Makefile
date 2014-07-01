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


.PHONY: release-patch release-minor release-major
release-patch: LEVEL = patch
release-minor: LEVEL = minor
release-major: LEVEL = major

release-patch release-minor release-major:
	@$(XYZ) --increment $(LEVEL)


.PHONY: setup
setup:
	$(NPM) install


.PHONY: test
test:
	$(MOCHA)
