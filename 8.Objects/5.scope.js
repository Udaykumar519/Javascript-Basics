var person={
    firstName:"uday",
    lastName:"Kumar",
    city:"Hyd"
}
person.firstName="Scott";//can change the values who have the access to your object.
person.age=25;
delete person.age;
console.log(person);

console.clear();
//To apply restrictions on object.
//object.preventExtensions
var preventExtensions={
    name:"mahesh",
    city:"Mumbai",
    age:25
}
// We can update and delete the existing properties but cannot add new properties.
Object.preventExtensions(preventExtensions);
console.log(preventExtensions);
preventExtensions.email="mahesh@gmail.com";//Adding the property
preventExtensions.age=24;//update the property
delete preventExtensions.city;//delete the property


//To apply restrictions on object.
//object.seal
var sealObj={
    name:"mahesh",
    city:"Mumbai",
    age:25
}
// We can update the existing properties but cannot add and delete new properties.
Object.seal(sealObj);
console.log(sealObj);
sealObj.email="mahesh@gmail.com";//Adding the property
sealObj.age=24;//update the property
delete sealObj.city;//delete the property

//To apply restrictions on object.
//object.freeze
//cannot restrict inner objects
//For them we need to use freeze again explicitly
var freezeObj={
    name:"mahesh",
    city:"Mumbai",
    age:25,
    address:{
        state:"Telangana"
    }
}
//cannot update, add and delete new properties.
//cannot restrict inner objects
//For them we need to use freeze again explicitly
Object.freeze(freezeObj);
console.log(freezeObj);
freezeObj.email="mahesh@gmail.com";//Adding the property
Object.freeze(freezeObj.address)//explicit restriction of inner objects
freezeObj.address.state="Andhra"
freezeObj.age=24;//update the property
delete freezeObj.city;//delete the property

