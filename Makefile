JSHINT = node_modules/.bin/jshint
MOCHA = node_modules/.bin/mocha --reporter spec --timeout 5000
NPM = npm

FIND_JS_FILES = find . -name '*.js' -not -path './node_modules/*' -print0


.PHONY: lint
lint:
	$(FIND_JS_FILES) | xargs -0 $(JSHINT)
	$(FIND_JS_FILES) | GREP_COLOR=41 xargs -0 grep --color '	' >&2 ; \
		if [ $$? = 0 ] ; then echo Error: Tab character found. >&2 ; exit 1 ; fi
	$(FIND_JS_FILES) | GREP_COLOR=41 xargs -0 grep --color ' \+$$' >&2 ; \
		if [ $$? = 0 ] ; then echo Error: Trailing whitespace. >&2 ; exit 1 ; fi


.PHONY: setup
setup:
	$(NPM) install


.PHONY: test
test:
	$(MOCHA)
