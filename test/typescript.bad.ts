export class A {
    // expect errors
    public hi: number = 2;
    // expect errors
    hello = 1;
}

// expect errors
console.log(new A().hello);
console.log(new A().hi);

// expect no errors
const helloWorld: Function = function (): string {
    return 'Hello world';
};

helloWorld();

// expect no errors
const helloWorldAsync: Function = async function (): Promise<string> {
    return 'Hello world';
};

await helloWorldAsync();

// expect no errors
function helloWorldNamed(): string {
    return 'Hello world';
}

helloWorldNamed();
