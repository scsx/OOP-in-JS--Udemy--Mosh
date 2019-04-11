function extendShape(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
    console.log('duplicated shape');
}

function Circle() {} // derivative from Shape

extendShape(Circle, Shape);

Circle.prototype.duplicate = function () {
    console.log('duplicate circle');
}

function Square() {} // derivative from Shape

extendShape(Square, Shape);

Square.prototype.duplicate = function () {
    console.log('duplicate Square');
}

const shapes = [
    new Circle(),
    new Square
];

for (let shape of shapes) {
    shape.duplicate(); // this simple solution is polymorphism
}

// outra maneira de iterar
shapes.map(shape => shape.duplicate());