//Enum
//enum is used to define the string or number a group of named constants
//syntax

enum cardinalDirections {
    North,
    South,
    East,
    West
}
let currentDirection = cardinalDirections.East
console.log(currentDirection);

//Note: in typescript we can define its index number as well

enum cardinalDirections1 {
    North =2,
    South,
    East,
    West = 7
}
let currentDirection1 = cardinalDirections1.West
console.log(currentDirection1)

//see here above we have modified its index value by defining its index start value this is the beauty of typescript in enums


//in enum we can give only string or number
enum statusCode  {
    NotFound = "karun",
    Success = 200,
    Accepted = 202,
    BadRequest = "400"
}

console.log(statusCode);


//below we are seeing nuber values like 200,202 we are getting twice because of the reverse mapping
//output
// {
//   '200': 'Success',
//   '202': 'Accepted',
//   NotFound: 'karun',
//   Success: 200,
//   Accepted: 202,
//   BadRequest: '400'
// }