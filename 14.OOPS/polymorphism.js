function Shape(){
    
}
Shape.prototype.draw=function(){
    return "I am generic Shape"
}

//circle
function Circle(){

}
Circle.prototype=Object.create(Shape.prototype)
Circle.prototype.draw=function(){
    return "I am Circle"
}

function Square(){

}
Square.prototype=Object.create(Shape.prototype)
Square.prototype.draw=function(){
    return "I am Square"
}

function Triangle(){

}
Triangle.prototype=new Shape()
// Triangle.prototype=Object.create(Shape.prototype)

// Triangle.prototype.draw=function(){
//     return "I am Triangle"
// }

// var shape=new Shape();
// console.log(shape.draw());

// var circle=new Circle();
// console.log(circle.draw());

// var square=new Square();
// console.log(square.draw());

// var triangle=new Triangle();
// console.log(triangle.draw());

var shapes=[new Shape(),new Circle(),new Square(),new  Triangle()];
shapes.forEach(function(shape){
    console.log(shape.draw())
})