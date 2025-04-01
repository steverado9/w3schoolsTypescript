//Aliases
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = 'Toyota'
const carModel: CarModel = 'Corolla'
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

//Interfaces
interface Rectangle {
    height: number,
    width: number
};

const rectangle: Rectangle = {
    height: 20,
    width: 10
}
//Extending an interface
interface Square {
    height: number,
    width: number
}

interface ColoredSquare extends Square {
    color: string
}

const coloredSquare: ColoredSquare = {
    height: 20,
    width: 10,
    color: 'red'
}