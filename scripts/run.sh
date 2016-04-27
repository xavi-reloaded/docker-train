#!/bin/sh

docker-compose build
docker-compose run --rm service
docker-compose kill
docker-compose rm -f
