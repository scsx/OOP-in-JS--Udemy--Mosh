/*

INSTALLED:

npm init --yes // start node project
npm i babel-cli@6.26.0 // CLI
npm i babel-cli@6.26.0 // Babel core
npm i babel-preset-env@1.6.1 // Pack of plugins for each ES6 feature.
Ex: const, let, arrow function each has a plugin. This installs all but we can micro-manage.
These 3 dependencies should be installed with --save-dev at the end, so ther're only for dev and not production

USAGE 

On package.json:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},

replace with 

"scripts": {
    "babel": "babel --presets env YOURFILE-ES6.js -o FOLDER/YOURFILE-ES5.js.js"
},


RUN

npm babel run

*/