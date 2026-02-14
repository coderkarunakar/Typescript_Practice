//class in typescript
//main use of class is instead of writing a object again and again we define class once and reuse again
//lets say every car has brand,speed,start

class Car{
    brand:string;
    speed:number;
    constructor(brand:string,speed:number){
        this.brand = brand;
        this.speed = speed;
    }
    start(){
        console.log(this.brand + "is starting");
    }
}

const car1 = new Car("BMW",200);
car1.start();
//output:BMW is starting
//Note:this refers to the current object
//constructor runs automatically when object is created i.e new Car("bmw",200)

//short syntax (no need to write variables seperately)
class Car1{
    constructor(public brand:string,public speed:number){}
    start(){
        console.log(this.brand);
    }
}


//Access modifiers
//keywords
//public:accesible everywhere
//private:accesible only inside class
//protected:accesible inside class + child class
class Bank{
    private balance:number = 1000;
    show(){
        console.log(this.balance);
    }
}
const b = new Bank() //object creation
b.show();  //works
// b.balance  //error because it is private


//Inheritence (reuse another class)
class Animal{
    eat(){
        console.log("Eating");
    }
}
class Dog extends Animal{
    bark(){
        console.log("barking");
    }
}

const d  = new Dog();
d.eat();
d.bark();

// Eating
// barking



//ReadOnly & optional
class User{
    readonly id:number; //readonly cannot change after assignment
    name?:string;  //optional property
    constructor(id:number){
        this.id = id;
    }
}