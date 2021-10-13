const odd=[1,3,5]
//inside an array...spread operator
//Spread operator unpacks elements
const combined=[2,4,6,...odd]
console.log(combined);

// inside the function as parameters...rest operator
//Rest operator pack elements into an array
// function display(a,b,c,...args){
//     console.log(a,b,args);

// }
// display(1,2,3,4,5)

function display(...args){
    console.log(args);

}
display(1,2,3,4,5)
display("uma")
display([1,2])

//constructing array literal
let initialChars=['A','B']
let chars=[...initialChars,'C','D']
console.log(chars);

//concatenate arrays
let numbers=[1,2]
let moreNumbers=[3,4]
let allNumbers=[...numbers,...moreNumbers]
console.log(allNumbers);

//copying an array
let scores=[80,70,90]
let copiedScores=[...scores]
console.log(copiedScores);

//spread operator with string
let chars1=['A',...'BCDE','F']
console.log(chars1);