function Circle(radius) {

    this.radius = radius;

    this.defaultLocation = {
        x: 0,
        y: 0
    };

    this.computeOptimumLocation = function() { // This is accessible outside and shouldn't
        console.log("hey ");
    }

    this.draw = function() {
        this.computeOptimumLocation();
        console.log('The radius is ' + this.radius + 'px.');
    }

}
const circle = new Circle(15);

// ABTRACTION IS:
// Hide the deatils / Expose the essentials
// ex: DVD player (few butttons / complexity closed inside)
