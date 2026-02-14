////generics in typescript
//note:in typescript if we want to declare multiple datatype in function we need to any (where it is disabling the safety checks) and we can declare multiple types like numbers, strings, etc which will make code larger ,so instead of this we can use generics where we can use multiple types in function

//generics :same logic different types
function identifyNumber(val: number): number{
    return val;
}
function identifyString(val:string): string{
    return val;
}
//see in normal functions in order to use multiple types we need to declare it multiple times so instead of that we can use generics
//same logic, different types --> code duplication


//Generics let you write a function that works with any data type while keeping type safety.
//T = Type(can be number,string,object,array anything)


//first lets see js function 
// function identity(value){
//     return value;
// }

// identity(10);
// identity("hello");
// identity(true);
// let result = identity(10);
// result.toUpperCase();   // 💥 Runtime error (number has no toUpperCase)



//now see typescript using generics
function identity <T>(value: T):T{   //here we use 3 T's one for storing  all datatypes, one for value, one for return type
    return value;
}

let a = identity(10);
//typescript secretly converts
// let a:number = identity<number>(10);
// a.toUpperCase(); //when we try to create to upppercase now we can see compile time error (where while writing code only we can ) detect errors


let b = identity("hello");
b.toUpperCase();  // ✅ allowed

identity<number>(10);
identity<string>("hello");
identity<boolean>(false);


//generics with arrays
function getFirst<T>(arr: T[]): T | undefined{
    return arr[0];
}
getFirst([1,2,3]);
getFirst(["a","b","c"])

//generics with arrays
function getFirst1<T>(arr: T[]): T {
    return arr[0];  //this creates error because sometimes arr[0] is empty but above I promised I will return something so we are getting error so above code we defined undefined type script is thinking advance as well what if we pass getFirst1([]); returns undefined; 
    //so it is advance thinking
}
getFirst1([1,2,3]);
getFirst1(["a","b","c"])