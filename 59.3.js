// DEFAULT WAY:
//import { Circle } from './59.3-module'; // no extension; dynamic paths not possible

// WITHOUT PROPER ENV
//   this { Circle } will cause an error:
//   Uncaught SyntaxError: Unexpected token {
//   dirty fix: on html call script like this:
//   <script type="module" src="59.3.js"></script>
//   put extensions .js here:
import { Circle } from './59.3-module.js';


const c = new Circle(10);
c.draw(); // Circle with radius 10