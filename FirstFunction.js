//Find all prime numbers from 1 to the number entered by the user 

 let args = process.argv;
 let n = parseInt(args[2],10);

 for(let i=2; i<=n; i++)
 {
     let isPrime = IsPrime(i);
     if(isPrime == true)
     {
         console.log(i);
     }
 }

 function IsPrime(x){
     let isPrime = true;
     for(let div=2; div*div<=x; div++)
     {
         if(x%div==0)
         {
             isPrime = false;
             break;
         }
     }
     return isPrime;
 }

 //Run on terminal
 //npm install node
 //node FirstFunvtion.js 9