// Limits the number of instances to be created
// Only single instance is created
//At different instances it will share the copy of the instances.
var Student=(function(){
    //private variable
    var instance=null;
    //private method...will create instance
    var createInstance=function(){
        var obj=Object.create(null);
        console.log(" Student Object has been Created");
        return obj;
    }
    // This is public
    // createInstance=function(){
    //     var obj=Object.create(null);
    //     console.log(" Student Object has been Created");
    //     return obj;

    // }
    //private method...get that instance
    var getInstance=function(){
        //If this if condition is not there, it will create many copies of same instance
        //if this if is there, only one copy is created and it is shared among others
        //While sharing instance, it will have different references so that they will not be any conflicts or problems.
        if(!instance){
            instance=createInstance();
        }
        return instance;
    }
    // return {getInstance:getInstance}
    return {
        get:getInstance,create:createInstance
    }
    

})()
//outside world will not know the name of the function getInstance()
console.log(Student.get());
console.log(Student.get());
console.log(Student.get());
console.log(Student.get());














// console.log(singleton)
// function Student(){
//     console.log("new instance created:");
// }
// This will take more space(more copies) in the memory for each instance creation
// var student1=new Student()
// console.log(student1);
// var student2=new Student()
// console.log(student2);
// var student3=new Student()
// console.log(student3);
