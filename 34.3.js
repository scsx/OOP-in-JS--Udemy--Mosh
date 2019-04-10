function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicated circle');
}

function Circle(radius, color) {
    // Here we can't use color. Solution:
    Shape.call(this, color); // Super constructor
    // Mozilla: With the call() method, you can write a method that can be used on different objects.
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('radius is ' + this.radius);
}

const s = new Shape();
const c = new Circle(1, "red");

console.log(s);
console.log(c);


// Other example

var person = {
  fullName: function(city, country) {
    console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway"); // John Doe,Oslo,Norway