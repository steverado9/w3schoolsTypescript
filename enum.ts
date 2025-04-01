//-Numeric Enums - Default
enum CardinalDirections {
    North,
    East,
    West,
    South
}
console.log(CardinalDirections.North);

//Numeric Enums - Initialized
enum NormalDirection {
    North = 1,
    East,
    South,
    West
}

//Numeric Enums - Fully Initialized
enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

//String Enums
enum Direction {
    North = 'North',
    East = 'East',
    South = 'South',
    West = 'west'
}
