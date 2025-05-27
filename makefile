#instalar ci
install:
	@npm ci

#corriendo brain games
Brain-Games:
	@node bin/brain-games.js

publish:
	npm publish --dry-run

