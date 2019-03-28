function Circle(radius) {

    this.radius = radius;

    // We want to READ this from outside but NOT change it:
    let defaultLocation = {
        x: 0,
        y: 0
    };

    Object.defineProperty(
        this, // the current object
        'defaultLocation', // the member we want to access
        { 
            get: function() { // this function is called when we access circle.defaultLocation;
            // a getter is a function used to READ a property
                return defaultLocation;
            },
            // we can also SET the property
            set: function (value) {
                if ( !value.x || !value.y) {
                    throw new Error('Invalid location');
                    
                } else {
                    defaultLocation = value;
                }
            }
        });

    this.draw = function() {
        console.log('The radius is ' + this.radius + 'px.');
    }

}
const circle = new Circle(17);
circle.defaultLocation = {x: 155, y: 1552};
console.log(circle.defaultLocation);