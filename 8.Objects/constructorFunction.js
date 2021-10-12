// start with capital Letter if its constructor function 
function Student(fname,lname){
    // var firstName="Uday";
    // var lastName="Kumar";
    this.firstName=fname;
    this.lastName=lname;
    this.getFullName=function(){
        return this.firstName+" "+this.lastName;
    }
}
// This new keyword makes this function as empty object and later adds properties if any.
var student=new Student("Uday","Kumar");
// This will create one more property with name city.
student.city="Bengaluru";
console.log(student);
console.log(student.getFullName());
