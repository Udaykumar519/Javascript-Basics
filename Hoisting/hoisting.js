// Hoisting:Scans>>sees variables>>store a as undefined>>sees funtion>>copies whole code>>comes again and executes.
console.log(b());
var a=10;
console.log(a);
function b() {
    return 1;
}