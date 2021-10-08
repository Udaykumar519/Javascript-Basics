// undefined is special value and datatype in javascript. 
//undefined is a value which takes up memory space.
//never declare a variable as undefined
// Reason: we don't know the value is "undefined" given by JS engine(V8) or user.
// var a;
// console.log(a);
// if(a===undefined){
//     console.log("a is undefined");
// }
// else{
//     console.log("a is defined");
// }
// best example for hoisting
// Hello Sample>>undefined>>who is johngalt?
function sample(){
    console.log("Hello Sample");
}
sample();
console.log(data);
var data="Who is johngalt?";
console.log(data);