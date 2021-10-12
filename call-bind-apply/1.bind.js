// Important

var person1={
    firstName:"uday",
    lastName:"Kumar"
}

var person2={
    firstName:"Scott",
    lastName:"John"
}

var person3={
    firstName:"Sambhav",
    lastName:"Ritu"
}

//Normally we write like this
// function getName(fname,lname){
//     this.firstName=fname;
//     this.lastName=lname;
// }
// function getName(){
//     //console.log(this);
//     return this.firstName+ " " +this.lastName;
// }
function getName(message,city){
    //console.log(this);
    return message+ " "+
           this.firstName+" "+this.lastName+"  Welcome to "+
           city;
}

//Just returns function, but not invokes.
//We can invoke the function later.
//using getNameUsingBind() explicitly
var getNameUsingBind=getName.bind(person1);
console.log(getNameUsingBind);
//explicit calling
console.log(getNameUsingBind("Hello","Bharat"));

var getNameUsingBind2=getName.bind(person1)("Hello","Bharat");
console.log(getNameUsingBind2)

//Invokes a function directly and gives values.
var getNameUsingCall=getName.call(person2,"Hey","Bengaluru");
console.log(getNameUsingCall);//Invokes a function.

//Invokes a function directly and gives values, only accepts an array of arguments instead of comma seperated values.
var getNameUsingApply=getName.apply(person3,["Hi","Sydney"]);
console.log(getNameUsingApply);//Invokes a function.
