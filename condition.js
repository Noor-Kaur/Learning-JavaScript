//To check if a given number is even or odd

let args = process.argv;
let i = parseInt(args[2],10); // 10 is to define the base of the number

if(i%2 == 0){
    console.log("even");
}else{
    console.log("odd");
}
