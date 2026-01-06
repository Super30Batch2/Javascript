var test1 = ("I am data analyst and data science enthusiast");

//1) typeof :
console.log(typeof(test1));

//2) valueof : It Is Print Value
console.log(test1.valueOf());

//3) charAt : will rwturn 5th position character from above string.
//will return empty if length of the string and index not match
var test2 = test1.charAt(5);
console.log(test2);

//4) length : It will return length of string.
console.log(test1.length);

//5) charCodeAt : It will return the ascii value of that character.
test2 = test1.charCodeAt(10);
console.log(test2);

//concatenation:
var test3 = (test1 + ' ', "MERN STACK DEVELOPER");
console.log(test3);

//slice
var test2 = test1.slice(3,5);
console.log(test1);

//split
var test2 = test1.substring('');
console.log(test2);
