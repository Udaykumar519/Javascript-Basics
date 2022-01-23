// Immediately invoked function
// var sample=(function(message){
//     return message;
// })("This is now IIF")
//This sample contains result after function execution
// console.log(sample);
// Whatever we are writing it will be private, it don't disturb global values or global code.
(function(message){
    console.log(message);
})("This is now IIF")
// alert("Hello");
// prompt("Enter your name");
// This is invalid
// console.log(var foo=12);
// This is valid
console.log(10>12);

