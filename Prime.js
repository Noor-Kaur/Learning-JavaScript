let args = process.argv;
let n = parseInt(args[2]);
let isprime = true;
for(let div=2; div*div<=n; div++)
{
    if(n%div==0)
    {
        isprime=false;
        break;
    }
}

if(isprime == true)
{
    console.log("prime");
}else{
    console.log("not prime ")
}

//Run on terminal
//node condition.js 3
