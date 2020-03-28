#!/bin/bash

echo "Commit message: $TRAVIS_COMMIT_MESSAGE";

if [[ $TRAVIS_COMMIT_MESSAGE == *"only dependencies"* ||  $TRAVIS_COMMIT_MESSAGE == *"trigger publish"* ]]; then
  echo "Publish...."
  ts-node tools/publisher.ts --project tools/tsconfig.tools.json
  npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"
  npm publish
fi;
