const car: { type: string, model: string, year: number } = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2009
};

//TypeScript can infer the types of properties based on their values.
const person = {
    name: 'stephen'
};
person.name = 'isaac';
person.name = 60;

//optional property(?)
const vehicle: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  vehicle.mileage = 2000;
