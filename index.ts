//Object in Typescript
//javascript syntax
let car = {
    type : "toyata",
    model :"Corolla",
    year : 2009
}

//Note: using Typescript we can define what kind of type we have to declare 
const car1 :{ type: string, model: string, year:number} = {
    type: "toyata",
    model: "corolla",
    year: 2009
}

//Note: using typescript we have to define its type what we are going to define,and if we keep it empty also we will get error , and if we have defined a type like number and we gave string then also we will get error

const car2 ={type:"Toyata"}
car2.type = "Ford"
// car2.type = 3 
// //her we will get error because here we are trying to give number type insted of string since above we have defined type as a string and by default typescript memorize that it is a string.



//optional concept
const car3 : {type: string, milege?: number} = {
    type : "toyata",
}
car3.milege = 900
//Note: optional is defined as ? and if we use this ? we can define its value outside as well or insdie of the {} as we defined above but we need to follow rules like if we declare number we have to give only number not string or other datatypes



//Index signature
//Note: index signature means we need to define its key datatype like in javascript always we used to define key as a string but here we can define like number,bool ,anydatatype by defining
//Example

const nameAgeMap :{[index:number]:  number} = {} //here it is saying key,value must be an number
nameAgeMap [2] = 4689 //here [] is a bracket notation to access an object property,not array here u are just creating a  property with key,value

// nameAgeMap [2] = "karun" //here we are getting error because we tried to define value as string instead of number

//Note:mainly this index signature is used to define the key datatype 