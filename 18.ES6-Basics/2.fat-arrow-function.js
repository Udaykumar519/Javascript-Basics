//simple anonymous function
// var add=function(x,y){
//     return x+y;
// }
//using fat-arrow-function
// var add=(x,y)=>{
//     return x+y;
// }
// console.log(add(10,20));

// var add=(x,y)=>{
//     return x+y;
// }
// console.log(add(10,20));

//Both are equal here.
// () => expression;
// () => {return expression}

//If i have only one statement?, we need not use return keyword
var add1=(x,y)=>x+y;
console.log(add1(10,20));

// Where we can use return?
//we have to use return if we use blocks
var add2=(x,y)=>{return x+y}
console.log(add2(10,20));


//sort

// let numbers=[4,2,6];
// numbers.sort(function(a,b){
//     return b-a;
// })

//using fat-arrow-function
// let numbers=[4,2,6];
// numbers.sort((a,b)=>b-a)
// //can also written as:
// // numbers.sort((a,b)=>{return b-a})
// console.log(numbers);


//If function takes single parameter?
//Both are same
// (p)=>{statements}
// p=>{statements}

let names=['scott','Adam','Tuan','Uday']
// let lengths=names.map(function(name){
//     return name.length;
// })
let lengths=names.map(name=>name.length)
console.log(lengths);

//If function has no parameters?
//We have to use paranthesis
let logDocument=()=>console.log(window.document);
logDocument();//gives whole document

//Line Break
var multiply=(x,y)=>x*y;//This will work fine
// var multiply=(x,y)
// =>x*y;//This will give syntax error
var multiply=(x,y)=>
x*y;//This will not give syntax error
console.log(multiply(12,12));


//dealing with object literals
// let setColor=function(color){
//     return{value:color}
// }



//If you are returning an object always use **paranthesis**...
//This is the reason:var add2=(x,y)=>{return x+y}
//To differentiate between above statement which returns statement and which returns object. 
let setColor=color=>({value:color})

let backGroundColor=setColor("Green")
console.log(backGroundColor.value);

