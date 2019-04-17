const _radius = Symbol();
const _draw = Symbol();
// Symbols are unique
// Symbol() === Symbol() - false

class Circle {
    constructor(radiusOutside) {
        this[_radius] = radiusOutside; // kind of private property
    }

    [_draw]() {
        console.log("draw");
    }
}

const c = new Circle (1);