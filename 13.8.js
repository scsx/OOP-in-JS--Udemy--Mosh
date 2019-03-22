function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw: ' + this.radius);
    }
}

const circle = new Circle(12);

// new property
circle.location = {x: 1};
// com bracket
circle['style'] = {color: 'red'};
console.log( circle.style.color ); // red

// delete
delete circle.style.color;
console.log(circle); // red is gone