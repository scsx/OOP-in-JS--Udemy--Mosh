function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw: ' + this.radius);
    }
}
const circle = new Circle(12);


for ( let key in circle) {
    console.log(key);
}
// radius, draw  ==  all members, just keys

console.log('____________________');

for ( let key in circle) {
    console.log(key, circle[key]); // bracket notation, dot doesnt work
}
/*radius 12,
draw ƒ () {
    console.log('draw: ' + this.radius);
}
members and values
*/

console.log('____________________');

for ( let key in circle) {
    if (typeof circle[key] !== 'function') // ou number, string, boolean...
    console.log(key, circle[key]);
}
// radius 12  ==  just properties, no methods

console.log('____________________');

// OUTRO MÉTODO
const keys = Object.keys(circle);
console.log(keys); // (2) ["radius", "draw"] // não separa methods

// ver se propriedade existe
if ('radius' in circle)
console.log('exists');