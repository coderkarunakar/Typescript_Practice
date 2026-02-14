//Enum
//enum is used to define the string or number a group of named constants
//syntax
var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections[cardinalDirections["North"] = 0] = "North";
    cardinalDirections[cardinalDirections["South"] = 1] = "South";
    cardinalDirections[cardinalDirections["East"] = 2] = "East";
    cardinalDirections[cardinalDirections["West"] = 3] = "West";
})(cardinalDirections || (cardinalDirections = {}));
var currentDirection = cardinalDirections.East;
console.log(currentDirection);
//Note: in typescript we can define its index number as well
var cardinalDirections1;
(function (cardinalDirections1) {
    cardinalDirections1[cardinalDirections1["North"] = 2] = "North";
    cardinalDirections1[cardinalDirections1["South"] = 3] = "South";
    cardinalDirections1[cardinalDirections1["East"] = 4] = "East";
    cardinalDirections1[cardinalDirections1["West"] = 7] = "West";
})(cardinalDirections1 || (cardinalDirections1 = {}));
var currentDirection1 = cardinalDirections1.West;
console.log(currentDirection1);
//see here above we have modified its index value by defining its index start value this is the beauty of typescript in enums
//in enum we can give only string or number
var statusCode;
(function (statusCode) {
    statusCode["NotFound"] = "karun";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["Accepted"] = 202] = "Accepted";
    statusCode["BadRequest"] = "400";
})(statusCode || (statusCode = {}));
console.log(statusCode);
