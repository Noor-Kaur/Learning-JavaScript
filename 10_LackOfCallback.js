//npm install minimist

let minimist = require('minimist');
let fs = require('fs');

let args = minimist(process.argv);

//task 1 
let t1 = Date.now();
console.log("Task 1 starts at: " + t1%100000);
let stext = fs.readFileSync(args.source,'utf-8');
let t2 = Date.now();
console.log("Task 1 ends at: " + t2%100000);
console.log(t2-t1);
//task 1

//task 2
let t3 = Date.now();
console.log("Task 2 starts at: " + t3%100000);
let arr =[];
for(let i=0; i<args.n; i++)
{
    function IsPrime(x){
        let isPrime = true;
        for(let div=2; div*div<=x; div++){
            if(x%div == 0)
            {
                IsPrime = false;
                break;
            }
        }
    }
    
    let isPrime = IsPrime(i);
    
    if(isPrime == true)
    {
        arr.push(i);
    }
}
let t4 = Date.now();
console.log("Task 2 ends at: " + t4%100000);
console.log(t4-t3);
//task 2
console.log(t4-t1);

//node 10_LackOfCallback.js --source='a.txt' --n=50000
