function Shape() {
}

function Circle(radius) {
    this.radius = radius;
}

// This is what Circle originally was, inherits from Object
//Circle.prototype = Object.create(Object.prototype);

// This way inherits from Shape object
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function () {
    console.log('radius is ' + this.radius);
}

Shape.prototype.duplicate = function () {
    console.log('duplicated circle');
}

const s = new Shape();
const c = new Circle(1); // This is the same as: new Circle.prototype.constructor(1);

console.log(s);
console.log(c);