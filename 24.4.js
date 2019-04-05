let person = {
    name: "Mosh"
};

for (let key in person) {
    console.log(key); // name
}
console.log(Object.keys(person)); // ["name"]

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log( descriptor );
/*
configurable: true
enumerable: false // is false doesnt show on (let key in x)
value: ƒ toString()
writable: true
__proto__: Object
*/

Object.defineProperty(person, 'name', {
    writeable: false, // now person.name = 'John'; will not work
    enumerable: true, // shows on (let key in x)
    configurable: false // cant be deleted
});