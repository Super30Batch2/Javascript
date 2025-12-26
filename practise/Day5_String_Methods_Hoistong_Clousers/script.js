//callback

// //1 Arrow Function
// const greeting = (name) => {
//   console.log("My Name is", name);
// };

// //anonymus fun
// const welcome = function (greet) {
//   greet("Shivraj");
// };

//higher orrder fun  //greeting callback
// welcome(greeting);

///function declaration supports the hoisting

//allows you to use the func or the variables before declaration

// console.log(shivraj);

// great();
// let shivraj;

// function great() {
//   console.log("Heyy Hii There");
// }

// console.log(a); // Output: undefined
// var a = 10;
// console.log(a); // Output: 10

//string methods

//clousers

// const btn1 = document.querySelector("#btn");

// const changeHandler = function (color) {
//   return function () {
//     document.body.style.backgroundColor = color;
//   };
// };

// btn1.addEventListener("click", changeHandler("orange"));

// const greet = function () {
//   const name = "shivraj";
//   return function () {
//     console.log("My Name is", name);
//   };
// };
// greet()();

//charat
const str = "ashitosh";
//the charat basically returns the char with specified index if it does not found the result it returns ""
console.log(str.charAt(10));

//value of
//the value of basically returns the value of the string
console.log(str.valueOf());

//length
//the length simply returns the length of string
console.log(str.length);

//charCodeAt
//the charcodeat returns the ASCII value of the char
console.log(str.charCodeAt(2));

//concat
//the concat is basically used to add two strings into a single string
console.log(str.concat("patil"));

//indexof
//the indexof is basically returns the index of specified char it does not match then it returns -1
console.log(str.indexOf("h"));

//replace
//it is used to replace part of string with another string
console.log(str.replace("ashitosh", "shantanu"));

//search
//it returns the index of searched string if it is not found then  it retruns the -1
console.log(str.search("o"));

//slice
//the slice is basically used to copy the string from to the specified index
console.log(str.slice(2, 6));
console.log(str.slice(-3));

//ashitosh
console.log(str.slice(-3, 4));

//split
//the split method is basically used to split the given string and return a new array on specified condition
let str2 = "ashitosh patil";

console.log(str2.split(" "));

//substring
//it is used to extract the string from given index to end index

let str3 = "sandip pol";
console.log(str3.substring(0, 4));

//uppercase
///used to converrt a given string into the UPPERCASE LETTERS
console.log("ashitosh".toUpperCase());

//lowercase
//it is used to convert the string into lowercase
console.log("ASHITOSH".toLocaleLowerCase());
