/*
function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log("draw");
    }
}
*/

// ES6
class Circle { // body of the class
    constructor(radius) {
        this.radius = radius;
        this.move = function() { // this method goes to the object instance
            console.log("move");
        }
    }

    draw() { // all methods here go to the prototype (console __proto__)
        console.log("draw");
    }
} //  /body of the class

const c = new Circle(1);

typeof Circle; // "function"