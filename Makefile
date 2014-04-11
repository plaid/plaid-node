JSHINT = node_modules/.bin/jshint
MOCHA = node_modules/.bin/mocha --reporter spec --timeout 5000
NPM = npm
SEMVER = node_modules/.bin/semver

FIND_JS_FILES = find . -name '*.js' -not -path './node_modules/*' -print0


.PHONY: lint
lint:
	$(FIND_JS_FILES) | xargs -0 $(JSHINT)
	$(FIND_JS_FILES) | GREP_COLOR=41 xargs -0 grep --color '	' >&2 ; \
		if [ $$? = 0 ] ; then echo Error: Tab character found. >&2 ; exit 1 ; fi
	$(FIND_JS_FILES) | GREP_COLOR=41 xargs -0 grep --color ' \+$$' >&2 ; \
		if [ $$? = 0 ] ; then echo Error: Trailing whitespace. >&2 ; exit 1 ; fi


.PHONY: release-patch release-minor release-major
VERSION = $(shell node -p 'require("./package.json").version')
release-patch: NEXT_VERSION = $(shell $(SEMVER) -i patch '$(VERSION)')
release-minor: NEXT_VERSION = $(shell $(SEMVER) -i minor '$(VERSION)')
release-major: NEXT_VERSION = $(shell $(SEMVER) -i major '$(VERSION)')

release-patch release-minor release-major:
ifneq ($(shell git rev-parse --abbrev-ref HEAD),master)
	$(error Releases must be published from the master branch)
endif
	$(if $(shell $(SEMVER) -r 0.10.x -- $(shell node -v)),,$(error Releases must be published using Node 0.10.x))
	@printf 'Current version is $(VERSION). This will publish version $(NEXT_VERSION). Press [enter] to continue.' >&2
	@read
	node -e '\
		var o = require("./package.json"); o.version = "$(NEXT_VERSION)"; \
		require("fs").writeFileSync("./package.json", JSON.stringify(o, null, 2) + "\n")'
	git commit --message '$(NEXT_VERSION)' -- package.json
	git tag --annotate '$(NEXT_VERSION)' --message '$(NEXT_VERSION)'
	git push origin refs/heads/master 'refs/tags/$(NEXT_VERSION)'
	$(NPM) publish


.PHONY: setup
setup:
	$(NPM) install


.PHONY: test
test:
	$(MOCHA)
