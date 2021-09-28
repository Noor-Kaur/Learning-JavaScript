//print the following pattern
// *
// *       *
// *       *       *
// *       *       *       *
// *       *       *       *       *

let args = process.argv;
let n = parseInt(args[2]);

for(let i=0; i<n; i++)
{
    let line  = "";
    for(let j=0; j<=i; j++)
    {
        line = line + "*\t";
    }
    console.log(line);
}

//Run on terminal
//npm install node
//node 5_pattern1.js 5
