//casting with as
const cast: unknown = 'hello';
console.log((cast as string).length);

//casting with <>
const cast1: unknown = 'name';
console.log((<string>cast1).length);

//force casting
let v = 'hello';
console.log(((v as unknown) as number).length);


