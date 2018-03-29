# vars
prod-dockerfile = -f docker-compose.yml

# Production env

.PHONY: build-prod
build-prod:
	docker-compose $(prod-dockerfile) build

.PHONY: prod
prod:
	docker-compose down
	docker-compose $(prod-dockerfile) up -d

# helpers

.PHONY: install-backend-dependencies
install-backend-dependencies:
	docker-compose run --rm --no-deps backend npm install
