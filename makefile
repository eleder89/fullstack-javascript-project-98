#instalar ci
install:
	@npm ci

#corriendo brain games
Brain-Games:
	@node bin/brain-games.js
	@node bin/brain-even.js

publish:
	@npm publish --dry-run

lint:
	@npx eslint .
