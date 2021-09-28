//prints the counting for 1 to the number entered

let clargs = process.argv;
let n = parseInt(clargs[2]);

for (let i=1; i<=n; i++)
{
    console.log(i);
}

//Run on terminal
//npm install node
//node for_loop.js 5