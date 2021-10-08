function getName(){
    //return function(){} //It can return anything.
    //return...gives undefined in browser console.
    return "uday"+" "+"kumar";

}
console.log(getName());
function getFullName(firstName,secondName){
    //return function(){} //It can return anything.
    //return...gives undefined in browser console.
    return firstName+" "+secondName;
}
console.log(getFullName("uday","kumar"));
console.log(getFullName("kumar","uday"));
// function person1(){
//     return{
//         name:"uday"
//     }
// }
// function person2(){
//     return{
//         name:"kumar"
//     }
//     //this gives undefined bcz JS will not see what is there after return statement i.e it stops when after executing return statement. 
//     // return
//     // {
//     //     name:"kumar"
//     // }
// }
// console.log(person1());
// console.log(person2());