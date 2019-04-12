// PARENT
function HTMLElement() {
    this.click = function() {
        console.log("clicked");
    }
}

HTMLElement.prototype.focus = function() {
    console.log("focused");
}

// CHILD
function HTMLSelectElement( items = [] ) { // items = [] is ES6

    this.items = items;
    
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

HTMLSelectElement.prototype = new HTMLElement();

const e = new HTMLElement();
const s = new HTMLSelectElement(); // empty, ok
const sa = new HTMLSelectElement([1,2,3]); // ok