/* eslint-disable no-console */
import { ExecException } from 'child_process';

import { PlainObject } from './typings';

// eslint-disable-next-line @typescript-eslint/tslint/config
const { exec } = require('child_process');
// eslint-disable-next-line @typescript-eslint/tslint/config
const { readFileSync, writeFileSync } = require('fs');
const token: string = process.env['NPM_TOKEN']!;

console.log('NPM_TOKEN', !!token);

exec(
    'npm show @angular-ru/eslint-config version',
    (error: ExecException | null, stdout: string, stderr: string): void => {
        if (error) {
            console.error(`exec error: ${error}`);
            console.error(stderr);
        }

        const oldVersion: string = stdout;
        const version: number = parseInt(stdout.split('.')[0]) + 1;
        const newVersion: string = `${version}.0.0`;

        console.log(`\nPrev "@angular-ru/eslint-config" version: ${oldVersion}`);
        console.log(`New "@angular-ru/eslint-config" version: ${newVersion}\n`);

        const pkg: PlainObject = JSON.parse(readFileSync('package.json').toString());
        pkg.version = newVersion;

        // eslint-disable-next-line no-magic-numbers
        writeFileSync('package.json', JSON.stringify(pkg, null, 4));
    }
);
