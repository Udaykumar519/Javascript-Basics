// static typing: you need to explicitly mention the datatype
// dynamic typing:you don't tell the engine what type of data a variable holds, it figures about while your code is running 
//dynamic typing
var a=10;
a="uma";
a=undefined;
a=null;//datatype of null is object but null is not an object
a={};
a=[];
a=function(){};
console.log(a,typeof a);