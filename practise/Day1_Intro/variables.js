//the ways of declaring variables in js
// let a = 10;
// const b = 10;
// var c = 20;

//typeof operator
// Ans:- The TypeOf Method is basically used to check the type of data/value
// eg: -console.log(typeof(a));

//primary datatypes

//null undefined

console.log(10 == "10", `${10 == "10"}`);
//true

console.log(10 === 10, `${10 === 10}`);
//true

console.log(10 + "10", 10 + "10");
// 1010

console.log(10 - "10", `${10 - "10"}`);
// 0

///refrence error variable is not defined
// console.log(a + "a");

//examples done
console.log("10" - 2 + "5", `${"10" - 2 + "5"}`);
//85

console.log(2 + "2" - 2, `${2 + "2" - 2}`);
//20

console.log("a" + 5, `${"a" + 5}`);
//a5

console.log(5 + "a" + 5, `${5 + "a" + 5}`);
//5a5

console.log("a" + true, `${"a" + true}`);
//ature

console.log("a" + null, `${"a" + null}`);
//anull

console.log("a" + undefined, `${"a" + undefined}`);
//aundefined

console.log("a" - 5, `${"a" - 5}`);
//nan

console.log("a" * 4, `${"a" * 4}`);
//nan

console.log("a" / 2, `${"a" / 2}`);
//nan

console.log("a" + "b", `${"a" + "b"}`);
//ab

console.log("a" - "b", `${"a" - "b"}`);
//nan

console.log("4" - "a", `${"4" - "a"}`);
//nan

console.log(10 + "a" - 2, `${10 + "a" - 2}`);
//nan

console.log("a" + 10 - 5, `${"a" + 10 - 5}`);
//nan

console.log("3a" - 1, "3a - 1");
//nan

console.log("a" > "b", "a > b");
//false

console.log("b" > "a", "b > a");
//true
