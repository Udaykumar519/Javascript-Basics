var Module=(function(){
    var privateMethod=function(message){
        return message
    }
    var publicMethod=function(text){
        return privateMethod(text)
    }
    // We are exposing this to public
    return{
        publicMethod:publicMethod,
    }
})()
console.log(Module.publicMethod("Hai Uday"));