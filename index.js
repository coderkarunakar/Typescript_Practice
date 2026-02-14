//Tuple :it defines multiple types of datatype in the array ,and length as well(depends on no of datatypes u give ) below we gave only 3 so only 3 elements are allowed if you add even one more you will get error
// let ourTuple :[number, boolean, string] ;
// ourTuple = [5, true,'karun']
// console.log(ourTuple);
//Note: in tuple you if you give number as datatype then you need to give only number in its value not other types like stirng ,bool etc
// //Note : if you add readOnly then we can't push new variables.
// let ourTuple1 :readonly[number, boolean, string] ;
// ourTuple1 = [5, true,'karun']
// ourTuple1.push('something'); //since we have used readonly .push is not allowed
// console.log(ourTuple1);
var ourTuple2;
ourTuple2 = [5, false, 'coding is good'];
var as = ourTuple2[0], hero = ourTuple2[1];
console.log(as);
console.log(hero);
