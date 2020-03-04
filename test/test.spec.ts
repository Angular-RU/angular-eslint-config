/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyType = any;

const fs: AnyType = require('fs');
describe('[TEST]: Eslint', (): void => {
    function ensureDistFile(type: string): string {
        return fs.readFileSync(`./dist/eslint.${type}.report.txt`).toString();
    }

    it('check failed files', (): void => {
        const bad: string = ensureDistFile('bad');
        expect(bad.includes("expected member-variable-declaration: 'hello' to have a typedef")).toEqual(true);
        expect(bad.includes('Missing accessibility modifier on class property hello')).toEqual(true);
        expect(bad.includes('Unexpected console statement')).toEqual(true);
    });

    it('check success files', (): void => {
        const good: string = ensureDistFile('good');
        expect(good.length).toEqual(0);
    });
});
