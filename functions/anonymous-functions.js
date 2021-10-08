
// This is called as function expression
// can be invoked inside another function
// can be assigned to variable
// These are called First Class Functions

// var getName=function () {
//     return "uday kumar";
// }
// This is anonymous function(without name)
//This getName variable acts as a function now.
var getName=function(){
    return "uday kumar";
}
console.log(getName());
var getFullName=function(firstName,lastName)
{
    return firstName+" "+lastName;
}
console.log(getFullName("uday","kumar"));