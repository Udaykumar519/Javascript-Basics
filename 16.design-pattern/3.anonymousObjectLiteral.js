var Module=(function(){
    var privateMethod=function(){
        console.log("This is private method");
    }
    // named object literal
    // var obj={name:"uday"}
    // return obj;
    //returning anonymous object literal
    return {
        publicMethodOne:function(){
            console.log("This is public method One");

        },
        publicMethodTwo:function(){
            console.log("This is public method Two");

        },
        publicMethodThree:function(){
            console.log("This is public method Three");

        }

    }
})()
// Here, privateMethod is not available
// console.log(Module.privateMethod());
console.log(Module.publicMethodOne());
console.log(Module.publicMethodTwo());
console.log(Module.publicMethodThree());