//Restaurant example is well understood
console.clear();
console.log("one");
// JS will execute this setTimeout() seperately after completion of other code execution.
setTimeout(function(){
    console.log("two")

},3000)
console.log("three");
