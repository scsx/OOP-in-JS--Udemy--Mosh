// OVERRIDING METHOD FROM PARENT CLASS
class Stack {
    constructor() {    
        this.box = [];
        this.count = 0;

        this.peek = function () {
            if (this.count == 0) throw new Error('Stack is empty');
            console.log("Last item is " + this.box[this.count - 1] );
        }
        this.pop = function () {
            if (this.count == 0) throw new Error('Stack is empty');
            this.box.pop();
            this.count = this.box.length;
        }
        this.push = function (item) {
            this.box.push(item);
            this.count = this.box.length;
        }
    }  
}

const s = new Stack();

console.log( s.push('a') );
console.log( s.push('b') );
console.log( s.push('c') );
console.log( s.push('d') );
console.log( s.box );
console.log( s.pop() );
console.log( s.box );
console.log( s.peek() );
console.log( s.count );