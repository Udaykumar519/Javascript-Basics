// //ES5
// function Student(){

// }

//ES6
class Student{
    //ES6 uses constructor to create object and initialize properties
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFullName(){
        return this.firstName +" "+this.lastName; 
    }

}
let student=new Student("uday","kumar")
console.log(student);
console.log(student.firstName);
console.log(student.lastName);
console.log(student.getFullName());

class Vehicle{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }

}
class Car extends Vehicle{
    constructor(name,type){
        super(name,type);//must call constructor of super class, if we have constructor in child class.
    }

}

let car=new Car("tesla","car")
console.log(car);
