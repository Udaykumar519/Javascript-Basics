// var output=(function(x){
//     //delete is used to delete only properties of object
//     delete x;//delete will not do anything to primitive x.
//     return x;//So, it will return 0 which is value of x. 

// })(0)
// console.log(output);//output will be 0

// var array=["a","b","c","d","e","f"]
// console.log(array);
//method 1...better approach
// array.length=0 //empties array
// console.log(array);

//Method 2
// array=[]
// console.log(array);

//Method 3...good approach
// array.splice(0,array.length)//deletes elements from index 0th index till length of an array.
// console.log(array);

//Method 4...use it cautiously(dangerous)
// while(array.length){
//     array.pop();
//     console.log(array);
// }
// console.log(array);

//Not Recommended
//Method 5...unexpected nature of forEach and map
// var data=array.map(function(){
//     array.pop()
// })
// console.log(data);

// var value=10;
// var newOutput=(function(value){
//     delete value;
//     return value;
// })(value)

// console.log(newOutput);

//Even or Odd
// EvenorOdd()
(function (array) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log("Even");
        }
        else {
            console.log("False");
        }
    }
})([3, 4, 6, 5, 7])

console.clear();

//== and ===
// console.log(1=="1");//It will not check the type,it will only check the values
// console.log(1==="1");//This checks thevalue and type of value
// console.log(1==1);
// console.log(1!=1);

// console.log(1===1);
// console.log(1!==1);

// console.log(extensionExtractor("resume.doc"))//doc
// console.log(extensionExtractor("bangalore.txt"))//txt
// console.log(extensionExtractor("note"))//false
// console.log(extensionExtractor())//NA
// function extensionExtractor(fileName){
//     if(fileName.split(".")[1]){
//         return fileName.split(".")[1]
//     }
//     else{
//         return false
//     }
// }

// function extensionExtractor(fileName){
//     if (fileName){
//         if(fileName.split(".")[1]){
//             return fileName.split(".")[1]
//         }
//         else{
//             return false
//         }
//     }
//     else{
//         return "NA"
//     }
// }

//ternary operator
// value=10?first:second

// console.log(extensionExtractor("resume.doc"))//doc
// console.log(extensionExtractor("bangalore.txt"))//txt
// console.log(extensionExtractor("note"))//false
// console.log(extensionExtractor())//NA
// function extensionExtractor(fileName){
//     return (fileName && fileName.split(".").length>1)?fileName.split(".")[1]:false
// }

arraySum([1,2,3,4,5]) // 15
arraySum([1,2,3,4,5,6,7,8,9,10]) //55
arraySum([1,2,'uma',3,4,5]) //15
arraySum([1,2,'uma',{a: 'ma'},3,4,5]) //15
arraySum([1,2,[[3],4],5]) //15
var arraySum=function(){
    
}

