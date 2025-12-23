let a=10;
 b=20;

//console.log("value of a and b="^(a+b) );
//TypeError: "value of a and b=" is not a function

console.log("value of a and b=",(a+b) );
//value of a and b= 30
g=15;
console.log(a);

//let a=16; // cannot redeclare variable in block scope 
console.log(a,b);


a=52;
b=25
console.log(a+b);
//output:
//PS F:\Javascript\practice\day-1> node let.js
//value of a and b= 30
//10
//10 20
//77

