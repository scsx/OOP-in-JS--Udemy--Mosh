// WE WANT TO READ A PRIVATE PROP
const _radius = new WeakMap(); // private

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        // § #2 - This would be another way:
        /*
        Object.defineProperty(this, 'radius', {
            get: function() {
                return radius;
            }
        })*/
        // Call it: c.radius
        
    }

    // § #1 - This would be 1 way, define a method
    getRadius() {
        return _radius.get(this);
    }

    // § #3 - THE ES6 WAY:
    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <= 0) throw new Error('Invalid radius');
            _radius.set(this, value);
    }

}



const c = new Circle(5);
c.getRadius(); // § #1 - call it like this
c.radius; // § #2 - call it like this
// § #3 :
c.radius; // get = 5
c.radius = 10; // set = 10 
// c.radius = -1; // error, still 10



const _name = new WeakMap(); // private

class Player {
    constructor(name) {
        _name.set(this, name);
        console.log("we're in constructor");  
        this.playerNumber = "No number"
        if (typeof(c) !== 'undefined') {
            this.playerNumber = c.radius;
        }
    }
    // § #3 - THE ES6 WAY:
    get name() {
        return _name.get(this);
    }
    set name(inputName) {
        if (inputName.length <= 2) throw new Error('Name is too short');
            _name.set(this, inputName);
    }

    
}

const joe = new Player("Joe");
console.log( joe.name, joe.playerNumber );