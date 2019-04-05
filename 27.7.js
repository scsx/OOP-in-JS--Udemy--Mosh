function Circle(radius) {
    // INSTANCE MEMBERS
    this.radius = radius;
    this.move = function () {
        this.draw();
        console.log('move');
    }
}

// PROTOYPE MEMBERS
Circle.prototype.draw = function () {
    //this.move(); // removed because of circular dependency
    console.log('radius is ' + this.radius);
}

const c1 = new Circle(11);

// return instance members
console.log(Object.keys(c1)); // ["radius", "move"]

for (let key in c1) console.log(key); // radius move draw
// returns all members, instance + prototype

console.log((c1.hasOwnProperty('radius'))); // true
console.log((c1.hasOwnProperty('draw'))); // false - is prototype

