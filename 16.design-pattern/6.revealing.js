var Module=(function(){
    // All three are public here
    var privateMethod=function(){

    }
    var someMethod=function(){
        return "I am SomeMethod"

    }
    var anotherMethod=function(){
        return "I am SomeMethod"

    }
    // We are exposing this to public
    return{
        some:someMethod,
        another:anotherMethod
    }
})()
console.log(Module.some());
console.log(Module.another());