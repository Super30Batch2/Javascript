/*Q1]comments in Js
Ans:-Basically there are two types of comments in js first one is single line comment and second one is multiline comment the comments are used to
understand the code we write whcih is simply skipped by the compiler || non executable code.*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Q2 What is variable ?
// Ans:- The Variable is container which is used to store the value.

//////////////////////////////////////////////////////////////////////////////////////////////////////

///OPERATORS************************------------------------------------------------------------

//what is operators?
//The Operator is used to performs the operations on operands.

// 1]Arithmatic Operators

// let a = 5;
// console.log(a++);
//** O/P:- 5 **/

// let b = 5;
// console.log(++b);
/*O/P:- 6*/

// let a = 10;
// let b = a++;
// console.log(b, a);

// let a = 10;
// let b = ++a;
// console.log(b);

// console.log(10 % 3);

// console.log(15 % 4);

console.log(2 ** 3);

console.log(2 ** (3 ** 2)); // 512
//2*2*2=8

console.log(3 ** 2);
// 3*3 =9

let x = 10;
x += 5;
console.log(x);
//15

let y = 10;
y -= 3;
console.log(y);
//7

let z = 10;
z *= 2;
console.log(z);
//20

console.log(true && false);
//false

console.log(true || false);
//true

console.log(false || true);
//true

console.log(!true);
//false

console.log(5 > 3 && 10 > 5);
//true

console.log(5 > 10 || 10 > 5);
//true

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);
//yes

// let score = 85;
// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 50 ? "C" : "F";
// console.log(grade);
//B

// let num = 10;
// if (num > 0) {
//   if (num % 2 === 0) {
//     console.log("Positive Even Number");
//   } else {
//     console.log("Positive Odd Number");
//   }
// } else {
//   console.log("Non-Positive Number");
// }

// let marks = 75;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else {
//   console.log("Grade C");
// }

let loggedIn = true;
console.log(loggedIn ? "Welcome User" : "Please Login");
