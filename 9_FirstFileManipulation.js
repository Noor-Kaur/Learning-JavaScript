//npm install minimist
//fs= File System 
//It is a library pre-installed in node itself.
//It is used to read and write files.

let minimist = require('minimist');
let fs = require('fs');
let args = minimist(process.argv);

let stext = fs.readFileSync(args.source,'utf-8');
console.log(stext);

let dtext = stext.toUpperCase();
console.log(dtext);
fs.writeFileSync(args.dest,dtext,'utf-8');


//node 9_FirstFileManipulation.js --source='a.txt' --dest='b.txt'