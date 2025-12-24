//typeof

let age=21;
let name="suraj";
console.log(typeof (age),typeof(name));

//valueof
//
//Why valueOf() is used
//When JavaScript needs a simple value (number, string, boolean) from an object, it calls valueOf() automatically.
let age1= new Number(21);
let name1= new String("suraj");
console.log(age1.valueOf());
console.log(name1.valueOf());


//Ternary operator
//The ternary operator (? :) is a short form of if–else.

//1: Check even or odd

let number=7;
let result= (number%2===0)?"Even":"Odd";
console.log(result);
//odd

let number1=8;
let result1= (number1%2===0)?"Even":"Odd";
console.log(result1);
//even


//2. voting 
let user_age=21;
let result2=(user_age>=18)?"User can vote":"User cannot vote";
console.log(result2);
//user can vote

let user_age1=16;
let result22=(user_age1>=18)?"User can vote":"User cannot vote";
console.log(result22);
//user cannot vote


