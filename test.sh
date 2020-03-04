#!/bin/bash

mkdir -p ./dist

{ # try
    npx eslint -c index.js "**/*.bad.ts" > ./dist/eslint.bad.report.txt
} || { # catch
    npx eslint -c index.js "**/*.good.ts" > ./dist/eslint.good.report.txt
    jest --config ./jest.config.js test/test.spec.ts
}
