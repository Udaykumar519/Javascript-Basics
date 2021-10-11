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
var data=["ca#","python","SQL"]
console.log(data.indexOf("c#"));

