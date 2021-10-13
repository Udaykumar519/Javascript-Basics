let simple=`This is template literal`
console.log(simple);

let str=`Template literal in ES6`
console.log(str);
console.log(str.length);
console.log(typeof str);

//Using single quote
let anotherString=`There's another string`
console.log(anotherString);

//string contains backtick

let strWithBackTick=`Template literals uses backtick \` instead of quotes`
console.log(strWithBackTick);

//Multilione strings(prior to ES6)
var msg=`multiple \n
         string`
console.log(msg);

// It respects Whitespaces also

let para=
        `This text can
        span 
        multiple lines`
console.log(para);

//variable and expression substitutions
let firstName="scott",lastName="Desatnick"
let greeting=`Hi ${firstName} ${lastName}`
console.log(greeting);