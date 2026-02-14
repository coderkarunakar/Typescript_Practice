//Type alias, and type interface
type UserName = string;
let name: UserName = "Karun";
//it has 3 parts here name is the variable ,userName is the type alias,  karun is the value,here username defines which type should we declare and name is the actual storage holding value




//object
type User = {
    id:number;
    name:string,
    isAdmin:boolean
}
const holder: User = {id:1,name:'karun',isAdmin:true};


//funtion
type Add = (a: number, b:number) =>number;
const sum :Add = (a,b) => a+b

