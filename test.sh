#!/bin/bash

mkdir -p ./dist

{ # try
    npx eslint -c eslintrc.js "**/*.bad.ts" > ./dist/eslint.bad.report.txt
} || { # catch
    npx eslint -c eslintrc.js "**/*.good.ts" > ./dist/eslint.good.report.txt
    jest --config ./jest.config.js test/test.spec.ts
}
