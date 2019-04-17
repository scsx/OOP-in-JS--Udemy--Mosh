// EX 1
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // Instance method
    // it's available at the Instance of a class, which is an object
    draw() {
        console.log("draw");
    }
    // Instance method
    // Not used on a particular Circle object (instance); works on the class itself
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const c1 = new Circle(1);
const c2 = Circle.parse('{ "radius": 2 }');

//c1.static(); // Uncaught TypeError: c1.static is not a function

// EX 2
// Reacreating Math Object as Class
class Math2 {
    static abs(value) {
        console.log(value * 2)
    }
}

Math2.abs(x = 1); // no error, directly avaiable without instance