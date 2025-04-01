function getTime(): number { // the `: number` here specifies that this function returns a number
    return new Date().getTime()
}

function printHello(): void { //This function does not return anything because of the void statement.
    console.log('Hello!');
}

function multiply(a: number, b: number) {
    return a * b;
}
multiply(7, 9);

//optional parameter(?)
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0)
}
add(2, 25)

//default values
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
pow(10)

//named parameter
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

//rest parameter
function sum(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
sum(10, 10, 10, 10, 10, 10)

//Type Alias
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10));