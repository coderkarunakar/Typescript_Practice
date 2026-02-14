//functions in typescript
//in typescript functions we tell the parameter,return type

function add(a:number,b:number):number{
    return a+b;
}

add(2,5);

//Rule (paramter: type): return Type

// 2.optional parameter
function user(name: string, age?:number){
    console.log(name,age);
}
user("karun"); //ok since age is option we can give or skip
user("karan",6); //ok

//3.Default paramter
function welcome(name:string = "Guest"){
    console.log("Hi" + name);
}
welcome();
welcome("ram");

//4.arrow function
const multiply = (a:number,b:number):number=>{
    return a*b
}