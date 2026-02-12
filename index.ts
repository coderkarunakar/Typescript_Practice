// const names = ['sunil','kumar',1]; //basic way of defining the array

const names:String[] = ['sunil','karun'];
console.log(names);
//using some array methods
names.push('kiran')


//what if we dont want to push something into our array we can use readonly
// const rollNumber: readonly Number[] = [1,2,3];
// rollNumber.push(3);  //if you uncomment here you will see error (push doesn't exist on readonly)


//Type INference :when we give all string values inside the array and when we try to push some Number into it .it wont allow by default type inference will comes into picture in the typescript.


