//'use strict'

// (1) this USING PROTOTYPES

const Circle = function() {
    this.draw = function() { console.log(this); }
}

const c = new Circle();

// Method call - as part of an object
c.draw();
// console: The current Circle Object ## Circle {draw: ƒ} ##

const drawFunction = c.draw; // not being called, this is just a reference to this function
console.log(drawFunction);
// console: The function ## ƒ () { console.log(this); } ##

// Function call - standalone, not part of an object
drawFunction();
// console as usual, or "sloppy mode"
// The Window object ## Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …} ##
// console WITH strict mode
// undefined; Strict mode prevents accidentally change the Global Object

// (2) this USING CLASSES

class Wheel {
    spin() {
        console.log(this);
    }
}

const w = new Wheel();
const spinFunction = w.spin;
spinFunction(); // undefined
// The body of Classes always runs in strict mode!