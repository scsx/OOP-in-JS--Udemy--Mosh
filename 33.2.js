function Shape() {
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; // with this line we still have access to constructor; THESE SHOULD BE TOGETHER

Circle.prototype.draw = function () {
    console.log('radius is ' + this.radius);
}

Shape.prototype.duplicate = function () {
    console.log('duplicated circle');
}

const s = new Shape();
const c = new Circle(1);

console.log(s);
console.log(c);