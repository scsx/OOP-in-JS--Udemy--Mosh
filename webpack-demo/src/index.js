/*

INSTALL:

npm init --yes // start node project
npm i -g webpack-cli@2.0.14

START WEBPACK

webpack-cli init

WEBPACK QUESTIONS

    Will your application have multiple bundles? -> No
    Which module will be the first to enter the application? [example: './src/index'] -> ./src/index
    Which folder will your generated bundles be in? [default: dist]: -> Press enter and go with 'dist'
    Are you going to use this in production? (Y/n) -> No
    Will you be using ES2015? (Y/n) -> Yes
    Will you use one of the below CSS solutions? (Use arrow keys)
    SASS
    LESS
    CSS
    PostCSS
    > No -> No
    If you want to bundle your CSS files, what will you name the bundle? (press enter to skip) -> Press enter 
    Name your 'webpack.[name].js?' [default: 'config']: -> Press enter and go with 'config


CREATE package.json

npm init --yes

AND THERE ADD:

"scripts": {
    "build": "webpack -w", <=== THIS LINE; THE -w IS FOR WATCH
    "test": "echo \"Error: no test specified\" && exit 1"
},

Stuff here in "dependencies": { should be in "devDependencies": { (no action required, just a note)

RUN WEBPACK
npm run build

*/

import { Circle } from './circle.js';

const c = new Circle(10);