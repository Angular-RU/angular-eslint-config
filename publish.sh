ts-node tools/publisher.ts --project tools/tsconfig.tools.json
npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"
npm publish
