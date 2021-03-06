// Everything here is considered private except when using 'export'

const _radius = new WeakMap(); // not exported

export class Circle {
    constructor(radius) {
        _radius.set(this, radius);    
    }
    draw() {
        console.log('Circle with radius ' + _radius.get(this) );
    }
}