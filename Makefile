.PHONY: build

help:
	@echo "Usage: make <command>"
	@echo "  serve  Runs a development webserver on port 1313"
	@echo "  build   Build the site with minification"
	@echo "  build-staging   Build the site with *staging* configuration"

serve:
	hugo serve --disableFastRender

build:
	hugo --minify --environment production

build-staging:
	hugo --environment staging --minify

all-staging:
	hugo --environment staging --minify
	./deploy-staging.sh

all:
	make build
	./deploy.sh
