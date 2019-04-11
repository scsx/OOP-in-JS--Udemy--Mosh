//PARENT
function HTMLElement() {
    this.click = function() {
        console.log("clicked");
    }
}

HTMLElement.prototype.focus = function() {
    console.log("focused");
}

// CHILD
function HTMLSelectElement(click, args) {

    HTMLElement.call(this, click);

    console.log(args);
    this.items = [];
    if (args && args.length > 0) {
        this.items = [args];
    }
    
    
    this.addItem = function() {
        
    }
    this.removeItem = function() {
    }
}

HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const e = new HTMLElement();
const s = new HTMLSelectElement();
const sa = new HTMLSelectElement([1,2,3]);

console.log(s);
console.log(sa);