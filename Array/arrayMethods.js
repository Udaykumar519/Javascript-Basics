//Array can take any type of values

var fruits=["Orange","Apple","Banana","Guava"];

var vegetables=["Potato","Tomato","Brinjal",
"Drumstick"];


//Concat method
var mix=fruits.concat(vegetables);
console.log(mix);
var mix1=vegetables.concat(fruits);
console.log(mix1);
var movies=["Avatar","Good Will Hunting","Vanilla Sky","Mars"];
console.log(movies);


//convert array to string...join method
console.log(movies.join());
moviesString=movies.join("@")
console.log(moviesString,typeof moviesString);


// Split whenever you see ,split method
console.log(moviesString.split(","));

// indexOf method
var data=["C#","python","SQL"]
console.log(data.indexOf("c#".toUpperCase()));

var name3=["uma"]
//We should give exact string in indexOf() method.
console.log(name3.indexOf("m"));

var array=[1,2,3]
var obj={}
console.log(typeof array, typeof obj);
// No such 'array' in JS
if(typeof array=='array'){
    array[3]="somedata1"
    console.log("Uday");
}
if(Array.isArray(array)){
    array[3]="somedata"
}
console.log(typeof array, Array.isArray(array));
console.log(array);

// push,pop,unshift,shift
var arrayList=[1,2,3,4]
arrayList.push(5);//appends new element in the end of an array
console.log(arrayList);

arrayList.unshift(0);//adds new element in the beginning of an array.
console.log(arrayList);



arrayList.pop()//deletes elements from the end of an array
console.log(arrayList);

arrayList.shift();//deletes elements from the beginning of an array
console.log(arrayList);

var dataList=[]
dataList.push({firstName:"uday",lastName:"Polu"})
console.log(dataList);
