//Learning typeof and parseInt
//typeof -> it is used to determine the type of the variable
//parseInt -> when the compiler picks a number from the user it treats it as a string
//            so we need to convert the string to a number using parseInt

let args = process.argv;
let i = args[2];
console.log(i);
console.log(typeof(i));
i = i+3;
console.log(i);
console.log(typeof(i));
let j = parseInt(i);
i=i+2;
console.log(j);
console.log(typeof(j));

//Run on terminal
//node 1_Typeof_parseInt.js 5
