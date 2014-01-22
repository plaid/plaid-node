test:
	@./node_modules/.bin/mocha \
    --reporter list \
    --timeout 5000 \
    --growl \
    --reporter spec \

.PHONY: test