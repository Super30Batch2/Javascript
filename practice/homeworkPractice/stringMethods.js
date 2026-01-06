// console.log("String Methods In Javascript ");

var str = "String Methods In Javascript";
console.log(str);
// 1.typeof
console.log(typeof(str));

// 2.valueOf
console.log(str.valueOf());

// 3.charAt
var charat =str.charAt(0);
console.log(charat);

//  4.length
console.log(str.length);

// 5.concatination
var str2 = "what type of string methods. ";
var concat = str.concat(str2);
console.log(concat);

// 6.indexof
var index = str.indexOf('in');
console.log(index);

// 7.replace
var replace = str2.replace('what','How many');
console.log(replace);

// 8.search
var search = str.search('Javascript');
console.log(search);

// 9.charCodeAt
var charcode = str.charCodeAt(0);
console.log(charcode);

// 10.slice
var slice = str2.slice(0,6);
console.log(slice);

// 11.spilt
var split = str.split('');
console.log(split);

// 12.substring
var substring = str.substring(1,5);
console.log(substring);

// 13.uppercase 
var uppercase = str.toUpperCase();
console.log(uppercase);

// 14.lowercase
var lowercase = str.toLowerCase();
console.log(lowercase);

