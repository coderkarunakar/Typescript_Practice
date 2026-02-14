//Interface in Typescript(defines the shape of an object)it tells what properties an object must have
interface User {
    name:string;
    age:number
}
const holder: User = {
    name:'karun',
    age:2
}

//optional ? property
interface User1{
    name:string;
    age?:number
}

const u1: User1 = {name:'karun'};
u1.age = 23


//Note: interface is used only for the objects 
//for alias is used for primitive types like number ,strings, etc and objects as well

