function extendShape(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
    console.log('duplicated shape');
}

function Circle() {}

extendShape(Circle, Shape);

// redefine method; has to be after extendShape(Circle, Shape)
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this); // can still call the original method!
    console.log('duplicated This circle');
}

const c = new Circle();