//npm = Node Package Module
//It consists of various packages/libraries. synatx = npm install lib_name
//npm install minimist
//minimist create a dictionary(like those in python)-> we use keywords to refer to values

let minimist = require('minimist'); //require is a keyword which lets us use the library in the js file
let args = minimist(process.argv);

console.log(args);
console.log(args.n);
console.log(args.a);

//node 8_FirstDependency.js --n=3 --a=9