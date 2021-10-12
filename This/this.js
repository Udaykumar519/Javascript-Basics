console.log(this);//Here, this is pointing to global object i.e browser window

//Function is outside, so this is global reference here.
function sample(){
    console.log(this);//Here, also this is global.
}

sample()//because sample calling is global, this is also global
var obj={
    name:"uma",
    getName:function(){
        console.log(this);//This is global obj ie local reference
        function b(){
            console.log(this);//This is global(global reference), to fix this problem we use self
        }
        b();
    }
}
obj.getName();//If we call function on object this is obj.

// fixing global reference problem in a function inside a function
var obj1={
    name:"uma",
    getName:function(){
        var self=this
        console.log(self);
        function b(name){
            self.name=name
            console.log(self);//This is local regerence
        }
        b("update again");
    }
}
obj1.getName();