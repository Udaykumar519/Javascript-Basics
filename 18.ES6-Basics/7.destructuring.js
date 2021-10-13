//Array Destructuring

let arr=['Scott','Adam','Tuan']
let [first,second,third]=arr;
console.log(first);
console.log(second);
console.log(third);


//Split() seperates and stored as an array
let [firstName,lastName]='John Galt'.split(" ");
console.log(firstName);
console.log(lastName);

let [fName,lName,title]=["uma","mahesh","Meka"]
// This also works fine
// let [fName, ,title]=["uma","mahesh","Meka"]

console.log(title);

let user={
    name: "john",
    age:30
}
for(let [key,value] of Object.entries(user)){
    console.log(`${key}:${value}`);
}

let options={
    Header:"Menu",
    width:100,
    height:200
}
//no need to use dot operator all the time.

let {Header,width,height}=options
console.log(Header,width,height);