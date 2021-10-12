// If we write try..one of them is mandatory i.e either catch or finally
try{
    // Code that may or maynot throw an error
}catch(ex){
    // Code should be executed if an error occurs
}
finally{
    //code to be executed regardless of an error or not.
}
 
// try{
//     // var output=getMessage("hello","uday")
//     console.log("This is try block");
// }catch(ex){
//     console.log(ex);
// }finally{
//     // We can write code cleanup here
//     console.log("Finally block will be executed always");
// }

//throw statement
try{
    throw "Error Occured"
}
catch(ex){
    console.log(ex);
}

//throw with error info
try{
    //Here is where we noticed duplicate employee Ids
    throw{
        number:101,
        message:"Error Occured"
    }
}catch(ex){
    console.log(ex.number,ex.message);
    // Never append strings and objects like this
    // console.log("Error:"+{name:"uma"});//don't do this.
    // console.log("Error",{name:"Uday"});//Can do this
}
