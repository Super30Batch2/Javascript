
// let num1 = document.getElementById('Input-number1').innerHTML;
// let num2 = document.getElementById('Input-number2').innerHTML;
// console.log (num1)
// setTimeout(() => {
//     let num1 = document.getElementById('#Input-number1');
// let num2 = document.getElementById('#Input-number2');
// console.log (num1)
// }, 1000);
// function add(num1,num2){

//     let sum = num1+num2;
//    return alert(sum);
// }
// document.addEventListener("DOMContentLoaded", function () {
//      num1 = document.getElementById("Input-number1").value;

//      num2 = document.getElementById("Input-number2").value;
//    console.log(num1);
// });

// function num(){
//     document.addEventListener("DOMContentLoaded", function () {
//      num1 = document.getElementById("Input-number1").value;
//   console.log(num1);
// });
// }
function add(a, b) {
  result = a + b;
  return result;
}
// let num1 = parseInt(document.getElementById('Input-number1').value);
// let num2 = parseInt(document.getElementById('Input-number2').value);
// let sum = add(num1 , num2);
// alert(sum);
function subtract(a, b) {
  result = a - b;
  return result;
}
function multiply(a, b) {
  result = a * b;
  return result;
}
function divide(a, b) {
  result = a / b;
  return result;
}
function modulus(a, b) {
  result = a % b;
  return result;
}
// let operation = document.getElementById("operation").value;
let operation = "add";
a=10; b= 5;
switch (operation) {
  case "add":
    return console.log(add(a, b));
    break;
  case 'subtract':
    return console.log(subtract(a, b));
    break;
  case 'multiply':
    return console.log(multiply(a, b));
    break;
  case 'divide':
    return console.log(divide(a, b));
    break;
  case 'modulus':
    return console.log(modulus(a, b));
    break;
  default:
    return "Invalid operation";
}
