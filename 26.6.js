function Circle(radius) {
    // INSTANCE MEMBERS (aka own properties)
    this.radius = radius;
    // vamos passar este member para prototype member para não consumir memória
    /*
    this.draw = function() {
        console.log('draw');
    }
    */

   this.move = function() {
       this.draw(); // not present here but it's present at the prototype
        console.log('move');
    }
}

// PROTOYPE MEMBERS
Circle.prototype.draw = function() {
    //this.move(); // removed because of circular dependency
    console.log('radius is ' + this.radius);
}

// Changing default prototype member: toString
Circle.prototype.toString = function() {
    return 'Messing with toString and radius is ' + this.radius;
}

const c1 = new Circle(11);
const c2 = new Circle(12);