//functions in typescript
//in typescript functions we tell the parameter,return type
function add(a, b) {
    return a + b;
}
add(2, 5);
//Rule (paramter: type): return Type
// 2.optional parameter
function user(name, age) {
    console.log(name, age);
}
user("karun"); //ok since age is option we can give or skip
user("karan", 6); //ok
//3.Default paramter
function welcome(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hi" + name);
}
welcome();
welcome("ram");
