function greet(message){
    return function(name){
        console.log(message+" "+name);
    }
}

var wish=greet("Hello");
console.log(wish);//returns inner function
var sayHello=wish("uday");
var sayHello1=wish("kumar");

//simple example

function one(){
    var x=3;
    function two(){
        console.log(x);
    }
    two();
}
one();