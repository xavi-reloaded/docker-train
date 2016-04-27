#!/bin/sh

node_modules/mocha/bin/_mocha -r should -R nyan test/**/**/**/*.spec.js -g '#Integration'
