//Boolean -true or false
//number - whole numbers and float values
//string - text type
//bigint -whole numbers and floating point values but allows larger negative and postive nubmers than the number type
//symbol - it is used to create globally unique identifier
//any - we can declare any datatype
//unknown - when ever we dont know which type of datatype we need to declare then we can use unknown

//there are 2 types of variable declaration in ts
//1Explict -where we manually declare the variable data type
//Example
let firstName : String = "karunakar"
//in the above it is similar to Js declaration simply we just mentioned its data type as string which is explicit
// 2.Implicity
let lastName = "Chembeti"
//here we didn't mentioned its datatype by defult it will read as string this is called implicit

//here we can modify the declared variables but only limited to declared datatype here datatype is string so only string is possible but not the number
firstName = "hello"

// firstName = 3 (here i tried to declare as a number whose datatype is string which gives error)


//Note: this automatic identifing the value is knows as  "INFOR" in TypeScript





var json  = JSON.parse("55");//json.parse always return the actual datatype
console.log(typeof json);//output will be number

var json1:string  = JSON.parse("55");//json.parse always return the actual datatype
console.log(typeof json1);//output will be nubmer (doubt we explicitily mentioned its types as  string but output is number becase when ever we declare type of json or json parse INFOR wont work)



//any datatype : we can declare any datatype and modify to any datatype
let middleName :any = "sohail";
middleName = 3
console.log(typeof(middleName),middleName);

//unknow - we can declare any type of datatype and when ever we dont know which type of datatype we need to use then we can use unknown

let secondName : unknown;
secondName = "karan";
secondName = 3;
secondName = false;

if (typeof  secondName == "boolean"){
    console.log(secondName)
}