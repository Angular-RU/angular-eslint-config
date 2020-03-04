// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

const config: Any = require('./index.js');
const CLIEngine: Any = require('eslint').CLIEngine;
const cli: Any = new CLIEngine(config);

const report: Any = cli.executeOnFiles(['./test/failed/typescript.bad.ts']);

// eslint-disable-next-line no-console,no-magic-numbers
console.log(JSON.stringify(report, null, 4));
