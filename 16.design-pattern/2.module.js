// Used to create public, private properties.
var Module=(function(){
    var privateMethod=function(){
        console.log("This is private method");
    }
    return {
        publicMethod:function(){
            console.log("public Method");
        }
    }
})()
console.log(Module.publicMethod());