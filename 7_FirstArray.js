//Enter elements in an array and print those elements

let clargs = process.argv;
let n = parseInt(clargs[2],10);
let arr = [];

for(let i=0; i<n; i++)
{
    let val = parseInt(clargs[i+3]);
    arr.push(val);  //adds elements to the array
}

for(let j=0; j<arr.length; j++)
{
    console.log(arr[j]);
}

// node 7_Firstarray.js 5 10 20 30 40 50