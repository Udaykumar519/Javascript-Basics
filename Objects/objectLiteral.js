// var person={}
// person.firstName="Uday"
// person.lastName="Polu";

// // These three are different properties,as JS is case sensitive .
// //Always prefer dot notation instead of square brackets.
// // person["firstName"]="Uday";
// // person["FirstName"]="Uday";
// // person["firstname"]="Uday";

// console.log(person);
// console.log(person.fullName);
var student={
    firstName:"uday",
    middleName:"kumar",
    lastName: "polu",
    address:{
        street:"SoniaGandhiNagar",
        city:"Nellore",
        state:"AP"
    },
    getFullName:function(){
        // console.log(this);
        return this.firstName+ " "+this.lastName;
    }
}
// console.log(student);
console.log(student.getFullName());