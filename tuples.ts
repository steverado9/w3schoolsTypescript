let ourTuples: [number, boolean, string];

ourTuples = [1, true, 'stephen'];

// We have no type safety in our tuple for indexes 3+
ourTuples.push('Something new and wrong');

console.log(ourTuples);

//Readonly Tuple
let ourReadonlyTuples: readonly [number, boolean, string];

ourReadonlyTuples = [2, false, 'isaac'];

// ourReadonlyTuples.push('name';)

//Named Tuples
const graph: [x: number, y: number] = [55.2, 41.3];

//Since tuples are arrays we can also destructure them.

