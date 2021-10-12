
var person1=new Object;
var person2={};
var person3=Object.create(null);//no prototype
var person3=Object.create({});//Has prototype
var person3=Object.create(new Object);//Has prototype
var person3=Object.create(person1);
console.log(person1);
console.log(person2);
console.log(person3);