//var is function scope..can be re-assigned and re-defined
//let..can be re-assigned but cannot re-defined and const..cannot be re-assigned and cannot be re-defined.
//let and const are block scope.

if(true){
    var x=13;
    let y=14
    console.log("inside if():"+x+" "+y);
}
var x=14;
function sample(){
    let y=14;
    var x=15;
    console.log("inside function sample():"+x+" "+y);
    for (var i=1;i<3;i++){
        console.log("I am inside first for loop",i);
    }
    console.log("I am outside first for loop",i);
    for(let i=1;i<2;i++){
        console.log("I am inside first for loop",i);
    }
    console.log("I am outside first for loop",i);
}
sample();
console.log(x);
// console.log("outside function sample():"+x+" "+y);

const superHeroes=["Hanuman","Bheem","Krishna"]
superHeroes.push("Ram");
console.log(superHeroes);

