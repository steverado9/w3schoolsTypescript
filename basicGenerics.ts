function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}

console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

//classes
class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) { }

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

const value = new NamedValue<number>('myNumber');

value.setValue(10);

console.log(value.toString()); // myNumber: 10

//Type Aliases
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };