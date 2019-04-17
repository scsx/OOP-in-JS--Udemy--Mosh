class Shape {

    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    //constructor() {...} // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new Circle
    // right way
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() { // all methods here will end up in prototype of Circle
        console.log('draw');
    }
}

const c = new Circle('red', 15);
console.log(c);
/*
Circle {color: "red", radius: 15}
color: "red" // INHERITED
radius: 15 // OWN PROPERTY
__proto__: Shape
*/