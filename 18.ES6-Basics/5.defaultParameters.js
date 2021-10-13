//ES5
// function say(message){
//     message=typeof message!=='undefined'?message:"hi";
//     console.log(message);
// }
// say()

//ES6
function say(message='Hi'){
    console.log(message);
}
// say("This is message")
say()