
// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw radius: ' + this.radius);
        }
    };
}

const circle = createCircle(2);
circle.draw();


function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw radius: ' + this.radius);
    }
}

const anotherCircle = new Circle(12);
anotherCircle.draw();

console.info(circle.constructor);
/*
Result:
ƒ Object() { [native code] }
*/
console.info(anotherCircle.constructor);
/*
Result:
ƒ Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw radius: ' + this.radius);
    }
}
*/