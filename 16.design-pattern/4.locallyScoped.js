var Module=(function(){
    // Locally scoped object
    var myObject={};
    var privateMethod=function(){

    }
    myObject.publicMethod=function(){
        return "This is public method"

    }
    return myObject;

})()
console.log(Module.publicMethod());