// function b(){
//     var x;//private to this function
// }

// function a(){
//     var x=2;//private to this function
//     b()
// }
// var x=1;
// a();
// console.log(x);
// function b(){
//     var myvar;
//     console.log(myvar);
// }
// function a(){
//     var myvar=2;
//     console.log(myvar);
//     b();
// }
// var myvar=1;
// console.log(myvar);
// a();
// console.log(myvar);
// function b(){
//     console.log("inside b():",myvar);
// }
// function a(){
//     var myvar=2;
//     console.log("inside a():",myvar);
//     b();
// }
// var myvar=1;
// console.log("outside:", myvar)
// a();
function a(){
    function b(){
        console.log(myvar);
    }
    b();
}
var myvar=1;
a();