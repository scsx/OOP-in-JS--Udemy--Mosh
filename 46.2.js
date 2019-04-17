// Function declaration
function sayHello() {} // no semicolon

// Function expression
const sayGoodbye = function() {}; // semicolon


///////////////////////

const c = new Circle(); // Uncaught ReferenceError: Circle is not defined

// CLASSES AREA NEVER HOISTED

// Class declaration
class Circle {}

// Class expression
// No apparent reason to use this syntax
const Square = class {};