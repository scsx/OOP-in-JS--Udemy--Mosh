/*
Este exemplo vem mostrar composition vs inheritance;
Em vez de usar sempre inheritance:

                Animal
                  |
        Mammal          Fish
       |     |           |
  Person    Dog       Goldfish
(3 niveis, demasiado)
  Usa-se composition, neste caso um nivel de caracteristicas e outro de individuos:
*/

// MIXIN
function mixin(target, ...sources) {
    // ^ ...sources is a REST OPERATOR (n params as array)
    Object.assign(target, ...sources);
    // ^ the syntax is the same but  its a spread operator (array to objects) (assign cant receive array)
}
const canEat = {
    hunger: 100,
    eat: function() {
        this.hunger--;
        console.log("eating");
    }
};
const canWalk = {
    walk: function() {
        console.log("walking");
    }
};
const canSwim = {
    swim: function() {
        console.log("swimming");
    }
};


function Person() {
    this.eyes = "blue"; // extra
}

// normal
// Object.assign(Person.prototype, canEat, canWalk);
// with mixin
mixin(Person.prototype, canEat, canWalk);

const dave = new Person();
console.log(dave);

function Goldfish() {}

// normal
// Object.assign(Goldfish.prototype, canEat, canSwim);
// with mixin
mixin(Goldfish.prototype, canEat, canSwim);

const dory = new Goldfish();


// Playground
dory.maxFood = 5;
for ( i=0; i < dory.maxFood; i++ ) {
    dory.eat();
    console.log(dory.hunger - i * 20);
}
