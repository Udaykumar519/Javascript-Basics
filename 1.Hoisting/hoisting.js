// Hoisting:Scans>>sees variables>>store value as undefined>>sees funtion>>copies whole code>>comes again, assign values and executes functions.
console.log(b());
var a=10;
console.log(a);
function b() {
    return 1;
}