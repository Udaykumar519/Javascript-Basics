var items1=["desktop","mobile","ipad","laptop"];
console.log(items1);
//First way --- using for loop
for(var i=0;i<items1.length;i++){
    console.log(items1[i]);
}

//Second way --- using forEach
var items2=["TV","Refrigerator","Washing Machine"];
// forEach function takes elements in items2 and pass those items into callBack function.


//forEach will not return anything, it is just used to loop through the elements in an array.
var forEachData=items2.forEach(function(item,index){
    return item;//does not return anything
})
console.log(forEachData);

//Third way --- using map

var items3=["TV","Refrigerator","Washing Machine"];


//map will return new array, if there are any modifications.
var mapData=items3.map(function(item,index){
    return item;//Returns array of data
})
console.log(mapData);

//fourth way --- using for in

var names1=["uday","scott","adam","trim"];
// for in gives index and pass indexes.
for (index in names1){
    console.log(names1[index]);
}

//fifth way --- using for of

var names2=["uday","scott","adam","trim"];

// for of gives direct values or gives objects of objects as per our example
for (index of names2){
    console.log(index);
}

var data=[{name:"uday",city:"hyd",state:"Telangana"},
    {name:"uday",city:"hyd",state:"Telangana"},
    {name:"u",city:"hd",state:"Tlangana"},
    {name:"udy",city:"hy",state:"Telngana"}]

for(output in data){
    console.log(data[output]);
}

var data1=[{name:"uday",city:"hyd",state:"Telangana"},
    {name:"uday",city:"hyd",state:"Telangana"},
    {name:"u",city:"hd",state:"Tlangana"},
    {name:"udy",city:"hy",state:"Telngana"}]
    
for(output of data){
    console.log(output);
}