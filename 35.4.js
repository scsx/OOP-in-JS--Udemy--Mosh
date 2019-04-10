function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicated shape');
}

// these 2 lines are now in a function, to keep making objects inheriting from Shape
// Intermediate Function Inheritance
function extendShape(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extendShape(Circle, Shape);

Circle.prototype.draw = function () {
    console.log('radius is ' + this.radius);
}

function Square(size) {
    this.size = size;
}

extendShape(Square, Shape);

const s = new Shape();
const c = new Circle(1, "red");
const sq = new Circle(4);

