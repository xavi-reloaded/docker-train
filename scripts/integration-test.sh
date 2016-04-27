#!/bin/sh

docker-compose build
docker-compose run --rm service /app/scripts/utils/integration-test-runner.sh
docker-compose kill
docker-compose rm -f
