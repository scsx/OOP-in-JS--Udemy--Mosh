
// Factory function
function createCircle(radius) {
    return {
        //radius: radius,
        // é o mesmo que:
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(2);
//circle.draw();

// Constructor
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw: ' + this.radius);
        console.log(this);
    }
}

const anotherCircle = new Circle(12);
anotherCircle.draw();