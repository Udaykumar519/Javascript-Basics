var people=new Array("uday","uma",1,2,3);
console.log(people);
console.log(people.length);
console.log(people[1]);

var students=new Array(3);//It will not create any memory, we are just suggesting
// We can dynamically add any elements into an array in JS.
students[0]="scott";
students[1]="Anderson";
students[2]="Adam";
//This is possible even though the length of an array is three.
students[3]="Ansole";
console.log(students);
//This will return undefined, doesn't throw any error.
console.log(students[4]);
