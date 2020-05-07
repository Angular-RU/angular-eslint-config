type SmallPrimes = 2 | 3 | 5 | 7 | 11;

export class A {
    public readonly hi: SmallPrimes = 2;
    public readonly hello: number = 1;
}

console.error(new A().hi);
console.error(new A().hello);

enum foo {
    SECOND = 1000,
    VALUE_1 = 3,
    VALUE_2 = 4
}

console.error(foo.SECOND);
console.error(foo.VALUE_1);
console.error(foo.VALUE_2);
