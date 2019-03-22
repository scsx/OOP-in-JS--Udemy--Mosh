function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw radius: ' + this.radius);
    }
}

const anotherCircle = new Circle(12);

// 1
console.log(Circle.constructor);
// result: ƒ Function() { [native code] }

// 2 Proof that functions are objects
const newCircleFunc = new Function ('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw radius: ' + this.radius);
}
`
);

const anotherCircleFromFunc = new newCircleFunc(15);
console.log(anotherCircleFromFunc);
/*
Result:
{radius: 15, draw: ƒ}
draw: ƒ ()
radius: 15
__proto__: Object
*/

// 3 Outros métodos
// const anotherCircleFromFunc = new newCircleFunc(15) é igual a:
Circle.call({}, 15);
Circle.apply({}, [15]); // apply difere por aceitar um array, usa-se quando já se tiver um array algures pronto a usar

