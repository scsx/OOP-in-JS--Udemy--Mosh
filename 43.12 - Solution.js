// ### EX PART 1

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

    //  ### EX PART 2
    this.render = function() {
        return `
            <select>${ this.items.map(item => `
                <option>${ item }</option>`).join('')}
            </select>
        `;
    }
}

HTMLSelectElement.prototype = new HTMLElement();

const e = new HTMLElement();
const s = new HTMLSelectElement(); // empty, ok
const sa = new HTMLSelectElement([1,2,3]); // ok

// ### EX PART 2

function HTMLImageElement(src) {
    this.src = src;
    this.render = function() {
        return `<img src="${ this.src }" />`;
    }
}

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = new HTMLImageElement();

const img = new HTMLImageElement('http://oi63.tinypic.com/ih2wdx.jpg'); // ok



var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

const officersIds = officers.map(officer => officer.id);
