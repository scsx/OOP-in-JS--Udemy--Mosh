// Primitive
let x = 10;
let y = x;
x = 20;

// x    20
// y    10

// as variáveis são independentes; em primitives os valores são stored nas var e ao copiar uma para outra o valor é copiado


// Object
let a = { value: 10 };
let b = a;
x = 20;

// a, b     20

// em objects o valor não é guardado na var, é guardado em memória e o address (reference) para essa memória é que é guardado na var

// outro ex
// Primitive
let number = 10;
function increase(number) {
    number++;
}

increase(number);
console.log("res: " + number); // 10

// Object
let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}

increase(obj);
console.log("res obj: " + obj.value); // 11