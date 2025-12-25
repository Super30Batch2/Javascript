// let a = +prompt("Enter the first value");
// let b = +prompt("Enter the second value");
// let operator = prompt("choose the operation");

// console.log(operator);

// switch (operator) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   case "%":
//     console.log(a % b);
//     break;
//   default:
//     console.log("Choose the correct operation");
// }

// for (let num = 1; num <= 100; num++) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log(`num ${num} is buzz and freeze`);
//   } else if (num % 3 === 0) {
//     console.log(`num ${num} is buzz`);
//   } else if (num % 5 === 0) {
//     console.log(`num is ${num} is freeze`);
//   }
// }

//my code
setInterval(() => {
  time += 1;
  console.log("No of time", time);
  if (time >= 5) clearInterval();
}, 1000);

///correct code
let time = 0;
const data = setInterval(() => {
  time += 1;
  console.log("No of time", time);
  if (time >= 5) clearInterval(data);
}, 1000);
