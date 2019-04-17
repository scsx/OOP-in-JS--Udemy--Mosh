const _radius = new WeakMap(); // _name means private
const _move = new WeakMap(); // weakmaps because the keys are weak

class Circle {
    constructor(radius) {

        _radius.set(this, radius); // how to access private property _radius
        // Object: this = the Circle instance, below: c
        // value: radius argument

        /* CASE 1
        _move.set(  // private method
            this,
            function() {
                console.log("move ocurred", this);
                // 'move', undefined
                // undefined because the body of a class is always 'strict mode' so it is set undefined, opposed to being set to global object
            }
        );
        */
       // CASE 2
       _move.set( 
            this,() => {
                console.log("move ocurred", this);
                // 'move', Circle {}
                // Now it's not undefined because Arrow Functions use the this value of their containing functions, int this case will be line 5 - constructor(radius) {
            }
        );
    }

    draw() { // public method

        console.log( _radius.get(this) * 9); // access private _radius from public method draw
        _move.get(this)();
        console.log("draw ocurred");
    }    
}

const c = new Circle (2);
c.draw(); // 18