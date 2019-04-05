let x = {};
let y = {};

// ambos têm como "base object" __proto__

console.log(
    Object.getPrototypeOf(x) === Object.getPrototypeOf(y)
);

// true

// é o mesmo que x.__proto__ === y.__proto__  mas __proto__ está deprecated