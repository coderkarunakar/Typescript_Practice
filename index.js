//Boolean -true or false
//number - whole numbers and float values
//string - text type
//bigint -whole numbers and floating point values but allows larger negative and postive nubmers than the number type
//symbol - it is used to create globally unique identifier
//there are 2 types of variable declaration in ts
//1Explict -where we manually declare the variable data type
//Example
var firstName = "karunakar";
//in the above it is similar to Js declaration simply we just mentioned its data type as string which is explicit
// 2.Implicity
var lastName = "Chembeti";
//here we didn't mentioned its datatype by defult it will read as string this is called implicit
//here we can modify the declared variables but only limited to declared datatype here datatype is string so only string is possible but not the number
firstName = "hello";
// firstName = 3 (here i tried to declare as a number whose datatype is string which gives error)
//Note: this automatic identifing the value is knows as  "INFOR" in TypeScript
var json = JSON.parse("55"); //json.parse always return the actual datatype
console.log(typeof json); //output will be number
var json1 = JSON.parse("55"); //json.parse always return the actual datatype
console.log(typeof json1); //output will be nubmer 
