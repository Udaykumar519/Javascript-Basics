//Example for using bind() on our function to assign this to current object instead of global(In case of inner function of ). 
// var employee={
//     id:2,
//     greet:function(){
//         console.log(this);
//         setTimeout(function(){
//             // This is global,
//             // After using bind(this), it's changed to object specific i.e employee in our example
//             console.log(this); 
//             console.log(this.id);
//         }.bind(this),1000)

//     }
// }
// employee.greet()

//For better understanding
// var obj={
//     id:10,
//     fname:"uday",
//     getId:function(){
//         console.log(this);
//         this.fname="kumar"
//         console.log(this);
//         var b=function(){
//             this.fname="umesh"
//             console.log(this);//This is global now,
//             // so we will use bind here.
//             //Now, it will be local to the object.
//         }.bind(this)
//         b()
//     }
// }
// console.log(obj.getId());

//using self variable
// var employee={
//     id:2,
//     greet:function(){
//         var self=this;
//         console.log(self);
//         setTimeout(function(){
//             // This is global,
//             // After using bind(this), it's changed to object specific i.e employee in our example
//             console.log(self); 
//             console.log(self.id);
//         },1000)

//     }
// }
// employee.greet()


//using fat-arrow-function
var employee={
    id:2,
    greet:function(){
        console.log(this);
        setTimeout(()=>console.log(this.id),1000)//This will take this of parent i.e greet function

    }
}
employee.greet()